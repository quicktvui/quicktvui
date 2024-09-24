<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-web-view
        ref="webview"
        sid="webview"
        class="es-sdk-web-view-css"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTIWebView} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '使用初探',
  setup() {
    const webview = ref<QTIWebView>()

    function onESCreate(params) {
      console.log('----------onESCreate------loadUrl------>>>>', qt, qt.webView)
      setTimeout(() => {
        console.log('----------onESCreate------start------>>>>')
        qt.webView.loadUrl('webview', 'https://quicktvui.com')
      }, 1000)
    }

    return {
      webview,
      onESCreate,
    }
  },
});
</script>

<style>
.qt-sdk-content-row-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
}

.qt-sdk-content-row-item-css {
  width: 200px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: #40b883;
}

.es-sdk-web-view-css {
  width: 1920px;
  height: 1080px;
}

</style>
