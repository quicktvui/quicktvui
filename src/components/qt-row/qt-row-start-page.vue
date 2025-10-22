<template>
  <div class="es-sdk-root-css qt-row-root-css" :clipChildren="false">
    <qt-row class="qt-sdk-content-row-css">
      <s-text-view class="qt-sdk-content-row-item-css" text="Item"></s-text-view>
      <s-text-view class="qt-sdk-content-row-item-css" text="Item"></s-text-view>
      <s-text-view class="qt-sdk-content-row-item-css" text="Item"></s-text-view>
      <s-text-view class="qt-sdk-content-row-item-css" text="Item"></s-text-view>
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

<style scoped>
.qt-row-root-css {
  align-items: center;
  justify-content: center;
}

.qt-sdk-content-row-css {
  width: 1000px;
  height: 400px;
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
