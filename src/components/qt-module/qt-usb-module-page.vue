<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-text-button text="获取Usb设备列表" @onButtonClicked="getUsbDeviceList"/>
        <s-text-button text="获取Usb设备信息" @onButtonClicked="getUsbDevice"/>
        <s-text-button text="批量获取Usb设备信息" @onButtonClicked="getUsbDeviceListByArray"/>
        <s-text-button text="Usb设备是否获取权限" @onButtonClicked="isUsbDevicePermissionsGranted"/>
        <s-text-button text="请求Usb设备权限" @onButtonClicked="requestUsbDevicePermission"/>
      </div>
      <s-text-view :text="usbDeviceText"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: "Usb设备模块",
  setup() {
    const usbDeviceText = ref('')
    const usbDeviceListener = {

      onUsbDeviceDetached(usbDeviceInfo) {
        usbDeviceText.value = 'Usb设备拔出：' + JSON.stringify(usbDeviceInfo);
      },

      onUsbDeviceAttached(usbDeviceInfo) {
        usbDeviceText.value = 'Usb设备插入：' + JSON.stringify(usbDeviceInfo);
      }
    }

    function onESCreate(params) {
      qt.usbDevice.addListener(usbDeviceListener)
    }

    function onESDestroy() {
      qt.usbDevice.removeListener(usbDeviceListener)
    }

    //----------------------监听Usb设备插拔-------------------------


    //-----------------------------------------------
    function getUsbDeviceList() {
      qt.usbDevice.getUsbDeviceList().then(
        (usbDeviceList) => {
          usbDeviceText.value = JSON.stringify(usbDeviceList);
        },
        error => {
          usbDeviceText.value = '错误';
        }
      );
    }

    function getUsbDevice() {
      qt.usbDevice.getUsbDevice(30021, 10244).then(
        (usbDevice) => {
          usbDeviceText.value = JSON.stringify(usbDevice);
        },
        error => {
          usbDeviceText.value = '错误';
        }
      );
    }

    function getUsbDeviceListByArray() {
      qt.usbDevice.getUsbDeviceListByArray(
        [[30021, 10244], [3034, 51232]]
      ).then(
        (usbDeviceList) => {
          usbDeviceText.value = JSON.stringify(usbDeviceList);
        },
        error => {
          usbDeviceText.value = '错误';
        }
      );
    }

    function isUsbDevicePermissionsGranted() {
      qt.usbDevice.isUsbDevicePermissionsGranted(30021, 10244).then(
        (hasPermissionsGranted) => {
          usbDeviceText.value = hasPermissionsGranted ? '已经获取了权限' : '未获取权限';
        },
        error => {
          usbDeviceText.value = '错误';
        }
      );
    }

    function requestUsbDevicePermission() {
      qt.usbDevice.requestUsbDevicePermission(
        'com.nanosic.USB_PERMISSION',
        30021, 10244).then(
        (requestUsbDevicePermission) => {
          qt.toast.showToast("请求权限：" + requestUsbDevicePermission);
        },
        error => {
          qt.toast.showToast("请求权限Error!");
        }
      );
    }

    return {
      usbDeviceText,
      onESCreate,
      onESDestroy,
      getUsbDeviceList,
      getUsbDevice,
      getUsbDeviceListByArray,
      isUsbDevicePermissionsGranted,
      requestUsbDevicePermission,
    }
  },
});

</script>
<style>
</style>
