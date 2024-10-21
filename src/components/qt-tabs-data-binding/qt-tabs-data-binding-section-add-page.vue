<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="添加Section" @onButtonClicked="onButtonClicked"/>
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
  QTITab, QTTabPageState, QTWaterfallSection, qtTabsRef
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
      tabData.value[0].content.push(section)
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
      if (pageNum >= 1) {
        tabRef.value?.setPageState(pageIndex, QTTabPageState.QT_TAB_PAGE_STATE_COMPLETE)
        return
      }

      setTimeout(() => {
        let section: QTWaterfallSection = generatorAppWaterfallSection('0', "应用", 5)
        tabData.value[pageIndex].content.push(section) //添加tab页数据
        pageNum++;
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
