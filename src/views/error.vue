<template>
  <qt-view class="error-root-view-css">
    <qt-text class="error-text-css" text="error页面" ref="errorText"></qt-text>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'error',
  setup() {
    return {}
  },
})
</script>

<style scoped>
.error-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error-text-css {
  width: 192px;
  height: 108px;
  font-size: 40px;
  color: black;
}
</style>
