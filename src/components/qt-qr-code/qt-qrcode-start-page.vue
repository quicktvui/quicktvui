<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <qt-qr-code
        style="width:200px; height:200px;"
        content="http://www.xxxx.com/"
        :optimize="true"/>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '使用初探',
  setup() {
    return {}
  },
});

</script>

<style>
</style>
