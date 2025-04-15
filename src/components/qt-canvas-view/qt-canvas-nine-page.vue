<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-text text="绘制图片" class="es_canvas1_title" />
      <qt-canvas-view ref="canvasViewRef1" class="canvas-view-class" />
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
      const r = 10
      const h = 800
      const p = Math.PI

      canvasViewRef1.value?.drawImage(
        'https://gd-hbimg.huaban.com/1717d8c0132134d433cf09acf189a3bf71ecb33b19bc10-reEq8s_fw658webp',
        50,
        50
      )
      canvasViewRef1.value?.drawAction('图片绘制')
      canvasViewRef1.value?.drawFinish()

      canvasViewRef1.value?.drawImageWithWH(
        'https://gd-hbimg.huaban.com/b36dc8c8d866a32291239e0586a8e8cfc59b63e998e83-5rRhXD_fw658webp',
        10,
        10,
        1920,
        1080
      )
      canvasViewRef1.value?.textAlign('top')
      canvasViewRef1.value?.font('30px')
      canvasViewRef1.value?.fillText('hello World', 50, 100)
      canvasViewRef1.value?.restore()
      canvasViewRef1.value?.drawAction('图片绘制')
      canvasViewRef1.value?.drawFinish()

      /*const linGrad2 = new CanvasGradient(0, 0, h, h);
      linGrad2.addColorStop(0, '#00ffc4');
      linGrad2.addColorStop(0.2, '#02b3ff');
      linGrad2.addColorStop(0.5, '#065eff');
      linGrad2.addColorStop(0.8, '#1b20cc');
      linGrad2.addColorStop(1, '#3600ff');

      canvasViewRef1.value?.beginPath();
      canvasViewRef1.value?.moveTo(r * 2, r);
      canvasViewRef1.value?.arc(r * 2, r * 2, r, -p / 2, -p, true);
      canvasViewRef1.value?.lineTo(r, h - r * 2);
      canvasViewRef1.value?.arc(r * 2, h - r * 2, r, p, p / 2, true);
      canvasViewRef1.value?.lineTo(h - r * 2, h - r);
      canvasViewRef1.value?.arc(h - r * 2, h - r * 2, r, p / 2, 0, true);
      canvasViewRef1.value?.lineTo(h - r, r * 2);
      canvasViewRef1.value?.arc(h - r * 2, r * 2, r, 0, -p / 2, true);
      canvasViewRef1.value?.closePath();
      canvasViewRef1.value?.lineWidth(10);
      canvasViewRef1.value?.strokeStyle(linGrad2);
      canvasViewRef1.value?.stroke();
      canvasViewRef1.value?.drawAction('绘制边框渐变');*/
    }

    const onESStop = (params) => {
      canvasViewRef1.value?.destoryView()
    }

    return {
      canvasViewRef1,
      onESCreate,
      onESStop,
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
  width: 1920px;
  height: 1080px;
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
