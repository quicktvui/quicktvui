<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTRow"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`api/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTAPIPageList from "../../components/qt-api";

export default defineComponent({
  name: 'QTAPI',
  setup() {
    const pageList = Object.keys(QTAPIPageList).map(data => ({
      id: data,
      name: QTAPIPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
