<template>
  <text-view ref="viewRef"/>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import useBaseView from "../base/useBaseView";

export default defineComponent({
  name: 'qt-text',
  setup(props, context) {
    const viewRef = ref()
    return {
      viewRef,
      ...useBaseView(viewRef)
    }
  }
});
</script>
