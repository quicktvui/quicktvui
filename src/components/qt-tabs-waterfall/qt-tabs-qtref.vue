<template>
  <div class="es-sdk-root-css">
    <qt-row>
      <div class="qt-tabs-ref-menus">
        <qt-button @click="initFn" size="mini" text="初始化数据" class="menus_btn"></qt-button>
        <qt-button @click="updateTabFn" size="mini" text="更新整个tab页" class="menus_btn"></qt-button>
        <qt-button @click="addSectionFn" size="mini" text="新增板块" class="menus_btn"></qt-button>
        <qt-button @click="insertSectionFn" size="mini" text="插入板块" class="menus_btn"></qt-button>
        <qt-button @click="deleteSectionFn" size="mini" text="删除板块" class="menus_btn"></qt-button>
        <qt-button @click="updateSectionFn" size="mini" text="更新板块标题" class="menus_btn"></qt-button>
        <qt-button @click="deleteInsertSectionFn" size="mini" text="删除并插入板块" class="menus_btn"></qt-button>
        <qt-button @click="addItemFn" size="mini" text="新增格子" class="menus_btn"></qt-button>
        <qt-button @click="insertItemFn" size="mini" text="插入格子" class="menus_btn"></qt-button>
        <qt-button @click="deleteItemFn" size="mini" text="删除格子" class="menus_btn"></qt-button>
        <qt-button @click="updateItemFn" size="mini" text="修改格子" class="menus_btn"></qt-button>
        <qt-button @click="deleteInsertItemFn" size="mini" text="格子-删除2插入1" class="menus_btn"></qt-button>
        
      </div>
      <qt-tabs
        ref="tabRef"
        tabPageClass="qt-tabs-ref-content-css"
        :tabs="tabDatas"
        :waterfallConfig="{width: 1620, height: 1080}"
        @onTabPageLoadData="onTabPageLoadData"
        class="qt-tabs-ref-waterfall-root-css">
        <template v-slot:waterfall-item>
          <appListItem :type="1"/>
        </template>
      </qt-tabs>
    </qt-row>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import {
  QTITab, qtTabsRef, QTTabPageState, QTWaterfallSectionType
} from "@quicktvui/quicktvui3";
import type { IQtTabDatas, QTWaterfallSection } from "@quicktvui/quicktvui3";
import appListItem from './item/app-list-item.vue'
import {generatorAppWaterfallItemList} from "../__mocks__/app";

const tabRef = ref<QTITab>()

const createTabNavData = (num = 10): Array<IQtTabDatas> => {
  return new Array(num).fill(1).map((_,i)=>{
    return {
      _id: qt.uid.createUid('nav'),
      type: 20000,
      text: 'Tab:' + i,
      titleSize: 20,
      decoration: {
        left: 40,
        right: 20,
      },
      useDiff: true,
      content: []
    }
  })
}
function generatorAppWaterfallSection(sectionId: string, title: string): QTWaterfallSection {
  let section: QTWaterfallSection = {
    _id: qt.uid.createUid('section'),
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    title: sectionId+title,
    titleStyle: {
      width: 1620,
      height: 60,
      marginLeft: 90,
      marginTop: 40,
      marginBottom: 40,
      fontSize: 50
    },
    style: {
      width: 1620,
      height: -1,
    },
    itemList: generatorAppWaterfallItemList(sectionId, 5)
  }
  return section
}
const ajax_getTabPageData = (pageIndex:number,pageNo:number) => {
  return {
    lists: pageNo == 0 ? [
      generatorAppWaterfallSection(pageIndex+'id'+pageNo+'0', "应用"),
      generatorAppWaterfallSection(pageIndex+'id'+pageNo+'1', "应用")
    ] : [],
    isEnd: true
  }
}
const tabDatas = qtTabsRef()

/**
 * 加载分页数据
 */
const onTabPageLoadData = (pageIndex: number, pageNo: number, useDiff: boolean) => {
  const tabPageData = ajax_getTabPageData(pageIndex,pageNo)//获取接口数据

  if(tabPageData.lists && tabPageData.lists.length){
    tabDatas.value[pageIndex].content.push(...tabPageData.lists)//添加tab页数据
  }

  if(tabPageData.isEnd){//结束分页
    tabRef.value?.setPageState(pageIndex, QTTabPageState.QT_TAB_PAGE_STATE_COMPLETE)
  }
}
/**
 * 初始化-设置tab-item数据/tab页数据
 */
const initFn = () => {
  tabDatas.value = createTabNavData()
}
/**
 * 更新整个tab页
 */
const updateTabFn = () => {
  tabDatas.value[0].content = [generatorAppWaterfallSection('0-id-0-0-new', "updateTabFn")]
}
/**
 * 添加板块数据
 */
const addSectionFn = () => {
  tabDatas.value[0].content.push(
    generatorAppWaterfallSection('0-id-0-2', "addSectionFn")
  )
}
/**
 * 插入板块数据
 */
const insertSectionFn = () => {
  tabDatas.value[0].content.splice(
    1,0, generatorAppWaterfallSection('0-id-0-3', "insertSectionFn")
  )
}
/**
 * 删除板块数据
 */
const deleteSectionFn = () => {
  tabDatas.value[0].content.splice(1,1)
}
/**
 * 更新板块数据
 */
const updateSectionFn = () => {
  tabDatas.value[0].content[0].title = 'updateSectionFn'+Math.random()
}
/**
 * 删除并插入板块
 */
const deleteInsertSectionFn = () => {
  tabDatas.value[0].content.splice(1,1, generatorAppWaterfallSection('0-id-0-4', "deleteInsertSectionFn"))
}
/**
 * 新增板块格子
 */
const addItemFn = () => {
  tabDatas.value[0].content[0].itemList.push(
    ...generatorAppWaterfallItemList('0-id-0-0-6', 1)
  )
}
/**
 * 插入格子
 */
const insertItemFn = () => {
  tabDatas.value[0].content[0].itemList.splice(1,0,...generatorAppWaterfallItemList('0-id-0-0-7', 1))
}
/**
 * 删除格子
 */
const deleteItemFn = () => {
  // tabDatas.value[0].content[0].itemList.splice(1,1)
  tabDatas.value[0].content[0].itemList.pop()
}
/**
 * 修改格子
 */
const updateItemFn = () => {
  tabDatas.value[0].content[0].itemList[1].appName = 'updateItemFn'+Math.random()
}
/**
 * 删除并插入格子
 */
const deleteInsertItemFn = () => {
  tabDatas.value[0].content[0].itemList.splice(1,2, ...generatorAppWaterfallItemList('0-id-0-0-8', 1))
}
onMounted(()=>{
  // tabDatas.value = createTabNavData()
})
</script>
<style scoped>
.qt-tabs-ref-waterfall-root-css {
  width: 1620px;
  height: 900px;
  background-color: transparent;
}
.qt-tabs-ref-menus {
  width: 200px;
  height: 1080px;
  background-color: rgba(0, 0, 0, 0.5);
  border-right: solid 2px #cccccc;
}
.qt-tabs-ref-menus .menus_btn {
  margin-bottom: 10px;
}
.qt-tabs-ref-content-css {
  width: 1620px;
  height: 1080px;
  background-color: transparent;
}
</style>
