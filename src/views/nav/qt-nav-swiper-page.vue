<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTSwiper"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
            v-for="item in pageList" :key="item.id"
            :text="item.name"
            :url="`swiper/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import QTSwiperPageList from "../../components/qt-swiper";

export default defineComponent({
  name: 'QTSwiper',
  setup() {
    const pageList = Object.keys(QTSwiperPageList).map(data => ({
      id: data,
      name: QTSwiperPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
