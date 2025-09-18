<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" text="TVSwiper"></s-title-view>
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="es-sdk-content-column-css">
      <qt-view class="es-sdk-content-row-css">
        <s-nav-button
          v-for="item in pageList"
          :key="item.id"
          :text="item.name"
          :url="`tv-swiper/${item.id}`"
        />
      </qt-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import QTTVSwiperPageList from '../../components/qt-tv-swiper'

export default defineComponent({
  name: 'TVSwiper',
  emits: [],
  setup() {
    const pageList = Object.keys(QTTVSwiperPageList).map((data) => ({
      id: data,
      name: QTTVSwiperPageList[data].name,
    }))
    return {
      pageList,
    }
  },
})
</script>
<style></style>
