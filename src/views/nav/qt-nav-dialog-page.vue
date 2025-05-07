<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="QTDialog"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`dialog/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import QTDialogPageList from '../../components/qt-dialog'

export default defineComponent({
  name: 'QTDialog',
  emits: [],
  setup() {
    const pageList = Object.keys(QTDialogPageList).map((data) => ({
      id: data,
      name: QTDialogPageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
