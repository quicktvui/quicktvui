<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-waterfall
      ref="waterfall"
      @onScroll="onScroll"
      @onItemClick="onItemClick"
      @onItemFocused="onItemFocused"
      @onItemBind="onItemBind"
      @onScrollStateChanged="onScrollStateChanged"
      @onItemAttached="onItemAttached"
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
  QTIWaterfall, QTScrollState,
  QTWaterfall, QTWaterfallItem,
  QTWaterfallSection,
  QTWaterfallSectionType
} from "@quicktvui/quicktvui3";
import text_item from "./item/text-item.vue";
import {useESLog} from "@extscreen/es3-core";

const TAG = 'QTWaterfallEvent'

export default defineComponent({
  name: '瀑布流事件',
  components: {
    'text-item': text_item
  },
  setup(props, context) {
    const waterfall = ref<QTIWaterfall>()
    const log = useESLog()

    function onScroll(offsetX: number, scrollY: number) {
      log.d(TAG, '-------onScroll-------->>>>' +
        " offsetX:" + offsetX +
        " scrollY:" + scrollY
      )
    }

    function onItemClick(sectionIndex: number, position: number, item: QTWaterfallItem) {
      log.d(TAG, '-------onItemClick-------->>>>' +
        " sectionIndex:" + sectionIndex +
        " position:" + position +
        " item:", item
      )
    }

    function onItemFocused(sectionIndex: number, position: number, isFocused: boolean, item: QTWaterfallItem) {
      log.d(TAG, '-------onItemFocused-------->>>>' +
        " sectionIndex:" + sectionIndex +
        " position:" + position +
        " isFocused:" + isFocused +
        " item:", item
      )
    }

    function onItemBind(position: number) {
      log.d(TAG, '-------onItemBind-------->>>>' +
        " position:" + position
      )
    }

    function onItemAttached(position: number) {
      log.d(TAG, '-------onItemAttached-------->>>>' +
        " position:" + position
      )
    }

    function onScrollStateChanged(offsetX: number, scrollY: number, newState: QTScrollState) {
      log.d(TAG, '-------onScrollStateChanged-------->>>>' +
        " offsetX:" + offsetX +
        " scrollY:" + scrollY +
        " newState:" + newState
      )
    }

    //-------------------------------------------------------------------------------

    function onESCreate(params) {
      //1.init
      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080
      }
      waterfall.value?.init(waterfallData)

      //
      let sectionList: Array<QTWaterfallSection> = []
      for (let i = 0; i < 2; i++) {
        let itemList: Array<QTWaterfallItem> = []
        for (let k = 0; k < 2; k++) {
          const item: QTWaterfallItem = {
            _id: i + '_' + k,
            type: 1,
            style: {
              width: 500,
              height: 200,
            },
          }
          itemList.push(item)
        }

        let section: QTWaterfallSection = {
          _id: i + '',
          type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
          title: '板块',
          itemList: itemList,

          style: {
            width: 1920,
            height: 200,
          }
        }
        sectionList.push(section)
      }

      //2.setSectionList
      console.log('-------onButtonClicked--------end----------->>>>>')
      waterfall.value?.setSectionList(sectionList)
    }

    return {
      waterfall,
      onESCreate,
      onScroll,
      onItemClick,
      onItemFocused,
      onItemBind,
      onItemAttached,
      onScrollStateChanged,
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
