<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="删除Item" @onButtonClicked="onButtonClicked"/>
    </div>
    <qt-tabs
        ref="tabRef"
        :tabs="tabData"
        @onTabPageLoadData="onTabPageLoadData"
        class="qt-tabs-ref-delete-item-css"
        tabPageClass="qt-tabs-ref-delete-item-waterfall">
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
import {generatorAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item'
import {buildTabItemList} from "../__mocks__/tab";

export default defineComponent({
  name: 'DataBinding 删除Item',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabData = qtTabsRef()

    function onButtonClicked() {
      tabData.value[0].content[0].itemList.pop()
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

      let section: QTWaterfallSection = generatorAppWaterfallSection('0', "应用")
      tabData.value[pageIndex].content.push(section)
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
.qt-tabs-ref-delete-item-css {
  width: 1920px;
  height: 800px;
}
.qt-tabs-ref-delete-item-waterfall{
  width: 1920px;
  height: 810px;
  background-color: transparent;
}
</style>
