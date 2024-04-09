<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTButton"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`button/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTButtonPageList from "../../components/qt-button";

export default defineComponent({
  name: 'QTButton',
  setup() {
    const pageList = Object.keys(QTButtonPageList).map(data => ({
      id: data,
      name: QTButtonPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
