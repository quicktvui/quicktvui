<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTPluginView"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
            v-for="item in pageList" :key="item.id"
            :text="item.name"
            :url="`plugin-view/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTPluginViewPageList from "../../components/qt-plugin-view";

export default defineComponent({
  name: 'PluginView',
  setup() {
    const pageList = Object.keys(QTPluginViewPageList).map(data => ({
      id: data,
      name: QTPluginViewPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
