<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-web-view
        ref="webviewRef"
        sid="webview"
        class="es-sdk-web-view-css"/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref, watch} from "vue";
import {QTIWebView} from "@quicktvui/quicktvui3";
import {useESToast} from "@extscreen/es3-core";

export default defineComponent({
  name: '使用初探',
  setup() {
    const webviewRef = ref<QTIWebView | undefined>()
    const toast = useESToast()
    watch(
        () => [webviewRef.value] as const,
        ([webview], [oldWebview]) => {
          toast.showToast("实例化成功")
          console.log('----------watch------webview--->>>>', webview)
          qt.webView.loadUrl(webviewRef, 'https://quicktvui.com')
        },
        {flush: 'post'}
    )

    function onESCreate(params) {
      console.log('----------onESCreate------loadUrl------>>>>', qt, qt.webView)
      toast.showToast("onESCreate")
      setTimeout(() => {
        console.log('----------onESCreate------start------>>>>')
        qt.webView.loadUrl('webview', 'https://baidu.com')
      }, 10000)
    }

    return {
      webviewRef,
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
