<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="Video" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`web-video/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import WebVideoPageList from '../../components/web-video'

export default defineComponent({
  name: 'Video',
  emits: [],
  setup() {
    const pageList = Object.keys(WebVideoPageList).map((data) => ({
      id: data,
      name: WebVideoPageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
