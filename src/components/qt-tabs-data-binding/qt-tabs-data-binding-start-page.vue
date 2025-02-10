<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-tabs
        ref="tabRef"
        tabPageClass="qt-tabs-content-css"
        :tabs="tabData"
        class="qt-tabs-waterfall-root-css">
      <template v-slot:waterfall-item>
        <app-list-item :type="1"/>
      </template>
    </qt-tabs>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {
  QTWaterfallSection, QTTabItem
} from "@quicktvui/quicktvui3";
import {generatorAppWaterfallSection} from "../__mocks__/app";
import app_list_item from './item/app-list-item'
import {qtTabsRef} from '@quicktvui/quicktvui3'

/**
 *
 */
export default defineComponent({
  name: 'DataBinding 使用初探',
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
    return {
      onESCreate,
      tabData
    }
  },
});

</script>

<style>
.qt-tabs-waterfall-root-css {
  width: 1920px;
  height: 900px;
  background-color: red;
}

.qt-tabs-waterfall-root-css .qt-tabs-content-css {
  width: 1920px;
  height: 800px;
  background-color: #7415B1;
}

</style>
