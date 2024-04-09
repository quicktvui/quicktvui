<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTSeekBar"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`seekbar/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTSeekBarPageList from "../../components/qt-seek-bar";

export default defineComponent({
  name: 'QTSeekBar',
  setup() {
    const pageList = Object.keys(QTSeekBarPageList).map(data => ({
      id: data,
      name: QTSeekBarPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
