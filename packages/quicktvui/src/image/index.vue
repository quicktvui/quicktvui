<template>
  <img src="" alt="" :clipChildren="false" ref="viewRef" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import useBaseView from '../base/useBaseView'
import { Native } from '@extscreen/es3-vue'
import { QTImageResizeMode } from './QTImageResizeMode'

export default defineComponent({
  name: 'qt-image',
  setup(props, context) {
    const viewRef = ref()

    function setSrc(url: string): void {
      Native.callUIFunction(viewRef.value, 'setSrc', [url])
    }

    function resizeMode(mode: QTImageResizeMode): void {
      Native.callUIFunction(viewRef.value, 'resizeMode', [mode])
    }

    return {
      viewRef,
      setSrc,
      resizeMode,
      ...useBaseView(viewRef),
    }
  },
})
</script>
