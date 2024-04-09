<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="添加Item" @onButtonClicked="onAddButtonClicked"/>
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
  generatorAppWaterfallItemList,
  generatorWaterfallSection
} from "../__mocks__/app";

const TAG = 'WaterfallTAG'

export default defineComponent({
  name: '添加Item',
  components: {
    'app-list-item': app_list_item
  },
  setup(props, context) {
    const waterfall = ref<QTIWaterfall>()
    const log = useESLog()

    //
    function onAddButtonClicked() {
      const itemList = generatorAppWaterfallItemList('0', 1)
      waterfall.value?.addItemList(0, itemList)
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
          generatorAppQuestionWaterfallItemList('1', 5)),
        generatorWaterfallSection('2', '应用：' + new Date().getTime(),
          generatorAppChildrenWaterfallItemList('3', 5)),
      ]
      waterfall.value?.addSectionList(sectionList)
    }

    return {
      waterfall,
      onESCreate,
      onAddButtonClicked,
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
