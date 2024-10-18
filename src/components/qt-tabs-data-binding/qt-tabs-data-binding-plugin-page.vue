<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
        ref="tabRef"
        :tabs="tabData"
        tabPageClass="qt-tabs-content-css"
        @onTabPageChanged="onTabPageChanged"
        @onTabPageLoadData="onTabPageLoadData"
        @onPluginLoadSuccess="onPluginLoadSuccess"
        @onPluginLoadError="onPluginLoadError"
        class="qt-tabs-css">
    </qt-tabs>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTITab, QTTabPageData, QTWaterfall, QTWaterfallSection, QTTabItem, QTTab, QTPluginViewEvent, qtTabsRef
} from "@quicktvui/quicktvui3";
import app_list_item from './item/app-list-item'
import {buildPluginSection, buildPluginFlexSection} from "../__mocks__/plugin";
import {ESLogLevel, useESLog, useESToast} from "@extscreen/es3-core";
import {buildTabItemList} from "../__mocks__/tab";

const TAG = 'QTPluginView'

export default defineComponent({
  name: 'DataBinding 插件',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const tabRef = ref<QTITab>()
    const toast = useESToast()
    const log = useESLog()
    const tabData = qtTabsRef()

    function onESCreate() {
      tabData.value = buildTabItemList()
    }

    function onTabPageLoadData(pageIndex: number, pageNo: number, useDiff: boolean): void {
      console.log('---------loadPageData---------->>>' +
          '  pageIndex:' + pageIndex +
          '  useDiff:' + useDiff
      )

      let sectionList: Array<QTWaterfallSection> = [
        buildPluginSection("0", '单行插件板块', 'plg-h-recyclerview/HuanHRecyclerView', 500),
        buildPluginSection("1", '两行插件板块', 'plg-v-recyclerview/HuanVRecyclerView', 700),
        buildPluginSection("2", 'Hello插件板块', 'plugin-hello', 500),
        buildPluginSection("3", 'TextView插件板块', 'plugin-textview/HuanTextView', 500),
        buildPluginFlexSection('4', "插件Item板块"),
      ]
      tabData.value[pageIndex].content.push(...sectionList)
    }

    function onTabPageChanged(pageIndex: number, data: QTTabItem) {
      console.log('---------onTabPageChanged---------->>>' +
          '  pageIndex:' + pageIndex +
          '  data:', data
      )

      tabRef.value?.getCurrentTabIndex().then((index: number) => {
        console.log('---------onTabPageChanged---------->>>' +
            '  index:' + index
        )
      })
    }

    //---------------------------------------------------------------
    function onPluginLoadSuccess(event: QTPluginViewEvent) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '--------onPluginLoadSuccess-------------->>>' + JSON.stringify(event))
      }
      toast.showToast("插件加载成功" + event.sid)
    }

    function onPluginLoadError(event: QTPluginViewEvent) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '--------onPluginLoadError-------------->>>' + JSON.stringify(event))
      }
      toast.showToast("插件加载失败：" + event.errorCode + "--" + event.errorMessage)
    }

    return {
      tabRef,
      tabData,
      onESCreate,
      onTabPageLoadData,
      onTabPageChanged,
      onPluginLoadSuccess,
      onPluginLoadError,
    }
  },
});

</script>

<style>
.qt-tabs-css {
  width: 1920px;
  height: 1080px;
}

.qt-tabs-css .qt-tabs-content-css {
  width: 1920px;
  height: 800px;
  background-color: #7415B1;
}
</style>
