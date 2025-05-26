<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="Alert" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`web-alert/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import WebAlertPageList from '../../components/web-alert'

export default defineComponent({
  emits: [],
  setup() {
    const pageList = Object.keys(WebAlertPageList).map((data) => ({
      id: data,
      name: WebAlertPageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
