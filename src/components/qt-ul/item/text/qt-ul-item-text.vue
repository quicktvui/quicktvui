<template>
  <qt-row
    class="qt-ul-item-text-root"
    :style="{ width: rootStyle.width, height: rootStyle.height, backgroundColor: backgroundColor }"
    :focusable="true"
    :enableFocusBorder="true"
  >
    <qt-text
      v-if="showTitle"
      :text="title"
      :gravity="gravity"
      class="qt-ul-item-title"
      :fontSize="30"
    />

    <qt-text
      :text="text"
      class="qt-ul-item-text"
      :gravity="gravity"
      :fontSize="44"
      :ellipsizeMode="2"
    />
  </qt-row>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'qt-ul-item-text',
  emits: [],
  props: {
    showTitle: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '🍔',
    },
    text: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: 'white',
    },
    gravity: {
      type: String,
      default: 'center',
    },
    rootStyle: {
      type: Object,
      default: () => ({
        width: 800,
        height: 200,
      }),
    },
  },
})
</script>

<style scoped>
.qt-ul-item-text-root {
  width: 800px;
  height: 200px;
  padding: 10px;
  background-color: transparent;
}

.qt-ul-item-title {
  width: 40px;
  height: 180px;
}

.qt-ul-item-text {
  width: 740px;
  height: 180px;
  color: black;
  padding: 10px;
}
</style>
