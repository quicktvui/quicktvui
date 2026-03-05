<template>
  <qt-view class="page-container">
    <qt-text
      ref="titleRef"
      class="page-title"
      gravity="center"
      text="QTMediaSeriesPro 示例"
    ></qt-text>
    <qt-waterfall-pro :size="{ width: 1840, height: 900 }" :vueSections="vueSections">
      <template v-slot:media-series-pro-example-1>
        <qt-view class="example-section">
          <qt-text class="section-title" text="示例 1: 纯数字样式"></qt-text>
          <qt-media-series-pro
            ref="seriesProRef1"
            :totalEpisodes="100"
            :currentIndex="play1Index"
            seriesStyle="number_only"
            :showGroup="true"
            @item-click="onItemClick1"
          />
        </qt-view>
      </template>
      <template v-slot:media-series-pro-example-2>
        <qt-view class="example-section">
          <qt-text class="section-title" text="示例 2: 纯文字样式"></qt-text>
          <qt-media-series-pro
            ref="seriesProRef2"
            :totalEpisodes="50"
            :currentIndex="5"
            seriesStyle="text_only"
            :showGroup="true"
            @item-click="onItemClick2"
          />
        </qt-view>
      </template>
      <template v-slot:media-series-pro-example-3>
        <qt-view class="example-section">
          <qt-text class="section-title" text="示例 3: 图片在上文字在下"></qt-text>
          <qt-media-series-pro
            ref="seriesProRef3"
            :totalEpisodes="80"
            :currentIndex="10"
            seriesStyle="image_top_text_bottom"
            :showGroup="false"
            @item-click="onItemClick3"
          />
        </qt-view>
      </template>
    </qt-waterfall-pro>
  </qt-view>
</template>

<script lang="ts">
export default {
  name: 'qt-nav-media-series-pro-page',
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,
  QTWaterfallSectionType,
} from '@quicktvui/quicktvui3'
import { Native } from '@extscreen/es3-vue'

const play1Index = ref(0)

const onItemClick1 = (index: number) => {
  console.log('示例 1 点击:', index)
  play1Index.value = index
  //vue-section监听不到变化
  seriesProRef1.value.updateCurrentIndex(index)
}

const onItemClick2 = (e: any) => {
  console.log('示例 2 点击:', e)
  const item = e.item
  if (item) {
    console.log(`选中了：${item.title}`)
  }
}

const onItemClick3 = (e: any) => {
  console.log('示例 3 点击:', e)
  const item = e.item
  if (item) {
    console.log(`选中了第 ${item.episodeNumber} 集，封面：${item.coverImage}`)
  }
}
const seriesProRef1 = ref()
const onESCreate = () => {}
const vueSections = [
  {
    slotName: 'media-series-pro-example-1',
    height: 320,
  },
  {
    slotName: 'media-series-pro-example-2',
    height: 320,
  },
  {
    slotName: 'media-series-pro-example-3',
    height: 320,
  },
]
defineExpose({
  onESCreate,
})
</script>

<style scoped>
.page-container {
  width: 1920px;
  height: 1080px;
  background-color: #1a1a1a;
  padding: 40px;
}

.page-title {
  width: 100%;
  height: 100px;
  font-size: 48px;
  color: #ffffff;
  margin-bottom: 40px;
}

.waterfall-content {
  width: 100%;
}

.example-section {
  width: 100%;
  margin-bottom: 60px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 30px;
}

.section-title {
  width: 100%;
  height: 60px;
  font-size: 36px;
  color: #00bcd4;
  margin-bottom: 20px;
}
</style>
