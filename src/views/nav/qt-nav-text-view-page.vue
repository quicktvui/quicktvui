<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="TextView"></s-title-view>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList" :key="item.id"
          :text="item.name"
          :url="`text-view/${item.id}`"/>
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import TextViewPageList from "../../components/text-view";

export default defineComponent({
  name: 'TextView',
  setup() {
    const pageList = Object.keys(TextViewPageList).map(data => ({
      id: data,
      name: TextViewPageList[data].name,
    }))
    return {
      pageList,
    }
  },
});

</script>
<style>
</style>
