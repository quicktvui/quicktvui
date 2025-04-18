<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTLongImage"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`long-image/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import QTLongImagePageList from '../../components/qt-long-image'

export default defineComponent({
  setup() {
    const pageList = Object.keys(QTLongImagePageList).map((data) => ({
      id: data,
      name: QTLongImagePageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
