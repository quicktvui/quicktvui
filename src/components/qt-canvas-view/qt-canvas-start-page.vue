<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="quick-canvas-view">
      <qt-view class="es-sdk-content-column-css">
        <qt-text text="绘制矩形" class="es_canvas1_title" />
        <qt-canvas-view ref="canvasViewRef1" class="canvas-view-class" />
      </qt-view>

      <qt-view class="es-sdk-content-column-css">
        <qt-text text="绘制层叠矩形" class="es_canvas1_title" />

        <qt-canvas-view ref="canvasViewRef2" class="canvas-view-class" />
      </qt-view>

      <qt-view class="es-sdk-content-column-css">
        <qt-text text="绘制文字" class="es_canvas1_title" />
        <qt-canvas-view ref="canvasViewRef3" class="canvas-view-class" />
      </qt-view>

      <qt-view class="es-sdk-content-column-css">
        <qt-text text="绘制文字" class="es_canvas1_title" />
        <qt-canvas-view ref="canvasViewRef4" class="canvas-view-class" />
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
  setup(props, context) {
    const canvasViewRef1 = ref<QTICanvasView>()
    const canvasViewRef2 = ref<QTICanvasView>()
    const canvasViewRef3 = ref<QTICanvasView>()
    const canvasViewRef4 = ref<QTICanvasView>()
    let toast = useESToast()

    const onESCreate = (params) => {
      //------------------绘制矩形1----------------
      canvasViewRef1.value?.fillStyle('#ff0000')
      canvasViewRef1.value?.fillRect(0, 0, 300, 300)
      canvasViewRef1.value?.drawAction('绘制矩形') //afafaf  00ccff

      //------------------绘制矩形2----------------
      canvasViewRef2.value?.fillStyle('#00ccff')
      canvasViewRef2.value?.fillRect(50, 50, 300, 300)
      canvasViewRef2.value?.fillStyle('#afafaf')
      canvasViewRef2.value?.fillRect(30, 30, 200, 200)
      canvasViewRef2.value?.drawAction('绘制两个矩形')

      //------------------绘制文字1----------------
      canvasViewRef3.value?.textAlign('top')
      canvasViewRef3.value?.font('30px')
      canvasViewRef3.value?.fillText('hello World', 10, 100)
      canvasViewRef3.value?.drawAction('done')

      //------------------绘制文字2----------------
      canvasViewRef4.value?.textBaseline('top')
      canvasViewRef4.value?.font('30px')
      canvasViewRef4.value?.strokeText('你好top', 10, 50)
      canvasViewRef4.value?.textBaseline('middle')
      canvasViewRef4.value?.font('30px')
      canvasViewRef4.value?.strokeText('你好middle', 10, 100)
      canvasViewRef4.value?.textBaseline('bottom')
      canvasViewRef4.value?.font('30px')
      canvasViewRef4.value?.strokeText('你好bottom', 10, 150)
      canvasViewRef4.value?.drawAction('第二种绘制')
    }

    return {
      canvasViewRef1,
      canvasViewRef2,
      canvasViewRef3,
      canvasViewRef4,
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
