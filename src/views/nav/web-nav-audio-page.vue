<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="Audio" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`web-audio/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import WebAudioPageList from '../../components/web-audio'

export default defineComponent({
  name: 'Audio',
  emits: [],
  setup() {
    const pageList = Object.keys(WebAudioPageList).map((data) => ({
      id: data,
      name: WebAudioPageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
