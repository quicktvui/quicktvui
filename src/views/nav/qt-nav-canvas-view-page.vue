<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`canvas/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import QTCanvasViewPageList from '../../components/qt-canvas-view'

export default defineComponent({
  name: 'CanvasView',
  setup() {
    const pageList = Object.keys(QTCanvasViewPageList).map((data) => ({
      id: data,
      name: QTCanvasViewPageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
