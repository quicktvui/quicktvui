<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="quick-canvas-view">
      <qt-view class="es-sdk-content-column-css">
        <qt-text text="渐变" class="es_canvas1_title" />
        <qt-canvas-view ref="canvasViewRef1" class="canvas-view-class" />
      </qt-view>
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
  emits: [],
  setup(props, context) {
    const canvasViewRef1 = ref<QTICanvasView>()
    let toast = useESToast()

    const onESCreate = (params) => {
      //------------------绘制渐变----------------
      //渐变
      canvasViewRef1.value?.shadowOffsetY(60)
      canvasViewRef1.value?.shadowColor('#000000')
      canvasViewRef1.value?.shadowBlur(10)
      canvasViewRef1.value?.fillStyle('rgba(255,0,0,0.5)')
      canvasViewRef1.value?.globalAlpha(0.5)
      canvasViewRef1.value?.fillRect(0, 0, 200, 200)
      canvasViewRef1.value?.drawAction('')
    }

    return {
      canvasViewRef1,
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
  flex-direction: row;
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

.es_canvas1_title {
  width: 340px;
  height: 100px;
  font-size: 46px;
  margin-top: 0px;
  margin-left: 0px;
  font-weight: 500;
  text-align: center;
  color: white;
  background-color: transparent;
}
</style>
