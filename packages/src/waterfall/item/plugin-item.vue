<template>
  <qt-plugin-view ref="viewRef"
       :type="10004"
       :clipChildren="false"
       :clipPadding="false"
       layout="${layout}"
       flexStyle="${style}"
       :focusable="true"
       plugin-key="${pluginKey}"
       eventClick
       eventFocus
       name="qt-plugin-item"
       @focus="onFocus"
       focusScale="1.1"
       :enableFocusBorder="true"
       class="qt-ui-plugin-item-root-css">
  </qt-plugin-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import useBaseView from "../../base/useBaseView";

export default defineComponent({
  name: "qt-plugin-item",
  setup(props, context) {
    const viewRef = ref()

    function onFocus(e) {
      context.emit('focus', e)
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      onFocus
    }
  },
});

</script>

<style>
.qt-ui-plugin-item-root-css {
  position: absolute;
  background-color: palevioletred;
  overflow: hidden;
}
</style>
