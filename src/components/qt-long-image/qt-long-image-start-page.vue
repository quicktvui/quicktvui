<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <qt-view class="qt-long-image-start-page">
      <qt-long-image
        ref="viewRef"
        :focusable="false"
        @onDownLoad="onLoad"
        :scaleType="2"
        @onInitializeSuccess="onInitializeSuccess"
        @onInitializeError="onInitializeError"
        @onImageLoad="onImageLoad"
        class="qt-long-image-root-css"
      />
    </qt-view>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />

    <div class="es-sdk-content-row-css">
      <s-text-view :text="hdrText" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button
        text="能否HDR"
        @onButtonFocused="onButtonFocused1"
        @onButtonClicked="onButtonClicked(1)"
      />
      <s-text-button
        text="饱和度"
        @onButtonFocused="onButtonFocused2"
        @onButtonClicked="onButtonClicked(2)"
      />
      <s-text-button
        text="对比度"
        @onButtonFocused="onButtonFocused3"
        @onButtonClicked="onButtonClicked(3)"
      />
      <s-text-button
        text="亮度"
        @onButtonFocused="onButtonFocused4"
        @onButtonClicked="onButtonClicked(4)"
      />
      <!--      <s-text-button-->
      <!--        text="色温"-->
      <!--        @onButtonFocused="onButtonFocused5"-->
      <!--        @onButtonClicked="onButtonClicked(5)"-->
      <!--      />-->
      <s-text-button
        text="双层"
        @onButtonFocused="onButtonFocused6"
        @onButtonClicked="onButtonClicked(6)"
      />
      <s-text-button text="切换图片" @onButtonFocused="onButtonFocused7" />
    </div>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import {
  QTILongImage,
  QTLongImageDownloadChangeBean,
  QTLongImageLoadStatusChangeBean,
} from '@quicktvui/quicktvui3'
import { useESRouter } from '@extscreen/es3-router'
import { ESKeyCode, ESKeyEvent, useESToast } from '@extscreen/es3-core'
import { EventBus } from '@extscreen/es3-vue'

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup(props, context) {
    const viewRef = ref<QTILongImage>()
    const eventText = ref<string>('')
    const hdrText = ref<string>('')
    const router = useESRouter()
    const toast = useESToast()

    const enableHDR = ref<boolean>(true)
    const saturation = ref<number>(1.5)
    const contrast = ref<number>(1.6)
    const brightness = ref<number>(10)
    const warmth = ref<number>(1.0)
    const alpha = ref<number>(0)
    const scale = ref<number>(0)

    const current = ref<number>(-1)
    const currentI = ref<number>(0)
    let imgs: Array<string> = []

    hdrText.value =
      ' enableHDR: ' +
      enableHDR.value +
      ' 饱和度:' +
      saturation.value +
      ' 对比度:' +
      contrast.value +
      ' 亮度:' +
      brightness.value +
      ' 色温:' +
      warmth.value +
      ' overAlpha:' +
      alpha.value

    function onLoad(downLoadBean: QTLongImageDownloadChangeBean) {
      console.log('----------onLoad--------->>>>', downLoadBean)
      eventText.value =
        ' onLoad: ' +
        ' status:' +
        downLoadBean.status +
        ' progress:' +
        downLoadBean.progress +
        ' message:' +
        downLoadBean.message +
        ' width:' +
        downLoadBean.width +
        ' height:' +
        downLoadBean.height
    }

    function onInitializeSuccess() {
      console.log('----------onInitializeSuccess--------->>>>')

      // onButtonClicked(1)
      // onButtonClicked(2)
      // onButtonClicked(3)
      // onButtonClicked(4)
      // onButtonClicked(5)
      // onButtonClicked(6)

      EventBus.$on('OnLongImageList', (event: Array<string>) => {
        toast.showLongToast('OnLongImageList ' + event.length)
        imgs = event

        viewRef.value?.setSrc(
          'file://' + imgs[0]
          // 'https://ss-mpvolc.meipian.me/users/1465746/3abb8b5805d6491f89af4d7e4da94f1bsoi__png.heic~tplv-s1ctq42ewb-s2-cC-q:682:10000:0:0:q80.jpg'
          // 'file:///storage/emulate/0/Download/Ceremonial4_8k.jpg'
          // 'file:///storage/emulate/0/test.jpg'
          // 'file:///sdcard/Android/data/tv.huan.xiaoyoucast/files/es_files/images/tmp_696f5c30503f5f5435f071cbaa1a8d0e.jpg'
          // 'file:///sdcard/Android/data/tv.huan.xiaoyoucast/files/es_files/images/tmp_034b312491bf31cde56ae886812c1549.jpg'
        )
      })
    }

    function onInitializeError(error) {
      console.log('----------onInitializeError--------->>>>', error)
    }

    function onButtonClicked(index) {
      // router.push({
      //   name: 'long-image/qt_long_image_vertical_scroll_page',
      //   params: {},
      // })
      switch (index) {
        case 1:
          viewRef.value?.isHDR().then((res) => {
            // toast.showLongToast('isHDR ' + res)
            enableHDR.value = res
          })
          break
        case 2:
          viewRef.value?.getSaturation().then((res) => {
            // toast.showLongToast('getSaturation ' + res)
            saturation.value = res
          })
          break
        case 3:
          viewRef.value?.getContrast().then((res) => {
            // toast.showLongToast('getContrast ' + res)
            contrast.value = res
          })
          break
        case 4:
          viewRef.value?.getBrightness().then((res) => {
            // toast.showLongToast('getBrightness ' + res)
            brightness.value = res
          })
          break
        case 5:
          viewRef.value?.getWarmth().then((res) => {
            // toast.showLongToast('getWarmth ' + res)
            warmth.value = res
          })
          break
        case 6:
          viewRef.value?.getOverlayAlpha().then((res) => {
            // toast.showLongToast('getOverlayAlpha ' + res)
            alpha.value = res
          })
          break
      }
      updateHDRText()
    }

    function onButtonFocused1(focused) {
      if (focused) current.value = 1
    }
    function onButtonFocused2(focused) {
      if (focused) current.value = 2
    }
    function onButtonFocused3(focused) {
      if (focused) current.value = 3
    }
    function onButtonFocused4(focused) {
      if (focused) current.value = 4
    }
    function onButtonFocused5(focused) {
      if (focused) current.value = 5
    }
    function onButtonFocused6(focused) {
      if (focused) current.value = 6
    }

    function onButtonFocused7(focused) {
      if (focused) current.value = 7
    }

    function onKeyDown(keyEvent: ESKeyEvent) {
      if (keyEvent.keyCode == ESKeyCode.ES_KEYCODE_DPAD_DOWN) {
        switch (current.value) {
          case 1:
            enableHDR.value = false
            viewRef.value?.enableHDR(false)
            break
          case 2:
            saturation.value = saturation.value - 0.05
            viewRef.value?.setSaturation(saturation.value)
            break
          case 3:
            contrast.value = contrast.value - 0.1
            viewRef.value?.setContrast(contrast.value)
            break
          case 4:
            brightness.value = brightness.value - 5
            viewRef.value?.setBrightness(brightness.value)
            break
          case 5:
            warmth.value = warmth.value - 0.1
            viewRef.value?.setWarmth(warmth.value)
            break
          case 6:
            alpha.value = alpha.value - 10
            viewRef.value?.setOverlayAlpha(alpha.value)
            break
          case 7:
            currentI.value = (currentI.value + 1) % imgs.length
            viewRef.value?.setSrc('file://' + imgs[currentI.value])
            break
        }
        updateHDRText()
      } else if (keyEvent.keyCode == ESKeyCode.ES_KEYCODE_DPAD_UP) {
        switch (current.value) {
          case 1:
            enableHDR.value = true
            viewRef.value?.enableHDR(true)
            break
          case 2:
            saturation.value = saturation.value + 0.05
            viewRef.value?.setSaturation(saturation.value)
            break
          case 3:
            contrast.value = contrast.value + 0.1
            viewRef.value?.setContrast(contrast.value)
            break
          case 4:
            brightness.value = brightness.value + 5
            viewRef.value?.setBrightness(brightness.value)
            break
          case 5:
            warmth.value = warmth.value + 0.1
            viewRef.value?.setWarmth(warmth.value)
            break
          case 6:
            alpha.value = alpha.value + 10
            viewRef.value?.setOverlayAlpha(alpha.value)
            break
        }
        updateHDRText()
      }
    }

    function updateHDRText() {
      hdrText.value =
        ' enableHDR: ' +
        enableHDR.value +
        ' 饱和度:' +
        saturation.value +
        ' 对比度:' +
        contrast.value +
        ' 亮度:' +
        brightness.value +
        ' 色温:' +
        warmth.value +
        ' overAlpha:' +
        alpha.value +
        ' scale:' +
        scale.value
    }

    function onImageLoad(changeBean: QTLongImageLoadStatusChangeBean) {
      qt.log.e('ok->onImageLoad', JSON.stringify(changeBean))
      switch (changeBean.status) {
        case 1: // 加载成功
          scale.value = Number(changeBean.scale)
          break
        case 2: // 加载失败
          qt.toast.showToast('暂不支持该文件类型')
          break
      }
    }

    return {
      eventText,
      hdrText,
      viewRef,
      onLoad,
      onInitializeSuccess,
      onInitializeError,
      onButtonClicked,
      onButtonFocused1,
      onButtonFocused2,
      onButtonFocused3,
      onButtonFocused4,
      onButtonFocused5,
      onButtonFocused6,
      onButtonFocused7,
      onKeyDown,
      onImageLoad,
    }
  },
})
</script>

<style>
.qt-long-image-start-page {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.qt-long-image-root-css {
  width: 1920px;
  height: 1080px;
  background-color: black;
}
</style>
