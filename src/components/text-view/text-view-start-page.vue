<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="text-view-start-page">
      <text-view text="text-view标签" class="text-view" gravity="centerVertical" :fontSize="44" :ellipsizeMode="2"
                 :paddingRect="[16,0,0,0]"/>

      <text-view text="text-view标签text-view标签text-view标签中国" class="text-view" gravity="centerVertical|left"
                 :fontSize="56" :ellipsizeMode="3" :lines="1" :select="true"/>
    </qt-view>
  </qt-view>
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
.text-view-start-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.text-view-start-page .text-view {
  width: 400px;
  height: 120px;
  color: aqua;
  background-color: rgba(255, 255, 255, 0.2);
  margin-top: 30px;
}
</style>
