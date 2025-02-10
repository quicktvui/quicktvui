<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-view :text="'上传状态：' + statusText"></s-text-view>
      <s-text-button text="点击上传" @onButtonClicked="onButtonClicked"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ESUploadInfo, ESUploadListener} from "@extscreen/es3-core";
import {ref} from "vue";

export default defineComponent({
  name: "上传模块",
  setup() {
    const statusText = ref('')
    const params: Map<string, string> = new Map<string, string>()
    const uploadInfo: ESUploadInfo = {
      id: '111',
      url: "http://134.175.107.190/api/v1/applog/upload/exifUploadlog?ip=127.0.0.1",
      mediaType: "multipart/form-data",
      filePramsKey: "logname",
      filePath: '/video/bbb.zip',
      params,
    }

    function onButtonClicked() {
      qt.upload.upload(uploadInfo)
    }

    const listener: ESUploadListener = {
      onUploadStart() {
        statusText.value = 'onUploadStart:' + JSON.stringify(uploadInfo)
      },
      onUploadSuccess() {
        statusText.value = 'onUploadSuccess:' + JSON.stringify(uploadInfo)
      },
      onUploadError() {
        statusText.value = 'onUploadError:' + JSON.stringify(uploadInfo)
      }
    }

    function onESCreate(params) {
      qt.upload.addListener(uploadInfo, listener)
    }

    function onESDestroy() {
      qt.upload.removeListener(listener)
    }

    return {
      statusText,
      onButtonClicked,
      onESCreate,
      onESDestroy
    }
  },
});

</script>
<style>
</style>
