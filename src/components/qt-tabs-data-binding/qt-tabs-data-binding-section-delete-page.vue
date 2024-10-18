<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="删除第一个page第一个section" @onButtonClicked="onButtonClicked"/>
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
  QTITab, QTWaterfallSection, qtTabsRef
} from "@quicktvui/quicktvui3";
import {generatorAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item'
import {buildTabItemList} from "../__mocks__/tab";

export default defineComponent({
  name: 'DataBinding 删除Section',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabRef = ref<QTITab>()
    const tabData = qtTabsRef()

    function onButtonClicked() {
      tabData.value[0].content.splice(0, 1)
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

      let section_1: QTWaterfallSection = generatorAppWaterfallSection('0', "应用:1")
      let section_2: QTWaterfallSection = generatorAppWaterfallSection('1', "应用:2")

      let sectionList: Array<QTWaterfallSection> = [
        section_1,
        section_2
      ]
      tabData.value[pageIndex].content.push(...sectionList)
    }

    return {
      tabRef,
      tabData,
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
