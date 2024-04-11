<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seek_bar"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"/>
      <qt-seek-bar
        ref="seek_bar_url"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"/>
      <qt-seek-bar
        ref="seek_bar_none"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "@vue/runtime-core";
import {QTISeekBar} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '分步',
  setup() {

    const seek_bar = ref<QTISeekBar>()
    const seek_bar_url = ref<QTISeekBar>()
    const seek_bar_none = ref<QTISeekBar>()

    function onESCreate(params) {
      initESSeekBar();
      initESSeekBarUrl();
      initESSeekBarNone();
    }

    function initESSeekBar() {
      seek_bar.value?.setSeekBarMode(1);
      seek_bar.value?.setProgressHeight(20);
      seek_bar.value?.setProgressWidth(1000);
      seek_bar.value?.setGravity(2);
      seek_bar.value?.setProgressRadius(10);
      seek_bar.value?.setProgress(40);

      seek_bar.value?.setProgressColor(0xFFFF2222);
      seek_bar.value?.setProgressDefaultColor(0xFFFF00FF);

      seek_bar.value?.setThumbWidth(40);
      seek_bar.value?.setThumbHeight(40);
      //
      seek_bar.value?.setThumbActivate(true);
      let thumbDrawable = {
        colors: ['#FFFF00FF', '#FFFF0000'],
        cornerRadius: 100,
        orientation: 6
      }
      seek_bar.value?.setThumbDrawable(thumbDrawable);

      //------------------------------分步---------------------------------
      seek_bar.value?.setSteps(4);
      seek_bar.value?.setStepsWidth(40);
      seek_bar.value?.setStepsHeight(40);
      seek_bar.value?.setStepsAutoBonding(true);
      seek_bar.value?.setStepsRadius(100);
      seek_bar.value?.setStepsDrawable([
        {
          colors: ['#FFFF4054', '#FFFF0000'],
          cornerRadius: 10,
          orientation: 6
        },
        {
          colors: ['#FFFF6347', '#FFFF0000'],
          cornerRadius: 10,
          orientation: 6
        },
        {
          colors: ['#FFFFAFAD', '#FFFF0000'],
          cornerRadius: 0,
          orientation: 6
        },
        {
          colors: ['#FFFF8247', '#FFFF0000'],
          cornerRadius: 10,
          orientation: 6
        },
        {
          colors: ['#FFFF00FF', '#FFFF0000'],
          cornerRadius: 10,
          orientation: 6
        },
      ]);

    }

    function initESSeekBarUrl() {
      seek_bar_url.value?.setSeekBarMode(1);
      seek_bar_url.value?.setProgressHeight(20);
      seek_bar_url.value?.setProgressWidth(800);
      seek_bar_url.value?.setGravity(2);
      seek_bar_url.value?.setProgressRadius(10);
      seek_bar_url.value?.setProgress(40);

      seek_bar_url.value?.setProgressColor(0xFFFF2222);
      seek_bar_url.value?.setProgressDefaultColor(0xFFFF00FF);

      seek_bar_url.value?.setThumbWidth(40);
      seek_bar_url.value?.setThumbHeight(40);
      //
      seek_bar_url.value?.setThumbActivate(true);
      let thumbDrawable = {
        colors: ['#FFFF00FF', '#FFFF0000'],
        cornerRadius: 100,
        orientation: 6
      }
      seek_bar_url.value?.setThumbDrawable(thumbDrawable);
      //------------------------------分步---------------------------------
      seek_bar_url.value?.setSteps(4);
      seek_bar_url.value?.setStepsWidth(100);
      seek_bar_url.value?.setStepsHeight(100);
      seek_bar_url.value?.setStepsAutoBonding(true);
      seek_bar_url.value?.setStepsUrl([
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg',
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg',
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg',
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg',
        'https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg',
      ]);
    }

    function initESSeekBarNone() {
      seek_bar_none.value?.setSeekBarMode(1);
      seek_bar_none.value?.setProgressHeight(20);
      seek_bar_none.value?.setProgressWidth(400);
      seek_bar_none.value?.setGravity(2);
      seek_bar_none.value?.setProgressRadius(10);
      seek_bar_none.value?.setProgress(40, 100);

      seek_bar_none.value?.setProgressColor(0xFFFF2222);
      seek_bar_none.value?.setProgressDefaultColor(0xFFFF00FF);

      seek_bar_none.value?.setThumbWidth(40);
      seek_bar_none.value?.setThumbHeight(40);
      //
      seek_bar_none.value?.setThumbActivate(true);
      let thumbDrawable = {
        colors: ['#FFFF00FF', '#FFFF0000'],
        cornerRadius: 100,
        orientation: 6
      }
      seek_bar_none.value?.setThumbDrawable(thumbDrawable);
      seek_bar_none.value?.setStepsRadius(100);
      //------------------------------分步---------------------------------
      seek_bar_none.value?.setSteps(4);
      seek_bar_none.value?.setStepsWidth(60);
      seek_bar_none.value?.setStepsHeight(60);
      seek_bar_none.value?.setStepsAutoBonding(true);
      seek_bar_none.value?.setStepsColor(0xFFFF0000);
    }

    return {
      seek_bar,
      seek_bar_url,
      seek_bar_none,
      onESCreate,
      initESSeekBar,
      initESSeekBarUrl,
      initESSeekBarNone,
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
