<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view text="[android.permission.RECORD_AUDIO]"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-text-button text="是否有权限" @onButtonClicked="isPermissionsGranted"/>
        <s-text-button text="请求权限" @onButtonClicked="requestPermissions"/>
      </div>
      <s-text-view :text="text"></s-text-view>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: "权限模块",
  setup() {

    const text = ref('')

    function isPermissionsGranted() {
      let permissionList = [
        'android.permission.RECORD_AUDIO',
      ];
      qt.permission.isPermissionsGranted(permissionList).then(
        (result) => {
          text.value = JSON.stringify(result)
        },
        error => {
          text.value = JSON.stringify(error)
        }
      )
    }

    function requestPermissions() {
      let permissionList = [
        'android.permission.RECORD_AUDIO',
      ];
      qt.permission.requestPermissions(permissionList).then(
        (result) => {
          text.value = JSON.stringify(result)
        },
        error => {
          text.value = JSON.stringify(error)
        }
      )
    }

    return {
      text,
      requestPermissions,
      isPermissionsGranted,
    }
  },
});

</script>
<style>
</style>
