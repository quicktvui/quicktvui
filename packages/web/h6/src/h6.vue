<template>
  <span class="h6-span">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { h6Props } from './h6'

const TAG = 'WebH'

export default defineComponent({
  name: 'H6',
  props: h6Props,
  emits: [],
  setup(props, context) {
    return {}
  },
})
</script>
<style scoped>
.h6-span {
  font-size: 18px;
  font-weight: 700;
  color: #1f1f1f;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
