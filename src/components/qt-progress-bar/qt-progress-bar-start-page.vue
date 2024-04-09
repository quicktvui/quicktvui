<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <qt-progress-bar
        ref="progress_bar"
        :max-progress="100"
        :progress="50"
        :corner-radius="100"
        :secondary-progress="80"
        :background-color="backgroundColor"
        :color="color"
        class="es-progress-bar-css"/>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTIProgressBar} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '使用初探',
  setup() {
    const progress_bar = ref<QTIProgressBar>()
    const backgroundColor = ref('#54D00C')
    const color = ref({
      startColor: '#FFD900',
      endColor: '#54D00C',
      type: 0,
      shape: 0,
      cornerRadii4: [20, 20, 20, 20],
    })

    function onESCreate(params) {
      progress_bar.value?.setProgress(10);
      progress_bar.value?.setMaxProgress(100);
      progress_bar.value?.setProgressColor(0xFFFF0000);
      progress_bar.value?.setProgressDefaultColor(0xFF7415B1);
    }

    return {
      progress_bar,
      backgroundColor,
      color,
      onESCreate
    }
  },
});

</script>

<style>
.es-progress-bar-css {
  width: 800px;
  height: 20px;
  border-radius: 0;
}
</style>
