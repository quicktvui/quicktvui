<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-row-css">
      <tv-img
        name="name5"
        :selected="false"
        showOnState="focused"
        :visible="true"
        :src="defaultImage"
        class="image center tint-color"
      />
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import defaultImage from '../../assets/ad.jpg'

/**
 * 问题：
 * 1、:src="defaultImage" 不显示
 */
export default defineComponent({
  name: 'TintColor',
  emits: [],
  setup() {
    return {
      defaultImage,
    }
  },
})
</script>

<style scoped>
.image {
  width: 300px;
  height: 180px;
  margin: 15px;
  border-width: 1px;
  border-style: solid;
  border-color: #40b883;
}

.contain {
  resize-mode: contain;
}

.cover {
  resize-mode: cover;
}

.center {
  resize-mode: center;
}

.tint-color {
  tint-color: #40b88399;
}
</style>
