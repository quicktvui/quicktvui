<template>
  <div
    :focusable="false"
    :type="-1"
    keyName="_id"
    class="loading-section-css"
    gradientBackground="${style.gradientBackground}"
  >
    <qt-loading-view class="loading-section-loading-css" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'loading-section',
})
</script>

<style scoped>
.loading-section-css {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
}

.loading-section-loading-css {
  width: 100px;
  height: 100px;
  align-self: center;
  margin-top: 550px;
}
</style>
