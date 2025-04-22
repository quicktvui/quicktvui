<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-view :text="eventText" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button :text="zoomEnableText" @onButtonClicked="onZoomEnableButtonClicked" />
      <s-text-button text="放大" @onButtonClicked="onZoomInButtonClicked" />
      <s-text-button text="缩小" @onButtonClicked="onZoomOutButtonClicked" />
    </div>
    <qt-view class="qt-long-image-start-page">
      <qt-long-image
        ref="viewRef"
        @onLoad="onLoad"
        @onInitializeSuccess="onInitializeSuccess"
        @onInitializeError="onInitializeError"
        class="qt-long-image-css"
      />
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { QTILongImage } from '../../../packages'

export default defineComponent({
  name: '放大缩小',
  emits: [],
  setup(props, context) {
    const viewRef = ref<QTILongImage>()
    const eventText = ref<string>('')
    const zoomEnable = ref<boolean>(false)
    const zoomEnableText = ref<string>('')

    function onLoad(
      status: number,
      progress: number,
      message: string,
      width: number,
      height: number
    ) {
      console.log('----------onLoad--------->>>>', status, progress, message, width, height)
      eventText.value =
        'onLoad: ' +
        'status:' +
        status +
        'progress:' +
        progress +
        'message:' +
        message +
        'width:' +
        width +
        'height:' +
        height
    }

    function onInitializeSuccess() {
      console.log('----------onInitializeSuccess--------->>>>')
      viewRef.value?.setSrc(
        'https://www.shuomingshu.cn/wp-content/uploads/images/2023/06/23/4b30c4d172cd4c709d170e8194cae245_ajwo1tt5eln.jpg'
      )
    }

    function onInitializeError(error) {
      console.log('----------onInitializeError--------->>>>', error)
    }

    //----------------------------------------------------------

    function onZoomInButtonClicked() {
      viewRef.value?.zoomIn()
    }

    function onZoomOutButtonClicked() {
      viewRef.value?.zoomOut()
    }

    function onZoomEnableButtonClicked() {
      const value = !zoomEnable.value
      viewRef.value?.setZoomEnabled(value)
      zoomEnable.value = value
      if (value) {
        zoomEnableText.value = '可以缩放'
      } else {
        zoomEnableText.value = '不可缩放'
      }
    }

    return {
      viewRef,
      eventText,
      onLoad,
      onInitializeSuccess,
      onInitializeError,
      onZoomInButtonClicked,
      onZoomOutButtonClicked,
      onZoomEnableButtonClicked,
      zoomEnable,
      zoomEnableText,
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

.qt-long-image-css {
  width: 1920px;
  height: 1080px;
  background-color: black;
}
</style>
