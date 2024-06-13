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
    <qt-view class="quick-ui-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
          v-for="item in samplePageList"
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
  QTTabsWaterfallItemPageList,
  QTTabsWaterfallSamplePageList
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
    const samplePageList = Object.keys(QTTabsWaterfallSamplePageList).map(data => ({
      id: data,
      name: QTTabsWaterfallSamplePageList[data].name
    }))
    return {
      pageList,
      sectionPageList,
      itemPageList,
      samplePageList
    }
  },
});
</script>

<style>
</style>
