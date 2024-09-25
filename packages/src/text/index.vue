<template>
  <text-view ref="viewRef"/>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import useBaseView from "../base/useBaseView";
import {Native} from "@extscreen/es3-vue";
import {QTImageResizeMode} from "../image/QTImageResizeMode";
import {QTTextSpan} from "./QTTextSpan";

export default defineComponent({
  name: 'qt-text',
  setup(props, context) {
    const viewRef = ref()

    function setText(text: string): void {
      Native.callUIFunction(viewRef.value, 'setText', [text]);
    }

    function setTextSize(size: number): void {
      Native.callUIFunction(viewRef.value, 'setTextSize', [size]);
    }

    function setTextColor(color: string): void {
      Native.callUIFunction(viewRef.value, 'setTextColor', [color]);
    }

    function textSpan(span: QTTextSpan): void {
      Native.callUIFunction(viewRef.value, 'textSpan', [span]);
    }

    return {
      viewRef,
      setText,
      setTextSize,
      setTextColor,
      textSpan,
      ...useBaseView(viewRef)
    }
  }
});
</script>
