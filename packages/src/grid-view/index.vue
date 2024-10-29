<template>
  <tv-list
    class="tv_list" ref="tv_list" name="tv_list" :spanCount="spanCount"
    @item-bind="onItemBind" @item-click="onItemClick" @item-focused="onItemFocused"
    @item-unbind="onItemUnbind" @scroll="onScroll" @scroll-state-changed="onScrollStateChanged"
    @setListData="setListData" :blockFocusDirections="blockFocusDirections"
  >
    <slot name="header"></slot>
    <slot/>
    <slot name="footer"></slot>
    <slot name="loading"></slot>
  </tv-list>
</template>

<script lang="ts">
import {defineComponent, ref, onBeforeUnmount, onMounted, toRaw, watchEffect, onUnmounted} from "vue";
import {QTListViewItem} from "../list-view/core/QTListViewItem";
import useBaseView from "../base/useBaseView";
import {qtWatchAll, qtRef,qtFilterChangeMap} from "../qtListen/index";

import useListView from "../list/useListView";

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
      default: 0
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
      type: Array, required: false//为兼容旧版本，当没有传入listData时，可使用init函数初始化数据
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
    const tv_list = ref()//<ESIListView>
    let apkVersion = ref(2.5)
    let recordTarget = qtRef()
    let pageNo: number = 0
    let isStopPage = false
    let isRestartPage = ref(false)
    let newList:any[] = []//ref内部的customRef会更新整个组件vnode，这里用新数组来记录props.listData的变化，以空间换时间
    let defaultFocusTimer:any = null
    let isinitValue=false
    let isDefaultFocusTimer = true//为兼容旧版本，当init函数的第二个参数为false时开启默认焦点校验
    const getRecord = ()=>{
      return props.listData || recordTarget.value
    }
    const checkDefaultFocus = (datas:any[]) => {
      if (props.defaultFocus > -1 && datas.length && props.defaultFocus<datas.length&&isDefaultFocusTimer) {
        clearTimeout(defaultFocusTimer)
        defaultFocusTimer = setTimeout(() => {
          scrollToFocused(props.defaultFocus)
        }, 300 + datas.length * 10);
      }
    }
    onMounted(()=>{
      if(getRecord().length&&tv_list.value && !isinitValue && !newList.length){
        newList = getRecord()
        tv_list.value!.setListDataWithParams(toRaw(getRecord()), true, true)
        checkDefaultFocus(newList)
      }
    })
    onUnmounted(()=>{
      recordTarget.value.splice(0)
    })
    let loadingPosition = 0
    const loadingData = [{ _id: '', type: 1002, decoration: props.loadingDecoration }]
      const getOpenLoading = () => {
        if(props.openPage && newList.length >= props.pageSize && !isStopPage){
          loadingPosition = newList.length
          return loadingData
        }
        return []
      }
      const openLoading = () => {
        if(props.openPage && loadingPosition === 0 && newList.length >= props.pageSize && !isStopPage){
          tv_list.value!.addListData(loadingData)
          loadingPosition = newList.length
        }
      }
      const closeLoading = (isTip = false)=>{
        if(loadingPosition>0){
          if(isTip){
            tv_list.value.updateItem(loadingPosition, { text: '', type: 1003, decoration: {} })
          } else {
            tv_list.value.deleteItem(loadingPosition, 1)
            loadingPosition = 0
          }
        }
      }
      let stopPageTimerId:any = null
      const stopPage = (isTip = false) => { //当分页数据加载完毕时 调用该方法 清掉加载loading样式
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
            if(newList.length > props.pageSize){
              pageNo++
              props.loadMore(pageNo)
            }
          }else{
            pageNo++
            props.loadMore(pageNo)
          }
        }
      }

    const watchRes = qtWatchAll(getRecord(), {
      resetValue(newData){
        newList = newData
        isinitValue = true
      },
      init(datas){
        if(tv_list.value){
          tv_list.value.setListDataWithParams(datas.concat(getOpenLoading()), true, true)
          // tv_list.value.setListData(datas)
          initPage()
          if(props.listData){
            pageNo = 1
          }
          checkDefaultFocus(datas)
        }
      },
      add(datas){
        tv_list.value!.addListData(datas)//addListDataWithParams
        closeLoading()
        openLoading()
      },
      update(position, dataMaps){
        const datas = qtFilterChangeMap(1, dataMaps.datas)
        // if(datas.size>1){
        //   tv_list.value.updateItemList(position, datas.size, Array.from(datas.values()))
        // }else{
          datas.forEach((value, key) => {
            // qtGetParent(value, key, 1)
            const position = Array.isArray(key)?Number(key[0]):Number(key)
            tv_list.value.updateItem(position,value)
            // tv_list.value.updateItemProps(pos, name, dataObj)
          })
        // }
      },
      insert(position, datas){
        tv_list.value.addItem(position, datas)
        closeLoading()
        openLoading()
      },
      delete(position, count){
        tv_list.value.deleteItem(position, count)
        if(loadingPosition>0){
          loadingPosition = newList.length
        }
      },
      clear(){
        tv_list.value!.setListDataWithParams([], true, true)
        loadingPosition = 0
      }
    })
    const {
      scrollToPosition,
    } = useListView(tv_list);

    watchEffect(() => {
      if (props.openPage && !props.listData) {
        initPage()
        loadMoreFn()
      }
    })
    //初始化组件 监听list操作
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

    const onItemClick = (e) => {
      context.emit('item-click', e);
    }
    const onItemBind = (e) => {
      if(props.openPage && !isStopPage && newList.length >= props.pageSize){
        let myPreloadNo = props.preloadNo
        if(myPreloadNo < 0 || myPreloadNo >= newList.length){
          myPreloadNo = 0
        }

        if (e.position == newList.length - 1 - myPreloadNo) {
          // console.log(e.position, '---lsj--onBindItem-', newList.length)
          loadMoreFn()
        }
      }
      context.emit('item-bind', e)
    }
    const onItemFocused = (e) => {
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
    const setItemFocused = (pos: number) => {
      tv_list.value.requestFocus(pos);
    }
    const scrollToFocused = (pos: number) => {
      scrollToPosition(pos);
      setItemFocused(pos);
    }
    const setItemSelected = (pos: number, b: boolean) => {
      tv_list.value.setSelectPosition(pos, b);
    }
    const scrollToSelected = (pos: number, b: boolean) => {
      scrollToPosition(pos)
      setItemSelected(pos, b)
    }
    const setInitPosition = (pos: number) => {
      tv_list.value.setInitPosition(pos)
    }

    const resetData = () => {
      isRestartPage.value = false
      isStopPage = false
    }
    onBeforeUnmount(() => {
      watchRes?.stop()
      initPage()
      resetData()
      clearTimeout(defaultFocusTimer)
      clearTimeout(stopPageTimerId)
    })
    let delayResetTimer: any = -1
    const restartPage = () => {
      if(!props.listData){
        clearTimeout(delayResetTimer)
        let delayResetTimerTime: number = 0
        if (!isStopPage) {
          delayResetTimerTime = 420
          stopPage()
        }
        delayResetTimer = setTimeout(() => {
          isRestartPage.value = true
          pageNo = 1;
          isStopPage = false;
          props.loadMore(pageNo)
        }, delayResetTimerTime)
      }
    }
    const updateItemProps = (pos: number, name: string, dataObj: object) => {
      tv_list.value.updateItemProps(pos, name, dataObj)
    }
    const insertItem = (pos: number, data: Array<QTListViewItem>) => {
      tv_list.value.addItem(pos, data)
    }
    return {
      tv_list,
      ...useBaseView(tv_list),
      ...useListView(tv_list),
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
      setItemFocused,
      scrollToFocused,
      setItemSelected,
      scrollToSelected,
      setInitPosition,
      apkVersion,
      updateItemProps,
      insertItem,
    }
  },
});
</script>
<style>
</style>

