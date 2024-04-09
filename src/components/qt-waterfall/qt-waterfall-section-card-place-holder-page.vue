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
  QTWaterfallSectionType,
  QTWaterfallCardSection
} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'CardSectionPlaceHolder',
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
      let sectionList: Array<QTWaterfallCardSection> = []
      for (let i = 0; i < 2; i++) {
        let section: QTWaterfallCardSection = {
          _id: '' + i,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_CARD,
          title: 'Card板块',
          titleStyle: {
            width: 1920,
            height: 60,
            marginLeft: 90,
            marginTop: 40,
            marginBottom: 40,
            fontSize: 50
          },
          itemList: [],
          cardId: '1717748409857474561',
          cardPlaceHolder: {
            enable: true,//是否可用
            radius: 100,//圆角
            rect: [100, 0, 100, 0],
            focusable: true,
            focusScale: 1.2
          },
          cardStyle: {
            width: 1920,
            height: 400,
          },
          style: {
            width: 1920,
            height: 540,
          },
          decoration: {
            top: 40,
            bottom: 40
          }
        }
        sectionList.push(section)
      }

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
