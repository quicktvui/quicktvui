<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="AudioService" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`web-audio-service/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import WebAudioServicePageList from '../../components/web-audio-service'

export default defineComponent({
  emits: [],
  setup() {
    const pageList = Object.keys(WebAudioServicePageList).map((data) => ({
      id: data,
      name: WebAudioServicePageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
