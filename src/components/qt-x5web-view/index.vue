<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`x5webview/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import QTX5WebViewComponentList from "./index";

export default defineComponent({
  name: 'qt-x5web-view',
  setup() {
    const pageList = Object.keys(QTX5WebViewComponentList).map(data => ({
      id: data,
      name: QTX5WebViewComponentList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
