<template>
  <span class="h2-span">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { h2Props } from './h2'

const TAG = 'WebH'

export default defineComponent({
  name: 'H2',
  props: h2Props,
  emits: [],
  setup(props, context) {
    return {}
  },
})
</script>
<style scoped>
.h2-span {
  font-size: 48px;
  font-weight: 700;
  color: #1f1f1f;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
