<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTAnimation"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`animation/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTAnimationPageList from "../../components/qt-animation";

export default defineComponent({
  name: 'QTAnimation',
  setup() {
    const pageList = Object.keys(QTAnimationPageList).map(data => ({
      id: data,
      name: QTAnimationPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
