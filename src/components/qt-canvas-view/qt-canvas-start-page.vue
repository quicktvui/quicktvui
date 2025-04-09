<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="quick-canvas-view">
      <qt-canvas-view ref="canvasViewRef" class="canvas-view-class"> </qt-canvas-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
// import { QTIListView, QTListViewItem, QTPoster, qtRef } from '@quicktvui/quicktvui3'
import { useESToast } from '@extscreen/es3-core'
import { QTICanvasView } from '../../../packages'

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    const canvasViewRef = ref<QTICanvasView>()
    let toast = useESToast()

    const onESCreate = (params) => {
      canvasViewRef.value?.fillStyle('#ff0000')
      canvasViewRef.value?.fillRect(0, 0, 300, 300)
      canvasViewRef.value?.drawAction('绘制矩形') //afafaf  00ccff
    }

    return {
      canvasViewRef,
      onESCreate,
    }
  },
})
</script>

<style scoped>
.quick-canvas-view {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
}

.quick-canvas-view {
  width: 300px;
  height: 300px;
  background-color: transparent;
}

.canvas-view-class {
  width: 300px;
  height: 300px;
  background-color: transparent;
}
</style>
