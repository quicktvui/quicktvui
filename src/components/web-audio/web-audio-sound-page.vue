<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-column class="qt-sdk-content-column-css">
      <s-text-button text="play" @onButtonClicked="onButtonClicked" />
      <Audio ref="audioRef" playEffect :width="640" :height="360" loop class="audio-class">
        <Source
          src="https://md-mpvolc.meipian.me/users/46717567/762076f2e04d2ade4b1c6afbb0e3719d.mp4"
          type="video/mp4"
        />
      </Audio>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'

export default defineComponent({
  name: '音效',
  emits: [],
  setup(props, context) {
    const audioRef = ref()

    function onButtonClicked() {
      audioRef.value?.play()
    }

    return {
      onButtonClicked,
      audioRef,
    }
  },
})
</script>

<style>
.audio-class {
  position: absolute;
}
</style>
