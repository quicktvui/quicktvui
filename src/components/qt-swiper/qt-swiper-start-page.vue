<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row class="qt-sdk-content-row-css">
      <swiper
          ref="swiper"
          class="swiper-root-css"
          needAnimation
          :current="currentSlide"
          @dragging="onDragging"
          @dropped="onDropped"
          @stateChanged="onStateChanged">
        <ViewPagerItem class="swiper-slide">
          <s-text-view class="qt-sdk-content-row-item-css" text="Item1"></s-text-view>
        </ViewPagerItem>
        <ViewPagerItem class="swiper-slide">
          <s-text-view class="qt-sdk-content-row-item-css" text="Item2"></s-text-view>
        </ViewPagerItem>
        <ViewPagerItem class="swiper-slide">
          <s-text-view class="qt-sdk-content-row-item-css" text="Item3"></s-text-view>
        </ViewPagerItem>
        <ViewPagerItem class="swiper-slide">
          <s-text-view class="qt-sdk-content-row-item-css" text="Item4"></s-text-view>
        </ViewPagerItem>
      </swiper>
    </qt-row>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: '使用初探',
  setup() {
    const currentSlide = ref<number>(0)


    function onDragging(e) {

    }

    function onDropped(e) {

    }

    function onStateChanged(e) {

    }

    return {
      currentSlide,
      onDragging,
      onDropped,
      onStateChanged
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

.qt-sdk-content-row-item-css {
  width: 200px;
  height: 100px;
  align-items: center;
  justify-content: center;
  margin: 20px;
  background-color: #40b883;
}

.swiper-root-css {
  width: 800px;
  height: 800px;
  background-color: #7415B1;
}

.swiper-slide {
  width: 200px;
  height: 100px;
  background-color: red;
}

</style>
