<template>
  <span class="h5-span">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { h5Props } from './h5'

const TAG = 'WebH1'

export default defineComponent({
  name: 'H5',
  props: h5Props,
  emits: [],
  setup(props, context) {
    return {}
  },
})
</script>
<style scoped>
.h5-span {
  font-size: 24px;
  font-weight: 700;
  color: #1f1f1f;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
