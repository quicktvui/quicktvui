<template>
  <div
    :focusable="false"
    :type="-1000"
    keyName="_id"
    flexStyle="${style}"
    gradientBackground="${style.gradientBackground}"
    class="qt-ui-waterfall-blank-section"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'blank-section',
  setup() {
    return {}
  },
})
</script>

<style scoped>
.qt-ui-waterfall-blank-section {
  background-color: transparent;
}
</style>
