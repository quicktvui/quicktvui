<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="TVImage"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`tv-image/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import QTTVImagePageList from '../../components/qt-tv-image'

export default defineComponent({
  name: 'TVImage',
  emits: [],
  setup() {
    const pageList = Object.keys(QTTVImagePageList).map((data) => ({
      id: data,
      name: QTTVImagePageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
