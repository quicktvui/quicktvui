<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view :text="'尺寸变形比例：' + displayScale"></s-text-view>
      <s-text-view :text="'屏幕适配的尺寸：' + displaySize"></s-text-view>
      <s-text-view :text="'屏幕宽度：' + screenWidth"></s-text-view>
      <s-text-view :text="'屏幕高度：' + screenHeight"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: '显示模块',
  setup() {
    const displayScale = ref<number>(0)
    const displaySize = ref<number>(0)
    const screenWidth = ref<number>(0)
    const screenHeight = ref<number>(0)

    const onESCreate = () => {
      displayScale.value = qt.display.getDisplayScale()
      displaySize.value = qt.display.getDisplaySize(100)
      screenWidth.value = qt.display.getScreenWidth()
      screenHeight.value = qt.display.getScreenHeight()
    }

    return {
      onESCreate,
      displayScale,
      displaySize,
      screenWidth,
      screenHeight,
    }
  },
});

</script>
<style>
</style>
