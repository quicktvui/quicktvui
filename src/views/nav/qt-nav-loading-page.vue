<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTLoading"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`loading/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTLoadingPageList from "../../components/qt-loading";

export default defineComponent({
  name: 'QTLoading',
  setup() {
    const pageList = Object.keys(QTLoadingPageList).map(data => ({
      id: data,
      name: QTLoadingPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
