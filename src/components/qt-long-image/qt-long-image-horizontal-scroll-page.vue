<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <qt-view class="qt-long-image-scroll-page">
      <qt-long-image
        ref="viewRef"
        :focusable="false"
        @onDownLoad="onLoad"
        @onScroll="onScroll"
        @onInitializeSuccess="onInitializeSuccess"
        @onInitializeError="onInitializeError"
        class="qt-long-image-css"
      />
    </qt-view>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />

    <div class="es-sdk-content-row-css">
      <s-text-button text="放大" @onButtonClicked="onZoomInButtonClicked" />
      <s-text-button text="向左滚动" @onButtonClicked="onLeftButtonClicked" />
      <s-text-button text="向右滚动" @onButtonClicked="onRightButtonClicked" />
      <s-text-button text="缩小" @onButtonClicked="onZoomOutButtonClicked" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-view :text="eventText" />
    </div>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import {
  QTILongImage,
  QTLongImageDownloadChangeBean,
  QTLongImageScaleType,
  QTLongImageScrollChangeBean,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '横向滚动',
  emits: [],
  setup(props, context) {
    const viewRef = ref<QTILongImage>()
    const step = 200
    const zoomStep = 200
    const eventText = ref<string>('')

    function onLeftButtonClicked() {
      viewRef.value?.scrollLeft(step)
    }

    function onRightButtonClicked() {
      viewRef.value?.scrollRight(step)
    }

    function onZoomInButtonClicked() {
      viewRef.value?.zoom(QTLongImageScaleType.ZOOM_TYPE_CENTER_OUTSIDE)
    }

    function onZoomOutButtonClicked() {
      viewRef.value?.zoom(QTLongImageScaleType.ZOOM_TYPE_CENTER_INSIDE)
    }

    //-----------------------------------------------------------------
    function onLoad(downLoadBean: QTLongImageDownloadChangeBean) {
      console.log('----------onLoad--------->>>>', downLoadBean)
      const text =
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
      eventText.value = text
    }

    function onScroll(scrollBean: QTLongImageScrollChangeBean) {
      console.log('----------onScroll--------->>>>', scrollBean)
      const text =
        ' onScroll: ' +
        ' direction:' +
        scrollBean.direction +
        ' percent:' +
        scrollBean.percent +
        ' isScroll:' +
        scrollBean.isScroll +
        ' width:' +
        scrollBean.width +
        ' height:' +
        scrollBean.height
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
      onLeftButtonClicked,
      onRightButtonClicked,
      onZoomInButtonClicked,
      onZoomOutButtonClicked,
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
