<template>
  <qt-column class="qt-collapse-menu-item-root" :focusable="false">
    <qt-row class="qt-collapse-menu-item-title-root">
      <span class="qt-collapse-menu-item-title">画面</span>
    </qt-row>
    <div class="qt-collapse-menu-item-content">
      <qt-button text="4:3" class="qt-collapse-menu-item-button" />
      <qt-button text="16:9" class="qt-collapse-menu-item-button" />
      <qt-button text="等比全屏" class="qt-collapse-menu-item-button" />
      <qt-button text="全屏" class="qt-collapse-menu-item-button" />
    </div>
  </qt-column>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'

const TAG = 'QTCollapseItem'

export default defineComponent({
  name: 'qt-collapse-menu-item-five',
  emits: ['onCollapseItemGreenExpand'],
  setup(props, context) {
    const log = useESLog()

    function onCollapseItemExpand(value: boolean) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onCollapseItemExpand---绿色---->>>>', value)
      }
      context.emit('onCollapseItemGreenExpand', '绿色')
    }

    return {
      onCollapseItemExpand,
    }
  },
})
</script>

<style scoped>
.qt-collapse-menu-item-root {
  width: 1920px;
  height: 200px;
  background-color: transparent;
}

.qt-collapse-menu-item-title-root {
  height: 50px;
  width: 1920px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
}

.qt-collapse-menu-item-title {
  height: 50px;
  width: 100px;
  font-size: 30px;
  color: white;
  text-align: left;
  margin-left: 90px;
}

.qt-collapse-menu-item-content {
  width: 1920px;
  height: 150px;
  padding-left: 70px;
  padding-right: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.qt-collapse-menu-item-button {
  margin: 20px;
}
</style>
