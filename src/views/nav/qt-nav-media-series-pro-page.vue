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
            seriesListName="series-list-1"
            groupListName="group-list-1"
            :totalEpisodes="100"
            :currentIndex="play1Index"
            seriesStyle="number_only"
            groupListDownName="series-list-2"
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
            seriesListName="series-list-2"
            groupListName="group-list-2"
            seriesListUpName="group-list-1"
            groupListDownName="series-list-3"
            :totalEpisodes="50"
            :currentIndex="play2Index"
            seriesStyle="text_only"
            :showGroup="true"
            :onLoadPageData="onTextLoadData"
            @item-click="onItemClick2"
          />
        </qt-view>
      </template>
      <template v-slot:media-series-pro-example-3>
        <qt-view class="example-section">
          <qt-text class="section-title" text="示例 3: 图片在上文字在下"></qt-text>
          <qt-media-series-pro
            ref="seriesProRef3"
            seriesListName="series-list-3"
            groupListName="group-list-3"
            seriesListUpName="group-list-2"
            :totalEpisodes="80"
            :currentIndex="10"
            seriesStyle="image_top_text_bottom"
            :showGroup="false"
            @item-click="onItemClick3"
          />
        </qt-view>
      </template>
      <template v-slot:media-series-pro-example-4>
        <qt-view class="example-section">
          <qt-text class="section-title" text="示例 4: 左图右文"></qt-text>
          <qt-media-series-pro
            ref="seriesProRef4"
            seriesListName="series-list-4"
            groupListName="group-list-4"
            seriesListUpName="group-list-3"
            :totalEpisodes="80"
            :currentIndex="0"
            seriesStyle="image_left_text_right"
            :showGroup="false"
            :onLoadPageData="onImageLeftLoadData"
            @item-click="onItemClick4"
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
import { SeriesItemLoad } from '@quicktvui/quicktvui3'
import { Native } from '@extscreen/es3-vue'
import logo from '@/assets/logo.png'
const play1Index = ref(0)
const play2Index = ref(0)
const play4Index = ref(0)

const onItemClick1 = (index: number) => {
  console.log('示例 1 点击:', index)
  play1Index.value = index
  //vue-section监听不到变化
  seriesProRef1.value.updateCurrentIndex(index)
}

const onItemClick2 = (index: number) => {
  play2Index.value = index
  //vue-section监听不到变化
  seriesProRef2.value.updateCurrentIndex(index)
}

const onItemClick3 = (e: any) => {
  console.log('示例 3 点击:', e)
  const item = e.item
  if (item) {
    console.log(`选中了第 ${item.episodeNumber} 集，封面：${item.coverImage}`)
  }
}
const onItemClick4 = (index: number) => {
  play4Index.value = index
  //vue-section监听不到变化
  seriesProRef4.value.updateCurrentIndex(index)
}
const seriesProRef1 = ref()
const seriesProRef2 = ref()
const seriesProRef3 = ref()
const seriesProRef4 = ref()
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
  {
    slotName: 'media-series-pro-example-4',
    height: 320,
  },
]
const onTextLoadData = async (pageIndex: number, pageSize: number): Promise<SeriesItemLoad[]> => {
  // 模拟接口请求
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: SeriesItemLoad[] = []
      for (let i = 0; i < pageSize; i++) {
        const globalIndex = pageIndex * pageSize + i
        data.push({
          title: `第${globalIndex + 1}集 精彩标题很长长长长长长长长精彩标题很长长长长长长长长`,
          subtitle: '更新至2024-03-05',
          imageUrl: 'https://example.com/poster.jpg',
        })
      }
      resolve(data)
    }, 500)
  })
}
const onImageLeftLoadData = async (
  pageIndex: number,
  pageSize: number
): Promise<SeriesItemLoad[]> => {
  // 模拟接口请求
  return new Promise((resolve) => {
    setTimeout(() => {
      const data: SeriesItemLoad[] = []
      for (let i = 0; i < pageSize; i++) {
        const globalIndex = pageIndex * pageSize + i
        data.push({
          title: `第${globalIndex + 1}集 精彩标题很长长长长长长长长精彩标题很长长长长长长长长1222222222222222`,
          subtitle: '更新至2024-03-05',
          imageUrl: `file://${logo}`,
        })
      }
      resolve(data)
    }, 500)
  })
}
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
