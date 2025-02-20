<template>
  <div class="qt-ul-item-text-root"
       :focusable="true"
       :enableFocusBorder="true">
    <qt-text :text="text" class="qt-ul-item-text"
             :style="{backgroundColor: backgroundColor}"
             :gravity="gravity" :fontSize="44" :ellipsizeMode="2"/>
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
    backgroundColor: {
      type: String,
      default: 'white'
    },
    gravity: {
      type: String,
      default: 'center'
    },
  },
});

</script>

<style scoped>
.qt-ul-item-text-root {
  width: 800px;
  height: 200px;
  padding: 10px;
  background-color: transparent;
}

.qt-ul-item-text {
  width: 780px;
  height: 180px;
  color: black;
  padding: 10px;
}

</style>
