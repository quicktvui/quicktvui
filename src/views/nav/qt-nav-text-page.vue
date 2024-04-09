<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTText"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`text/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTTextPageList from "../../components/qt-text";

export default defineComponent({
  name: 'QTText',
  setup() {
    const pageList = Object.keys(QTTextPageList).map(data => ({
      id: data,
      name: QTTextPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
