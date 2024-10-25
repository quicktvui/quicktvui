<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
        ref="tabRef"
        @onTabPageLoadData="onTabPageLoadData"
        :tabs="tabData"
        class="qt-tabs-css">
      <template v-slot:tab-item>
        <tab-item :type="1"/>
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {
  QTTabPageData, QTWaterfall, QTWaterfallSection, QTWaterfallSectionType, QTTabItem, QTTab, qtTabsRef
} from "@quicktvui/quicktvui3";
import tab_item from './item/tab-item.vue'
import {buildWaterfallItemList} from "./data/mock";
import {buildTabItemList} from "../__mocks__/tab";

export default defineComponent({
  name: 'DataBinding 自定义TabItem',
  components: {
    'tab-item': tab_item
  },
  setup(props, context) {
    const tabData = qtTabsRef()

    function onESCreate() {
      const data = buildTabItemList()
      tabData.value = data //初始化数据
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
      for (let i = 0; i < 3; i++) {
        let section: QTWaterfallSection = {
          _id: '' + i,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
          title: '板块' + i,
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
          itemList: buildWaterfallItemList('' + i)
        }
        sectionList.push(section)
      }
      //--------------------------新写法---------------------------------------
      tabData.value[pageIndex].content.push(...sectionList) //添加tab页数据
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
  height: 900px;
}
</style>
