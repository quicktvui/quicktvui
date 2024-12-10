<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-text-button text="启动服务" @onButtonClicked="onButtonClicked"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "服务模块",
  setup() {
    function onButtonClicked() {
      qt.service.startService([
        ['-n', 'com.android.traffic/com.android.traffic.maniservice'],
      ])
    }

    return {
      onButtonClicked,
    }
  },
});

</script>
<style>
</style>
