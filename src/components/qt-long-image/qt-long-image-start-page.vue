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
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { QTILongImage } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup(props, context) {
    const viewRef = ref<QTILongImage>()
    const eventText = ref<string>('')

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
        'https://pic.rmb.bdstatic.com/bjh/news/d7c0290dccdfaec5fff57eb6c6829fda.jpeg@q_90'
      )
    }

    function onInitializeError(error) {
      console.log('----------onInitializeError--------->>>>', error)
    }

    return {
      eventText,
      viewRef,
      onLoad,
      onInitializeSuccess,
      onInitializeError,
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
