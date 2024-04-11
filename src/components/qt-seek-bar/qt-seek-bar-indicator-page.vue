<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seekBarRef"
        class="es-range-seek-bar-css"
        style="height: 500px"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTISeekBar} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '提示框',
  setup() {
    const progressRef = ref(0)
    const seekBarRef = ref<QTISeekBar>()

    function onESCreate(params) {
      initESSeekBar();
    }

    function initESSeekBar() {
      seekBarRef.value?.setSeekBarMode(1);
      seekBarRef.value?.setProgressHeight(10);
      seekBarRef.value?.setGravity(2);
      seekBarRef.value?.setProgressRadius(100);
      seekBarRef.value?.setProgress(20);

      //
      seekBarRef.value?.setIndicatorShowMode(3);
      seekBarRef.value?.setIndicatorWidth(100);
      seekBarRef.value?.setIndicatorHeight(100);

      seekBarRef.value?.setIndicatorBackgroundColor(0xFFFF0000);
      seekBarRef.value?.setIndicatorRadius(20);

      seekBarRef.value?.setIndicatorArrowSize(10);
      seekBarRef.value?.setIndicatorTextColor(0xFFFF00FF);
      seekBarRef.value?.setIndicatorTextSize(50);
      seekBarRef.value?.setIndicatorMargin(20);

      //设置dr
      let indicatorDrawable = {
        colors: ['#FFFF00FF', '#FFFF0000'],
        cornerRadius: 0,
        orientation: 6
      }
      seekBarRef.value?.setIndicatorDrawable(indicatorDrawable);
      // seekBarRef.value?.setIndicatorUrl('https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/02/22/f241e7e7-f9d0-407a-9dc1-24c88a361594.jpg');
    }

    return {
      progressRef,
      seekBarRef,
      onESCreate,
      initESSeekBar,
    }
  },
});
</script>

<style>
.es-range-seek-bar-css {
  width: 1000px;
  height: 200px;
  background-color: darkgray;
}

.es-vertical-range-seek-bar-css {
  width: 500px;
  height: 800px;
  background-color: darkgray;
}

</style>
