<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTRow"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`row/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTRowPageList from "../../components/qt-row";

export default defineComponent({
  name: 'QTRow',
  setup() {
    const pageList = Object.keys(QTRowPageList).map(data => ({
      id: data,
      name: QTRowPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
