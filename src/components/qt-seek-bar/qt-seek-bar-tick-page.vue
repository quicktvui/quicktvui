<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seek_bar_num"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        :requestFocus="true"
        focusScale="1.1"/>
      <qt-seek-bar
        ref="seek_bar_other"
        class="es-range-seek-bar-css"
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
  name: '刻度',
  setup() {

    const seek_bar_num = ref<QTISeekBar>()
    const seek_bar_other = ref<QTISeekBar>()

    function onESCreate(params) {
      initNumberESSeekBar();
      initOtherESSeekBar();
    }

    function initNumberESSeekBar() {
      seek_bar_num.value?.setSeekBarMode(1);
      seek_bar_num.value?.setProgressHeight(30);
      seek_bar_num.value?.setProgressWidth(1000);
      seek_bar_num.value?.setGravity(2);
      seek_bar_num.value?.setProgressRadius(100);
      seek_bar_num.value?.setProgress(28);

      //
      seek_bar_num.value?.setProgressColor(0xFFFF0000);
      seek_bar_num.value?.setProgressDefaultColor(0xFFFF00FF);

      //----------------------------按钮------------------------------------
      seek_bar_num.value?.setThumbWidth(40);
      seek_bar_num.value?.setThumbHeight(40);
      seek_bar_num.value?.setThumbActivate(true);
      let thumbDrawable = {
        colors: ['#FFFF00FF', '#FFFF0000'],
        cornerRadius: 100,
        orientation: 6
      }
      seek_bar_num.value?.setThumbDrawable(thumbDrawable);

      //---------------------------刻度-------------------------------
      seek_bar_num.value?.setTickMarkMode(0);
      seek_bar_num.value?.setTickMarkTextArray(['0', '20', '40', '60', '80', '100']);
      seek_bar_num.value?.setTickMarkTextMargin(40);
      seek_bar_num.value?.setTickMarkTextSize(40);
      seek_bar_num.value?.setTickMarkTextColor(0xFFFF0000);
      seek_bar_num.value?.setTickMarkInRangeTextColor(0xFFFF00FF);
      seek_bar_num.value?.setTickMarkGravity(1);
      seek_bar_num.value?.setTickMarkLayoutGravity(1);
    }

    function initOtherESSeekBar() {
      seek_bar_other.value?.setSeekBarMode(1);
      seek_bar_other.value?.setProgressHeight(30);
      seek_bar_other.value?.setProgressWidth(1000);
      seek_bar_other.value?.setGravity(2);
      seek_bar_other.value?.setProgressRadius(100);
      seek_bar_other.value?.setProgress(20);

      //
      seek_bar_other.value?.setProgressColor(0xFFFF0000);
      seek_bar_other.value?.setProgressDefaultColor(0xFFFF00FF);

      //----------------------------按钮------------------------------------
      seek_bar_other.value?.setThumbWidth(40);
      seek_bar_other.value?.setThumbHeight(40);
      seek_bar_other.value?.setThumbActivate(true);
      let thumbDrawable = {
        colors: ['#FFFF00FF', '#FFFF0000'],
        cornerRadius: 100,
        orientation: 6
      }
      seek_bar_other.value?.setThumbDrawable(thumbDrawable);
      //---------------------------刻度-------------------------------
      seek_bar_other.value?.setTickMarkMode(1);
      seek_bar_other.value?.setTickMarkTextArray(['1', '2', '3', '4', '5']);
    }

    return {
      seek_bar_num,
      seek_bar_other,
      onESCreate,
      initNumberESSeekBar,
      initOtherESSeekBar
    }
  },
});
</script>

<style>

</style>
