<template>
  <img src="" alt="" :clipChildren="false" ref="viewRef">
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import useBaseView from "../base/useBaseView";

export default defineComponent({
  name: 'qt-image',
  setup(props, context) {
    const viewRef = ref()
    return {
      viewRef,
      ...useBaseView(viewRef)
    }
  }
});
</script>
