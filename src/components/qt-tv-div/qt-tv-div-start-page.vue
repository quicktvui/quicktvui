<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-row class="qt-sdk-content-row-css">
      <tv-div class="tv-div-css" @scroll="onOuterScroll" name="name0">
        <label>水波纹效果: </label>
      </tv-div>
    </qt-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup() {
    const offsetY = ref(0)

    function onESCreate(params) {}

    const onOuterScroll = (e) => {
      offsetY.value = e.offsetY
    }

    return {
      offsetY,
      onESCreate,
      onOuterScroll,
    }
  },
})
</script>

<style>
.tv-div-css {
  width: 200px;
  height: 200px;
  background-color: #40b883;
}

.qt-sdk-content-row-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
}
</style>
