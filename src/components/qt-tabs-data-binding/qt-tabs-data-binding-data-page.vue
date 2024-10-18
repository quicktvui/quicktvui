<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
      ref="tabRef"
      :outOfDateTime="120000000"
      :tabs="tabData"
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
  QTITab,
  QTWaterfallSection,
  QTTabItem,
  QTTabPageState,
  QTWaterfallSectionType,
  qtTabsRef
} from "@quicktvui/quicktvui3";
import {generatorPageAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item'
import {buildTabItemList} from "../__mocks__/tab";

export default defineComponent({
  name: 'DataBinding 设置数据',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {

    const tabData = qtTabsRef()
    const tabRef = ref<QTITab>()

    function onESCreate() {
      tabData.value = buildTabItemList() //初始化数据
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

        //---------------------------旧写法--------------------------------------
        // const tabPage: QTTabPageData = {
        //   useDiff: useDiff,
        //   data: sectionList
        // }
        // tabRef.value?.addPageData(pageIndex, tabPage, 0)
        //----------------------------新写法-------------------------------------
        tabData.value[pageIndex].content.push(...sectionList) //添加tab页数据
        //---------------------------------------------------------------------
      }
      //
      else {
        //---------------------------旧写法--------------------------------------
        // const tabPage: QTTabPageData = {
        //   useDiff: useDiff,
        //   data: [buildEndSection()]
        // }
        // tabRef.value?.addPageData(pageIndex, tabPage, 0)
        // tabRef.value?.setPageState(pageIndex, QTTabPageState.QT_TAB_PAGE_STATE_COMPLETE)
        //---------------------------新写法--------------------------------------
        tabData.value[pageIndex].content.push(buildEndSection()) //添加tab页数据
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
      tabData,
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
