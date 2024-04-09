<template>
  <div flexStyle="${style}" type="1" style="background-color: palevioletred;" :focusable="false">
    <span style="width: 1740px;height: 60px;text-align: center; font-size: 26px;color: #fff;margin-top: 80px;"
          :focusable="false">
      我是自定义 section....
    </span>
  </div>
</template>

<script>

import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: "text-section",
  setup(props, context) {
    return {}
  },
});
</script>

<style scoped>

</style>
