<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view text="设备信息模块用来获取开发相关设备信息"></s-text-view>
      <s-text-view :text="'androidAPILevel：' + androidAPILevel + '   buildSDKVersion：' + buildSDKVersion"></s-text-view>
      <s-text-view :text="'totalMemory：' + totalMemory + '   availMemory：' + availMemory"></s-text-view>
      <s-text-view :text="'screenWidth：' + screenWidth + '   screenHeight：' + screenHeight"></s-text-view>
      <s-text-view :text="'deviceEthMac：' + deviceEthMac + '   deviceWifiMac：' + deviceWifiMac"></s-text-view>
      <s-text-view :text="'ipAddress：' + ipAddress"></s-text-view>

      <s-text-view :text="'resolution：' + resolution + '   density：' + density +
      '   densityDpi：' + densityDpi + '   scaledDensity：' + scaledDensity"></s-text-view>

      <s-text-view
        :text="'buildVersionRelease：' + buildVersionRelease + '   buildManufacturer：' + buildManufacturer"></s-text-view>
      <s-text-view :text="'buildSerial：' + buildSerial + '   buildModel：' + buildModel"></s-text-view>
      <s-text-view :text="'buildBrand：' + buildBrand + '   buildDevice：' + buildDevice"></s-text-view>
      <s-text-view :text="'buildProduct：' + buildProduct + '   buildHardware：' + buildHardware"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: "设备信息模块",
  setup() {

    const totalMemory = ref(0)
    const availMemory = ref(0)

    const screenWidth = ref(0)
    const screenHeight = ref(0)

    const androidAPILevel = ref('')

    const deviceEthMac = ref('')
    const deviceWifiMac = ref('')

    const buildManufacturer = ref('')
    const buildVersionRelease = ref('')
    const buildModel = ref('')
    const buildBrand = ref('')
    const buildDevice = ref('')
    const buildProduct = ref('')
    const buildHardware = ref('')
    const buildSDKVersion = ref(-1)

    const ipAddress = ref('')

    const buildSerial = ref('')

    const resolution = ref('')
    const density = ref(-1)
    const densityDpi = ref(-1)
    const scaledDensity = ref(-1)

    const onESCreate = (params) => {

      totalMemory.value = qt.device.getDeviceTotalMemory()
      availMemory.value = qt.device.getDeviceTotalMemory()

      screenWidth.value = qt.device.getScreenWidth()
      screenHeight.value = qt.device.getScreenHeight()

      androidAPILevel.value = qt.device.getAndroidAPILevel() ?? ''

      deviceEthMac.value = qt.device.getDeviceEthMac()
      deviceWifiMac.value = qt.device.getDeviceWifiMac()

      buildManufacturer.value = qt.device.getBuildManufacturer()
      buildVersionRelease.value = qt.device.getBuildVersionRelease()
      buildModel.value = qt.device.getBuildModel()
      buildBrand.value = qt.device.getBuildBrand()
      buildDevice.value = qt.device.getBuildDevice()
      buildProduct.value = qt.device.getBuildProduct()
      buildHardware.value = qt.device.getBuildHardware()
      buildSDKVersion.value = qt.device.getBuildVersionSDKInt()

      ipAddress.value = qt.device.getIPAddress()

      buildSerial.value = qt.device.getBuildSerial()

      resolution.value = qt.device.getResolution()
      density.value = qt.device.getDensity()
      densityDpi.value = qt.device.getDensityDpi()
      scaledDensity.value = qt.device.getScaledDensity()

    }

    return {
      onESCreate,
      totalMemory,
      availMemory,

      screenWidth,
      screenHeight,

      androidAPILevel,

      deviceEthMac,
      deviceWifiMac,

      buildManufacturer,
      buildVersionRelease,
      buildModel,
      buildBrand,
      buildDevice,
      buildProduct,
      buildHardware,
      buildSDKVersion,

      ipAddress,

      buildSerial,

      resolution,
      density,
      densityDpi,
      scaledDensity,
    }
  },
});

</script>
<style>
</style>
