<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTColumn"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`column/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTColumnPageList from "../../components/qt-column";

export default defineComponent({
  name: 'QTColumn',
  setup() {
    const pageList = Object.keys(QTColumnPageList).map(data => ({
      id: data,
      name: QTColumnPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
