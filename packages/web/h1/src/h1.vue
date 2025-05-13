<template>
  <span class="h1-span">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { h1Props } from './h1'

const TAG = 'WebH1'

export default defineComponent({
  name: 'H1',
  props: h1Props,
  emits: [],
  setup(props, context) {
    return {}
  },
})
</script>
<style scoped>
.h1-span {
  font-size: 56px;
  font-weight: 700;
  color: #1f1f1f;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
