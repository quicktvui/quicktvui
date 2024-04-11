<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seek_bar_drawable"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"/>
      <qt-seek-bar
        ref="seek_bar_url"
        class="es-range-seek-bar-css"
        style="margin-top: 20px"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"/>
      <qt-seek-bar
        ref="seek_bar_scale"
        class="es-range-seek-bar-css"
        style="margin-top: 20px"
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
  name: '按钮',
  setup() {

    const seek_bar_drawable = ref<QTISeekBar>()
    const seek_bar_url = ref<QTISeekBar>()
    const seek_bar_scale = ref<QTISeekBar>()

    function onESCreate(params) {
      initESSeekBarDrawable();
      initESSeekBarUrl();
      initESSeekBarScale();
    }

    function initESSeekBarDrawable() {
      seek_bar_drawable.value?.setSeekBarMode(1);
      seek_bar_drawable.value?.setProgressHeight(10);
      seek_bar_drawable.value?.setGravity(2);
      seek_bar_drawable.value?.setProgressRadius(100);
      seek_bar_drawable.value?.setProgress(40);

      //----------------------使用drawable---------------------------
      seek_bar_drawable.value?.setThumbWidth(40);
      seek_bar_drawable.value?.setThumbHeight(40);
      //
      seek_bar_drawable.value?.setThumbActivate(true);
      let thumbDrawable = {
        colors: ['#FFFF00FF', '#FFFF0000', '#FF40b883',],
        cornerRadius: 100,
        orientation: 6
      }
      seek_bar_drawable.value?.setThumbDrawable(thumbDrawable);

      let thumbInactivatedDrawable = {
        colors: ['#FFFF0000', '#FFFF00FF'],
        cornerRadius: 100,
        orientation: 6
      }
      seek_bar_drawable.value?.setThumbInactivatedDrawable(thumbInactivatedDrawable);
    }

    function initESSeekBarUrl() {

      //----------------------使用网络地址图片---------------------------
      seek_bar_url.value?.setSeekBarMode(1);
      seek_bar_url.value?.setProgressHeight(10);
      seek_bar_url.value?.setGravity(2);
      seek_bar_url.value?.setProgressRadius(100);
      seek_bar_url.value?.setProgress(40);

      seek_bar_url.value?.setThumbWidth(40);
      seek_bar_url.value?.setThumbHeight(40);

      seek_bar_url.value?.setThumbUrl('https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/02/22/f241e7e7-f9d0-407a-9dc1-24c88a361594.jpg');
      seek_bar_url.value?.setThumbInactivatedUrl('https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image_test/2022/06/21/25311db1-2cba-4ed0-9339-13d2120c656b.jpg');

      seek_bar_url.value?.setThumbActivate(false);
    }

    function initESSeekBarScale() {

      //----------------------使用网络地址图片---------------------------
      seek_bar_scale.value?.setSeekBarMode(1);
      seek_bar_scale.value?.setProgressHeight(10);
      seek_bar_scale.value?.setGravity(2);
      seek_bar_scale.value?.setProgressRadius(100);
      seek_bar_scale.value?.setProgress(40);

      seek_bar_scale.value?.setThumbWidth(40);
      seek_bar_scale.value?.setThumbHeight(40);

      //TODO LIULIPENG
      // seek_bar_scale.value?.setThumbScaleRatio(10);
      // seek_bar_scale.value?.scaleThumb();

      seek_bar_scale.value?.setThumbActivate(true);
      let thumbDrawable = {
        colors: ['#FFFF00FF', '#FFFF0000', '#FF40b883',],
        cornerRadius: 100,
        orientation: 6
      }
      seek_bar_scale.value?.setThumbDrawable(thumbDrawable);

      let thumbInactivatedDrawable = {
        colors: ['#FFFF0000', '#FFFF00FF'],
        cornerRadius: 100,
        orientation: 6
      }
      seek_bar_scale.value?.setThumbInactivatedDrawable(thumbInactivatedDrawable);
    }

    return {
      seek_bar_drawable,
      seek_bar_url,
      seek_bar_scale,
      onESCreate,
      initESSeekBarDrawable,
      initESSeekBarUrl,
      initESSeekBarScale,
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
