<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-waterfall
      ref="waterfall"
      class="qt-waterfall-css">

      <template v-slot:item>
        <text-item :type="1"/>
      </template>

    </qt-waterfall>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTIWaterfall,
  QTWaterfall, QTWaterfallItem,
  QTWaterfallSection,
  QTWaterfallSectionType
} from "@quicktvui/quicktvui3";
import text_item from "./item/text-item.vue";

export default defineComponent({
  name: '自定义Item',
  components: {
    'text-item': text_item
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

      let itemList: Array<QTWaterfallItem> = []
      for (let i = 0; i < 2; i++) {
        const item: QTWaterfallItem = {
          _id: i + '',
          type: 1,
          style: {
            width: 500,
            height: 200,
          },
        }
        itemList.push(item)
      }

      let section: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
        title: '板块',
        itemList: itemList,
        style: {
          width: 1920,
          height: 200,
          spacing: 20
        }
      }

      let sectionList: Array<QTWaterfallSection> = [
        section,
        section,
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
