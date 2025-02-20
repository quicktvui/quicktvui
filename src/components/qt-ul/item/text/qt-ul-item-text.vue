<template>
  <div class="qt-ul-item-text-root"
       :focusable="true"
       :enableFocusBorder="true">
    <qt-text :text="text" class="qt-ul-item-text"
             gravity="center" :fontSize="44" :ellipsizeMode="2"/>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'qt-ul-item-text',
  emits: [],
  props: {
    text: {
      type: String,
      default: ''
    },
  },
});

</script>

<style scoped>
.qt-ul-item-text-root {
  width: 800px;
  height: 200px;
  background-color: greenyellow;
}

.qt-ul-item-text {
  width: 800px;
  height: 200px;
  background-color: red;
  color: black;
}

</style>
