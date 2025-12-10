<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTFileBrowse"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`file-browse/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import QTFileBrowsePageList from '../../components/qt-file-browse'

export default defineComponent({
  setup() {
    const pageList = Object.keys(QTFileBrowsePageList).map((data) => ({
      id: data,
      name: QTFileBrowsePageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
