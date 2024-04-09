<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTWaterfall"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in pageList"
        :key="item.id"
        :text="item.name"
        :url="`waterfall/${item.id}`"/>
    </qt-view>
    <qt-view class="quick-ui-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in itemPageList"
        :key="item.id"
        :text="item.name"
        :url="`waterfall/${item.id}`"/>
    </qt-view>
    <qt-view class="quick-ui-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
        v-for="item in sectionPageList"
        :key="item.id"
        :text="item.name"
        :url="`waterfall/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
  QTWaterfallPageList,
  QTWaterfallItemPageList,
  QTWaterfallSectionPageList,
} from "../../components/qt-waterfall";

export default defineComponent({
  name: 'QTWaterfall',
  setup() {
    const pageList = Object.keys(QTWaterfallPageList).map(data => ({
      id: data,
      name: QTWaterfallPageList[data].name
    }))
    const itemPageList = Object.keys(QTWaterfallItemPageList).map(data => ({
      id: data,
      name: QTWaterfallItemPageList[data].name
    }))
    const sectionPageList = Object.keys(QTWaterfallSectionPageList).map(data => ({
      id: data,
      name: QTWaterfallSectionPageList[data].name
    }))

    return {
      pageList,
      itemPageList,
      sectionPageList
    }
  },
});
</script>

<style>
</style>
