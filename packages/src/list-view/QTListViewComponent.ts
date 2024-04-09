import {useES} from '@extscreen/es3-core';
import {defineComponent, h, ref, onBeforeUnmount, watchEffect} from "vue";
import {ESApp, Native} from "@extscreen/es3-vue";
import {QTListViewItem} from "./core/QTListViewItem";
import {QTListViewItemFunctionParams} from "./core/QTListViewItemFunctionParams";
import {QTDirections} from "../core/QTDirections";
import {deepClone} from "../utils/utils";
import useBaseView from '../base/useBaseView'

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
      const esManager = useES()
      // let apkVersion: number = esManager.getESSDKVersionCode()
      let apkVersion: number = 2.5
      let recordTarget: Array<QTListViewItem> = []
      let changeTarget: Array<QTListViewItem> = []
      let keyArr: Array<any> = []
      let type: string = ''
      let pageNo: number = -1
      let isStopPage: boolean = false
      let setListDataTimer: any = -1
      let stopPageTimer: any = -1
      let defaultFocusTimer: any = -1
      let pushDataTimer: any = -1
      watchEffect(() => {
        if (props.openPage) {
          pageNo = 1
          isStopPage = false
          props.loadMore(pageNo)
        }
      })
      //监听list操作
      const init = (target: Array<QTListViewItem>, isInit?: boolean): Array<QTListViewItem> => {
        if (!isInit) { //第一次代理时 记录原始的数组
          resetData()
          if(pageNo > 1) pageNo = 0
          recordTarget = deepClone(target)
          updateItemName(recordTarget, -1) // 循环数据拼接name
          changeTarget = target
          if (props.openPage) {
            setListData(recordTarget.concat([{
              _id: '',
              type: 1002,
              decoration: props.loadingDecoration
            }]))
          } else {
            setListData(recordTarget)
          }
          if (props.defaultFocus > -1) {
            if (defaultFocusTimer) clearTimeout(defaultFocusTimer)
            defaultFocusTimer = setTimeout(() => {
              setItemFocused(props.defaultFocus)
              // startScroll(props.defaultFocus,props.defaultFocus,0)
            }, 500)
          }
        }
        let handler = {
          get(target, key, receiver) {
            if (key != '__ob__' && typeof key != 'symbol' && key != 'map' && key != 'length' && key != 'constructor' && key != '_isVue' && key != 'valueOf' && key != 'toString'
              && key != 'observeArray' && key != 'dep' && key != 'notify' && key != 'subs' && key != 'slice') {
              keyArr.push(key);
              if (keyArr.indexOf('push') != -1) {
                type = 'push'
              } else if (keyArr.indexOf('splice') != -1) {
                type = 'splice'
                return function (...args) {
                  target.splice(...args)
                  if (keyArr.indexOf('list') != -1) {
                    recordTarget[keyArr[0]].list.splice(...args)
                    updateItem(Number(keyArr[0]), recordTarget[keyArr[0]])
                  } else {
                    if (args.length == 1) {
                      if (args[0] == 0) setListData([])
                      else deleteItem(Number(args[0]), recordTarget.length - args[0] + 1)
                    } else if (args.length == 2) {
                      deleteItem(Number(args[0]), args[1])
                    } else if (args.length > 2) {
                      if (args[1] == 0) {
                        if (apkVersion > 2.299) insertItem(args[0], args.slice(2)) //插入
                      } else {
                        updateItemList(args[0], args[1], args.slice(2))
                      }
                    }
                  }
                  recordTarget.splice(args[0], ...args.slice(1))
                  type = ''
                  keyArr = []
                  return Reflect.get(target, key, receiver);
                }
              } else if (keyArr.indexOf('pop') != -1) {
                type = 'pop'
                return function () {
                  target.pop()
                  if (keyArr.lastIndexOf('list') != -1) {
                    recordTarget[keyArr[0]].list.pop()
                    updateItem(Number(keyArr[0]), recordTarget[keyArr[0]])
                  } else {
                    deleteItem(Number(recordTarget.length - 1), 1)
                    recordTarget.pop()
                  }
                  type = ''
                  keyArr = []
                  return Reflect.get(target, key, receiver);
                }
              } else if (keyArr.indexOf('forEach') != -1) {
                type = 'forEach'
                return function (args) {
                  target.forEach(element => {
                    args(element)
                  });
                  recordTarget = []
                  recordTarget = deepClone(target)
                  if (props.openPage) {
                    setListData(recordTarget.concat([{
                      _id: '',
                      type: 1002,
                      decoration: props.loadingDecoration
                    }]))
                  } else {
                    setListData(recordTarget)
                  }
                  type = ''
                  keyArr = []
                  return Reflect.get(target, key, receiver);
                }
              } else if (keyArr.indexOf('concat') != -1) {
                type = 'concat'
                return function (args) {
                  target = target.concat(args)
                  if (keyArr.lastIndexOf('list') != -1) {
                    recordTarget[keyArr[0]].list = recordTarget[keyArr[0]].list.concat(args)
                    updateItem(Number(keyArr[0]), recordTarget[keyArr[0]])
                  } else {
                    recordTarget = recordTarget.concat(args)
                    if (props.openPage && !isStopPage) {
                      setTimeout(() => {
                        addListDataWithParams(args.concat([{
                          type: '1002',
                          decoration: props.loadingDecoration
                        }]), 1)
                      }, 300);
                    } else {
                      addListData(args)
                    }
                  }
                  type = ''
                  keyArr = []
                  // return Reflect.get(target, key, receiver);
                  Reflect.get(target, key, receiver);
                  return new Proxy(target, handler);
                }
              } else {
                type = ''
              }
            }
            const res = Reflect.get(target, key, receiver);
            if (isObject(res) && key != '__ob__' && key != 'dep' && key != 'subs') {
              return init(res, true);
            } else {
              if (keyArr.indexOf('push') == -1) {
                keyArr = []
              }
            }
            return res;
          },
          set(target, key, value, receiver) {
            const oldValue = target[key];
            const hadKey = hasOwn(target, key);
            const result = Reflect.set(target, key, value, receiver);
            if (((!isObject(oldValue) && oldValue !== value) || isObject(oldValue)) && type != 'push') {
              keyArr.push(key);
              if (keyArr.lastIndexOf('list') != -1) {//如果包含list  暂时先更改整个list
                let listIndex = keyArr.lastIndexOf('list')
                let lth = keyArr.lastIndexOf('list') + 2
                let dataObj: { [key: string]: any } = {}
                for (let i = 0; i < lth; i++) {
                  let index = keyArr[i]
                  if (dataObj) {
                    dataObj = dataObj[index]
                  } else {
                    dataObj = changeTarget[index]
                  }
                }
                dataObj.name = 'name' + keyArr[(listIndex - 1)] + keyArr[listIndex + 1]
                updateItem(Number(keyArr[0]), changeTarget[keyArr[0]])
                //更新后 对应手动更改recordTarget的修改
                recordTarget[keyArr[0]].list[keyArr[listIndex + 1]] = changeTarget[keyArr[0]].list[keyArr[listIndex + 1]]
                recordTarget[keyArr[0]].list[keyArr[listIndex + 1]].name = 'name' + keyArr[(listIndex - 1)] + keyArr[listIndex + 1]
              } else {// 没有嵌套的list 直接修改数据
                recordTarget[keyArr[0]] = changeTarget[keyArr[0]]
                recordTarget[keyArr[0]].name = 'name' + keyArr[0]
                updateItem(Number(keyArr[0]), changeTarget[keyArr[0]])
              }
            }
            if (key && type == 'push' && oldValue !== value) {//push一个数组时 每次把key记录 在else统一处理
              if (keyArr.lastIndexOf('list') != -1) {
                keyArr.push(key);
                recordTarget[keyArr[0]].list.push(value)
              } else {
                keyArr.push(key);
                recordTarget.push(value)
              }
            } else {
              if (type == 'push') {//处理push的数据
                if (keyArr.lastIndexOf('list') != -1) {
                  updateItem(Number(keyArr[0]), recordTarget[keyArr[0]])
                } else {
                  let result = recordTarget.slice(keyArr[1])
                  if (pushDataTimer) clearTimeout(pushDataTimer)
                  if (props.openPage && !isStopPage) {
                    pushDataTimer = setTimeout(() => {
                      addListDataWithParams(result.concat([{
                        _id: '',
                        type: 1002,
                        decoration: props.loadingDecoration
                      }]), 1)
                    }, 300);
                  } else {
                    pushDataTimer = setTimeout(() => {
                      addListData(result)
                    }, 300);
                  }
                }
              }
              type = ''
              keyArr = []
            }
            // keyArr = []
            return result;
          },
        }
        const proxy = new Proxy(target, handler);
        return proxy;
      }
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
      const isObject = (val) => {
        return val !== null && typeof val === 'object'
      }
      const hasChanged = (value, oldValue) => {
        return value !== oldValue && (value === value || oldValue === oldValue)
      }
      const hasOwn = (val, key) => {
        Object.hasOwnProperty.call(val, key)
      }

      const stopPage = () => {
        if (stopPageTimer) clearTimeout(stopPageTimer)
        stopPageTimer = setTimeout(() => {
          deleteItem(recordTarget.length, 1)
        }, 400)
        isStopPage = true
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
      //------------------------------------------------------------------------
      const setListData = (dataArr: Array<QTListViewItem>) => {
        if (setListDataTimer) clearTimeout(setListDataTimer)
        setListDataTimer = setTimeout(() => {
          Native.callUIFunction(viewRef.value, 'setListData', dataArr)
        }, 100)
      }
      const setListDataWithParams = (data: Array<QTListViewItem>, autoChangeVisible: Boolean) => {
        Native.callUIFunction(viewRef.value, 'setListDataWithParams', [data, autoChangeVisible]);
      }
      const addListData = (data: Array<QTListViewItem>) => {
        Native.callUIFunction(viewRef.value, 'addListData', data);
      }
      const addListDataWithParams = (data: Array<QTListViewItem>, deleteCount: number) => {
        Native.callUIFunction(viewRef.value, 'addListDataWithParams', [data, deleteCount]);
      }
      const deleteItem = (position: number, count: number) => {
        Native.callUIFunction(viewRef.value, 'deleteItemRange', [position, count]);
      }
      const updateItem = (position: number, data: QTListViewItem) => {
        Native.callUIFunction(viewRef.value, 'updateItem', [position, data]);
      }
      const updateItemList = (position: number, count: number, data: Array<QTListViewItem>) => {
        Native.callUIFunction(viewRef.value, 'updateItemRange', [position, count, data]);
      }
      const updateItemProps = (position: number, name: string, toUpdateMap: Object) => {
        Native.callUIFunction(viewRef.value, 'updateItemProps', [name, position, toUpdateMap, true]);
      }
      const insertItem = (position: number, data: Array<QTListViewItem>) => {
        Native.callUIFunction(viewRef.value, 'insertItemRange', [position, data]);
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

      const resetData = () => {
        recordTarget = []
        changeTarget.length = 0
        keyArr = []
        isStopPage = false
        type = ''
        if (setListDataTimer) clearTimeout(setListDataTimer)
        if (defaultFocusTimer) clearTimeout(defaultFocusTimer)
        if (pushDataTimer) clearTimeout(pushDataTimer)
        if (stopPageTimer) clearTimeout(stopPageTimer)
      }
      //----------------------------------------------------------
      onBeforeUnmount(() => {
        pageNo = 1
        resetData()
      })
      ctx.expose({
        viewRef,
        init,
        updateItemName,
        hasChanged,
        scrollToIndex,
        updateItem,
        updateItemList,
        hasFocus,
        updateItemProps,
        setListData,
        insertItem,
        addListData,
        addListDataWithParams,
        dispatchItemFunction,
        deleteItem,
        setBlockFocusDirectionsOnFail,
        setListDataWithParams,
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
              let myPreloadNo = props.preloadNo
              if(props.preloadNo < 0){
                myPreloadNo = 0
              }
              if(props.preloadNo > recordTarget.length - 1){
                myPreloadNo = 0
              }
              if (evt.position == recordTarget.length - 1 - myPreloadNo) {
                pageNo++
                props.loadMore(pageNo)
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
