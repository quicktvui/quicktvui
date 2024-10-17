<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="添加Section" @onButtonClicked="onButtonClicked"/>
    </div>
    <qt-tabs
        ref="tabRef"
        :datas="tabData"
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
  QTITab, QTWaterfallSection, QTTabPageState, qtTabsRef
} from "@quicktvui/quicktvui3";
import {generatorAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item'
import {buildTabItemList} from "../__mocks__/tab";

export default defineComponent({
  name: 'DataBinding 添加Section',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabRef = ref<QTITab>()
    const tabData = qtTabsRef()

    function onButtonClicked() {
      const section = generatorAppWaterfallSection('0', "新添加应用")
      console.log('---------loadPageData---------->>>', section)
      tabData.value[0].sections.push(section)
    }

    function onESCreate() {
      tabData.value = buildTabItemList(1) //初始化数据
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
        tabData.value[pageIndex].sections.push(section) //添加tab页数据
        pageNum++;

        if (pageNum === 2) {
          // tabRef.value?.setPageState(pageIndex, QTTabPageState.QT_TAB_PAGE_STATE_COMPLETE)
        }
      }, 2000)
    }

    return {
      tabData,
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
