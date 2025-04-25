<template>
  <div class="es-sdk-root-css" :clipChildren="false" :clipPadding="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-collapse
      ref="collapseRef"
      @onCollapseItemExpand="onCollapseItemExpand"
      class="qt-collapse-root-css"
    >
      <qt-collapse-setup-menu-item-one />
      <qt-collapse-setup-menu-item-two />
      <qt-collapse-setup-menu-item-three />
      <qt-collapse-setup-menu-item-four />
      <qt-collapse-setup-menu-item-five />
    </qt-collapse>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { defineComponent } from '@vue/runtime-core'

import QTCollapseSetupMenuItemOne from './menu/qt-collapse-setup-menu-item-one.vue'
import QTCollapseSetupMenuItemTwo from './menu/qt-collapse-setup-menu-item-two.vue'
import QTCollapseSetupMenuItemThree from './menu/qt-collapse-setup-menu-item-three.vue'
import QTCollapseSetupMenuItemFour from './menu/qt-collapse-setup-menu-item-four.vue'
import QTCollapseSetupMenuItemFive from './menu/qt-collapse-setup-menu-item-five.vue'

import { ESKeyCode, ESKeyEvent, ESLogLevel, useESLog } from '@extscreen/es3-core'
import { QTCollapse, QTCollapseItem, QTICollapse } from '@quicktvui/quicktvui3'

const TAG = 'QTCollapsePage'

export default defineComponent({
  name: '菜单示例 setup',
  emits: [],
  components: {
    'qt-collapse-setup-menu-item-one': QTCollapseSetupMenuItemOne,
    'qt-collapse-setup-menu-item-two': QTCollapseSetupMenuItemTwo,
    'qt-collapse-setup-menu-item-three': QTCollapseSetupMenuItemThree,
    'qt-collapse-setup-menu-item-four': QTCollapseSetupMenuItemFour,
    'qt-collapse-setup-menu-item-five': QTCollapseSetupMenuItemFive,
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
  bottom: 300px;
}
</style>
