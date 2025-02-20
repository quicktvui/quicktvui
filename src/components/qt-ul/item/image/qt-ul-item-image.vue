<template>
  <qt-image :src="src" class="qt-ul-item-image"/>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'qt-ul-item-image',
  emits: [],
  props: {
    src: {
      type: String,
      default: ''
    },
  },
});

</script>

<style>
.qt-ul-item-image {
  width: 300px;
  height: 400px;
  background-color: #0D71FF;
}

</style>
