<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="background-color: #40b883">
      <tv-div class="tv-div-transform-css" ref="divRef">
        <p>Transform</p>
      </tv-div>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'transform',
  emits: [],
  setup() {
    const divRef = ref(null)

    return {
      divRef,
    }
  },
})
</script>

<style scoped>
.tv-div-transform-css {
  width: 200px;
  height: 200px;
  background-color: red;
  transform: rotate(30deg) scale(0.5);
}
</style>
