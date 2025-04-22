<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="qt-long-image-scroll-page">
      <qt-long-image
        ref="viewRef"
        @onLoad="onLoad"
        @onScroll="onScroll"
        @onInitializeSuccess="onInitializeSuccess"
        @onInitializeError="onInitializeError"
        class="qt-long-image-css"
      />
    </qt-view>
    <div class="es-sdk-content-row-css">
      <s-text-button text="向左滚动" @onButtonClicked="onLeftButtonClicked" />
      <s-text-button text="向右滚动" @onButtonClicked="onRightButtonClicked" />
      <s-text-button text="向上滚动" @onButtonClicked="onUpButtonClicked" />
      <s-text-button text="向下滚动" @onButtonClicked="onDownButtonClicked" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-view :text="eventText" />
    </div>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { QTILongImage } from '../../../packages'

export default defineComponent({
  name: '滚动',
  emits: [],
  setup(props, context) {
    const viewRef = ref<QTILongImage>()
    const step = 10
    const eventText = ref<string>('')

    function onLeftButtonClicked() {
      viewRef.value?.scrollLeft(step)
    }

    function onRightButtonClicked() {
      viewRef.value?.scrollRight(step)
    }

    function onUpButtonClicked() {
      viewRef.value?.scrollUp(step)
    }

    function onDownButtonClicked() {
      viewRef.value?.scrollDown(step)
    }

    //-----------------------------------------------------------------
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

    function onScroll(direction: number, percent: number, isScroll, width: number, height: number) {
      console.log('----------onScroll--------->>>>', direction, percent, isScroll, width, height)
      eventText.value =
        'onScroll: ' +
        'direction:' +
        direction +
        'percent:' +
        percent +
        'isScroll:' +
        isScroll +
        'width:' +
        width +
        'height:' +
        height
    }

    //-----------------------------------------------------------------
    function onInitializeSuccess() {
      console.log('----------onInitializeSuccess--------->>>>')
      viewRef.value?.setSrc(
        'https://www.shuomingshu.cn/wp-content/uploads/images/2023/06/23/4b30c4d172cd4c709d170e8194cae245_ajwo1tt5eln.jpg'
      )
    }

    function onInitializeError(error) {
      console.log('----------onInitializeError--------->>>>', error)
    }

    return {
      viewRef,
      eventText,
      onLoad,
      onScroll,
      onInitializeSuccess,
      onInitializeError,
      onLeftButtonClicked,
      onRightButtonClicked,
      onUpButtonClicked,
      onDownButtonClicked,
    }
  },
})
</script>

<style>
.qt-long-image-scroll-page {
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
