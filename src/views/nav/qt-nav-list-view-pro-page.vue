<template>
  <qt-view class="page-container">
    <qt-text ref="titleRef" class="page-title" gravity="center" text="QTListViewPro 示例"></qt-text>
    <qt-waterfall-pro :size="{ width: 1840, height: 900 }" :vueSections="vueSections">
      <template v-slot:list-view-pro-example-1>
        <qt-view class="example-section">
          <qt-text class="section-title" text="示例 1: 垂直列表"></qt-text>
          <qt-list-view-pro
            ref="listViewProRef1"
            name="list-view-1"
            :size="{ width: 1800, height: 400 }"
            :horizontal="false"
            :value="verticalListData"
            @item-click="onItemClick1"
            @item-focused="onItemFocused1"
            @focus-lost="onFocusLost1"
          >
            <qt-view type="1" class="list-item" :focusable="true" eventClick>
              <qt-text text="${title}" class="list-item-text" gravity="center"></qt-text>
            </qt-view>
          </qt-list-view-pro>
        </qt-view>
      </template>
      <template v-slot:list-view-pro-example-2>
        <qt-view class="example-section">
          <qt-text class="section-title" text="示例 2: 水平列表"></qt-text>
          <qt-list-view-pro
            ref="listViewProRef2"
            name="list-view-2"
            :size="{ width: 1800, height: 200 }"
            :horizontal="true"
            :value="horizontalListData"
            @item-click="onItemClick2"
            @item-focused="onItemFocused2"
          >
            <qt-view type="1" class="horizontal-list-item" :focusable="true" eventClick>
              <qt-text text="${name}" class="horizontal-list-item-text" gravity="center"></qt-text>
            </qt-view>
          </qt-list-view-pro>
        </qt-view>
      </template>
      <template v-slot:list-view-pro-example-3>
        <qt-view class="example-section">
          <qt-text class="section-title" text="示例 3: 带图片的列表"></qt-text>
          <qt-list-view-pro
            ref="listViewProRef3"
            name="list-view-3"
            :size="{ width: 1800, height: 300 }"
            :horizontal="true"
            :value="imageListData"
            @item-click="onItemClick3"
          >
            <qt-view type="1" class="image-list-item" :focusable="true" eventClick>
              <qt-image src="${imageUrl}" class="image-list-item-img" />
              <qt-text text="${title}" class="image-list-item-text" gravity="center"></qt-text>
            </qt-view>
          </qt-list-view-pro>
        </qt-view>
      </template>
    </qt-waterfall-pro>
  </qt-view>
</template>

<script lang="ts">
export default {
  name: 'qt-nav-list-view-pro-page',
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
import { QTListViewItem } from '@quicktvui/quicktvui3'

// 垂直列表数据
const verticalListData = ref<QTListViewItem[]>([
  { type: 1, title: '第 1 项', decoration: { left: 20, right: 20, bottom: 10 } },
  { type: 1, title: '第 2 项', decoration: { left: 20, right: 20, bottom: 10 } },
  { type: 1, title: '第 3 项', decoration: { left: 20, right: 20, bottom: 10 } },
  { type: 1, title: '第 4 项', decoration: { left: 20, right: 20, bottom: 10 } },
  { type: 1, title: '第 5 项', decoration: { left: 20, right: 20, bottom: 10 } },
  { type: 1, title: '第 6 项', decoration: { left: 20, right: 20, bottom: 10 } },
  { type: 1, title: '第 7 项', decoration: { left: 20, right: 20, bottom: 10 } },
  { type: 1, title: '第 8 项', decoration: { left: 20, right: 20, bottom: 10 } },
])

// 水平列表数据
const horizontalListData = ref<QTListViewItem[]>([
  { type: 1, name: '电影', decoration: { right: 20 } },
  { type: 1, name: '电视剧', decoration: { right: 20 } },
  { type: 1, name: '综艺', decoration: { right: 20 } },
  { type: 1, name: '动漫', decoration: { right: 20 } },
  { type: 1, name: '纪录片', decoration: { right: 20 } },
  { type: 1, name: '体育', decoration: { right: 20 } },
  { type: 1, name: '音乐', decoration: { right: 20 } },
  { type: 1, name: '游戏', decoration: { right: 20 } },
])

// 带图片的列表数据
const imageListData = ref<QTListViewItem[]>([
  {
    type: 1,
    title: '热门推荐',
    imageUrl: 'https://picsum.photos/200/300?random=1',
    decoration: { right: 20 },
  },
  {
    type: 1,
    title: '最新上映',
    imageUrl: 'https://picsum.photos/200/300?random=2',
    decoration: { right: 20 },
  },
  {
    type: 1,
    title: '经典回顾',
    imageUrl: 'https://picsum.photos/200/300?random=3',
    decoration: { right: 20 },
  },
  {
    type: 1,
    title: '高分榜单',
    imageUrl: 'https://picsum.photos/200/300?random=4',
    decoration: { right: 20 },
  },
  {
    type: 1,
    title: '独家内容',
    imageUrl: 'https://picsum.photos/200/300?random=5',
    decoration: { right: 20 },
  },
])

const listViewProRef1 = ref<any>()
const listViewProRef2 = ref<any>()
const listViewProRef3 = ref<any>()

const onItemClick1 = (e: any) => {
  console.log('垂直列表点击:', e)
  const item = e.item
  if (item) {
    console.log(`点击了: ${item.title}`)
  }
}

const onItemFocused1 = (e: any) => {
  console.log('垂直列表焦点变化:', e)
}
const onFocusLost1 = () => {
  console.log('onFocusLost1')
}
const onItemClick2 = (e: any) => {
  console.log('水平列表点击:', e)
  const item = e.item
  if (item) {
    console.log(`点击了: ${item.name}`)
  }
}

const onItemFocused2 = (e: any) => {
  console.log('水平列表焦点变化:', e)
}

const onItemClick3 = (e: any) => {
  console.log('图片列表点击:', e)
  const item = e.item
  if (item) {
    console.log(`点击了: ${item.title}`)
  }
}

const onESCreate = () => {
  console.log('页面创建')
}

const vueSections = [
  {
    slotName: 'list-view-pro-example-1',
    height: 500,
  },
  {
    slotName: 'list-view-pro-example-2',
    height: 300,
  },
  {
    slotName: 'list-view-pro-example-3',
    height: 400,
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

.example-section {
  width: 100%;
  margin-bottom: 40px;
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

/* 垂直列表项样式 */
.list-item {
  width: 1760px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-item-text {
  font-size: 32px;
  color: #ffffff;
}

/* 水平列表项样式 */
.horizontal-list-item {
  width: 150px;
  height: 120px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.horizontal-list-item-text {
  font-size: 28px;
  color: #ffffff;
}

/* 图片列表项样式 */
.image-list-item {
  width: 200px;
  height: 280px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.image-list-item-img {
  width: 180px;
  height: 220px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.image-list-item-text {
  font-size: 24px;
  color: #ffffff;
  height: 40px;
}
</style>
