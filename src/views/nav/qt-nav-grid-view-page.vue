<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTGridView"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`grid-view/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import QTGridViewPageList from "../../components/qt-grid-view";

export default defineComponent({
  name: 'QTGridView',
  setup() {
    const pageList = Object.keys(QTGridViewPageList).map(data => ({
      id: data,
      name: QTGridViewPageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
