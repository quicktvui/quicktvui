<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <qt-seek-bar
        ref="seekBarRef"
        class="es-range-seek-bar-css"
        @onSeekChanged="onSeekBarChange"
        @onFocusChanged="onFocusChange"
        style="height: 500px;"
        :focusable="true"
        focusScale="1.1"/>
    </div>
  </div>
</template>

<script lang="ts">

import {ref} from "vue";
import {defineComponent} from "@vue/runtime-core";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {QTISeekBar} from "@quicktvui/quicktvui3";

const TAG = "ESSeekBar";

export default defineComponent({
  name: '范围模式',
  setup() {
    const log = useESLog()
    const progressRef = ref(0)
    const seekBarRef = ref<QTISeekBar>()

    function onESCreate(params) {
      initESSeekBar();
    }

    function onSeekBarChange(progress: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, "--------onSeekBarChange------>>>>>" + progress)
      }
    }

    function onFocusChange(event) {
      let focused = event.isFocused;
      seekBarRef.value?.setThumbActivate(focused);
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, "--------onFocusChange------>>>>>" + focused)
      }
    }

    function initESSeekBar() {
      seekBarRef.value?.setSeekBarMode(2);
      setInterval(() => {
        progressRef.value = progressRef.value + 10;
        seekBarRef.value?.setRangeProgress(progressRef.value, 100 - progressRef.value);
      }, 1000)
      seekBarRef.value?.setProgressHeight(30);
      seekBarRef.value?.setRange(10, 100, 0);
      seekBarRef.value?.setGravity(2);
      seekBarRef.value?.setProgressRadius(100);
      //
      seekBarRef.value?.setRangeProgress(10, 100);
      //
      seekBarRef.value?.setProgressColor(0xFFFF0000);
      seekBarRef.value?.setProgressDefaultColor(0xFFFF00FF);

      seekBarRef.value?.setLeftThumbWidth(40);
      seekBarRef.value?.setLeftThumbHeight(40);
      //
      let thumbDrawable = {
        colors: ['#FFFF00FF', '#FFFF0000'],
        cornerRadius: 100,
        orientation: 6
      }
      seekBarRef.value?.setThumbDrawable(thumbDrawable);

      let thumbInactivatedDrawable = {
        colors: ['#FFFF0000', '#FFFF00FF'],
        cornerRadius: 100,
        orientation: 6
      }
      seekBarRef.value?.setThumbInactivatedDrawable(thumbInactivatedDrawable);


      seekBarRef.value?.setRightThumbWidth(40);
      seekBarRef.value?.setRightThumbHeight(40);
      let rightThumbDrawable = {
        colors: ['#FFFF00FF', '#FFFF0000'],
        cornerRadius: 100,
        orientation: 6
      }
      seekBarRef.value?.setRightThumbDrawable(rightThumbDrawable);
      let rightThumbInactivatedDrawable = {
        colors: ['#FF00CCCC', '#FFCC7700'],
        cornerRadius: 100,
        orientation: 6
      }
      seekBarRef.value?.setRightThumbInactivatedDrawable(rightThumbInactivatedDrawable);

      //
      seekBarRef.value?.setIndicatorShowMode(3);
      seekBarRef.value?.setIndicatorWidth(100);
      seekBarRef.value?.setIndicatorHeight(100);
      seekBarRef.value?.setIndicatorBackgroundColor(0xFFFF0000);
      seekBarRef.value?.setIndicatorRadius(100);
      seekBarRef.value?.setIndicatorArrowSize(6);
      seekBarRef.value?.setIndicatorTextColor(0xFFFF00FF);
      seekBarRef.value?.setIndicatorTextSize(40);
      seekBarRef.value?.setIndicatorMargin(20);
    }

    return {
      progressRef,
      seekBarRef,
      onESCreate,
      onSeekBarChange,
      onFocusChange,
      initESSeekBar
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
