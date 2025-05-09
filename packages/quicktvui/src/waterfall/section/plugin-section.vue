<template>
  <div
    :type="1008"
    class="qt-ui-plugin-section-root-css"
    :clipChildren="false"
    :clipPadding="false"
    :focusable="true"
    focusScale="1.1"
    focusScrollTarget="${isFocusScrollTarget==true}"
    keyName="_id"
    flexStyle="${style}"
    scrollOverride="${scrollOverride}"
    gradientBackground="${style.gradientBackground}"
    :bringFocusChildToFront="true"
    :useAdvancedFocusSearch="true"
  >
    <text-view
      class="qt-ui-plugin-section-title-text-css"
      :postDelay="300"
      autoWidth
      autoHeight
      typeface="${titleTypeface}"
      flexStyle="${titleStyle}"
      :focusable="false"
      textSize="${titleStyle.fontSize}"
      text="${title}"
    />

    <qt-plugin-view
      class="qt-ui-plugin-section-css"
      :clipChildren="false"
      :clipPadding="false"
      eventClick
      eventFocus
      sid="${_id}"
      pluginKey="${pluginKey}"
      flexStyle="${pluginStyle}"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useESLog } from '@extscreen/es3-core'

export default defineComponent({
  name: 'qt-plugin-section',
  emits: ['focus'],
  props: {
    pluginKey: {
      type: String,
      default: '',
    },
  },
  setup(props, context) {
    const log = useESLog()

    function onFocus(e) {
      context.emit('focus', e)
    }

    return {
      onFocus,
    }
  },
})
</script>

<style scoped>
.qt-ui-plugin-section-root-css {
  display: flex;
  background-color: transparent;
}

.qt-ui-plugin-section-css {
  display: flex;
  background-color: #40b883;
}

.qt-ui-plugin-section-title-text-css {
  /*width: 1920px;*/
  /*height: 60px;*/
  color: #ffffff;
  background-color: red;
}
</style>
