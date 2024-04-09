<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTView"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`view/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTViewPageList from "../../components/qt-view";

export default defineComponent({
  name: 'QTView',
  setup() {
    const pageList = Object.keys(QTViewPageList).map(data => ({
      id: data,
      name: QTViewPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
