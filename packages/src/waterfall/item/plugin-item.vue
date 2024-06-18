<template>
  <qt-plugin-view
      ref="viewRef"
      :type="10004"
      :clipChildren="false"
      :clipPadding="false"
      layout="${layout}"
      flexStyle="${style}"
      :focusable="true"
      pluginKey="${pluginKey}"
      eventClick
      eventFocus
      name="qt-plugin-item"
      @focus="onFocus"
      focusScale="1.1"
      :enableFocusBorder="true"
      @onPluginLoadSuccess="onPluginLoadSuccess"
      @onPluginLoadError="onPluginLoadError"
      class="qt-ui-plugin-item-root-css">
  </qt-plugin-view>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import useBaseView from "../../base/useBaseView";
import {QTPluginViewEvent} from "../../plugin/QTIPluginView";

export default defineComponent({
  name: "qt-plugin-item",
  emits: [
    'onPluginLoadSuccess',
    'onPluginLoadError',
    'focus'
  ],
  setup(props, context) {
    const viewRef = ref()

    function onFocus(e) {
      context.emit('focus', e)
    }

    function onPluginLoadSuccess(event: QTPluginViewEvent) {
      context.emit('onPluginLoadSuccess', event)
    }

    function onPluginLoadError(event: QTPluginViewEvent) {
      context.emit('onPluginLoadError', event)
    }

    return {
      viewRef,
      ...useBaseView(viewRef),
      onFocus,
      onPluginLoadSuccess,
      onPluginLoadError
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
