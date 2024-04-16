<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTAppIcon"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
            v-for="item in pageList" :key="item.id"
            :text="item.name"
            :url="`qt-app-icon/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTAppIconPageList from "../../components/qt-app-icon";

export default defineComponent({
  name: 'QTAppIcon',
  setup() {
    const pageList = Object.keys(QTAppIconPageList).map(data => ({
      id: data,
      name: QTAppIconPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
