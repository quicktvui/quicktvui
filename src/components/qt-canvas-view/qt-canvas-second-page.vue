<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="quick-canvas-view">
      <div class="es-sdk-content-column-css">
        <qt-text text="绘制不带颜色logo" class="es_canvas1_title"></qt-text>
        <qt-canvas-view
          ref="canvasView5"
          class="canvas-view-class"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
        />
      </div>

      <div class="es-sdk-content-column-css">
        <qt-text text="绘制带颜色logo" class="es_canvas1_title"></qt-text>
        <qt-canvas-view
          ref="canvasView6"
          class="canvas-view-class"
          :focusable="true"
          :enableFocusBorder="true"
          :focusScale="1.1"
        />
      </div>

      <div class="es-sdk-content-column-css">
        <qt-text text="绘制渐变logo" class="es_canvas1_title"></qt-text>
        <qt-canvas-view
          ref="canvasView7"
          class="canvas-view-class"
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
    const canvasView5 = ref<QTICanvasView>()
    const canvasView6 = ref<QTICanvasView>()
    const canvasView7 = ref<QTICanvasView>()
    let toast = useESToast()

    const onESCreate = (params) => {
      const r = 20
      const h = 300
      const p = Math.PI
      const s = 40

      //------------------不带颜色logo----------------
      canvasView5.value?.beginPath()
      canvasView5.value?.moveTo(h / 2 + s, h / 2)
      canvasView5.value?.arc(h / 2, h / 2, s, 0, (-p / 2) * 3, true)
      canvasView5.value?.arc(h / 2, h / 2 + s + s / 2, s / 2, -p / 2, p / 2, false)
      canvasView5.value?.arc(h / 2, h / 2, s * 2, (-p / 2) * 3, 0, false)
      canvasView5.value?.arc(h / 2 + s + s / 2, h / 2, s / 2, 0, p, false)
      canvasView5.value?.moveTo(h / 2 + s * 2, h / 2 + s + s / 2)
      canvasView5.value?.arc(h / 2 + s + s / 2, h / 2 + s + s / 2, s / 2, 0, p * 2, false)
      canvasView5.value?.moveTo(h / 2 + (s / 4) * 3, h / 2 + s / 2)
      canvasView5.value?.arc(h / 2 + s / 2, h / 2 + s / 2, s / 4, 0, p * 2, false)
      canvasView5.value?.fill()
      canvasView5.value?.drawAction('绘制不带颜色的logo')
      canvasView5.value?.beginPath()
      canvasView5.value?.moveTo(h / 2 + s, h / 2)
      canvasView5.value?.arc(h / 2, h / 2, s, 0, (-p / 2) * 3, true)
      canvasView5.value?.arc(h / 2, h / 2 + s + s / 2, s / 2, -p / 2, p / 2, false)
      canvasView5.value?.arc(h / 2, h / 2, s * 2, (-p / 2) * 3, 0, false)
      canvasView5.value?.arc(h / 2 + s + s / 2, h / 2, s / 2, 0, p, false)
      canvasView5.value?.fill()
      canvasView5.value?.drawAction('绘制不带颜色的logo')
      canvasView5.value?.drawFinish()

      //------------------带颜色logo----------------
      canvasView6.value?.beginPath()
      canvasView6.value?.moveTo(r * 2, r)
      canvasView6.value?.arc(r * 2, r * 2, r, -p / 2, -p, true)
      canvasView6.value?.lineTo(r, h - r * 2)
      canvasView6.value?.arc(r * 2, h - r * 2, r, p, p / 2, true)
      canvasView6.value?.lineTo(h - r * 2, h - r)
      canvasView6.value?.arc(h - r * 2, h - r * 2, r, p / 2, 0, true)
      canvasView6.value?.lineTo(h - r, r * 2)
      canvasView6.value?.arc(h - r * 2, r * 2, r, 0, -p / 2, true)
      canvasView6.value?.closePath()
      canvasView6.value?.stroke()
      canvasView6.value?.drawAction('绘制外边界')

      canvasView6.value?.beginPath()
      canvasView6.value?.moveTo(h / 2 + s, h / 2)
      canvasView6.value?.arc(h / 2, h / 2, s, 0, (-p / 2) * 3, true)
      canvasView6.value?.arc(h / 2, h / 2 + s + s / 2, s / 2, -p / 2, p / 2, false)
      canvasView6.value?.arc(h / 2, h / 2, s * 2, (-p / 2) * 3, 0, false)
      canvasView6.value?.arc(h / 2 + s + s / 2, h / 2, s / 2, 0, p, false)
      canvasView6.value?.fillStyle('#4285f5')
      canvasView6.value?.fill()
      canvasView6.value?.drawAction('绘制logo')

      canvasView6.value?.beginPath()
      canvasView6.value?.moveTo(h / 2 + s * 2, h / 2 + s + s / 2)
      canvasView6.value?.arc(h / 2 + s + s / 2, h / 2 + s + s / 2, s / 2, 0, p * 2, false)
      canvasView6.value?.fillStyle('#e94335')
      canvasView6.value?.fill()
      canvasView6.value?.drawAction('绘制logo')

      canvasView6.value?.beginPath()
      canvasView6.value?.moveTo(h / 2 + (s / 4) * 3, h / 2 + s / 2)
      canvasView6.value?.arc(h / 2 + s / 2, h / 2 + s / 2, s / 4, 0, p * 2, false)
      canvasView6.value?.fillStyle('#f9bc05')
      canvasView6.value?.fill()
      canvasView6.value?.drawAction('绘制带颜色logo')
      canvasView6.value?.drawFinish()

      //--------------------------绘制渐变logo
      const linGrad1 = new CanvasGradient(h, h, 0, 0)
      linGrad1.addColorStop(0, '#FFFAFA')
      linGrad1.addColorStop(0.8, '#E4C700')
      linGrad1.addColorStop(1, 'rgba(228,199,0,0)')

      canvasView7.value?.fillStyle(linGrad1)
      canvasView7.value?.fillRect(0, 0, h, h)
      canvasView7.value?.drawAction('绘制背景颜色')

      const linGrad2 = new CanvasGradient(0, 0, h, h)
      linGrad2.addColorStop(0, '#C1FFC1')
      linGrad2.addColorStop(0.5, '#ffffff')
      linGrad2.addColorStop(1, '#00BFFF')

      canvasView7.value?.beginPath()
      canvasView7.value?.moveTo(r * 2, r)
      canvasView7.value?.arc(r * 2, r * 2, r, -p / 2, -p, true)
      canvasView7.value?.lineTo(r, h - r * 2)
      canvasView7.value?.arc(r * 2, h - r * 2, r, p, p / 2, true)
      canvasView7.value?.lineTo(h - r * 2, h - r)
      canvasView7.value?.arc(h - r * 2, h - r * 2, r, p / 2, 0, true)
      canvasView7.value?.lineTo(h - r, r * 2)
      canvasView7.value?.arc(h - r * 2, r * 2, r, 0, -p / 2, true)
      canvasView7.value?.closePath()
      canvasView7.value?.lineWidth(10)
      canvasView7.value?.strokeStyle(linGrad2)
      canvasView7.value?.stroke()
      canvasView7.value?.drawAction('绘制边框渐变')

      canvasView7.value?.beginPath()
      canvasView7.value?.moveTo(h / 2 + s, h / 2)
      canvasView7.value?.arc(h / 2, h / 2, s, 0, (-p / 2) * 3, true)
      canvasView7.value?.arc(h / 2, h / 2 + s + s / 2, s / 2, -p / 2, p / 2, false)
      canvasView7.value?.arc(h / 2, h / 2, s * 2, (-p / 2) * 3, 0, false)
      canvasView7.value?.arc(h / 2 + s + s / 2, h / 2, s / 2, 0, p, false)
      canvasView7.value?.fillStyle('#4286f5')
      canvasView7.value?.fill()
      canvasView7.value?.drawAction('')

      canvasView7.value?.beginPath()
      canvasView7.value?.moveTo(h / 2 + s * 2, h / 2 + s + s / 2)
      canvasView7.value?.arc(h / 2 + s + s / 2, h / 2 + s + s / 2, s / 2, 0, p * 2, false)
      canvasView7.value?.fillStyle('rgb(234, 67, 53)')
      canvasView7.value?.fill()
      canvasView7.value?.drawAction('')

      canvasView7.value?.beginPath()
      canvasView7.value?.moveTo(h / 2 + (s / 4) * 3, h / 2 + s / 2)
      canvasView7.value?.arc(h / 2 + s / 2, h / 2 + s / 2, s / 4, 0, p * 2, false)
      canvasView7.value?.fillStyle('rgba(250, 188, 5, 1)')
      canvasView7.value?.fill()
      canvasView7.value?.drawAction('渐变logo')
    }

    return {
      canvasView5,
      canvasView6,
      canvasView7,
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
  font-size: 26px;
  margin-top: 0px;
  margin-left: 0px;
  font-weight: 500;
  text-align: center;
  color: white;
  background-color: transparent;
}
</style>
