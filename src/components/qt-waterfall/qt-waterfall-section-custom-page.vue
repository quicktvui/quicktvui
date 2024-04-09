<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-waterfall
      ref="waterfall"
      class="qt-waterfall-css">

      <template v-slot:section>
        <text-section :type="1"/>
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

import text_section from './section/text-section'

export default defineComponent({
  name: '自定义瀑布流Section',
  components: {
    'text-section': text_section
  },
  setup(props, context) {
    const waterfall = ref<QTIWaterfall>()

    function onESCreate(params) {
      //1.init
      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080
      }
      waterfall.value?.init(waterfallData)

      let section: QTWaterfallSection = {
        _id: '1',
        type: 1,
        itemList: [],
        style: {
          width: 1920,
          height: 320,
        }
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
