<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTClassifiedListView"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`classified-list-view/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import QTClassifiedListViewPageList from "../../components/qt-classified-list-view";

export default defineComponent({
  name: 'QTClassifiedListView',
  setup() {
    const pageList = Object.keys(QTClassifiedListViewPageList).map(data => ({
      id: data,
      name: QTClassifiedListViewPageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
