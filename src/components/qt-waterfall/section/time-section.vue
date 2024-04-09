<template>
  <div class="time-section-css">
    <span class="time-section-text-css">18</span>
    <span v-show="show" class="time-section-text-css">:</span>
    <span class="time-section-text-css">24</span>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: "time-section",
  setup(props, context) {
    const show = ref<boolean>(true)

    setInterval(() => {
      show.value = !show.value
    }, 1000)

    return {
      show
    }
  },
});
</script>

<style scoped>
.time-section-css {
  width: 1920px;
  height: 200px;
  background-color: red;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.time-section-text-css {
  color: white;
  font-size: 40px;
  width: 50px;
  height: 50px;
  text-align: center;
  text-align-vertical: center;
}
</style>
