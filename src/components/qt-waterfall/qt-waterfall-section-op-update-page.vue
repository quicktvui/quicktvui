<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="更新单个板块" @onButtonClicked="onUpdateButtonClicked"/>
      <s-text-button text="?更新高度变化板块" @onButtonClicked="onUpdateHeightButtonClicked"/>
      <s-text-button text="更新多个板块" @onButtonClicked="onUpdateMultiButtonClicked"/>
    </div>
    <qt-waterfall
      ref="waterfall"
      class="qt-waterfall-op-css">
      <template v-slot:item>
        <app-list-item :type="1"/>
      </template>
    </qt-waterfall>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,
} from "@quicktvui/quicktvui3";
import {useESLog} from "@extscreen/es3-core";
import app_list_item from './item/app-list-item'
import {
  generatorAppChildrenWaterfallItemList,
  generatorAppQuestionWaterfallItemList,
  generatorAppWaterfallSection
} from "../__mocks__/app";

const TAG = 'WaterfallTAG'

export default defineComponent({
  name: '更新Section',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const waterfall = ref<QTIWaterfall>()
    const log = useESLog()

    function onUpdateButtonClicked() {
      const section = waterfall.value?.getSection(0)
      if (section) {
        section.title = '新：' + section.title
        section.itemList = generatorAppChildrenWaterfallItemList(0 + '', 5)
        waterfall.value?.updateSection(0, section)
      }
    }

    function onUpdateHeightButtonClicked() {
      const section = waterfall.value?.getSection(0)
      if (section) {
        section.title = '新：' + section.title
        section.itemList = generatorAppChildrenWaterfallItemList(0 + '', 9)
        waterfall.value?.updateSection(0, section)
      }
    }

    function onUpdateMultiButtonClicked() {
      const sectionList: Array<QTWaterfallSection> = []
      const section_0 = waterfall.value?.getSection(0)
      if (section_0) {
        section_0.title = '新：' + section_0.title
        section_0.itemList = generatorAppChildrenWaterfallItemList(0 + '', 5)
        sectionList.push(section_0)
      }
      const section_1 = waterfall.value?.getSection(1)
      if (section_1) {
        section_1.title = '新：' + section_1.title
        section_1.itemList = generatorAppQuestionWaterfallItemList(1 + '', 6)
        sectionList.push(section_1)
      }
      if (sectionList) {
        waterfall.value?.updateSectionList(0, 2, sectionList)
      }
    }

    //-------------------------------------------------------------
    function onESCreate() {
      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080
      }
      waterfall.value?.init(waterfallData)
      //
      let sectionList: Array<QTWaterfallSection> = [
        generatorAppWaterfallSection('0', '应用：' + new Date().getTime()),
        generatorAppWaterfallSection('1', '应用：' + new Date().getTime()),
        generatorAppWaterfallSection('2', '应用：' + new Date().getTime()),
      ]
      waterfall.value?.addSectionList(sectionList)
    }

    return {
      waterfall,
      onESCreate,
      onUpdateButtonClicked,
      onUpdateMultiButtonClicked,
      onUpdateHeightButtonClicked,
    }
  },
});

</script>

<style>
.qt-waterfall-op-css {
  width: 1920px;
  height: 800px;
}
</style>
