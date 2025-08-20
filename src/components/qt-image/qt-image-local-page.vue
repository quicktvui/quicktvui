<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="qt-image-start-page">
      <qt-image :src="logo" class="qt-local-image" />
    </qt-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import logo from '../../assets/logo.png'

export default defineComponent({
  name: '本地图片',
  emits: [],
  setup() {
    return {
      logo,
    }
  },
})
</script>

<style>
.qt-image-start-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qt-image-start-page .qt-local-image {
  width: 200px;
  height: 200px;
}
</style>
