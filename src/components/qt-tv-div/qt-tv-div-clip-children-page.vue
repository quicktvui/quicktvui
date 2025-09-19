<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="background-color: #40b883">
      <tv-div class="tv-div-visibility-css" visibility="visible" ref="divRef" :clipChildren="true">
        <p>
          裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁
          剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪
          子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子
          布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布
          局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局
          裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁
          剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪子布局裁剪
          子布局裁剪子布局裁剪子布局裁剪子布局
        </p>
      </tv-div>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { QTVisibility } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'ClipChildren',
  emits: [],
  setup() {
    const divRef = ref(null)

    return {
      divRef,
    }
  },
})
</script>

<style scoped>
.tv-div-visibility-css {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>
