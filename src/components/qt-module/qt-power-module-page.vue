<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="WakeLockAcquire" @onButtonClicked="onWakeLockAcquired"/>
      <s-text-button text="WakeLockRelease" @onButtonClicked="onWakeLockReleased"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "电源模块",
  setup() {

    function onWakeLockAcquired() {
      qt.toast.showToast("wakeLockAcquire~");
      qt.power.wakeLockAcquire();
    }

    function onWakeLockReleased() {
      qt.toast.showToast("wakeLockRelease~");
      qt.power.wakeLockRelease();
    }

    return {
      onWakeLockReleased,
      onWakeLockAcquired,
    }
  },
});

</script>
<style>
</style>
