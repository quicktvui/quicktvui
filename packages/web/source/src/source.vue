<template></template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { sourceProps } from './source'

export default defineComponent({
  name: 'Source',
  props: sourceProps,
  emits: [],
  setup(props, context) {
    const viewRef = ref()

    return {
      viewRef,
    }
  },
})
</script>
