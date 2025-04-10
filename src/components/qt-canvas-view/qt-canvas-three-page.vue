<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="quick-canvas-view">
      <qt-view class="es-sdk-content-column-css">
        <qt-text text="绘制蚂蚁线" class="es_canvas1_title" />
        <qt-canvas-view ref="canvasViewRef1" class="canvas-view-class" />
      </qt-view>

      <qt-view class="es-sdk-content-column-css">
        <qt-text text="动画效果进度条" class="es_canvas1_title" />

        <qt-canvas-view ref="canvasViewRef2" class="canvas-view-class" />
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
    let toast = useESToast()
    let processInterval = 0
    let processInterval2 = 0

    const onESCreate = (params) => {
      //------------------进度条------------------------------------
      canvasViewRef1.value?.lineWidth(20) //宽度
      let degree = 360
      processInterval = setInterval(function () {
        canvasViewRef1.value?.clearRect(0, 0, 400, 400) //擦掉，重新绘制
        //用设计的底色圆环
        canvasViewRef1.value?.strokeStyle('#54FF9F') //BEBEBE  54FF9F
        canvasViewRef1.value?.lineWidth(20) //宽度
        canvasViewRef1.value?.beginPath()
        canvasViewRef1.value?.arc(150, 200, 100, 0, 2 * Math.PI) //画圆
        canvasViewRef1.value?.stroke()
        //第二个圆环
        if (degree >= 0) {
          canvasViewRef1.value?.strokeStyle('#BEBEBE') //描边底色
          canvasViewRef1.value?.lineWidth(20) //宽度
          canvasViewRef1.value?.beginPath()
          canvasViewRef1.value?.arc(
            150,
            200,
            100,
            (3 * Math.PI) / 2,
            (degree / 360) * Math.PI * 2 - Math.PI / 2
          )
          canvasViewRef1.value?.stroke()
          degree -= 3
        } else {
          //循环加载
          degree = 360
          //一次加载完毕
          if (this.processInterval) {
            clearInterval(this.processInterval) //结束循环
          }
          canvasViewRef1.value?.clearRect(0, 0, 400, 400)
        }
        canvasViewRef1.value?.drawAction('进度条')
      }, 200)

      //------------------绘制边界----------------
      let offset = 0
      canvasViewRef2.value?.lineWidth(2)
      processInterval2 = setInterval(() => {
        offset++
        if (offset > 16) {
          offset = 0
        }
        canvasViewRef2.value?.clearRect(0, 0, 400, 400)
        canvasViewRef2.value?.lineDashOffset(-offset)
        canvasViewRef2.value?.setLineDash(8, 4)
        canvasViewRef2.value?.strokeRect(10, 10, 280, 280)
        canvasViewRef2.value?.drawAction('蚂蚁线')
      }, 1000)
    }

    return {
      canvasViewRef1,
      canvasViewRef2,
      onESCreate,
      processInterval,
      processInterval2,
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
