<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTNavBar"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`nav-bar/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import QTNavBarPageList from "../../components/qt-nav-bar";

export default defineComponent({
  name: 'QTNavBar',
  setup() {
    const pageList = Object.keys(QTNavBarPageList).map(data => ({
      id: data,
      name: QTNavBarPageList[data].name
    }))
    return {
      pageList,
    }
  },
});
</script>

<style>
</style>
