<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <ul ref="ul" sid="ullll">

      </ul>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import set = Reflect.set;

export default defineComponent({
  name: "ul",
  emits: [],
  setup() {

    const ul = ref()

    const onESCreate = (params) => {
      setTimeout(() => {
        // console.log('-----------onESCreate----clearFocus------->>>>', ul)
        // qt.ul.clearFocus(ul)
        qt.ul.clearFocus('ullll')
      }, 1000)
    }

    return {
      ul,
      onESCreate,
    }
  },
});

</script>
<style>
</style>
