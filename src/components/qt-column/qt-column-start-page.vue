<template>
  <div class="es-sdk-root-css qt-column-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="qt-sdk-content-column-css">
      <s-text-view class="qt-sdk-content-row-item-css" text="Item"></s-text-view>
      <s-text-view class="qt-sdk-content-row-item-css" text="Item"></s-text-view>
      <s-text-view class="qt-sdk-content-row-item-css" text="Item"></s-text-view>
      <s-text-view class="qt-sdk-content-row-item-css" text="Item"></s-text-view>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: '使用初探',
  emits: [],
})
</script>

<style scoped>
.qt-column-root-css {
  align-items: center;
  justify-content: center;
}
.qt-sdk-content-column-css {
  width: 400px;
  height: 600px;
  align-items: center;
  justify-content: center;
  background-color: #ecf5ff;
}

.qt-sdk-content-row-item-css {
  width: 200px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: #c6e2ff;
}
</style>
