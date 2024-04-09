<template>
  <tv-list class="tv_list" ref="tv_list" name="tv_list" :spanCount="apkVersion < 2.2 ? '' : spanCount"
           @item-bind="onItemBind" @item-click="onItemClick" @item-focused="onItemFocused"
           @item-unbind="onItemUnbind" @scroll="onScroll" @scroll-state-changed="onScrollStateChanged"
           @setListData="setListData" :blockFocusDirections="blockFocusDirections">
    <template v-if="apkVersion < 2.2">
      <slot name="header"></slot>
      <tv-list class="tv_list_inner" ref="${name}" list="${list}" name="tv_list_inner" type="1"
               :clipChildren="false" :focusable="false" horizontal :style="{width: areaWidth + 'px'}"
               :endHintEnabled="false" :blockFocusDirections="blockFocusDirections">
        <slot/>
      </tv-list>
      <slot name="footer"></slot>
      <slot name="loading"></slot>
    </template>
    <template v-else>
      <slot name="header"></slot>
      <slot/>
      <slot name="footer"></slot>
      <slot name="loading"></slot>
    </template>
  </tv-list>
</template>

<script lang="ts">
import {defineComponent, ref, watchEffect, onBeforeUnmount} from "vue";
import {QTGridViewItem} from "./core/QTGridViewItem";
import {deepClone} from "../utils/utils";
import useBaseView from "../base/useBaseView";

