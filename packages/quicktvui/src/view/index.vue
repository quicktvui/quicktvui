<template>
  <div :clipChildren="false" ref="viewRef">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import useBaseView from '../base/useBaseView'

export default defineComponent({
  name: 'qt-view',
  emits: ['clearFocus'],
  setup(props, context) {
    const viewRef = ref()

    return {
      viewRef,
      ...useBaseView(viewRef),
    }
  },
})
</script>
