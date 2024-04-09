<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-waterfall
      ref="waterfall"
      @onItemClick="onItemClick"
      @onItemFocused="onItemFocused"
      class="qt-waterfall-css"/>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallItem,
  QTWaterfallItemType,
  QTWaterfallSection,
  QTWaterfallSectionType,
  QTWaterfallTabItem
} from "@quicktvui/quicktvui3";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";

const TAG = 'TabSectionPage'

export default defineComponent({
  name: 'TabSection',
  setup(props, context) {
    const log = useESLog()
    const waterfall = ref<QTIWaterfall>()

    function onESCreate() {
      //1.init
      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 1080
      }
      waterfall.value?.init(waterfallData)

      const tabItemList = []

      //------------------------------TAB----------------------------------
      for (let i = 0; i < 15; i++) {
        let tabItem: QTWaterfallTabItem = {
          _id: '' + i,
          style: {
            width: 200,
            height: 50,
            paddingLeft: 40,
            paddingRight: 40
          },
          type: QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_TAB,
          text: 'Tab:' + i,
        }
        tabItemList.push(tabItem)
      }

      let tabSection: QTWaterfallSection = {
        _id: '1',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_TAB,
        title: 'Tab板块',
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
        itemList: tabItemList
      }

      let sectionList: Array<QTWaterfallSection> = [
        tabSection,
      ]

      waterfall.value?.setSectionList(sectionList)
    }

    //-----------------------------------------------------
    function onItemClick(sectionIndex: number, position: number, item: QTWaterfallItem) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onItemClick-------------->>>',
          item,
          'sectionIndex:' + sectionIndex + "  " +
          'position:' + position + "  " +
          'item:', item
        )
      }
      if (item.type === QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_TAB) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '-----onItemClick---点击了tab item------>>>' +
            "  sectionIndex:" + sectionIndex +
            "  position:" + position +
            "  item:", item
          )
        }
      }
    }

    function onItemFocused(sectionIndex: number, position: number, isFocused: boolean, item: QTWaterfallItem) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onItemFocused-------------->>>',
          item,
          'sectionIndex:' + sectionIndex + "  " +
          'position:' + position + "  " +
          'isFocused:' + isFocused + "  "
        )
      }

      if (item.type === QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_TAB) {
        if (isFocused) {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(TAG, '----------onItemFocused---获得焦点----------->>>')
          }
        }
      }
    }

    return {
      waterfall,
      onESCreate,
      onItemFocused,
      onItemClick
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
