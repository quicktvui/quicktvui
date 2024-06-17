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
  QTWaterfallPluginSection
} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'PluginSection',
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
      let sectionList: Array<QTWaterfallPluginSection> = []
      for (let i = 0; i < 2; i++) {
        let section: QTWaterfallPluginSection = {
          _id: '' + i,
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_PLUGIN,
          title: 'Plugin板块',
          titleStyle: {
            width: 1920,
            height: 60,
            marginLeft: 90,
            marginTop: 40,
            marginBottom: 40,
            fontSize: 50
          },
          itemList: [],
          pluginKey: 'plugin-hello',
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
