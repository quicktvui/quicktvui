<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="IndicatorListView"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
            v-for="item in pageList" :key="item.id"
            :text="item.name"
            :url="`qt-indicator-list/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTIndicatorPageList from "../../components/qt-indicator-list-view";

export default defineComponent({
  name: 'IndicatorListView',
  setup() {
    const pageList = Object.keys(QTIndicatorPageList).map(data => ({
      id: data,
      name: QTIndicatorPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
