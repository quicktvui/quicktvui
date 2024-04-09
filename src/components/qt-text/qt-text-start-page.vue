<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-view class="qt-text-start-page">
      <qt-text text="qt-text" class="qt-text" gravity="center" :fontSize="44" :ellipsizeMode="2"/>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    return {}
  },
});
</script>

<style>
.qt-text-start-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qt-text-start-page .qt-text {
  width: 600px;
  height: 100px;
  color: aqua;
  background-color: red;
}
</style>
