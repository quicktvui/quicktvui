<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTUL"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
            v-for="item in pageList" :key="item.id"
            :text="item.name"
            :url="`ul/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTULPageList from "../../components/qt-ul";

export default defineComponent({
  name: 'QTUL',
  emits: [],
  setup() {
    const pageList = Object.keys(QTULPageList).map(data => ({
      id: data,
      name: QTULPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
