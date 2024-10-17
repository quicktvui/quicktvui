<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="添加Section" @onButtonClicked="onButtonClicked"/>
    </div>
    <qt-tabs
      ref="tabRef"
      @onTabPageLoadData="onTabPageLoadData"
      class="qt-tabs-css">
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
  QTITab, QTTabPageData, QTWaterfall, QTWaterfallSection, QTTabItem, QTTab, QTTabPageState
} from "@quicktvui/quicktvui3";
import {generatorAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item'

export default defineComponent({
  name: '添加Section',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabRef = ref<QTITab>()

    function onButtonClicked() {
      let sectionList: Array<QTWaterfallSection> = [
        generatorAppWaterfallSection('0', "新添加应用"),
      ]
      const tabPage: QTTabPageData = {
        useDiff: true,
        data: sectionList
      }
      tabRef.value?.addPageData(0, tabPage, 0)
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

    let pageNum = 0

    //-----------------------------------------------------
    function onTabPageLoadData(pageIndex: number, pageNo: number, useDiff: boolean): void {
      if (pageIndex !== 0) {
        return;
      }
      console.log('---------loadPageData---------->>>' +
        '  pageIndex:' + pageIndex +
        '  useDiff:' + useDiff +
        '  date:' + new Date().getTime()
      )

      setTimeout(() => {
        let section: QTWaterfallSection = generatorAppWaterfallSection('0', "应用")

        let sectionList: Array<QTWaterfallSection> = [
          section,
        ]

        const tabPage: QTTabPageData = {
          useDiff: useDiff,
          data: sectionList
        }

        if (pageNum == 0) {
          console.log('------设置数据-----setPageData------------->>>>>')
          tabRef.value?.setPageData(pageIndex, tabPage)
        } else {
          console.log('-------设置数据----addPageData------------->>>>>')
          tabRef.value?.addPageData(pageIndex, tabPage, 0)
        }
        pageNum++;

        if (pageNum === 2) {
          tabRef.value?.setPageState(pageIndex, QTTabPageState.QT_TAB_PAGE_STATE_COMPLETE)
        }
      }, 2000)
    }

    return {
      tabRef,
      onESCreate,
      onTabPageLoadData,
      onButtonClicked
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
