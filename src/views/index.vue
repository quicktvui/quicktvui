<template>
  <qt-view class="es-sdk-root-css">
    <qt-text
      class="es-sdk-content-title-css"
      gravity="center"
      text="QuickTVUI API 演示项目"
    ></qt-text>
    <qt-view class="es-sdk-content-divider-css" />
    <div class="tip-root-view">
      <div class="tip-row-view">
        <span class="tip-text-view-key">🟢</span>
        <span class="tip-text-view-value">已实现</span>
      </div>
      <div class="tip-row-view">
        <span class="tip-text-view-key">🟡</span>
        <span class="tip-text-view-value">进行中</span>
      </div>

      <div class="tip-row-view">
        <span class="tip-text-view-key">🔴</span>
        <span class="tip-text-view-value">待实现</span>
      </div>
      <div class="tip-row-view">
        <span class="tip-text-view-key">❌</span>
        <span class="tip-text-view-value">无需实现</span>
      </div>
    </div>

    <qt-grid-view-pro
      ref="gridViewRef"
      class="es-sdk-content-row-css"
      :size="gridSize"
      :spanCount="6"
      :itemStyle="itemStyle"
      :value="navList"
      @item-click="onItemClick"
    >
      <template #default="{ itemStyle }">
        <qt-view class="nav-grid-item" :style="itemStyle" :focusable="true" eventClick eventFocus>
          <qt-text text="${name}" class="nav-grid-item-text" gravity="center"></qt-text>
        </qt-view>
      </template>
    </qt-grid-view-pro>
  </qt-view>
</template>

<script lang="ts">
export default {
  name: 'index',
}
</script>

<script setup lang="ts">
import { nextTick, ref } from 'vue'
import QTAPINavPageList from './nav'
import { useESRouter } from '@extscreen/es3-router'
const router = useESRouter()
// 将导航列表转换为数据格式
const navList = Object.keys(QTAPINavPageList).map((nav) => ({
  id: nav,
  name: QTAPINavPageList[nav].name,
  decoration: { bottom: 10, left: 10 },
}))

const gridSize = {
  width: 1920,
  height: 800,
}

const itemStyle = {
  width: 280,
  height: 80,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  focusBackgroundColor: '#FFFFFF',
  borderRadius: 10,
}

const onItemClick = (e: any) => {
  const item = e.item
  if (item && item.id) {
    // 这里可以添加导航逻辑
    console.log('点击了导航项:', item.name)
    router.push({
      name: 'nav/' + item.id,
      params: {},
    })
  }
}
const gridViewRef = ref()
function onESCreate() {
  nextTick(() => {
    gridViewRef.value.setItemFocused(0)
  })
}
defineExpose({
  onESCreate,
})
</script>

<style>
.tip-root-view {
  width: 1920px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.tip-row-view {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-right: 20px;
}

.tip-text-view-key {
  margin-right: 20px;
}

.tip-text-view-value {
  font-size: 40px;
  color: red;
}

.es-sdk-content-row-css {
  width: 1920px;
  flex: 1;
}

.nav-grid-item-text {
  font-size: 30px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
