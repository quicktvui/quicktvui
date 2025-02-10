<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <div ref="div">
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import set = Reflect.set;

export default defineComponent({
  name: "div",
  emits: [],
  setup() {
    const div = ref()
    const onESCreate = (params) => {
      setTimeout(() => {
        console.log('-----------onESCreate----clearFocus------->>>>', div)
        qt.ul.clearFocus(div)
      }, 1000)
    }

    return {
      div,
      onESCreate,
    }
  },
});

</script>
<style>
</style>
