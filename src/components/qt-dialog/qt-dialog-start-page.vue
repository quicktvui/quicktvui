<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-dialog class="qt-sdk-content-dialog-css"> </qt-dialog>
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
.qt-sdk-content-dialog-css {
  width: 960px;
  height: 540px;
  align-items: center;
  justify-content: center;
  background-color: red;
}
</style>
