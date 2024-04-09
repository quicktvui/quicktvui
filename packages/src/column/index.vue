<template>
  <div class="qt-ui-row-css" :clipChildren="false"
       ref="viewRef">
    <slot/>
  </div>
</template>

<script>
import {defineComponent} from "@vue/runtime-core";
import useBaseView from "../base/useBaseView";
import {ref} from "vue";

export default defineComponent({
  name: 'qt-column',
  setup(props, context) {
    const viewRef = ref()
    return {
      viewRef,
      ...useBaseView(viewRef)
    }
  },
});
</script>

<style scoped>
.qt-ui-row-css {
  display: flex;
  flex-direction: column;
}
</style>
