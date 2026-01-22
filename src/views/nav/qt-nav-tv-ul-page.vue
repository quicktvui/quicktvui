<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="TVUl"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`tv-ul/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import QTTVUlPageList from '../../components/qt-tv-ul'

export default defineComponent({
  name: 'TVUl',
  emits: [],
  setup() {
    const pageList = Object.keys(QTTVUlPageList).map((data) => ({
      id: data,
      name: QTTVUlPageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
