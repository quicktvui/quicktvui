<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`module/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import QtModulePageList from "../../components/qt-module";

export default defineComponent({
  name: 'QTModule',
  setup() {
    const pageList = Object.keys(QtModulePageList).map(data => ({
      id: data,
      name: QtModulePageList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
