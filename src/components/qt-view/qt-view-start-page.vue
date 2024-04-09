<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-view-start-page">
      <qt-view class="qt-view-start-page-sec1"
               :gradientBackground="{type: 0, shape: 0,colors: ['#ff0000', '#00ff00'],cornerRadii4: [0, 5, 20, 0]}">
        <qt-text class="qt-view-start-page-sec-title"
                 text="flex-direction: row 横向布局"></qt-text>
        <qt-view class="qt-view-start-page-sec1-flex" ref="item">
          <qt-view class="flex-item" :focusable="true" ref="item1" :enableFocusBorder="true" @click="click"></qt-view>
          <qt-view class="flex-item" :opacity="0.5" :focusable="true" ref="item2" :enableFocusBorder="true"></qt-view>
          <qt-view class="flex-item" :focusable="true" ref="item3" :enableFocusBorder="true"></qt-view>
        </qt-view>
      </qt-view>
      <qt-view class="qt-view-start-page-sec2">
        <qt-text class="qt-view-start-page-sec-title"
                 text="flex-direction: column 纵向布局"></qt-text>
        <qt-view class="qt-view-start-page-sec2-flex">
          <qt-view class="flex-item demo-text-1"></qt-view>
          <qt-view class="flex-item demo-text-2"></qt-view>
          <qt-view class="flex-item demo-text-3"></qt-view>
        </qt-view>
      </qt-view>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref, reactive, watch, watchEffect} from "vue";

export default defineComponent({
  name: '使用初探',
  setup(props, context) {
    const item = ref()
    const item1 = ref()
    const item2 = ref()
    const item3 = ref()
    const click = () => {
      // item.value.clearFocus()
    }
    const onESCreate = (params) => {
      item2.value.requestFocus()

    }
    return {
      onESCreate,
      click,
      item, item1, item2, item3
    }
  },
});
</script>

<style>
.qt-view-start-page {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
}

.qt-view-start-page-sec1 {
  width: 1200px;
  height: 300px;
  background-color: transparent;
}

.qt-view-start-page-sec-title {
  font-size: 30px;
  color: #fff;
  text-align: center;
}

.qt-view-start-page-sec1-flex {
  width: 1200px;
  height: 300px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
}

.qt-view-start-page-sec1-flex .flex-item {
  width: 360px;
  height: 230px;
  border-radius: 8px;
  background-color: aqua;
}

.qt-view-start-page-sec2 {
  width: 1200px;
  height: 650px;
  background-color: transparent;
  margin-top: 50px;
}

.qt-view-start-page-sec2-flex {
  width: 1200px;
  height: 500px;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
}

.qt-view-start-page-sec2-flex .flex-item {
  width: 1200px;
  height: 150px;
  border-radius: 8px;
  background-color: aqua;
}
</style>
