<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row>
      <qt-column>
        <s-text-button text="更新Item" @onButtonClicked="onButtonClicked"/>
        <s-text-button text="更新Item by sid" @onButtonClicked="updateBySid"/>
      </qt-column>
      <qt-tabs
        ref="tabRef"
        @onTabPageLoadData="onTabPageLoadData"
        class="qt-tabs-css">
        <template v-slot:waterfall-item>
          <app-list-item :type="1"/>
        </template>
      </qt-tabs>
    </qt-row>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTITab, QTTabPageData, QTWaterfall, QTWaterfallSection, QTTabItem, QTTab
} from "@quicktvui/quicktvui3";
import {generatorAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item.vue'

export default defineComponent({
  name: '更新Item',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabRef = ref<QTITab>()

    function onButtonClicked() {
      const item = tabRef.value?.getPageItem(0, 0, 2)
      if (item) {
        item.appName = '小恐龙'
        item.appIcon = 'http://qcloudimg.a311.ottcn.com/data_center/files/2022/11/07/854f47b2-fdbe-4543-a2c3-1f8754dcb13e.jpg'
        tabRef.value?.updatePageItem(0, 0, 2, item)
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
        width: 1700,
        height: 500
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
        section,generatorAppWaterfallSection('2', "应用2"),
        generatorAppWaterfallSection('3', "应用3"),
        generatorAppWaterfallSection('4', "应用4")
      ]

      const tabPage: QTTabPageData = {
        useDiff: useDiff,
        data: sectionList
      }
      tabRef.value?.setPageData(pageIndex, tabPage)
    }

    return {
      tabRef,
      onESCreate,
      onButtonClicked,
      onTabPageLoadData,
      updateBySid(){
        const item = tabRef.value?.getPageItem(0, 0, 2)
        if (item) {
          item.appName = 'sid'
          item.appIcon = 'http://qcloudimg.a311.ottcn.com/data_center/files/2022/11/07/854f47b2-fdbe-4543-a2c3-1f8754dcb13e.jpg'
          tabRef.value?.updatePageItem(0, 0, 2, item)
        }
      }
    }
  },
});

</script>

<style>
.qt-tabs-css {
  width: 1700px;
  height: 500px;
}
</style>
