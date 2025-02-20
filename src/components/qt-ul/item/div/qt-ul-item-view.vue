<template>
  <div class="qt-ul-item-view-root"
       :focusable="true"
       :enableFocusBorder="true">
    <qt-view class="qt-ul-item-view"
             :style="{backgroundColor: backgroundColor, width: width, height: height}"/>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'qt-ul-item-view',
  emits: [],
  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
  },
});

</script>

<style scoped>
.qt-ul-item-view-root {
  width: 800px;
  height: 200px;
  background-color: greenyellow;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.qt-ul-item-view {
  width: 800px;
  height: 200px;
  color: black;
}

</style>
