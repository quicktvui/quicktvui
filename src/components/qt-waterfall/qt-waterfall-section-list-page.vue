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
import {buildPosterItemList} from "../__mocks__/poster";
import {
  QTWaterfall,
  QTIWaterfall,
  QTWaterfallSection,
  QTWaterfallSectionType
} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'ListSection',
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

      let section: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_LIST,
        title: '板块',
        titleStyle: {
          width: 1920,
          height: 60,
          marginLeft: 90,
          marginBottom: 40,
          fontSize: 50
        },
        decoration: {
          top: 100
        },
        style: {
          width: 1920,
          height: 500,
          spacing: 20,
          gradientBackground: {
            type: 0,
            shape: 0,
            colors: ['#40b883', '#4068b8'],
          }
        },
        itemList: buildPosterItemList('1')
      }

      let sectionList: Array<QTWaterfallSection> = [
        section,
      ]

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
