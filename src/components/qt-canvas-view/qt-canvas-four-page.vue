<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="quick-canvas-view">
      <div class="es-sdk-content-column-css">
        <qt-text text="绘制线拐点样式" class="es_canvas1_title"></qt-text>
        <qt-canvas-view
          ref="canvasView1"
          class="canvas-view-class"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
        />
      </div>

      <div class="es-sdk-content-column-css">
        <qt-text text="绘制二阶贝塞尔曲线" class="es_canvas1_title"></qt-text>
        <qt-canvas-view
          ref="canvasView2"
          class="canvas-view-class"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
        />
      </div>

      <div class="es-sdk-content-column-css">
        <qt-text text="绘制三阶贝塞尔曲线" class="es_canvas1_title"></qt-text>
        <qt-canvas-view
          ref="canvasView3"
          class="canvas-view-class"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
        />
      </div>

      <div class="es-sdk-content-column-css">
        <qt-text text="绘制其他图形" class="es_canvas1_title"></qt-text>
        <qt-canvas-view
          ref="canvasView4"
          class="canvas-view-large-class"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
        />
      </div>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
// import { QTIListView, QTListViewItem, QTPoster, qtRef } from '@quicktvui/quicktvui3'
import { useESToast } from '@extscreen/es3-core'
import { QTICanvasView } from '../../../packages'
import CanvasGradient from '../../../packages/src/canvas/Gradient'

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup(props, context) {
    const canvasView1 = ref<QTICanvasView>()
    const canvasView2 = ref<QTICanvasView>()
    const canvasView3 = ref<QTICanvasView>()
    const canvasView4 = ref<QTICanvasView>()
    let toast = useESToast()

    const onESCreate = (params) => {
      //------------------拐点样式------------------------------------
      // 绘制第一条直线
      canvasView1.value?.beginPath()
      canvasView1.value?.moveTo(50, 100)
      canvasView1.value?.lineTo(150, 50)
      canvasView1.value?.lineTo(250, 100)
      canvasView1.value?.strokeStyle('#ff0000')
      canvasView1.value?.lineWidth(25)
      // 使用bevel
      canvasView1.value?.lineJoin('bevel')
      canvasView1.value?.stroke()
      // 绘制第二条直线
      canvasView1.value?.beginPath()
      canvasView1.value?.moveTo(50, 200)
      canvasView1.value?.lineTo(150, 150)
      canvasView1.value?.lineTo(250, 200)
      canvasView1.value?.strokeStyle('#00FF7F')
      canvasView1.value?.lineWidth(25)
      // 使用round
      canvasView1.value?.lineJoin('round')
      canvasView1.value?.stroke()
      // 绘制第三条直线
      canvasView1.value?.beginPath()
      canvasView1.value?.moveTo(50, 300)
      canvasView1.value?.lineTo(150, 250)
      canvasView1.value?.lineTo(250, 300)
      canvasView1.value?.strokeStyle('#0000CD')
      canvasView1.value?.lineWidth(25)
      // 使用miter
      canvasView1.value?.lineJoin('miter')
      canvasView1.value?.stroke()
      canvasView1.value?.drawAction('绘制线拐点样式')

      //------------------绘制二阶 三阶贝塞尔曲线------------------------------------
      canvasView2.value?.strokeStyle('rgb(188,219,236)') //描框颜色
      canvasView2.value?.lineWidth(10)
      canvasView2.value?.moveTo(20, 20) //起始点位置
      canvasView2.value?.quadraticCurveTo(50, 200, 200, 20) //拉扯点和结束点位置坐标
      canvasView2.value?.stroke() //开始描框
      canvasView2.value?.drawAction('二阶贝塞尔')

      canvasView3.value?.beginPath()
      canvasView3.value?.moveTo(20, 20)
      canvasView3.value?.bezierCurveTo(20, 100, 200, 100, 200, 20)
      canvasView3.value?.stroke()
      canvasView3.value?.drawAction('三阶贝塞尔')

      //------------------绘制复杂图形------------------------------------
      // 草原
      drawPrairie()
      // 天空
      drawSky()
      // 云朵
      drawClouds()
    }

    function drawPrairie() {
      canvasView4.value?.save()
      canvasView4.value?.beginPath()
      canvasView4.value?.moveTo(0, 420)
      canvasView4.value?.bezierCurveTo(250, 300, 350, 550, 800, 400)
      canvasView4.value?.lineTo(800, 600)
      canvasView4.value?.lineTo(0, 600)
      canvasView4.value?.closePath()
      const grd = new CanvasGradient(0, 600, 600, 0)
      grd.addColorStop(0, '#00aa58')
      grd.addColorStop(0.3, '#63aa7b')
      grd.addColorStop(1, '#04aa00')
      canvasView4.value?.fillStyle(grd)
      canvasView4.value?.fill()
      canvasView4.value?.fill()
      canvasView4.value?.restore()
      canvasView4.value?.drawAction('画草原')
    }

    function drawCloud(cx, cy, cw) {
      const maxWidth = 800
      cx = cx % maxWidth
      const ch = cw * 0.6
      canvasView4.value?.beginPath()
      const grd = new CanvasGradient(0, 0, 0, cy)
      grd.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
      grd.addColorStop(1, 'rgba(255, 255, 255, 0.5)')
      canvasView4.value?.arc(cx, cy, cw * 0.19, 0, 360, false)
      canvasView4.value?.arc(cx + cw * 0.08, cy - ch * 0.3, cw * 0.11, 0, 360, false)
      canvasView4.value?.arc(cx + cw * 0.3, cy - ch * 0.25, cw * 0.25, 0, 360, false)
      canvasView4.value?.arc(cx + cw * 0.6, cy, cw * 0.21, 0, 360, false)
      canvasView4.value?.arc(cx + cw * 0.3, cy - ch * 0.1, cw * 0.28, 0, 360, false)
      canvasView4.value?.fillStyle(grd)
      canvasView4.value?.fill()
      canvasView4.value?.drawAction('单个云')
    }
    function drawClouds() {
      for (let i = 0; i < 10; i++) {
        const x0 = 500 * Math.random() + 50
        const y0 = 200 * Math.random() + 50
        const c0 = 100 * Math.random() + 50
        // 单个云朵
        drawCloud(x0, y0, c0)
      }
    }

    function drawSky() {
      canvasView4.value?.save()
      canvasView4.value?.beginPath()
      canvasView4.value?.moveTo(0, 420)
      canvasView4.value?.bezierCurveTo(250, 300, 350, 550, 800, 400)
      canvasView4.value?.lineTo(800, 0)
      canvasView4.value?.lineTo(0, 0)
      canvasView4.value?.closePath()
      const grd = new CanvasGradient(400, 0, 50, 400, 0, 200)
      grd.addColorStop(0, '#42a9aa')
      grd.addColorStop(1, '#2491aa')
      canvasView4.value?.fillStyle(grd)
      canvasView4.value?.fill()
      canvasView4.value?.restore()
      canvasView4.value?.drawAction('画天空')
    }

    return {
      canvasView1,
      canvasView2,
      canvasView3,
      canvasView4,
      onESCreate,
      drawPrairie,
      drawCloud,
      drawClouds,
      drawSky,
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
