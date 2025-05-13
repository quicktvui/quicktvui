<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" text="h" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-column>
      <H1 class="h1-css"> H1: 我是标题一。 </H1>
      <H2 class="h1-css"> H2: 我是标题二。 </H2>
      <H3 class="h1-css"> H3: 我是标题三。 </H3>
      <H4 class="h1-css"> H4: 我是标题四。 </H4>
      <H5 class="h1-css"> H5: 我是标题五。 </H5>
      <H6 class="h1-css"> H6: 我是标题六。 </H6>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  emits: [],
})
</script>

<style>
.h1-css {
  background-color: red;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
