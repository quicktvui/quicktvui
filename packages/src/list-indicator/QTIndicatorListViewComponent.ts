import {defineComponent, h, ref, onBeforeUnmount, onMounted, toRaw, watchEffect,onUnmounted} from "vue";
import {ESApp, Native} from "@extscreen/es3-vue";
import useBaseView from '../base/useBaseView'
import {qtWatchAll, qtRef,qtFilterChangeMap} from "../qtListen";
import useBaseListView from "../list/useBaseListView";
import {QTListViewItem} from "./core/QTListViewItem";

function registerESIndicatorListViewComponent(app: ESApp) {

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
      let isDefaultFocusTimer = true//为兼容旧版本，当init函数的第二个参数为false时开启默认焦点校验
      const getRecord = ()=>{
        return props.listData || recordTarget.value
      }
      const checkDefaultFocus = (datas:any[]) => {
        if (props.defaultFocus > -1 && datas.length && props.defaultFocus<datas.length && isDefaultFocusTimer) {
          clearTimeout(defaultFocusTimer)
          defaultFocusTimer = setTimeout(() => {
            scrollToFocused(props.defaultFocus)
          }, 300 + datas.length * 10);
        }
      }

      const {
        scrollToPosition,
        setSelectChildPosition,
      } = useBaseListView(viewRef);

      const {
        requestChildFocus,
      } = useBaseView(viewRef);

      onMounted(()=>{
        if(getRecord().length&&viewRef.value&& !isinitValue && !newList.length){
          newList = getRecord()
          Native.callUIFunction(viewRef.value, 'setListData', toRaw(getRecord()))
          checkDefaultFocus(newList)
        }
      })
      onUnmounted(()=>{
        recordTarget.value.splice(0)
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
      const closeLoading = (isTip = false)=>{
        if(loadingPosition>0){
          if(isTip){
            Native.callUIFunction(viewRef.value, 'updateItem', [loadingPosition, { text: '', type: 1003, decoration: {} }]);
          } else {
            Native.callUIFunction(viewRef.value, 'deleteItemRange', [loadingPosition, 1]);
            loadingPosition = 0
          }
        }
      }
      let stopPageTimerId:any = null
      const stopPage = (isTip = false) => {
        isStopPage = true//init函数会异步触发，onBindItem有时是异步有时是同步触发，所以要设置两次
        stopPageTimerId = setTimeout(() => {
          isStopPage = true
          closeLoading(isTip)
        }, 20);
      }
      const initPage = ()=>{
        isStopPage = false
        pageNo =  0
      }
      const loadMoreFn = ()=>{
        if(!isStopPage && props.loadMore){
          if(props.listData){
            if(newList.length > 0){
              pageNo++
              props.loadMore(pageNo)
            }
          } else {
            pageNo++
            props.loadMore(pageNo)
          }
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
        update(position, dataMaps){
          const datas = qtFilterChangeMap(1, dataMaps.datas)
          // if(datas.size>1){
          //   Native.callUIFunction(viewRef.value, 'updateItemRange', [position, datas.size, Array.from(datas.values())]);
          // }else{
            datas.forEach((value, key) => {
              const position = Array.isArray(key)?Number(key[0]):Number(key)
              Native.callUIFunction(viewRef.value, 'updateItem', [position, value]);
              // Native.callUIFunction(viewRef.value, 'updateItemProps', [name, position, toUpdateMap, true]);
            })
          // }
        },
        insert(position, datas){
          Native.callUIFunction(viewRef.value, 'insertItemRange', [position, datas]);
          closeLoading()
          openLoading()
        },
        delete(position, count){
          Native.callUIFunction(viewRef.value, 'deleteItemRange', [position, count]);
          if(loadingPosition>0){
            loadingPosition = newList.length
          }
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
        if(isInit){
          isDefaultFocusTimer = false
        }else{
          isDefaultFocusTimer = true
        }
        recordTarget.value = target
        return recordTarget.value
      }

      //----------------------------------------------------------
      const setItemSelected = (position: number, requestFocus: boolean) => {
        setSelectChildPosition(position, requestFocus)
      }

      const scrollToSelected = (pos: number, b: boolean) => {
        scrollToPosition(pos)
        setItemSelected(pos, b)
      }

      const scrollToFocused = (pos: number) => {
        scrollToPosition(pos);
        setItemFocused(pos);
      }
      //----------------------------------------------------------
      const setItemFocused = (position: number) => {
        requestChildFocus(position)
        Native.callUIFunction(viewRef.value, 'requestChildFocus', [position]);
      }

      //----------------------------------------------------------
      onBeforeUnmount(() => {
        watchRes?.stop()
        initPage()
        clearTimeout(defaultFocusTimer)
        clearTimeout(stopPageTimerId)
      })
      //自定义方法循环拼接item的name
      const updateItemName = (arr, index) => {
        for (let i = 0; i < arr.length; i++) {
          const el = arr[i];
          if (index >= 0) {
            el.name = 'name' + index + i
          } else {
            el.name = 'name' + i
          }
          if (el.list && el.list.length > 0) {
            updateItemName(el.list, i)
          }
        }
      }
      const hasChanged = (value, oldValue) => {
        return value !== oldValue && (value === value || oldValue === oldValue)
      }
      ctx.expose({
        viewRef,
        init,
        scrollToFocused,
        scrollToSelected,
        setItemFocused,
        setItemSelected,
        stopPage,
        updateItemName,
        hasChanged,
        ...useBaseView(viewRef),
        ...useBaseListView(viewRef),
      })
      return () => {
        const children = ctx.slots.default && ctx.slots.default()
        return h(
          'IndicatorListView',
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
  app.component('qt-indicator-list-view', ListViewImpl);
}

export default registerESIndicatorListViewComponent;
