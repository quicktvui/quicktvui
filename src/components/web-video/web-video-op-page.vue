<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-column class="qt-html-video-root-css">
      <qt-row>
        <s-text-button text="开始" @onButtonClicked="onStartButtonClicked" />
        <s-text-button text="暂停" @onButtonClicked="onPauseButtonClicked" />
      </qt-row>
      <Video
        ref="video"
        class="qt-html-video-css"
        controls
        :width="640"
        :height="360"
        autoplay
        loop
        src="https://md-mpvolc.meipian.me/users/46717567/762076f2e04d2ade4b1c6afbb0e3719d.mp4"
      >
      </Video>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup() {
    const video = ref()

    function onStartButtonClicked() {
      video.value?.start()
    }

    function onPauseButtonClicked() {
      video.value?.pause()
    }

    return {
      video,
      onStartButtonClicked,
      onPauseButtonClicked,
    }
  },
})
</script>

<style>
.qt-html-video-root-css {
  align-items: center;
  width: 1920px;
  height: 1080px;
}

.qt-html-video-css {
}
</style>
