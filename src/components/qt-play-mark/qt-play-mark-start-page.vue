<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-row class="qt-sdk-content-row-css">
      <play-mark class="qt-sdk-play-mark-css" />
      <play-mark :roundCorner="10" class="qt-sdk-play-mark-css" />
      <play-mark :gap="10" class="qt-sdk-play-mark-css" />
      <play-mark :showType="1" class="qt-sdk-play-mark-css" />
      <play-mark startColor="#FF8534" endColor="#FFCA37" class="qt-sdk-play-mark-css" />
      <play-mark
        startColor="#FF8534"
        endColor="#FFCA37"
        :isSupportGradient="true"
        class="qt-sdk-play-mark-css"
      />
    </qt-row>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: '使用初探',
  emits: [],
})
</script>

<style>
.qt-sdk-content-row-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
}

.qt-sdk-play-mark-css {
  width: 200px;
  height: 200px;
  background-color: #40b883;
  margin: 20px;
}
</style>
