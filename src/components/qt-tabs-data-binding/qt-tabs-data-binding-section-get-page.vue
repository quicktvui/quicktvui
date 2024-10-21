<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="查询Section" @onButtonClicked="onGetButtonClicked"/>
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
import {ref, toRaw} from "vue";
import {
  QTITab, QTWaterfallSection, qtTabsRef
} from "@quicktvui/quicktvui3";
import {generatorAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item'
import {useESLog} from "@extscreen/es3-core";
import {buildTabItemList} from "../__mocks__/tab";

const TAG = 'TabWaterfallTAG'

export default defineComponent({
  name: 'DataBinding 查询Section',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabRef = ref<QTITab>()
    const tabData = qtTabsRef()

    const log = useESLog()

    function onGetButtonClicked() {
      // const sectionList = tabRef.value?.getPageSectionList(0)//通过方法获取
      // log.d(TAG, '-------获取sectionList-------->>>>', sectionList)
      const sectionList2 = tabData.value[0].content//通过数据获取
      log.d(TAG, '-------获取sectionList-------->>>>', sectionList2)
      // log.d(TAG, '-------获取sectionList-------->>>>', toRaw(sectionList2))
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
      tabRef,
      tabData,
      onESCreate,
      onTabPageLoadData,
      onGetButtonClicked
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
