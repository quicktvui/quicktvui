<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css">
      <s-text-button text="按钮"/>
      <qt-seek-bar
        ref="seekBarRef"
        class="es-range-seek-bar-css"
        :enableFocusBorder="true"
        :focusable="true"
        @onSeekChanged="onSeekBarChange"
        @onFocusChanged="onFocusChange"/>
      <s-text-button text="按钮"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {ref} from "vue";
import {ESKeyCode} from "@extscreen/es3-core";
import {QTISeekBar} from "@quicktvui/quicktvui3";

const TAG = "ESRangeSeekBar";

export default defineComponent({
  name: '使用初探',
  setup() {
    const log = useESLog()

    const seekBarRef = ref<QTISeekBar>()
    const focused = ref(false)
    const progress = ref(0)
    const maxProgress = ref(200)

    const seekStep = ref(0)
    const seekBarMode = ref(0)

    let progressTimer = null;
    let seekProgressTimer = null
    let seekIntervalTime = null

    function onESCreate(params) {
      initESSeekBar();
    }

    function onSeekBarChange(progress: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, "--------onSeekBarChange------>>>>>" + progress)
      }
    }

    function onFocusChange(event) {
      focused.value = event.isFocused;
      seekBarRef.value?.setThumbActivate(focused.value);
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, event.isFocused + "-----onFocusChange------>>>>>" + focused.value)
      }
    }

    function initESSeekBar() {
      seekBarRef.value?.setSeekBarMode(1);
      seekBarRef.value?.setProgressHeight(10);
      seekBarRef.value?.setGravity(2);
      seekBarRef.value?.setProgressRadius(10);
      seekBarRef.value?.setRange(0, maxProgress.value, 10);

      seekBarRef.value?.setProgressColor(0xFFFF3823);
      seekBarRef.value?.setProgressDefaultColor(0xFFDCDCDC);

      seekBarRef.value?.setThumbWidth(40);
      seekBarRef.value?.setThumbHeight(40);

      seekBarRef.value?.setThumbUrl('https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2023/02/08/40a9ad3c-ec51-41b3-b144-a215b2e809a5.png');
      seekBarRef.value?.setThumbInactivatedUrl('https://qcloudimg-moss.cp47.ott.cibntv.net/channelzero_image/2023/02/08/6115d0e3-5f59-4d36-be44-95cca74caf37.png');

      progressTimer = setInterval(() => {
        if (isSeekMode()) {
          return;
        }
        progress.value = progress.value + 2;
        if (progress.value > maxProgress.value) {
          return;
        }
        seekBarRef.value?.setProgress(progress.value);
      }, 1000);

    }

    function isSeekBarFocused() {
      return focused.value;
    }

    function startSeek(forward) {
      seekBarMode.value = 1;
      seekStep.value += 1;
      let base = 1;
      if (seekStep.value > 20) {
        base = 2;
      } else if (seekStep.value > 50) {
        base = 4;
      } else if (seekStep.value > 100) {
        base = 6;
      }
      let duration = maxProgress.value;
      let seekProgress = Math.floor(duration * 0.01 * base);
      progress.value = progress.value + (forward ? seekProgress : -seekProgress);

      if (progress.value > duration) {
        progress.value = duration;
      } else if (progress.value < 0) {
        progress.value = 0;
      }

      let now = new Date().getTime();
      if (now - seekIntervalTime > 50) {
        seekBarRef.value?.setProgress(progress.value);
        seekIntervalTime = now;
      }
    }

    function stopSeek() {
      seekBarMode.value = 0;
      seekStep.value = 0;
    }

    function isSeekMode() {
      return seekBarMode.value === 1;
    }

    function onKeyDown(keyEvent) {
      if (keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_LEFT
        || keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_RIGHT) {
        if (isSeekBarFocused()) {
          startSeek(keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_RIGHT);
        }
      }
    }

    function onKeyUp(keyEvent) {
      if (keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_LEFT
        || keyEvent.keyCode === ESKeyCode.ES_KEYCODE_DPAD_RIGHT) {
        if (isSeekBarFocused()) {
          stopSeek();
        }
      }
    }

    function onESDestroy() {
      if (progressTimer) {
        clearInterval(progressTimer);
      }
    }

    return {
      seekBarRef,
      focused,
      progress,
      maxProgress,
      seekStep,
      seekBarMode,
      onESCreate,
      onSeekBarChange,
      onFocusChange,
      initESSeekBar,
      isSeekBarFocused,
      startSeek,
      stopSeek,
      isSeekMode,
      onKeyDown,
      onKeyUp,
      onESDestroy,
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
