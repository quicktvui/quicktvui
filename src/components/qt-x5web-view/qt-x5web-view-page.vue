<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css"
                  :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <qt-x5web-view
        @onPageStarted="onPageStarted"
        ref="webview"
        class="es-sdk-web-view-css"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTIX5WebView} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'es-x5web-view-sample',
  setup() {
    const webview = ref<QTIX5WebView>()

    function onPageStarted(url) {
    }

    function onESCreate(params) {
      webview.value?.loadUrl('https://quicktvui.com/zh-CN/guide/basic/installation.html')
    }

    return {
      webview,
      onESCreate,
      onPageStarted
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
