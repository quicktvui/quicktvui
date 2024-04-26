import {defineComponent, h, ref, onBeforeUnmount, onMounted, toRaw, watchEffect} from "vue";
import {ESApp, Native} from "@extscreen/es3-vue";
import {QTListViewItem} from "./core/QTListViewItem";
import {QTListViewItemFunctionParams} from "./core/QTListViewItemFunctionParams";
import {QTDirections} from "../core/QTDirections";
import useBaseView from '../base/useBaseView'
import {qtWatchAll, qtRef} from "../qtListen/index";

function registerESListViewComponent(app: ESApp) {

  const ListViewImpl = defineComponent({
    props: {
      loadMore: {
        type: Function,
        default: function () {
          return [1, 1]
        }
      },
      openPage: {
        type: Boolean,
        default: false
      },
      preloadNo: {
        type: Number,
        default: 0
      },
      defaultFocus: {
        type: Number,
        default: -1
      },
      loadingDecoration:{
        type:Object,
        default:()=>({bottom: 18, right: 30, left: 30})
      },
      listData: {
        type: Array, required: false//为兼容旧版本，当没有传入listData时，可使用init函数初始化数据
      }
    },
    emits: [
      'item-click',
      'scroll',
      'item-focused',
      'item-attached',
      'item-detached',
      'item-bind',
      'item-unbind',
      'load-more',
      'scroll-state-changed',
      'focus-search-failed',
      'scrollYGreaterReference',
      'scrollYLesserReference',
    ],
    setup(props, ctx) {
      const viewRef = ref()
      let pageNo: number = 0
      let isStopPage: boolean = false
      let recordTarget = qtRef()
      let newList:any[] = []//ref内部的customRef会更新整个组件vnode，这里用新数组来记录props.listData的变化，以空间换时间
      let defaultFocusTimer:any = null
      let isinitValue=false
      const getRecord = ()=>{
        return props.listData || recordTarget.value
      }
      const checkDefaultFocus = (datas:any[]) => {
        if (props.defaultFocus > -1 && datas.length && props.defaultFocus<datas.length) {
          clearTimeout(defaultFocusTimer)
          defaultFocusTimer = setTimeout(() => {
            scrollToFocused(props.defaultFocus)
          }, 300 + datas.length * 10);
        }
      }
      onMounted(()=>{
        if(getRecord().length&&viewRef.value&& !isinitValue && !newList.length){
          newList = getRecord()
          Native.callUIFunction(viewRef.value, 'setListData', toRaw(getRecord()))
          checkDefaultFocus(newList)
        }
      })

      let loadingPosition = 0
      const loadingData = [{ _id: '', type: 1002, decoration: props.loadingDecoration }]
      const getOpenLoading = () => {
        if(props.openPage && newList.length >0 && !isStopPage){
          loadingPosition = newList.length
          return loadingData
        }
        return []
      }
      const openLoading = () => {
        if(props.openPage && loadingPosition === 0 && newList.length > 0 && !isStopPage){
          Native.callUIFunction(viewRef.value, 'addListData', loadingData);
          loadingPosition = newList.length
        }
      }
      const closeLoading = ()=>{
        if(loadingPosition>0){
          Native.callUIFunction(viewRef.value, 'deleteItemRange', [loadingPosition, 1]);
          loadingPosition = 0
        }
      }
      let stopPageTimerid:any = null
      const stopPage = () => {
        isStopPage = true//init函数会异步触发，onBindItem有时是异步有时是同步触发，所以要设置两次
        clearTimeout(stopPageTimerid)
        stopPageTimerid = setTimeout(() => {
          isStopPage = true
          closeLoading()
        }, 20);
      }
      const initPage = ()=>{
        isStopPage = false
        pageNo =  0
      }
      const loadMoreFn = ()=>{
        if(!isStopPage && props.loadMore){
          pageNo++
          props.loadMore(pageNo)
        }
      }
      
      watchEffect(() => {
        if (props.openPage && !props.listData) {
          initPage()
          loadMoreFn()
        }
      })

      const watchRes = qtWatchAll(getRecord(), {
        resetValue(newData){
          newList = newData
          isinitValue = true
        },
        init(datas){
          if(viewRef.value){
            Native.callUIFunction(viewRef.value, 'setListData', datas.concat(getOpenLoading()))
            initPage()
            if(props.listData){
              pageNo = 1
            }
            checkDefaultFocus(datas)
          }
        },
        add(datas){
          Native.callUIFunction(viewRef.value, 'addListData', datas);
          closeLoading()
          openLoading()
        },
        update(position, datas, names){
          datas.forEach((value, key) => {
            const position = Array.isArray(key)?Number(key[0]):Number(key)
            Native.callUIFunction(viewRef.value, 'updateItem', [position, value]);
            // Native.callUIFunction(viewRef.value, 'updateItemProps', [name, position, toUpdateMap, true]);
          })
        },
        insert(position, datas){
          Native.callUIFunction(viewRef.value, 'insertItemRange', [position, Array.from(datas.values())]);
          closeLoading()
          openLoading()
        },
        delete(position, count){
          Native.callUIFunction(viewRef.value, 'deleteItemRange', [position, count]);
        },
        clear(){
          Native.callUIFunction(viewRef.value, 'setListData', [])
          loadingPosition = 0
        }
      })
      //监听list操作
      const init = (target: Array<QTListViewItem>, isInit?: boolean): Array<QTListViewItem> => {
        if(props.listData){ return [] }//listData的优先级高于init函数，不可同时使用，推荐使用listData
        if(!target){ return recordTarget.value }
        recordTarget.value = target
        return recordTarget.value
      }
      
      //------------------------------------------------------------------------
      const startScroll = (focusPosition?: number, scrollToPosition?: number, scrollOffset?: number) => {
        Native.callUIFunction(viewRef.value, 'startScroll',
          [{
            focusPosition: focusPosition,
            scrollToPosition: scrollToPosition,
            scrollOffset: scrollOffset
          }]
        );
      }
      //----------------------------------------------------------
      const dispatchItemFunction = (position: number, name: string,
                                    funcName: string, params: QTListViewItemFunctionParams) => {
        Native.callUIFunction(viewRef.value, 'dispatchItemFunction', [position, name, funcName, params]);
      }
      //----------------------------------------------------------
      const setDisplay = (value: Boolean) => {
        Native.callUIFunction(viewRef.value, 'setDisplay', [value]);
      }
      const changeDisplayState = (display: string, autoDataState: any) => {
        Native.callUIFunction(viewRef.value, 'changeDisplayState', [display, autoDataState]);
      }
      //----------------------------------------------------------
      const notifySaveInstance = () => {
        Native.callUIFunction(viewRef.value, 'notifySaveInstance', []);
      }
      const notifyRestoreInstance = () => {
        Native.callUIFunction(viewRef.value, 'notifyRestoreInstance', []);
      }
      //----------------------------------------------------------
      const scrollToTop = () => {
        Native.callUIFunction(viewRef.value, 'scrollToTop', []);
      }
      const getScrollOffset = (callback: () => void) => {
        Native.callUIFunction(viewRef.value, 'getScrollOffset', [], callback);
      }
      //----------------------------------------------------------
      const clearPostTask = () => {
        Native.callUIFunction(viewRef.value, 'clearAllPostTask', []);
      }
      const pausePostTask = () => {
        Native.callUIFunction(viewRef.value, 'pausePostTask', []);
      }
      const resumePostTask = () => {
        Native.callUIFunction(viewRef.value, 'resumePostTask', []);
      }
      //----------------------------------------------------------

      const scrollToIndex = (y: number, anim: Boolean, offset: number) => {
        Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [y, offset, anim]);
      }
      const setItemSelected = (position: number, requestFocus: Boolean) => {
        Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position, requestFocus]);
      }

      const scrollToSelected = (pos: number, b: boolean) => {
        scrollToPosition(pos)
        setItemSelected(pos, b)
      }

      const scrollToPosition = (index: number) => {
        Native.callUIFunction(viewRef.value, 'scrollToPosition', [index]);
      }
      const scrollToPositionOffset = (x: number, y: number, anim: Boolean, offset: number, duration: number) => {
        Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [y, offset, anim]);
      }

      const scrollToFocused = (pos: number) => {
        scrollToPosition(pos);
        setItemFocused(pos);
      }
      //----------------------------------------------------------
      const hasFocus = (callback: (value: boolean) => void) => {
        Native.callUIFunction(viewRef.value, 'hasFocus', (res) => {
          callback(res);
        });
      }
      const setItemFocused = (position: number) => {
        Native.callUIFunction(viewRef.value, 'requestChildFocus', [position]);
      }

      const blockRootFocus = () => {
        Native.callUIFunction(viewRef.value, 'blockRootFocus', []);
      }
      const unBlockRootFocus = () => {
        Native.callUIFunction(viewRef.value, 'unBlockRootFocus', []);
      }
      const setBlockFocusDirectionsOnFail = (data: Array<QTDirections>) => {
        Native.callUIFunction(viewRef.value, 'setBlockFocusDirectionsOnFail', [data]);
      }
      //----------------------------------------------------------
      const setBackgroundColor = (color: string) => {
        Native.callUIFunction(viewRef.value, 'setBackgroundColor', [color]);
      }
      //----------------------------------------------------------
      const prepareForRecycle = () => {
        Native.callUIFunction(viewRef.value, 'prepareForRecycle', []);
      }
      const destroy = () => {
        Native.callUIFunction(viewRef.value, 'destroy', []);
      }

      function setAutoFocus(tag: string, delay: number) {
        Native.callUIFunction(viewRef.value, 'setAutoFocus', [tag, delay]);
      }

      //----------------------------------------------------------
      onBeforeUnmount(() => {
        watchRes?.stop()
        initPage()
        clearTimeout(stopPageTimerid)
        clearTimeout(defaultFocusTimer)
      })
      ctx.expose({
        viewRef,
        init,
        scrollToIndex,
        hasFocus,
        dispatchItemFunction,
        setBlockFocusDirectionsOnFail,
        prepareForRecycle,
        setDisplay,
        scrollToTop,
        changeDisplayState,
        notifySaveInstance,
        notifyRestoreInstance,
        pausePostTask,
        resumePostTask,
        getScrollOffset,
        scrollToPosition,
        scrollToFocused,
        scrollToSelected,
        scrollToPositionOffset,
        destroy,
        startScroll,
        setItemFocused,
        clearPostTask,
        setItemSelected,
        blockRootFocus,
        unBlockRootFocus,
        setBackgroundColor,
        stopPage,
        setAutoFocus,
        setListData(dataArr: Array<QTListViewItem>){
          Native.callUIFunction(viewRef.value, 'setListData', dataArr)
        },
        ...useBaseView(viewRef)
      })
      return () => {
        const children = ctx.slots.default && ctx.slots.default()
        return h(
          'FastListView',
          {
            ref: viewRef,
            onItemClick: (evt) => {
              ctx.emit('item-click', evt);
            },
            onScroll: (evt) => {
              ctx.emit('scroll', evt);
            },
            onItemFocused: (evt) => {
              ctx.emit('item-focused', evt);
            },
            onAttachedToWindow: (evt) => {
              ctx.emit('item-attached', evt);
            },
            onDetachedFromWindow: (evt) => {
              ctx.emit('item-detached', evt);
            },
            onBindItem: (evt) => {
              if(props.openPage && !isStopPage){
                let myPreloadNo = props.preloadNo
                if(myPreloadNo < 0 || myPreloadNo >= newList.length){
                  myPreloadNo = 0
                }
                
                if (evt.position == newList.length - 1 - myPreloadNo) {
                  // console.log(evt.position, '---lsj--onBindItem-', newList.length)
                  loadMoreFn()
                }
              }
              
              ctx.emit('item-bind', evt);
            },
            onUnbindItem: (evt) => {
              ctx.emit('item-unbind', evt);
            },
            onLoadMore: (evt) => {
              ctx.emit('load-more', evt);
            },
            onScrollStateChanged: (evt) => {
              ctx.emit('scroll-state-changed', evt);
            },
            onFocusSearchFailed: (evt) => {
              ctx.emit('focus-search-failed', evt);
            },
            onScrollYGreaterReference: (evt) => {
              ctx.emit('scrollYGreaterReference', evt);
            },
            onScrollYLesserReference: (evt) => {
              ctx.emit('scrollYLesserReference', evt);
            },
          },
          children
        )
      }
    },
  })
  app.component('qt-list-view', ListViewImpl);
}

export default registerESListViewComponent;
