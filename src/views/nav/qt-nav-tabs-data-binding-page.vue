<template>
  <qt-view class="quick-ui-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTTabsDataBinding"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`tabs-data-binding/${item.id}`"/>
    </qt-view>
    <qt-view class="quick-ui-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
          v-for="item in sectionPageList"
          :key="item.id"
          :text="item.name"
          :url="`tabs-data-binding/${item.id}`"/>
    </qt-view>
    <qt-view class="quick-ui-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
          v-for="item in itemPageList"
          :key="item.id"
          :text="item.name"
          :url="`tabs-data-binding/${item.id}`"/>
    </qt-view>
    <qt-view class="quick-ui-content-divider-css"/>
    <qt-view class="quick-ui-content-row-css">
      <s-nav-button
          v-for="item in samplePageList"
          :key="item.id"
          :text="item.name"
          :url="`tabs-data-binding/${item.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {
  QTTabsWaterfallDataBindingPageList,
  QTTabsWaterfallDataBindingSectionPageList,
  QTTabsWaterfallDataBindingItemPageList,
  QTTabsWaterfallDataBindingSamplePageList,
} from "../../components/qt-tabs-data-binding";

export default defineComponent({
  name: 'QTTabsDataBinding',
  setup() {
    const pageList = Object.keys(QTTabsWaterfallDataBindingPageList).map(data => ({
      id: data,
      name: QTTabsWaterfallDataBindingPageList[data].name
    }))
    const sectionPageList = Object.keys(QTTabsWaterfallDataBindingSectionPageList).map(data => ({
      id: data,
      name: QTTabsWaterfallDataBindingSectionPageList[data].name
    }))
    const itemPageList = Object.keys(QTTabsWaterfallDataBindingItemPageList).map(data => ({
      id: data,
      name: QTTabsWaterfallDataBindingItemPageList[data].name
    }))
    const samplePageList = Object.keys(QTTabsWaterfallDataBindingSamplePageList).map(data => ({
      id: data,
      name: QTTabsWaterfallDataBindingSamplePageList[data].name
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
