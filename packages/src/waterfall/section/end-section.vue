<template>
  <div
    keyName="_id"
    :type="-1001"
    :focusable="false"
    flexStyle="${style}"
    gradientBackground="${style.gradientBackground}"
    class="qt-waterfall-end-section-css">
    <text-view
      :focusable="false" gravity="center" flexStyle="${titleStyle}"
      class="qt-waterfall-end-section-text-css" typeface="${titleTypeface}"
      textSize="${titleStyle.fontSize}" text="${title}">
    </text-view>
  </div>
</template>

<script lang="ts">

import {defineComponent,} from '@vue/runtime-core';

export default defineComponent({
  name: 'end-section',
  setup() {
    return {};
  },
});
</script>

<style scoped>
.qt-waterfall-end-section-css {
  background-color: transparent;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.qt-waterfall-end-section-text-css {
  width: 500px;
  height: 50px;
  color: rgba(255, 255, 255, .5);
  align-self: center;
  background-color: transparent;
}
</style>
