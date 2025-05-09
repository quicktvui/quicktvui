<template>
  <tv-item
    class="qt-ui-waterfall-vue-section"
    :type="1007"
    keyName="_id"
    :blockFocusDirections="blockFocusDirections"
    :clipChildren="false"
    :clipPadding="false"
    focusScrollTarget="${isFocusScrollTarget==true}"
    flexStyle="${style}"
    scrollOverride="${scrollOverride}"
    singleton
    @item-bind="onSectionBind"
  >
    <slot />
  </tv-item>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'vue-section',
  props: {
    blockFocusDirections: {
      type: Array,
      default: () => ['left', 'right'],
    },
  },
  setup(props, context) {
    function onSectionBind() {}

    return {
      onSectionBind,
    }
  },
})
</script>

<style scoped>
.qt-ui-waterfall-vue-section {
  background-color: transparent;
}
</style>
