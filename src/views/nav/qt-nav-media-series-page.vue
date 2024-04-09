<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTSelectSeries"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`select-series/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import QTSelectSeriesPageList from "../../components/qt-select-series";

export default defineComponent({
  name: 'QTMediaSeries',
  setup() {
    const pageList = Object.keys(QTSelectSeriesPageList).map(data => ({
      id: data,
      name: QTSelectSeriesPageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
