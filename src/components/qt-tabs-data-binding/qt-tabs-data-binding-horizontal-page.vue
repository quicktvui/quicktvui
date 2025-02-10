<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
        ref="tabRef"
        :tabs="tabData"
        :horizontal="false"
        tabClass="qt-tabs-horizontal-css"
        tabNavBarClass="qt-tabs-tab-css"
        tabPageClass="qt-tabs-page-css"
        @onTabPageLoadData="onTabPageLoadData"
        class="qt-tabs-horizontal-css">
      <template v-slot:waterfall-item>
        <app-list-item :type="1"/>
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {generatorAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item'
import {
  qtTabsRef,
  QTWaterfallSection, QTTabItem
} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'DataBinding 横向',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabData = qtTabsRef()

    function buildTabItemList() {
      //tab item list
      const tabItemList: Array<QTTabItem> = []

      for (let i = 0; i < 15; i++) {
        const section: QTWaterfallSection = generatorAppWaterfallSection('0', "应用")
        let tabItem: QTTabItem = {
          _id: '' + i,
          type: 20000,
          text: 'Tab:' + i,
          titleSize: 20,
          decoration: {
            left: 40,
            right: 20,
          },
          content: [section]
        }
        tabItemList.push(tabItem)
      }
      return tabItemList
    }


    function onESCreate() {
      const data = buildTabItemList()
      console.log('------------onESCreate--------data----->>>>>', data)
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

      let section: QTWaterfallSection = generatorAppWaterfallSection('0', "应用")
      tabData.value[pageIndex].content.push(section) //添加tab页数据
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
.qt-tabs-horizontal-css {
  width: 1920px;
  height: 1080px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.qt-tabs-tab-css {
  width: 250px;
  height: 800px;
}

.qt-tabs-page-css {
  width: 1670px;
  height: 1080px;
}
</style>
