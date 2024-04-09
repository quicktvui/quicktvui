<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTCollapse"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`collapse/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTCollapsePageList from "../../components/qt-collapse";

export default defineComponent({
  name: 'QTCollapse',
  setup() {
    const pageList = Object.keys(QTCollapsePageList).map(data => ({
      id: data,
      name: QTCollapsePageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
