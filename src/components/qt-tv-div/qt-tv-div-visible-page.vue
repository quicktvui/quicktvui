<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="background-color: #40b883">
      <tv-div class="tv-div-visible-css" name="name0" :visible="false">
        <label>:visible="false"</label>
      </tv-div>

      <tv-div class="tv-div-visible-css" name="name1" :visible="true">
        <label>:visible="true"</label>
      </tv-div>

      <tv-div class="tv-div-visible-css" name="name1" :visible="visible">
        <label>visible</label>
      </tv-div>
    </qt-column>
    <qt-row>
      <s-text-button text="visible" @onButtonClicked="setVisible" />
    </qt-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'

export default defineComponent({
  name: 'visible',
  emits: [],
  setup() {
    const visible = ref<boolean>(true)

    function setVisible() {
      visible.value = !visible.value
    }

    return {
      visible,
      setVisible,
    }
  },
})
</script>

<style>
.tv-div-visible-css {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
