<template>
  <qt-text :text="text" class="qt-ul-item-text"
           gravity="center" :fontSize="44" :ellipsizeMode="2"/>
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

<style>
.qt-ul-item-text {
  width: 100px;
  height: 50px;
  background-color: red;
  color: aqua;
}

</style>
