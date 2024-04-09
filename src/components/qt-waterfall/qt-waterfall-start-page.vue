<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-waterfall
      ref="waterfall"
      :custom-pool="myItemPool"
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
import {buildPosterItemList} from "../__mocks__/poster";

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    const waterfall = ref<QTIWaterfall>()
    const myItemPool = {
      name:'myGlobalPool',
      size:{
        1:100,
      }
    }
    function onESCreate() {
      //1.init
      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080
      }
      waterfall.value?.setAutoFocus('0_2', 500)
      waterfall.value?.init(waterfallData)

      //
      let sectionList: Array<QTWaterfallSection> = []
      for (let i = 0; i < 2; i++) {
        let section: QTWaterfallSection = {
          _id: '' + i,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
          title: '板块:' + i,
          titleStyle: {
            // width: 1920,
            // height: 60,
            marginLeft: 90,
            marginTop: 40,
            marginBottom: 40,
            fontSize: 40
          },
          itemList: buildPosterItemList(i + ""),
          style: {
            width: 1920,
            height: -1,
          }
        }
        sectionList.push(section)
      }

      //2.setSectionList
      waterfall.value?.setSectionList(sectionList)
    }

    return {
      waterfall,
      myItemPool,
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
