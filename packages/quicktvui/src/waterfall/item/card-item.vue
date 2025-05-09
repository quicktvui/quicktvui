<template>
  <es-card-container
    keyName="_id"
    :clipChildren="false"
    :clipPadding="false"
    :autoRecycle="true"
    disablePlaceholder
    layout="${layout}"
    flexStyle="${style}"
    cardId="${cardId}"
    focusScale="${cardPlaceHolder.focusScale}"
    focusable="${cardPlaceHolder.focusable}"
    showPlaceHolder="${cardPlaceHolder.enable}"
    placeHolderRadius="${cardPlaceHolder.radius}"
    placeHolderRect="${cardPlaceHolder.rect}"
    :type="10003"
    @focus="onFocus"
    class="qt-ui-waterfall-card-item"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'

export default defineComponent({
  name: 'card-item',
  setup(props, context) {
    const log = useESLog()

    function onFocus(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d('card-item', '------onFocus--------->>>>', e)
      }
      context.emit('focus', e)
    }

    return {
      onFocus,
    }
  },
})
</script>

<style scoped>
.qt-ui-waterfall-card-item {
  background-color: transparent;
}
</style>
