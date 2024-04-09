<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTWebView"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`webview/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTWebViewComponentList from "../../components/qt-web-view";

export default defineComponent({
  name: 'QTWebView',
  setup() {
    const pageList = Object.keys(QTWebViewComponentList).map(data => ({
      id: data,
      name: QTWebViewComponentList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
