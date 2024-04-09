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
import {buildCardItemList} from "../__mocks__/card";

export default defineComponent({
  name: 'CardItem',
  setup(props, context) {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      //1.init
      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080
      }
      waterfall.value?.init(waterfallData)

      //
      let sectionList: Array<QTWaterfallSection> = []
      let section: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
        title: 'CardItem板块:',
        titleStyle: {
          width: 1920,
          height: 60,
          marginLeft: 90,
          marginTop: 40,
          marginBottom: 40,
          fontSize: 50
        },
        itemList: buildCardItemList(),
        style: {
          width: 1920,
          height: -1,
        }
      }
      sectionList.push(section)
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
  height: 850px;
}
</style>
