<template>
  <tv-item
    ref="viewRef"
    class="qt-ui-waterfall-vue-section"
    :clipChildren="false"
    :clipPadding="false"
    flexStyle="${style}"
    singleton
    @item-bind="onSectionBind"
  >
    <slot />
  </tv-item>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import useBaseView from '../base/useBaseView'

export default defineComponent({
  name: 'qt-vue-section',
  setup(props, context) {
    const viewRef = ref()

    function onSectionBind() {}

    return {
      onSectionBind,
      viewRef,
      ...useBaseView(viewRef),
    }
  },
})
</script>

<style scoped>
.qt-ui-waterfall-vue-section {
  background-color: transparent;
}
</style>
