<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="background-color: #40b883">
      <tv-div class="tv-div-gradient-css" ref="divRef">
        <p>Gradient</p>
      </tv-div>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'Gradient',
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
.tv-div-gradient-css {
  display: flex;
  height: 400px;
  width: 400px;
  background-image: linear-gradient(30deg, blue 10%, yellow 40%, red 50%);
  border-width: 2px;
  border-style: solid;
  border-color: black;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
