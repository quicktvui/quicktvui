<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
      ref="tabRef"
      :outOfDateTime="120000000"
      tabNavBarClass="qt-tabs-waterfall-tab-css"
      tabPageClass="qt-tabs-waterfall-css"
      @onTabPageLoadData="onTabPageLoadData">
      <template v-slot:waterfall-item>
        <app-list-item :type="1"/>
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTITab, QTTabPageData, QTWaterfall, QTWaterfallSection, QTTabItem, QTTab, QTTabPageState, QTWaterfallSectionType
} from "@quicktvui/quicktvui3";
import {generatorPageAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item'

export default defineComponent({
  name: '设置数据',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabRef = ref<QTITab>()
    //tab item list
    const tabItemList: Array<QTTabItem> = []

    function onESCreate() {

      for (let i = 0; i < 10; i++) {
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
        itemList: tabItemList,

      }
      tabRef.value?.initTab(tab)


      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 800
      }
      tabRef.value?.initPage(waterfallData)
    }

    //-----------------------------------------------------
    function onTabPageLoadData(pageIndex: number, pageNo: number, useDiff: boolean): void {
      getPageData(pageIndex, pageNo, useDiff)
    }

    function getPageData(pageIndex: number, pageNo: number, useDiff: boolean) {
      console.log('----页面-----loadPageData---加载数据聚------->>>' +
        '  pageIndex:' + pageIndex +
        '  pageNo:' + pageNo +
        '  useDiff:' + useDiff +
        '  date:' + new Date().getTime()
      )
      if (pageNo <= 3) {
        let sectionList: Array<QTWaterfallSection> = []
        for (let i = 0; i < 1; i++) {
          let section: QTWaterfallSection = generatorPageAppWaterfallSection('' + pageIndex,
            '' + pageNo,
            '' + i,
            "Tab:" + pageIndex + " PageNo:" + pageNo + "的应用")
          sectionList.push(section)
        }
        const tabPage: QTTabPageData = {
          useDiff: useDiff,
          data: sectionList
        }
        tabRef.value?.addPageData(pageIndex, tabPage, 0)
      }
      //
      else {
        const tabPage: QTTabPageData = {
          useDiff: useDiff,
          data: [buildEndSection()]
        }
        tabRef.value?.addPageData(pageIndex, tabPage, 0)
        tabRef.value?.setPageState(pageIndex, QTTabPageState.QT_TAB_PAGE_STATE_COMPLETE)
      }
    }

    function buildEndSection(): QTWaterfallSection {
      let endSection: QTWaterfallSection = {
        _id: '100',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_END,
        title: '已经到底啦，按【返回键】回到顶部',
        titleStyle: {
          width: 1920,
          height: 200,
          marginLeft: 90,
          marginTop: 40,
          marginBottom: 40,
          fontSize: 30
        },
        itemList: [],
        style: {
          width: 1920,
          height: 200,
        },
      }
      return endSection;
    }

    return {
      tabRef,
      onESCreate,
      onTabPageLoadData,
    }
  },
});

</script>

<style>
.es-sdk-root-css .qt-tabs-waterfall-tab-css {
  width: 1920px;
  height: 73px;
  z-index: 100;
}

.qt-tabs-waterfall-css {
  width: 1920px;
  height: 800px;
  background-color: grey;
}

</style>
