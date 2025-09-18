<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="TVDiv"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`tv-div/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import QTTVDivPageList from '../../components/qt-tv-div'

export default defineComponent({
  emits: [],
  name: 'TVDiv',
  setup() {
    const pageList = Object.keys(QTTVDivPageList).map((data) => ({
      id: data,
      name: QTTVDivPageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
