<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-nav-button
          v-for="(item, _) in pageList" :key="item.id"
          :text="item.name"
          :url="`component/${item.id}`"/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";
import QtComponentPageList from "../../components/qt-component";

export default defineComponent({
  name: 'QTComponent',
  setup() {
    const pageList = Object.keys(QtComponentPageList).map(data => ({
      id: data,
      name: QtComponentPageList[data].name,
    }))

    return {
      pageList
    }
  },
});

</script>
<style>
</style>
