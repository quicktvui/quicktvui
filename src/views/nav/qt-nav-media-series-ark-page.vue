<template>
  <qt-view class="page-container">
    <qt-text
      ref="titleRef"
      class="page-title"
      gravity="center"
      text="QTMediaSeriesArk 示例"
    ></qt-text>

    <qt-waterfall ref="waterfall" class="waterfall-container">
      <template v-slot:section>
        <qt-vue-section :type="seriesSectionTypes.example1" keyName="_id" class="waterfall-content">
          <qt-view class="example-section">
            <qt-text class="section-title" text="示例 1: 纯数字样式"></qt-text>
            <qt-media-series-ark
              ref="seriesArkRef1"
              :totalEpisodes="100"
              :currentIndex="0"
              seriesStyle="number_only"
              :showGroup="true"
              @item-click="onItemClick1"
            />
          </qt-view>
        </qt-vue-section>

        <qt-vue-section :type="seriesSectionTypes.example2" keyName="_id" class="waterfall-content">
          <qt-view class="example-section">
            <qt-text class="section-title" text="示例 2: 纯文字样式"></qt-text>
            <qt-media-series-ark
              ref="seriesArkRef2"
              :totalEpisodes="50"
              :currentIndex="5"
              seriesStyle="text_only"
              :showGroup="true"
              @item-click="onItemClick2"
            />
          </qt-view>
        </qt-vue-section>

        <qt-vue-section :type="seriesSectionTypes.example3" keyName="_id" class="waterfall-content">
          <qt-view class="example-section">
            <qt-text class="section-title" text="示例 3: 图片在上文字在下"></qt-text>
            <qt-media-series-ark
              ref="seriesArkRef3"
              :totalEpisodes="80"
              :currentIndex="10"
              seriesStyle="image_top_text_bottom"
              :showGroup="false"
              @item-click="onItemClick3"
            />
          </qt-view>
        </qt-vue-section>
      </template>
    </qt-waterfall>
  </qt-view>
</template>

<script lang="ts">
export default {
  name: 'qt-nav-media-series-ark-page',
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

const seriesArkRef1 = ref<any>()
const seriesArkRef2 = ref<any>()
const seriesArkRef3 = ref<any>()
const waterfall = ref<QTIWaterfall>()
const seriesSectionTypes = {
  example1: 20001,
  example2: 20002,
  example3: 20003,
}
const titleRef = ref()

const onItemClick1 = (e: any) => {
  console.log('示例 1 点击:', e)
  const item = e.item
  if (item) {
    console.log(`选中了第 ${item.episodeNumber} 集`)
  }
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

const onESCreate = () => {
  const waterfallData: QTWaterfall = {
    width: 1840,
    height: 900,
  }
  waterfall.value?.init(waterfallData)

  const sectionBaseStyle = {
    width: 1840,
    height: 320,
  }

  const sectionList: QTWaterfallSection[] = [
    {
      _id: 'media-series-ark-example-1',
      type: seriesSectionTypes.example1,
      itemList: [],
      style: {
        ...sectionBaseStyle,
        marginBottom: 40,
      },
    },
    {
      _id: 'media-series-ark-example-2',
      type: seriesSectionTypes.example2,
      itemList: [],
      style: {
        ...sectionBaseStyle,
        marginBottom: 40,
      },
    },
    {
      _id: 'media-series-ark-example-3',
      type: seriesSectionTypes.example3,
      itemList: [],
      style: {
        ...sectionBaseStyle,
      },
    },
  ]

  waterfall.value?.setSectionList(sectionList)
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

.waterfall-container {
  width: 1840px;
  height: 900px;
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
