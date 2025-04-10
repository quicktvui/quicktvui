<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px">
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="平移"
          size="medium"
          class="text-button-class"
          @onButtonClicked="translate"
        />
        <s-text-button
          text="旋转"
          size="medium"
          class="text-button-class"
          @onButtonClicked="rotate"
        />
        <s-text-button
          text="缩放"
          size="medium"
          class="text-button-class"
          @onButtonClicked="scale"
        />
        <s-text-button
          text="变形"
          size="medium"
          class="text-button-class"
          @onButtonClicked="transform"
        />
      </div>
      <qt-text text="平移旋转缩放变形" class="es_canvas1_title"></qt-text>
      <qt-canvas-view ref="canvasView1" class="canvas-view-class" />
    </div>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
// import { QTIListView, QTListViewItem, QTPoster, qtRef } from '@quicktvui/quicktvui3'
import { QTICanvasView } from '../../../packages'

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup(props, context) {
    const canvasView1 = ref<QTICanvasView>()

    const onESCreate = (params) => {
      //动画变形
      canvasView1.value?.fillStyle('#00E5EE')
      canvasView1.value?.fillRect(10, 10, 200, 200)
      canvasView1.value?.drawAction('动画变形')
    }

    function translate() {
      // 清除画布
      canvasView1.value?.clearRect(0, 0, 0, 0)
      canvasView1.value?.fillStyle('#00E5EE')
      canvasView1.value?.translate(50, 50)
      canvasView1.value?.fillRect(0, 0, 200, 200)
      // reset current transformation matrix to the identity matrix
      canvasView1.value?.setTransform(1, 0, 0, 1, 0, 0)
      canvasView1.value?.drawAction('平移')
    }

    function rotate() {
      // 清除画布
      canvasView1.value?.clearRect(0, 0, 0, 0)
      canvasView1.value?.fillStyle('#00E5EE')
      canvasView1.value?.rotate((5 * Math.PI) / 180)
      canvasView1.value?.fillRect(50, 50, 200, 200)
      canvasView1.value?.drawAction('')
    }

    function scale() {
      // 清除画布
      canvasView1.value?.clearRect(0, 0, 0, 0)
      canvasView1.value?.fillStyle('#00E5EE')
      canvasView1.value?.fillRect(0, 0, 200, 200)
      canvasView1.value?.scale(1.5, 1.5)
      canvasView1.value?.fillRect(0, 0, 200, 200)
      canvasView1.value?.drawAction('')
    }

    function transform() {
      // 清除画布
      canvasView1.value?.clearRect(0, 0, 0, 0)
      canvasView1.value?.fillStyle('#FFE4B5')
      canvasView1.value?.fillRect(0, 0, 250, 100)

      canvasView1.value?.transform(1, 0.5, -0.5, 1, 30, 10)
      canvasView1.value?.fillStyle('#FF0000')
      canvasView1.value?.fillRect(0, 0, 250, 100)

      canvasView1.value?.transform(1, 0.5, -0.5, 1, 30, 10)
      canvasView1.value?.fillStyle('#0000FF')
      canvasView1.value?.fillRect(0, 0, 250, 100)
      canvasView1.value?.drawAction('')
    }

    return {
      canvasView1,
      onESCreate,
      translate,
      rotate,
      scale,
      transform,
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
  width: 400px;
  height: 400px;
  background-color: transparent;
}

.canvas-view-class {
  width: 400px;
  height: 400px;
  background-color: transparent;
}

.canvas-view-large-class {
  width: 800px;
  height: 600px;
  background-color: transparent;
}

.es_canvas1_title {
  width: 500px;
  height: 100px;
  font-size: 46px;
  margin-top: 0px;
  margin-left: 0px;
  font-weight: 500;
  text-align: center;
  color: white;
  background-color: transparent;
}

.text-button-class {
  /*width: 400px;*/
  /*height: 150px;*/
  margin: 20px;
  /*border-radius: 20px;*/
}
</style>
