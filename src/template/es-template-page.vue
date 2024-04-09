<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-view text="Text"></s-text-view>
      <s-text-button text="按钮" @onButtonClicked="onButtonClicked"/>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: '模板',
  setup(props, context) {
    function onButtonClicked() {
    }

    return {
      onButtonClicked
    }
  },
});

</script>

<style>
</style>
