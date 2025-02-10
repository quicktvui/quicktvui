<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
        ref="tabRef"
        :tabs="tabData"
        @onTabPageLoadData="onTabPageLoadData"
        class="qt-tabs-css">
      <template v-slot:waterfall-item>
        <waterfall-item :type="1"/>
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTITab, QTTabPageData, QTWaterfall, QTWaterfallSection, QTWaterfallSectionType, QTTabItem, QTTab, qtTabsRef
} from "@quicktvui/quicktvui3";
import waterfall_item from './item/waterfall-item'
import {buildCustomWaterfallItemList} from "./data/mock";
import {buildTabItemList} from "../__mocks__/tab";

export default defineComponent({
  name: 'DataBinding 自定义Item',
  components: {
    'waterfall-item': waterfall_item
  },
  setup(props, context) {
    const tabRef = ref<QTITab>()
    const tabData = qtTabsRef()

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

      let sectionList: Array<QTWaterfallSection> = []
      for (let i = 0; i < 4; i++) {
        let section: QTWaterfallSection = {
          _id: i + '',
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
          title: '板块',
          titleStyle: {
            width: 1920,
            height: 60,
            marginLeft: 90,
            marginTop: 40,
            marginBottom: 40,
            fontSize: 50
          },
          style: {
            width: 1920,
            height: -1,
          },
          itemList: buildCustomWaterfallItemList(i + '')
        }
        sectionList.push(section)
      }
      tabData.value[pageIndex].content.push(...sectionList)
    }

    return {
      tabRef,
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
  height: 900px;
}
</style>
