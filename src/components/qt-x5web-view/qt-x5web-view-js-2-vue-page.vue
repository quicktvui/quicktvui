<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <qt-x5web-view
        @onPageFinished="onPageFinished"
        @onJs2Vue="onJs2Vue"
        ref="webview"
        class="es-sdk-web-view-css"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTIWebView} from "@quicktvui/quicktvui3";
import {useESToast} from "@extscreen/es3-core";

export default defineComponent({
  name: 'Js2Vue',
  setup() {
    const webview = ref<QTIWebView>()
    const toast = useESToast()


    function onPageFinished(url) {
    }

    function onJs2Vue(value) {
      toast.showToast("来自js的消息：" + value)
    }

    function onESCreate(params) {
      webview.value?.loadUrl('http://192.168.80.32')
    }

    return {
      webview,
      onESCreate,
      onPageFinished,
      onJs2Vue
    }
  },
});

</script>

<style>
.es-sdk-web-view-css {
  width: 1920px;
  height: 1080px;
}
</style>
