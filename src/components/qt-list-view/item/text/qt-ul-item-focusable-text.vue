<template>
  <qt-text :text="text" class="qt-ul-item-text"
           :focusable="true"
           :enableFocusBorder="true"
           gravity="center" :fontSize="44" :ellipsizeMode="2"/>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'qt-ul-item-focusable-text',
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
.qt-ul-item-text {
  width: 800px;
  height: 100px;
  background-color: red;
  color: black;
}

</style>
