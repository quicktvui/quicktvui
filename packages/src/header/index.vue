<template v-slot:header>
  <div :focusable="false" class="qt-header">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import useBaseView from '../base/useBaseView'

export default defineComponent({
  name: 'QtHeader',
  emits: [],
  setup() {
    const viewRef = ref()
    return {
      viewRef,
      ...useBaseView(viewRef),
    }
  },
})
</script>
<style>
.qt-header {
  position: absolute;
  background-color: transparent;
  overflow: hidden;
  height: 150px;
}
</style>
