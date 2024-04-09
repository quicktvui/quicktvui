<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTTabsWaterfall"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`tabs-waterfall/${item.id}`"/>
    </qt-view>
    <qt-view class="quick-ui-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in sectionPageList"
        :key="item.id"
        :text="item.name"
        :url="`tabs-waterfall/${item.id}`"/>
    </qt-view>
    <qt-view class="quick-ui-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in itemPageList"
        :key="item.id"
        :text="item.name"
        :url="`tabs-waterfall/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
  QTTabsWaterfallPageList,
  QTTabsWaterfallSectionPageList,
  QTTabsWaterfallItemPageList
} from "../../components/qt-tabs-waterfall";

export default defineComponent({
  name: 'QTTabsWaterfall',
  setup() {
    const pageList = Object.keys(QTTabsWaterfallPageList).map(data => ({
      id: data,
      name: QTTabsWaterfallPageList[data].name
    }))
    const sectionPageList = Object.keys(QTTabsWaterfallSectionPageList).map(data => ({
      id: data,
      name: QTTabsWaterfallSectionPageList[data].name
    }))
    const itemPageList = Object.keys(QTTabsWaterfallItemPageList).map(data => ({
      id: data,
      name: QTTabsWaterfallItemPageList[data].name
    }))
    return {
      pageList,
      sectionPageList,
      itemPageList
    }
  },
});
</script>

<style>
</style>
