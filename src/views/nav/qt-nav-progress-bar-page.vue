<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTProgressBar"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`progressbar/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTProgressBarPageList from "../../components/qt-progress-bar";

export default defineComponent({
  name: 'QTProgressBar',
  setup() {
    const pageList = Object.keys(QTProgressBarPageList).map(data => ({
      id: data,
      name: QTProgressBarPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
