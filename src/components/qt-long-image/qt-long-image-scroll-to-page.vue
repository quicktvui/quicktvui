<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <qt-view class="qt-long-image-scroll-page">
      <qt-long-image
        ref="viewRef"
        :focusable="false"
        @onLoad="onLoad"
        @onScroll="onScroll"
        @onInitializeSuccess="onInitializeSuccess"
        @onInitializeError="onInitializeError"
        class="qt-long-image-css"
      />
    </qt-view>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />

    <div class="es-sdk-content-row-css">
      <s-text-button text="滚动一" @onButtonClicked="onOneInButtonClicked" />
      <s-text-button text="滚动二" @onButtonClicked="onTwoButtonClicked" />
      <s-text-button text="滚动三" @onButtonClicked="onThreeButtonClicked" />
      <s-text-button text="滚动四" @onButtonClicked="onFourButtonClicked" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-view :text="eventText" />
    </div>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { QTILongImage } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '滚动到指定位置',
  emits: [],
  setup(props, context) {
    const viewRef = ref<QTILongImage>()
    const step = 200
    const zoomStep = 200
    const eventText = ref<string>('')

    function onOneInButtonClicked() {
      viewRef.value?.scrollTo(100)
    }

    function onTwoButtonClicked() {
      viewRef.value?.scrollTo(20)
    }

    function onThreeButtonClicked() {
      viewRef.value?.scrollTo(40)
    }

    function onFourButtonClicked() {
      viewRef.value?.scrollTo(50)
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
      const text =
        ' onLoad: ' +
        ' status:' +
        status +
        ' progress:' +
        progress +
        ' message:' +
        message +
        ' width:' +
        width +
        ' height:' +
        height
      eventText.value = text
    }

    function onScroll(direction: number, percent: number, isScroll, width: number, height: number) {
      console.log('----------onScroll--------->>>>', direction, percent, isScroll, width, height)
      const text =
        ' onScroll: ' +
        ' direction:' +
        direction +
        ' percent:' +
        percent +
        ' isScroll:' +
        isScroll +
        ' width:' +
        width +
        ' height:' +
        height
      eventText.value = text
    }

    //-----------------------------------------------------------------
    function onInitializeSuccess() {
      console.log('----------onInitializeSuccess--------->>>>')
      viewRef.value?.setSrc(
        'https://pic.rmb.bdstatic.com/bjh/news/d7c0290dccdfaec5fff57eb6c6829fda.jpeg@q_90'
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
      onOneInButtonClicked,
      onTwoButtonClicked,
      onThreeButtonClicked,
      onFourButtonClicked,
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
