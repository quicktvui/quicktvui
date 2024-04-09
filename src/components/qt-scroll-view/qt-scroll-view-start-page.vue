<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row class="qt-sdk-content-row-css">
      <qt-scroll-view ref="scrollViewRef" class="qt-sdk-content-scroll-view-css">
        <qt-view class="qt-sdk-content-scroll-root-view-css">
          <div :focusable="true" :enableFocusBorder="true" class="qt-sdk-content-scroll-view-item-css" text="Item-1"/>
          <div :focusable="true" :enableFocusBorder="true" class="qt-sdk-content-scroll-view-item-css" text="Item-2"/>
          <div :focusable="true" :enableFocusBorder="true" class="qt-sdk-content-scroll-view-item-css" text="Item-3"/>
          <div :focusable="true" :enableFocusBorder="true" class="qt-sdk-content-scroll-view-item-css" text="Item-4"/>
          <div :focusable="true" :enableFocusBorder="true" class="qt-sdk-content-scroll-view-item-css" text="Item-5"/>
          <div :focusable="true" :enableFocusBorder="true" class="qt-sdk-content-scroll-view-item-css" text="Item-6"/>
        </qt-view>
      </qt-scroll-view>
    </qt-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTIScrollView} from "@quicktvui/quicktvui3";
import {ESKeyCode, ESKeyEvent} from "@extscreen/es3-core";

export default defineComponent({
  name: '使用初探',
  setup() {
    const scrollViewRef = ref<QTIScrollView>()

    let y = 0

    function onKeyDown(keyEvent: ESKeyEvent) {
      switch (keyEvent.keyCode) {
        case ESKeyCode.ES_KEYCODE_DPAD_UP:
          y = y - 10
          scrollViewRef.value?.scrollTo(0, y)
          break
        case ESKeyCode.ES_KEYCODE_DPAD_DOWN:
          y = y + 10
          scrollViewRef.value?.scrollTo(0, y)
          break
      }
    }

    return {
      scrollViewRef,
      onKeyDown,
    }
  },
});
</script>

<style>
.qt-sdk-content-row-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
}

.qt-sdk-content-scroll-view-css {
  width: 600px;
  height: 400px;
  background-color: #40b883;
}

.qt-sdk-content-scroll-root-view-css {
  width: 600px;
  height: 600px;
  background-color: red;
}

.qt-sdk-content-scroll-view-item-css {
  width: 600px;
  height: 200px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
  background-color: palevioletred;
}

</style>
