<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-waterfall
      ref="waterfall"
      class="qt-waterfall-css"/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,
  QTWaterfallSectionType
} from "@quicktvui/quicktvui3";

import {buildLinePosterItemList, buildPosterItemList} from "../__mocks__/poster";

export default defineComponent({
  name: 'BlankSection',
  setup(props, context) {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      console.log('-------onButtonClicked--------start----------->>>>>')

      //1.init
      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080
      }
      waterfall.value?.init(waterfallData)

      //
      let sectionList: Array<QTWaterfallSection> = []

      //1.
      let section_1: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
        titleStyle: {
          width: 0,
          height: 0,
          fontSize: 50
        },
        itemList: buildLinePosterItemList(),
        style: {
          width: 1920,
          height: 400 + 60 + 36,
          spacing: 30
        }
      }
      sectionList.push(section_1)

      //2.
      let sectionBlank: QTWaterfallSection = {
        _id: '2',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_BLANK,
        itemList: [],
        style: {
          width: 1920,
          height: 200,
        }
      }
      sectionList.push(sectionBlank)

      //3.
      let section_2: QTWaterfallSection = {
        _id: '3',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
        titleStyle: {
          width: 0,
          height: 0,
        },
        itemList: buildLinePosterItemList(),
        style: {
          width: 1920,
          height: 400 + 60 + 36,
          spacing: 30
        }
      }
      sectionList.push(section_2)

      //2.setSectionList
      console.log('-------onButtonClicked--------end----------->>>>>')
      waterfall.value?.setSectionList(sectionList)
    }

    return {
      waterfall,
      onESCreate,
    }
  },
});

</script>

<style>
.qt-waterfall-css {
  width: 1920px;
  height: 1080px;
}
</style>
