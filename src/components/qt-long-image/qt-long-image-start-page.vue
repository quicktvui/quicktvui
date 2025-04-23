<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <qt-view class="qt-long-image-start-page">
      <qt-long-image
        ref="viewRef"
        :focusable="false"
        @onLoad="onLoad"
        @onInitializeSuccess="onInitializeSuccess"
        @onInitializeError="onInitializeError"
        class="qt-long-image-root-css"
      />
    </qt-view>
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />

    <div class="es-sdk-content-row-css">
      <s-text-view :text="eventText" />
    </div>
    <div class="es-sdk-content-row-css">
      <s-text-button text="跳转" @onButtonClicked="onButtonClicked" />
    </div>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { QTILongImage } from '@quicktvui/quicktvui3'
import { useESRouter } from '@extscreen/es3-router'

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup(props, context) {
    const viewRef = ref<QTILongImage>()
    const eventText = ref<string>('')
    const router = useESRouter()

    function onLoad(
      status: number,
      progress: number,
      message: string,
      width: number,
      height: number
    ) {
      console.log('----------onLoad--------->>>>', status, progress, message, width, height)
      eventText.value =
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
    }

    function onInitializeSuccess() {
      console.log('----------onInitializeSuccess--------->>>>')
      viewRef.value?.setSrc(
        'https://ss2.meipian.me/users/1034/b11ca8a3e4d3fb27ca6bdb1d894716c3mpand.jpg'
      )
    }

    function onInitializeError(error) {
      console.log('----------onInitializeError--------->>>>', error)
    }

    function onButtonClicked() {
      router.push({
        name: 'long-image/qt_long_image_vertical_scroll_page',
        params: {},
      })
    }

    return {
      eventText,
      viewRef,
      onLoad,
      onInitializeSuccess,
      onInitializeError,
      onButtonClicked,
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
