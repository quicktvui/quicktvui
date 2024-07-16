<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-app-icon-view-start-page">
      <qt-app-icon style="height: 250px;width: 250px;background-color: red"
                   packageName="com.extscreen.runtime"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'QTAppIcon',
  setup(props, context) {
    return {}
  },
});
</script>

<style>
.qt-app-icon-view-start-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
