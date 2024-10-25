<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
        ref="tabRef"
        :tabs="tabData"
        @onTabPageLoadData="onTabPageLoadData"
        class="qt-tabs-css">
      <template v-slot:waterfall-section>
        <text-section :type="1"/>
        <!-- <img-section :type="2"/> -->
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {
  QTWaterfallSection, QTTabItem, qtTabsRef
} from "@quicktvui/quicktvui3";
import text_section from './section/text-section'
import img_section from './section/img-section'

export default defineComponent({
  name: 'DataBinding 自定义Section',
  components: {
    'text-section': text_section,
    'img-section': img_section,
  },
  setup(props, context) {
    const tabData = qtTabsRef()

    function buildTabItemList() {
      //tab item list
      const tabItemList: Array<QTTabItem> = []

      for (let i = 0; i < 15; i++) {
        let tabItem: QTTabItem = {
          _id: '' + i,
          type: 20000,
          text: 'Tab:' + i,
          titleSize: 20,
          decoration: {
            left: 40,
            right: 20,
          },
          content: []
        }
        tabItemList.push(tabItem)
      }
      return tabItemList
    }

    function onESCreate() {
      tabData.value = buildTabItemList() //初始化数据
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

      let section_1: QTWaterfallSection = {
        _id: '1',
        type: 1,
        itemList: [],
        style: {
          width: 1920,
          height: 320,
        },
        decoration: {
          top: 200,
          bottom: 20,
          left: 500,
        }
      }
      let section_2: QTWaterfallSection = {
        _id: '2',
        type: 2,
        itemList: [],
        style: {
          width: 1920,
          height: 320,
        },
      }

      let sectionList: Array<QTWaterfallSection> = [
        section_1,
        section_2,
      ]

      //--------------------------------旧写法---------------------------------------
      // const tabPage: QTTabPageData = {
      //   useDiff: useDiff,
      //   data: sectionList
      // }
      // tabRef.value?.setPageData(pageIndex, tabPage)
      //--------------------------------新写法---------------------------------------
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
  height: 1080px;
}
</style>
