<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="更新Section" @onButtonClicked="onButtonClicked"/>
    </div>
    <qt-tabs
        ref="tabRef"
        :tabs="tabData"
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
  QTITab, QTTabPageData, QTWaterfall, QTWaterfallSection, QTTabItem, QTTab, qtTabsRef
} from "@quicktvui/quicktvui3";
import {
  generatorAppQuestionWaterfallItemList,
  generatorAppWaterfallSection,
  generatorWaterfallSection
} from "../__mocks__/app";
import app_list_item from './item/app-list-item'
import {buildTabItemList} from "../__mocks__/tab";

export default defineComponent({
  name: 'DataBinding 更新Section',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabData = qtTabsRef()

    function onButtonClicked() {
      const itemList = generatorAppQuestionWaterfallItemList('0', 5)
      let section: QTWaterfallSection = generatorWaterfallSection('0', "应用更新", itemList)
      tabData.value[0].content[0] = section
      // 更新是正确的，只是第一个板块高度变小后，下面的板块没有顶上来，这个是底层的bug，鹏哥正在解决
    }

    function onESCreate() {
      tabData.value = buildTabItemList()
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

      let section_1: QTWaterfallSection = generatorAppWaterfallSection('0', "应用：1")
      let section_2: QTWaterfallSection = generatorAppWaterfallSection('1', "应用：2")

      let sectionList: Array<QTWaterfallSection> = [
        section_1, section_2
      ]
      tabData.value[pageIndex].content.push(...sectionList)
    }

    return {
      tabData,
      onESCreate,
      onTabPageLoadData,
      onButtonClicked,
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
