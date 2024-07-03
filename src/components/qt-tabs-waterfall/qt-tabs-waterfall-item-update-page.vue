<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="更新Item2" @onButtonClicked="onButtonClicked(0)"/>
      <s-text-button text="使用SID更新文本" @onButtonClicked="onButtonClicked(1)"/>
    </div>
    <qt-tabs
      ref="tabRef"
      @onTabPageLoadData="onTabPageLoadData"
      class="qt-tabs-css">
      <template v-slot:waterfall-item>
<!--        <app-list-item :type="1"/>-->
        <complex-item :type="1"/>
      </template>
    </qt-tabs>

    <div>
<!--      <div :showOnState="['unique','s2']" :customState="{'unique':true,'s2':false}">-->

<!--      </div>-->
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTITab, QTTabPageData, QTWaterfall, QTWaterfallSection, QTTabItem, QTTab, QTTabPageState
} from "@quicktvui/quicktvui3";
import {generatorAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item'
// import ComplexItem from "./item/complex-item.vue";

export default defineComponent({
  name: '更新Item',
  components: {
    // ComplexItem,
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabRef = ref<QTITab>()

    //
    let dataOfTest = [
      {
        _id:'section0',
        sectionName:'版块0',
        itemList:[
          {
            _id:'item1',
            type:1,
            appName:'应用1',
            playInfo:{
              progress:50,
            }
          },{
            type:1,
            appName:'应用2',
          }
        ]
      },
      {
        _id:'section1',
        sectionName:'版块0',
        itemList:[
          {
            type:1,
            appName:'应用1',
          },{
            type:1,
            _id:'item2',
            appName:'应用2',
          }
        ]
      }
    ]

    function onButtonClicked(type:number) {
      if(type == 1){
        //使用sid更新
        let sid = 'mainText'
        tabRef.value?.updatePageItemBySid("mainText", sid, '小恐龙')

      }else{
        const item = tabRef.value?.getPageItem(0, 0, 2)
        if (item) {
          item.appName = '小恐龙'
          item.appIcon = 'http://qcloudimg.a311.ottcn.com/data_center/files/2022/11/07/854f47b2-fdbe-4543-a2c3-1f8754dcb13e.jpg'
          tabRef.value?.updatePageItem(0, 0, 2, item)
        }
      }
    }

    function onESCreate() {

      //tab item list
      const tabItemList: Array<QTTabItem> = []

      for (let i = 0; i < 15; i++) {
        let tabItem: QTTabItem = {
          _id: '' + i,
          type: 20000,
          text: 'Tab:' + i,
          titleSize: 20,
          decoration: {
            left: 40,
            right: 20,
          }
        }
        tabItemList.push(tabItem)
      }

      //tab
      const tab: QTTab = {
        defaultFocusIndex: 0,
        defaultIndex: 0,
        itemList: tabItemList
      }
      tabRef.value?.initTab(tab)


      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080
      }
      tabRef.value?.initPage(waterfallData)
    }

    let pageIndexLast = -1

    //-----------------------------------------------------
    function onTabPageLoadData(pageIndex: number, pageNo: number, useDiff: boolean): void {
      console.log('---------loadPageData---------->>>' +
        '  pageIndex:' + pageIndex +
        '  useDiff:' + useDiff
      )
      if (pageIndexLast === pageIndex) {
        return
      }
      pageIndexLast = pageIndex

      let section: QTWaterfallSection = generatorAppWaterfallSection('0', "应用")

      let sectionList: Array<QTWaterfallSection> = [
        section,
      ]

      const tabPage: QTTabPageData = {
        useDiff: useDiff,
        data: sectionList
      }
      tabRef.value?.setPageData(pageIndex, tabPage)
      tabRef.value?.setPageState(pageIndex,QTTabPageState.QT_TAB_PAGE_STATE_COMPLETE);
    }

    return {
      tabRef,
      onESCreate,
      onButtonClicked,
      onTabPageLoadData,
    }
  },
});

</script>

<style>
.qt-tabs-css {
  width: 1920px;
  height: 1080px;
}
</style>
