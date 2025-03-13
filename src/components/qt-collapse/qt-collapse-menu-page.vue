<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-collapse
      ref="collapseRef"
      @onCollapseItemExpand="onCollapseItemExpand"
      class="qt-collapse-root-css"
    >
      <qt-collapse-menu-item-one />
      <qt-collapse-menu-item-two />
      <qt-collapse-menu-item-three />
      <qt-collapse-menu-item-four />
      <qt-collapse-menu-item-five />
    </qt-collapse>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'

import QTCollapseMenuItemOne from './menu/qt-collapse-menu-item-one.vue'
import QTCollapseMenuItemTwo from './menu/qt-collapse-menu-item-two.vue'
import QTCollapseMenuItemThree from './menu/qt-collapse-menu-item-three.vue'
import QTCollapseMenuItemFour from './menu/qt-collapse-menu-item-four.vue'
import QTCollapseMenuItemFive from './menu/qt-collapse-menu-item-five.vue'

import { ESKeyCode, ESKeyEvent, ESLogLevel, useESLog } from '@extscreen/es3-core'
import { QTCollapse, QTCollapseItem, QTICollapse } from '@quicktvui/quicktvui3'

const TAG = 'QTCollapsePage'

export default defineComponent({
  name: '菜单示例',
  emits: [],
  components: {
    'qt-collapse-menu-item-one': QTCollapseMenuItemOne,
    'qt-collapse-menu-item-two': QTCollapseMenuItemTwo,
    'qt-collapse-menu-item-three': QTCollapseMenuItemThree,
    'qt-collapse-menu-item-four': QTCollapseMenuItemFour,
    'qt-collapse-menu-item-five': QTCollapseMenuItemFive,
  },
  setup(props, context) {
    const collapseRef = ref<QTICollapse>()
    const log = useESLog()

    let menuIndex = -1

    function onESCreate() {
      const collapse: QTCollapse = {
        width: 1920,
        height: 800,
        defaultIndex: 0, //默认0
        expandDuration: 200, //默认200
        itemList: [
          {
            height: 200,
            collapseHeight: 150,
          },
          {
            height: 200,
            collapseHeight: 150,
          },
          {
            height: 200,
            collapseHeight: 150,
          },
          {
            height: 200,
            collapseHeight: 150,
          },
        ],
      }
      collapseRef.value?.init(collapse)
    }

    function onCollapseItemExpand(index: number, item: QTCollapseItem) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onCollapseItemExpand------->>>>', item, index)
      }
    }

    function onKeyDown(keyEvent: ESKeyEvent) {
      if (keyEvent.keyCode == ESKeyCode.ES_KEYCODE_DPAD_DOWN) {
        menuIndex++
        if (menuIndex > 4) {
          menuIndex = 4
        }
        collapseRef.value?.expandItem(menuIndex)
      } else if (keyEvent.keyCode == ESKeyCode.ES_KEYCODE_DPAD_UP) {
        menuIndex--
        if (menuIndex < 0) {
          menuIndex = 0
        }
        collapseRef.value?.expandItem(menuIndex)
      }
    }

    function onKeyUp(keyEvent: ESKeyEvent) {}

    return {
      collapseRef,
      onESCreate,
      onCollapseItemExpand,
      onKeyDown,
      onKeyUp,
    }
  },
})
</script>

<style>
.qt-collapse-root-css {
  width: 1920px;
  height: 800px;
  position: absolute;
  bottom: 0px;
}
</style>
