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
import {buildPosterDecorationItemList} from "../__mocks__/poster";

export default defineComponent({
  name: 'SectionDecoration',
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
      for (let i = 0; i < 2; i++) {
        let section: QTWaterfallSection = {
          _id: '' + i,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
          itemList: buildPosterDecorationItemList(),
          title: 'Section',
          titleStyle: {
            width: 1920,
            height: 60,
            marginLeft: 90,
            marginTop: 40,
            marginBottom: 40,
            fontSize: 50
          },
          style: {
            width: 1920,
            height: -1,
          },
          //
          decoration: {
            top: 10,
            bottom: 300
          }
        }
        sectionList.push(section)
      }
      //2.setSectionList
      waterfall.value?.setSectionList(sectionList)

      console.log('------------END--------->>>>>', sectionList)
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
