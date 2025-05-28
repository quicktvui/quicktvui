<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="qt-app-icon-view-start-page">
      <qt-app-icon ref="appIconRef" style="height: 250px; width: 250px; background-color: red" />
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'

export default defineComponent({
  name: 'QTAppIcon',
  setup(props, context) {
    const appIconRef = ref()

    const onESCreate = (params) => {
      console.log('-----------onESCreate--1-->>>>>', appIconRef.value)
      appIconRef.value?.setRoundingRadius(6)
      appIconRef.value?.setPackageName('com.extscreen.runtime')
    }
    return {
      appIconRef,
      onESCreate,
    }
  },
})
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
