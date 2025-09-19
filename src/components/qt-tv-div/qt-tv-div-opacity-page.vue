<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="background-color: #40b883">
      <tv-div class="tv-div-opacity-css" opacity="0.2">
        <p>opacity: 0.2</p>
      </tv-div>
      <tv-div class="tv-div-opacity-css" opacity="0.5">
        <p>opacity: 0.5</p>
      </tv-div>
      <tv-div class="tv-div-opacity-css" opacity="0.8">
        <p>opacity: 0.8</p>
      </tv-div>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'opacity',
  emits: [],
  setup() {
    function onESCreate(params) {}

    return {
      onESCreate,
    }
  },
})
</script>

<style scoped>
.tv-div-opacity-css {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
