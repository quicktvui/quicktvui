<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="删除第一个板块Item" @onButtonClicked="onDeleteButtonClicked"/>
      <s-text-button text="删除第二个板块Item" @onButtonClicked="onDeleteButton2Clicked"/>
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
  generatorAppQuestionWaterfallItemList, generatorAppWaterfallItemList,
  generatorAppWaterfallSection,
  generatorWaterfallSection
} from "../__mocks__/app";

const TAG = 'WaterfallTAG'

export default defineComponent({
  name: '删除Item',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const waterfall = ref<QTIWaterfall>()
    const log = useESLog()

    function onDeleteButtonClicked() {
      waterfall.value?.deleteItem(0, 0, 1)
    }

    function onDeleteButton2Clicked() {
      waterfall.value?.deleteItem(1, 0, 2)
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
        generatorWaterfallSection('0', '应用：' + new Date().getTime(),
          generatorAppQuestionWaterfallItemList('1', 7)),
        generatorWaterfallSection('2', '应用：' + new Date().getTime(),
          generatorAppChildrenWaterfallItemList('3', 7)),
      ]
      waterfall.value?.addSectionList(sectionList)
    }

    return {
      waterfall,
      onESCreate,
      onDeleteButton2Clicked,
      onDeleteButtonClicked,
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
