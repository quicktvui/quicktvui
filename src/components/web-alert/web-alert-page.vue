<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" text="Alert" />
    <qt-view class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-button text="Alert" @onButtonClicked="onButtonClicked" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  emits: [],
  setup() {
    function onButtonClicked() {
      alert('hello alert!')
    }

    return {
      onButtonClicked,
    }
  },
})
</script>

<style></style>
