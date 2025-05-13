<template>
  <span class="h4-span">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { h4Props } from './h4'

const TAG = 'WebH'

export default defineComponent({
  name: 'H4',
  props: h4Props,
  emits: [],
  setup(props, context) {
    return {}
  },
})
</script>
<style scoped>
.h4-span {
  font-size: 32px;
  font-weight: 700;
  color: #1f1f1f;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
