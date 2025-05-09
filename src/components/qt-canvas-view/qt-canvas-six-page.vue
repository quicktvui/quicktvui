<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px">
      <div class="es-sdk-content-row-css">
        <s-text-button
          text="点击切换"
          size="medium"
          class="text-button-class"
          @onButtonClicked="changeGlobalCompositeOperation"
        />
      </div>
      <qt-text text="层叠" class="es_canvas1_title"></qt-text>
      <qt-canvas-view ref="canvasView1" class="canvas-view-class" />
    </div>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { QTICanvasView } from '@quicktvui/quicktvui3'
export default defineComponent({
  name: '使用初探',
  emits: [],
  setup(props, context) {
    const canvasView1 = ref<QTICanvasView>()
    let globalCompositeOperation = ''

    const onESCreate = (params) => {
      // 清除画布
      canvasView1.value?.clearRect(0, 0, 320, 320) // 正常绘制第一个矩形
      canvasView1.value?.fillStyle('#00E5EE')
      canvasView1.value?.fillRect(10, 10, 200, 200) // 设置canvas的合成类型
      canvasView1.value?.globalCompositeOperation('xor') // 绘制第二个矩形
      canvasView1.value?.fillStyle('rgba(255, 0, 0, 0.5)')
      canvasView1.value?.fillRect(110, 110, 200, 200)
      canvasView1.value?.drawAction('合成')
    }

    const changeGlobalCompositeOperation = () => {
      let globalCompositeOperationArr = [
        'source-over',
        'source-atop',
        'source-in',
        'source-out',
        'destination-over',
        'destination-atop',
        'destination-in',
        'destination-out',
        'lighter',
        'copy',
        'xor',
      ]

      const index = globalCompositeOperationArr.indexOf(globalCompositeOperation)
      if (index < globalCompositeOperationArr.length - 1) {
        console.log('当前index=============' + index)
        globalCompositeOperation = globalCompositeOperationArr[index + 1]
      } else {
        console.log('当前index 归0=============' + index)
        globalCompositeOperation = globalCompositeOperationArr[0]
      }
      let str = globalCompositeOperation
      // 清除画布
      canvasView1.value?.clearRect(0, 0, 320, 320) // 正常绘制第一个矩形
      canvasView1.value?.fillStyle('#00E5EE')
      canvasView1.value?.fillRect(10, 10, 200, 200) // 设置canvas的合成类型
      canvasView1.value?.globalCompositeOperation(str) // 绘制第二个矩形
      canvasView1.value?.fillStyle('rgba(255, 0, 0, 0.5)')
      canvasView1.value?.fillRect(110, 110, 200, 200)
      canvasView1.value?.drawAction('层级变换')
    }

    return {
      canvasView1,
      onESCreate,
      changeGlobalCompositeOperation,
      globalCompositeOperation,
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
