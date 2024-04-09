<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTX5WebView"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`x5webview/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTX5WebViewComponentList from "../../components/qt-x5web-view";

export default defineComponent({
  name: 'QTX5WebView',
  setup() {
    const pageList = Object.keys(QTX5WebViewComponentList).map(data => ({
      id: data,
      name: QTX5WebViewComponentList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
