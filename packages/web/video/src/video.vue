<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { videoProps } from './video'

export default defineComponent({
  name: 'Video',
  props: videoProps,
  emits: [],
  setup(props, context) {
    const viewRef = ref()

    return {
      viewRef,
    }
  },
})
</script>
