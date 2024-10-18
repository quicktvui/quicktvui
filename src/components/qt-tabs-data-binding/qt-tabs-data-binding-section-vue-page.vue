<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
      ref="tabRef"
      :tabs="tabData"
      @onTabPageLoadData="onTabPageLoadData"
      class="qt-tabs-css">
      <template v-slot:waterfall-vue-section>
        <vue-one-section/>
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {
  QTWaterfallSection,
  QTWaterfallSectionType,
  qtTabsRef
} from "@quicktvui/quicktvui3";
import vue_one_section from './section/vue-one-section'
import vue_two_section from './section/vue-two-section'
import {buildTabItemList} from "../__mocks__/tab";

export default defineComponent({
  name: 'DataBinding VueSection',
  components: {
    'vue-one-section': vue_one_section,
    'vue-two-section': vue_two_section,
  },
  setup(props, context) {

    const tabData = qtTabsRef()

    function onESCreate() {
      tabData.value = buildTabItemList()
    }

    //-----------------------------------------------------
    function onTabPageLoadData(pageIndex: number, pageNo: number, useDiff: boolean): void {
      console.log('---------loadPageData---------->>>' +
        '  pageIndex:' + pageIndex +
        '  useDiff:' + useDiff
      )

      let section_1: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_VUE,
        itemList: [],
        style: {
          width: 1920,
          height: 320,
        },
        decoration: {
          top: 20,
          bottom: 20
        }
      }
      let sectionList: Array<QTWaterfallSection> = [
        section_1,
      ]
      tabData.value[pageIndex].content.push(...sectionList)
    }

    return {
      tabData,
      onESCreate,
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
