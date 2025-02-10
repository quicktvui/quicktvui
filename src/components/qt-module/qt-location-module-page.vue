<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view :text="'当前位置：' + currentLocation"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-text-button text="打开定位设置" @onButtonClicked="onLaunchLocation"/>
        <s-text-button text="获取定位信息" @onButtonClicked="onGetLocation"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESLocationInfo, ESLocationListener} from "@extscreen/es3-core";
import {ref} from "vue";

export default defineComponent({
  name: "定位模块",
  setup() {

    const currentLocation = ref('')

    function onLaunchLocation() {
      qt.location.launchLocation()
    }

    function onGetLocation() {
      qt.location.getLocation().then((location) => {
        currentLocation.value = JSON.stringify(location)
      }, error => {
        currentLocation.value = error + ""
      })
    }

    //监听地址变化
    const listener: ESLocationListener = {
      onLocationChange(location: ESLocationInfo | null) {
        currentLocation.value = JSON.stringify(location)
      }
    }

    const onESCreate = (params) => {
      qt.location.addListener(listener)
    }

    const onESDestroy = () => {
      qt.location.removeListener(listener)
    }

    return {
      onESCreate,
      onESDestroy,
      onLaunchLocation,
      onGetLocation,
      currentLocation,
    }
  },
});

</script>
<style>
</style>
