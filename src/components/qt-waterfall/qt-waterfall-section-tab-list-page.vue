<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-waterfall
      ref="waterfall"
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
import {buildPosterItemList, buildPosterTitleItemList} from "../__mocks__/poster";

const TAG = 'TabListSectionPage'

export default defineComponent({
  name: 'TabListSection',
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
          _id: '1_' + i,
          style: {
            width: 100,
            height: 50,
          },
          decoration: {
            left: 90,
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
      //------------------------------Item List----------------------------------
      let listSection: QTWaterfallSection = {
        _id: '2',
        type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_LIST,
        titleStyle: {
          width: 0,
          height: 0,
          fontSize: 50
        },
        style: {
          width: 1920,
          height: 400,
        },
        itemList: buildPosterItemList('2')
      }

      let sectionList: Array<QTWaterfallSection> = [
        tabSection,
        listSection
      ]

      waterfall.value?.setSectionList(sectionList)
    }

    //-----------------------------------------------------
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
          const section = waterfall.value?.getSection(1)
          if (section) {
            section.itemList = buildPosterTitleItemList('Tab:' + position)
            waterfall.value?.updateSection(1, section)
          }
        }
      }
    }

    return {
      waterfall,
      onESCreate,
      onItemFocused
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