export default defineComponent({
  name: "qt-grid-view",
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
    spanCount: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
    },
    preloadNo: {
      type: Number,
      default: 0
    },
    defaultFocus: {
      type: Number,
      default: -1
    },
    areaWidth: {
      type: Number,
      default: 1200
    },
    blockFocusDirections: {
      type: Array,
      default: () => []
    },
    loadingDecoration:{
      type:Object,
      default:()=>({top: 15, left: 30})
    },
    listData: {
      type: Array,
      default: () => []
    }
  },
  emits: [
    'item-click',
    'scroll',
    'item-unbind',
    'scroll-state-changed',
    'item-bind',
    'item-focused',
  ],
  setup(props, context) {
    const tv_list = ref()
    let apkVersion = ref(2.5)
    let recordTarget: Array<QTGridViewItem> = []
    let changeTarget: Array<QTGridViewItem> = []
    let keyArr: Array<any> = []
    let listResult: Array<any> = []
    let type: string = ''
    let pageNo: number = -1
    let isStopPage = ref(false)
    let setListDataTimer: any = -1
    let stopPageTimer: any = -1
    let defaultFocusTimer: any = -1
    let pushDataTimer: any = -1
    let isRestartPage = ref(false)
    const {
      requestFocus,
      requestFocusDirectly,
      setVisibility
    } = useBaseView(tv_list);

    watchEffect(() => {
      if (props.openPage) {
        pageNo = 1
        isStopPage.value = false
        props.loadMore(pageNo)
      }
    })
    //初始化组件 监听list操作
    const init = (target: Array<QTGridViewItem>, isInit?: boolean): Array<QTGridViewItem> => {
      if (!isInit) {//当第一次代理
        resetData()
        if(pageNo > 1) pageNo = 0
        recordTarget = deepClone(target)
        changeTarget = target
        if (apkVersion.value < 2.2) {
          dealData()
          if (props.openPage && props.pageSize && listResult.length >= (props.pageSize / props.spanCount)) {
            tv_list.value.setListDataWithParams(listResult.concat([{
              type: 1002,
              decoration: props.loadingDecoration
            }]), true, true)
          } else {
            tv_list.value.setListDataWithParams(listResult, true, true)
          }
        } else {
          if (props.openPage && props.pageSize && recordTarget.length >= props.pageSize) {
            tv_list.value.setListDataWithParams(recordTarget.concat([{
              type: 1002,
              decoration: props.loadingDecoration
            }]), true, true)
          } else {
            tv_list.value.setListDataWithParams(recordTarget, true, true)
          }
        }
        if (props.defaultFocus > -1) {
          if (defaultFocusTimer) clearTimeout(defaultFocusTimer)
          defaultFocusTimer = setTimeout(() => {
            scrollToPosition(props.defaultFocus)
            setItemFocused(props.defaultFocus)
          }, 800)
        }
      }
      let handler = {
        get(target, key, receiver) {
          if (key != '__ob__' && typeof key != 'symbol' && key != 'map' && key != 'length' && key != 'constructor' && key != '_isVue' && key != 'valueOf' && key != 'toString'
            && key != 'observeArray' && key != 'dep' && key != 'notify' && key != 'subs' && key != 'slice') {
            keyArr.push(key);
            if (keyArr.indexOf('push') != -1) {
              type = 'push'
            } else if (keyArr.indexOf('splice') != -1) {//重新代理数组的splice方法
              type = 'splice'
              return function (...args) {
                target.splice(...args)
                if (apkVersion.value < 2.2) {
                  dealData()
                  if (args.length == 1 || args.length == 2) {
                    tv_list.value.setListData(listResult)
                  } else {
                    if (args[1] == 0) {
                      tv_list.value.setListData(listResult)
                    } else {
                      let curKey = -1;
                      let params1 = 0
                      let params2 = 0
                      for (let i = 0; i < listResult.length; i++) {
                        const el = listResult[i];
                        if (el.type == '1003') {
                          curKey++
                          if (args[0] == curKey) {
                            params1 = i
                          }
                          if (args[0] + args[1] - 1 == curKey) {
                            params2 = i
                          }
                        } else {
                          for (let j = 0; j < el.list.length; j++) {
                            const ell = el.list[j];
                            curKey++
                            if (args[0] == curKey) {
                              params1 = i
                            }
                            if (args[0] + args[1] - 1 == curKey) {
                              params2 = i
                            }
                          }
                        }
                      }
                      tv_list.value.updateItemList(params1, params2 - params1 + 1, listResult.slice(params1, params2 + 1))
                    }
                  }
                } else {
                  if (args.length == 1) {
                    if (args[0] == 0) tv_list.value.setListData([])
                    else tv_list.value.deleteItem(Number(args[0]), recordTarget.length - args[0])
                  } else if (args.length == 2) {
                    tv_list.value.deleteItem(Number(args[0]), args[1])
                  } else if (args.length > 2) {
                    if (args[1] == 0) {
                      if (apkVersion.value > 2.29) insertItem(args[0], args.slice(2)) //插入
                    } else {
                      tv_list.value.updateItemList(args[0], args[1], args.slice(2))
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
                if (apkVersion.value < 2.2) {
                  if (listResult[listResult.length - 1].list.length < 1) {
                    listResult.pop()
                  }
                  listResult[listResult.length - 1].list.pop()
                  tv_list.value.updateItem(Number(listResult.length - 1), listResult[listResult.length - 1])
                } else {
                  tv_list.value.deleteItem(Number(recordTarget.length - 1), 1)
                }
                recordTarget.pop()
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
                if (apkVersion.value < 2.2) {
                  dealData()
                  if (props.openPage && props.pageSize && listResult.length >= props.pageSize && !isStopPage.value) {
                    tv_list.value.setListData(listResult.concat([{type: 1002, decoration: props.loadingDecoration}]))
                  } else {
                    tv_list.value.setListData(listResult)
                  }
                } else {
                  if (props.openPage && props.pageSize && recordTarget.length >= props.pageSize && !isStopPage.value) {
                    tv_list.value.setListData(recordTarget.concat([{type: 1002, decoration: props.loadingDecoration}]))
                  } else {
                    tv_list.value.setListData(recordTarget)
                  }
                }
                type = ''
                keyArr = []
                return Reflect.get(target, key, receiver);
              }
            } else if (keyArr.indexOf('concat') != -1) {
              type = 'concat'
              return function (args) {
                if (Object.prototype.toString.call(args) === '[object Array]') {
                  target = target.concat(args)
                  recordTarget = recordTarget.concat(args)
                  if (apkVersion.value < 2.2) {
                    if (pushDataTimer) {
                      clearTimeout(pushDataTimer);
                    }
                    let oldLength = listResult.length;
                    let oldEndList = listResult.slice(listResult.length - 1)[0]
                    dealData();
                    let result = listResult.slice(oldLength);
                    if (props.openPage && !isStopPage.value) {
                      if ((!props.pageSize && pageNo == 2) || isRestartPage.value) {
                        pushDataTimer = setTimeout(() => {
                          tv_list.value.addListData(result.concat([{type: 1002, decoration: props.loadingDecoration}]));
                          if (isRestartPage.value) isRestartPage.value = false
                        }, 300);
                      } else {
                        if (result.length == 0 || (oldEndList.type != '1003' && oldEndList.list.length < props.spanCount)) {
                          result = listResult.slice(oldLength - 1)
                          pushDataTimer = setTimeout(() => {
                            tv_list.value.addListDataWithParams(result.concat([{
                              type: 1002,
                              decoration: props.loadingDecoration
                            }]), 2);
                          }, 300);
                        } else {
                          pushDataTimer = setTimeout(() => {
                            tv_list.value.addListDataWithParams(result.concat([{
                              type: 1002,
                              decoration: props.loadingDecoration
                            }]), 1);
                          }, 300);
                        }
                      }
                    } else {
                      tv_list.value.setListData(listResult);
                    }
                  } else {
                    if (props.openPage && !isStopPage.value) {
                      if ((!props.pageSize && pageNo == 2) || isRestartPage.value) {
                        pushDataTimer = setTimeout(() => {
                          tv_list.value.addListData(args.concat([{type: 1002, decoration: props.loadingDecoration}]))
                          if (isRestartPage.value) isRestartPage.value = false
                        }, 300);
                      } else {
                        pushDataTimer = setTimeout(() => {
                          tv_list.value.addListDataWithParams(args.concat([{
                            type: 1002,
                            decoration: props.loadingDecoration
                          }]), 1)
                        }, 300);
                      }
                    } else {
                      pushDataTimer = setTimeout(() => {
                        tv_list.value.addListData(args)
                      }, 300);
                    }
                  }
                } else {
                  console.log('concat:参数类型必须为数组')
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
          // const hadKey = hasOwn(target, key);
          const result = Reflect.set(target, key, value, receiver);
          if (((!isObject(oldValue) && oldValue !== value) || isObject(oldValue)) && type != 'push') {
            keyArr.push(key);
            //更新数据
            recordTarget[keyArr[0]] = changeTarget[keyArr[0]]
            if (apkVersion.value < 2.2) {
              let updateKey = keyArr[0]
              let curKey = -1;
              for (let i = 0; i < listResult.length; i++) {
                const el = listResult[i];
                if (el.type == '1003') {
                  curKey++
                  if (curKey == updateKey) {
                    listResult[i] = recordTarget[keyArr[0]]
                    tv_list.value.updateItem(Number(i), listResult[i])
                  }
                } else {
                  for (let j = 0; j < el.list.length; j++) {
                    const ell = el.list[j];
                    curKey++
                    if (curKey == updateKey) {
                      listResult[i].list[j] = recordTarget[keyArr[0]]
                      let updataObj = listResult[i].list[j]
                      if (updataObj.decoration) {
                        if (updataObj.decoration.top) updataObj.decoration.top = 0
                        if (updataObj.decoration.bottom) updataObj.decoration.bottom = 0
                      }
                      tv_list.value.updateItem(Number(i), listResult[i])
                    }
                  }
                }
              }
              // let rowNum = ( Math.ceil(recordTarget.length / data.spanCount))
              // let updateArea =  parseInt (keyArr[0] / rowNum)
              // let updateAreaIndex = parseInt (keyArr[0] % rowNum)
              // listResult[updateArea].list[updateAreaIndex] = recordTarget[keyArr[0]]
              // tv_list.value.updateItem(Number(updateArea), listResult[updateArea])
            } else {
              tv_list.value.updateItem(Number(keyArr[0]), changeTarget[keyArr[0]])
            }
          }
          if (key && type == 'push' && oldValue !== value) {
            keyArr.push(key);
            recordTarget.push(value)
          } else {
            if (type == 'push' && keyArr.length > 1) {//处理push的数据
              if (apkVersion.value < 2.2) {
                if (pushDataTimer) {
                  clearTimeout(pushDataTimer);
                }
                let oldLength = listResult.length;
                let oldEndList = listResult.slice(listResult.length - 1)[0]
                dealData();
                let result = listResult.slice(oldLength);
                if (props.openPage && !isStopPage.value) {
                  if ((!props.pageSize && pageNo == 2) || isRestartPage.value) {
                    pushDataTimer = setTimeout(() => {
                      tv_list.value.addListData(result.concat([{type: 1002, decoration: props.loadingDecoration}]));
                      if (isRestartPage.value) isRestartPage.value = false
                    }, 300);
                  } else {
                    if (result.length == 0 || (oldEndList.type != '1003' && oldEndList.list.length < props.spanCount)) {
                      result = listResult.slice(oldLength - 1)
                      pushDataTimer = setTimeout(() => {
                        tv_list.value.addListDataWithParams(result.concat([{
                          type: 1002,
                          decoration: props.loadingDecoration
                        }]), 2);
                      }, 300);
                    } else {
                      pushDataTimer = setTimeout(() => {
                        tv_list.value.addListDataWithParams(result.concat([{
                          type: 1002,
                          decoration: props.loadingDecoration
                        }]), 1);
                      }, 300);
                    }
                  }
                } else {
                  tv_list.value.setListData(listResult);
                }
              } else {
                let result = recordTarget.slice(keyArr[1])
                if (pushDataTimer) {
                  clearTimeout(pushDataTimer)
                }
                if (props.openPage && !isStopPage.value) {
                  if ((!props.pageSize && pageNo == 2) || isRestartPage.value) {
                    pushDataTimer = setTimeout(() => {
                      tv_list.value.addListData(result.concat([{type: 1002, decoration: props.loadingDecoration}]))
                      if (isRestartPage.value) isRestartPage.value = false
                    }, 300);
                  } else {
                    pushDataTimer = setTimeout(() => {
                      tv_list.value.addListDataWithParams(result.concat([{
                        type: 1002,
                        decoration: props.loadingDecoration
                      }]), 1)
                    }, 300);
                  }
                } else {
                  pushDataTimer = setTimeout(() => {
                    tv_list.value.addListData(result)
                  }, 300);
                }
              }
            }
            type = ''
            keyArr = []
          }
          return result;
        },
      }
      const proxy = new Proxy(target, handler);
      return proxy;
    }
    const dealData = () => {
      let oldArr: any = deepClone(recordTarget)
      listResult = []
      let line = 0
      let itemArr: any = []
      for (let i = 0; i < oldArr.length; i++) {
        let el = oldArr[i];
        if (el.type == '1003') {
          itemArr.push(el);
        } else {
          if (el.decoration.top) {
            el.toCompatibleSaveTopVal = el.decoration.top;
            el.decoration.top = 0;
          }
          if (el.decoration.bottom) {
            el.toCompatibleSaveBottompVal = el.decoration.bottom;
            el.decoration.bottom = 0;
          }
          if (itemArr[itemArr.length - 1] && itemArr[itemArr.length - 1].type == 1) {
            itemArr[itemArr.length - 1].list.push(el)
          } else {
            let obj = {
              type: 1,
              list: [] as any
            }
            obj.list.push(el)
            itemArr.push(obj)
          }
        }
      }
      for (let i = 0; i < itemArr.length; i++) {
        const el = itemArr[i];
        if (el.type == '1003') {
          listResult.push(el)
        } else {
          for (let j = 0; j < el.list.length; j += props.spanCount) {
            const item = el.list[j]
            let deObj = {
              top: -1 as number,
              bottom: -1 as number
            }
            if (item.decoration) {
              deObj.top = item.toCompatibleSaveTopVal ? item.toCompatibleSaveTopVal : 0
              deObj.bottom = item.toCompatibleSaveBottompVal ? item.toCompatibleSaveBottompVal : 0
            }
            const itemList = {
              type: 1,
              decoration: deObj,
              name: 'name' + line,
              list: el.list.slice(j, j + props.spanCount)
            }
            line++
            listResult.push(itemList)
          }
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
    const onItemClick = (e) => {
      if (apkVersion.value < 2.2) {
        let curKey = -1;
        let pos = e.position
        let ppos = e.parentPosition
        for (let i = 0; i < e.parentPosition + 1; i++) {
          const el = listResult[i];
          if (el.type == '1003') {
            curKey++;
          } else {
            for (let j = 0; j < el.list.length; j++) {
              curKey++;
              if (pos == j && ppos == i) {
                e.position = curKey
              }
            }
          }
        }
      }
      context.emit('item-click', e);
    }
    const onItemBind = (e) => {
      let myPreloadNo = props.preloadNo
      if(props.preloadNo < 0){
        myPreloadNo = 0
      }
      if(props.preloadNo > recordTarget.length - 1){
        myPreloadNo = 0
      }
      if (apkVersion.value < 2.2) {
        if (!isStopPage.value && e.position == listResult.length - 1 - (myPreloadNo / props.spanCount)) {
          pageNo++
          props.loadMore(pageNo)
        }
      } else {
        if (!isStopPage.value && e.position == recordTarget.length - 1 - myPreloadNo) {
          pageNo++
          props.loadMore(pageNo)
        }
      }
      context.emit('item-bind', e)
    }
    const onItemFocused = (e) => {
      if (apkVersion.value < 2.2) {
        let curKey = -1;
        let pos = e.position
        let ppos = e.parentPosition
        for (let i = 0; i < e.parentPosition + 1; i++) {
          const el = listResult[i];
          if (el.type == '1003') {
            curKey++;
          } else {
            for (let j = 0; j < el.list.length; j++) {
              curKey++;
              if (pos == j && ppos == i) {
                e.position = curKey
              }
            }
          }
        }
      }
      context.emit('item-focused', e);
    }
    const onItemUnbind = (e) => {
      context.emit('item-unbind', e)
    }
    const onScroll = (e) => {
      context.emit('scroll', e)
    }
    const onScrollStateChanged = (e) => {
      context.emit('scroll-state-changed', e)
    }
    //当分页数据加载完毕时 调用该方法 清掉加载loading样式
    const stopPage = () => {
      if (stopPageTimer) {
        clearTimeout(stopPageTimer)
      }
      stopPageTimer = setTimeout(() => {
        if (apkVersion.value < 2.2) {
          if (props.pageSize) {
            if ((props.pageSize / props.spanCount) <= listResult.length) tv_list.value.deleteItem(listResult.length, 1)
          } else {
            if (pageNo > 2) {
              tv_list.value.deleteItem(listResult.length, 1)
            }
          }
        } else {
          if (props.pageSize) {
            if (props.pageSize <= recordTarget.length) tv_list.value.deleteItem(recordTarget.length, 1)
          } else {
            if (pageNo > 2) {
              tv_list.value.deleteItem(recordTarget.length, 1)
            }
          }
        }
      }, 400)
      isStopPage.value = true
    }
    const scrollToTop = () => {
      tv_list.value.scrollToTop()
    }
    const clearFocus = () => {
      tv_list.value.clearFocus()
    }
    const blockRootFocus = () => {
      tv_list.value.blockRootFocus()
    }
    const unBlockRootFocus = () => {
      tv_list.value.unBlockRootFocus()
    }
    const setDisplay = (display: boolean) => {
      tv_list.value.setDisplay(display)
    }
    const scrollToPosition = (index: number) => {
      if (apkVersion.value < 2.2) {
        let curKey = -1;
        for (let i = 0; i < listResult.length; i++) {
          const el = listResult[i];
          if (el.type == '1003') {
            curKey++
            if (curKey == index) {
              tv_list.value.scrollToPosition(i)
            }
          } else {
            for (let j = 0; j < el.list.length; j++) {
              const ell = el.list[j];
              curKey++
              if (curKey == index) {
                tv_list.value.scrollToPosition(i)
              }
            }
          }
        }
      } else {
        tv_list.value.scrollToPosition(index)
      }
    }
    const scrollToIndex = (y: number, anim: Boolean, offset: number) => {
      if (apkVersion.value < 2.2) {
        let curKey = -1;
        for (let i = 0; i < listResult.length; i++) {
          const el = listResult[i];
          if (el.type == '1003') {
            curKey++
            if (curKey == y) {
              tv_list.value.scrollToIndex(0, i, anim, offset)
            }
          } else {
            for (let j = 0; j < el.list.length; j++) {
              const ell = el.list[j];
              curKey++
              if (curKey == y) {
                tv_list.value.scrollToIndex(0, i, anim, offset)
              }
            }
          }
        }
      } else {
        tv_list.value.scrollToIndex(0, y, anim, offset)
      }
    }
    const setItemFocused = (pos: number) => {
      if (apkVersion.value < 2.2) {
        let curKey: number = -1;
        let num1: number = 0;
        let num2: number = 0;
        for (let i = 0; i < listResult.length; i++) {
          const el = listResult[i];
          if (el.type == '1003') {
            curKey++;
          } else {
            for (let j = 0; j < el.list.length; j++) {
              el.list[j];
              curKey++;
              if (pos == curKey) {
                num1 = i
                num2 = j
              }
            }
          }
        }
        tv_list.value.dispatchItemFunction(num1, 'tv_list_inner', 'requestChildFocus', [num2]);
      } else {
        tv_list.value.requestFocus(pos);
      }
    }
    const scrollToFocused = (pos: number) => {
      scrollToPosition(pos);
      setItemFocused(pos);
    }
    const setItemSelected = (pos: number, b: boolean) => {
      if (apkVersion.value < 2.2) {
        let curKey: number = -1;
        let num1: number = 0;
        let num2: number = 0;
        for (let i = 0; i < listResult.length; i++) {
          const el = listResult[i];
          if (el.type == '1003') {
            curKey++;
          } else {
            for (let j = 0; j < el.list.length; j++) {
              el.list[j];
              curKey++;
              if (pos == curKey) {
                num1 = i
                num2 = j
              }
            }
          }
        }
        tv_list.value.dispatchItemFunction(num1, 'tv_list_inner', 'setSelectChildPosition', [num2]);
      } else {
        tv_list.value.setSelectPosition(pos, b);
      }
    }
    const scrollToSelected = (pos: number, b: boolean) => {
      scrollToPosition(pos)
      setItemSelected(pos, b)
    }
    const updateItemProps = (pos: number, name: string, dataObj: object) => {
      tv_list.value.updateItemProps(pos, name, dataObj)
    }
    const setInitPosition = (pos: number) => {
      tv_list.value.setInitPosition(pos)
    }
    const setListData = (dataArr: Array<QTGridViewItem>) => {
      if (setListDataTimer) clearTimeout(setListDataTimer)
      setListDataTimer = setTimeout(() => {
        tv_list.value.setListData(dataArr)
      }, 100)
    }
    const insertItem = (pos: number, data: Array<QTGridViewItem>) => {
      tv_list.value.addItem(pos, data)
    }
    const clearPostTask = () => {
      tv_list.value.clearPostTask();
    }
    const destroy = () => {
      tv_list.value.destroy()
    }
    const resetData = () => {
      isRestartPage.value = false
      recordTarget = []
      listResult = []
      changeTarget.length = 0
      isStopPage.value = false
      keyArr = []
      isStopPage.value = false
      type = ''
      if (setListDataTimer) clearTimeout(setListDataTimer)
      if (pushDataTimer) {
        clearTimeout(pushDataTimer)
      }
      if (stopPageTimer) {
        clearTimeout(stopPageTimer)
      }
      if (defaultFocusTimer) clearTimeout(defaultFocusTimer)
    }
    onBeforeUnmount(() => {
      pageNo = 1
      resetData()
    })
    let delayResetTimer: any = -1
    const restartPage = () => {
      clearTimeout(delayResetTimer)
      let delayResetTimerTime: number = 0
      if (!isStopPage.value) {
        delayResetTimerTime = 420
        stopPage()
      }
      delayResetTimer = setTimeout(() => {
        isRestartPage.value = true
        pageNo = 1;
        isStopPage.value = false;
        props.loadMore(pageNo)
      }, delayResetTimerTime)

    }

    return {
      tv_list,
      apkVersion,
      init,
      onItemClick,
      onItemBind,
      onItemFocused,
      restartPage,
      isRestartPage,
      onItemUnbind,
      onScroll,
      onScrollStateChanged,
      stopPage,
      scrollToTop,
      clearFocus,
      blockRootFocus,
      unBlockRootFocus,
      setDisplay,
      scrollToPosition,
      scrollToIndex,
      setItemFocused,
      scrollToFocused,
      setItemSelected,
      scrollToSelected,
      updateItemProps,
      setInitPosition,
      setListData,
      insertItem,
      clearPostTask,
      destroy,
      requestFocus,
      requestFocusDirectly,
      setVisibility,
    }
  },
});
</script>
<style>
</style>

