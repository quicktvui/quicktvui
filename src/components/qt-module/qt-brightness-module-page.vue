<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view :text="'当前系统亮度模式：' + currentBrightnessMode"></s-text-view>
      <s-text-view :text="'当前亮度(0-255)：' + currentBrightness"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-text-button text="增加系统亮度" @onButtonClicked="addScreenBrightness"/>
        <s-text-button text="减少系统亮度" @onButtonClicked="reduceScreenBrightness"/>
        <s-text-button text="0%亮度" @onButtonClicked="setZeroBrightness"/>
        <s-text-button text="50%亮度" @onButtonClicked="setHalfBrightness"/>
        <s-text-button text="100%亮度" @onButtonClicked="setMaxBrightness"/>
        <s-text-button text="增加当前window亮度" @onButtonClicked="addWindowBrightness"/>
        <s-text-button text="减少当前window亮度" @onButtonClicked="reduceWindowBrightness"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: "亮度调节模块",
  setup() {
    const currentBrightnessMode = ref<any>()
    const currentBrightness = ref<any>()

    const onESCreate = (params) => {
      qt.brightness.getScreenBrightness().then(
        value => {
          let result = value.result;
          currentBrightness.value = result + '';
        },
        error => {
          qt.toast.showToast('调用失败')
        }
      )
      qt.brightness.getScreenBrightnessMode().then(
        value => {
          let result = value.result;
          currentBrightnessMode.value = result + '';
          qt.toast.showToast(result + '')
        },
        error => {
          qt.toast.showToast('调用失败')
        }
      )
    }

    function addScreenBrightness() {
      currentBrightness.value++
      qt.brightness.changeScreenBrightness(currentBrightness.value)
    }

    function reduceScreenBrightness() {
      currentBrightness.value--
      qt.brightness.changeScreenBrightness(currentBrightness.value)
    }

    function setZeroBrightness() {
      currentBrightness.value = 1;
      qt.brightness.changeScreenBrightness(currentBrightness.value)
    }

    function setHalfBrightness() {
      currentBrightness.value = 127;
      qt.brightness.changeScreenBrightness(currentBrightness.value)
    }

    function setMaxBrightness() {
      currentBrightness.value = 255;
      qt.brightness.changeScreenBrightness(currentBrightness.value)
    }

    function addWindowBrightness() {
      currentBrightness.value++
      qt.brightness.changeWindowBrightness(currentBrightness.value)
    }

    function reduceWindowBrightness() {
      currentBrightness.value--
      qt.brightness.changeWindowBrightness(currentBrightness.value)
    }

    const onESDestroy = () => {

    }

    return {
      onESCreate,
      onESDestroy,
      currentBrightnessMode,
      currentBrightness,
      addScreenBrightness,
      reduceScreenBrightness,
      setZeroBrightness,
      setHalfBrightness,
      setMaxBrightness,
      addWindowBrightness,
      reduceWindowBrightness,
    }
  },
});

</script>
<style>
</style>
