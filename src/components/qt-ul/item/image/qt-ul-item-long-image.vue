<template>
  <qt-image
      :focusScale="1.1"
      :focusable="true"
      :enableFocusBorder="true"
      @click="click"
      @focus="focus"
      :src="src" class="qt-ul-item-long-image"/>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'qt-ul-item-long-image',
  emits: [],
  props: {
    src: {
      type: String,
      default: ''
    },
  },
  setup(props, context) {

    function click(evt) {
      console.log('---qt-ul-item-image----click------------->>>>', evt)
    }

    function focus(evt) {
      console.log('---qt-ul-item-image----focus------------->>>>', evt)
    }

    return {
      click,
      focus
    }
  }
});

</script>

<style scoped>
.qt-ul-item-long-image {
  width: 1860px;
  height: 500px;
  background-color: #0D71FF;
}

</style>
