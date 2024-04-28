<template>
  <div class="page">
    <!-- <qt-button text="test_grid_view"></qt-button> -->
    <!-- :list-data="listData" -->
    <qt-grid-view 
      class="grid_view" ref="gridViewRef" :clipChildren="false" :clipPadding="false"
      :enablePlaceholder="true" padding="0,0,0,20" :list-data="listData"
      :preloadNo="5" :loadMore="loadMore" :listenBoundEvent="true" :openPage="true"
      :spanCount="6" :loadingDecoration="{left: 950, top: 20, bottom: 20}"
      @item-click="onItemClick"
    >
      <qt-view type="1" class="qt_list_item" :focusable="true" eventClick>
        <qt-text text="${text}" class="qt_list_item_text"></qt-text>
      </qt-view>
      <template v-slot:loading>
        <qt-loading-view :type="1002" name="loading" color="rgba(255,255,255,0.3)" style="height: 40px;width: 40px;" :focusable="false"/>
      </template>
      <qt-text :type="1003" style="width: 1920px;height: 100px;" gravity="center" :focusable="false" text="已经到底啦"></qt-text>
    </qt-grid-view>
  </div>
  </template>
  <script lang='ts' setup>
  import { qtRef } from '@quicktvui/quicktvui3';
  import { ref } from 'vue';
  import { QTListViewItem } from '@quicktvui/quicktvui3';
  
  const getData = (num = 30, flag='')=>{
    return new Array(num).fill(1).map((_,index)=>{
      return { text: index+flag, type: 1, decoration: {left:30, right: 30, bottom: 6} }
    })
  }
  
  const gridViewRef = ref()
  let listInitdata:any[] = []
  const listData = qtRef<QTListViewItem[]>()
  
  const onItemClick = (e) => {
    console.log(listData.value.length, '-lsj-listData', listInitdata.length)
  }
  const loadMore = async (num) => {
    if(num<5){
      setTimeout(() => {
        listData.value = listData.value.concat(getData(30,'concat-'+num))
      }, 1000);
    }else{
      gridViewRef.value.stopPage(true)
    }
  }
  
  defineExpose({
    onESCreate() {
      listData.value = getData()
    }
  })
  </script>
  <style scoped>
  .page{
    width: 1920px;
    height: 1080px;
    background-color: transparent;
  }
  
  .grid_view {
    width: 1920px;
    height: 1080px;
    background-color: transparent;
  }
  
  .qt_list_item {
    width: 260px;
    height: 300px;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    focus-background-color: #ffffff;
  }
  
  .qt_list_item_text {
    width: 200px;
    height: 300px;
    font-size: 30px;
    background-color: transparent;
  }
  </style>