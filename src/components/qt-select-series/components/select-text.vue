<template>
  <span id="select-text-view">{{ text }}</span>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "select-text",
  props: {
    text: {
      type: String,
      default: ''
    }
  }
});
</script>

<style scoped>
#select-text-view {
  font-size: 30px;
  color: #FFFFFF;
  margin-left: 90px;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
