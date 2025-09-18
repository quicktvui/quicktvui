<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="background-color: #40b883">
      <tv-div class="tv-div-visibility-css" visibility="gone">
        <p>visibility: gone</p>
      </tv-div>
      <tv-div class="tv-div-visibility-css" visibility="invisible">
        <p>visibility: invisible</p>
      </tv-div>
      <tv-div class="tv-div-visibility-css" visibility="visible">
        <p>visibility: visible</p>
      </tv-div>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'visibility',
  emits: [],
  setup() {
    function onESCreate(params) {}

    return {
      onESCreate,
    }
  },
})
</script>

<style>
.tv-div-visibility-css {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
