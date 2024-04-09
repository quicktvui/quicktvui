<template>
  <qt-view class="es-sdk-root-css">
    <qt-text class="es-sdk-content-title-css"
             gravity="center"
             text="QuickTVUI API演示项目"></qt-text>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view ref="root_view" class="es-sdk-content-row-css">
      <s-nav-button
        v-for="nav in navList" :key="nav.id"
        :text="nav.name"
        :url="`nav/${nav.id}`"/>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
export default {
  name: 'index'
}
</script>

<script setup lang="ts">
import QTAPINavPageList from "./nav";

const navList = Object.keys(QTAPINavPageList).map(nav => ({
  id: nav,
  name: QTAPINavPageList[nav].name,
}))
</script>

<style>
</style>

