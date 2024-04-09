<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTImage"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`image/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTImagePageList from "../../components/qt-image";

export default defineComponent({
  name: 'QTImage',
  setup() {
    const pageList = Object.keys(QTImagePageList).map(data => ({
      id: data,
      name: QTImagePageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
