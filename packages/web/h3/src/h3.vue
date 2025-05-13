<template>
  <span class="h3-span">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { h3Props } from './h3'

const TAG = 'WebH'

export default defineComponent({
  name: 'H3',
  props: h3Props,
  emits: [],
  setup(props, context) {
    return {}
  },
})
</script>
<style scoped>
.h3-span {
  font-size: 40px;
  font-weight: 700;
  color: #1f1f1f;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
