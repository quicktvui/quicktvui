<template>
  <qt-view class="es-sdk-root-css">
    <qt-text
      class="es-sdk-content-title-css"
      gravity="center"
      text="QuickTVUI API演示项目"
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
    </div>

    <qt-view ref="root_view" class="es-sdk-content-row-css">
      <s-nav-button v-for="nav in navList" :key="nav.id" :text="nav.name" :url="`nav/${nav.id}`" />
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
export default {
  name: 'index',
}
</script>

<script setup lang="ts">
import QTAPINavPageList from './nav'

const navList = Object.keys(QTAPINavPageList).map((nav) => ({
  id: nav,
  name: QTAPINavPageList[nav].name,
}))
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
</style>
