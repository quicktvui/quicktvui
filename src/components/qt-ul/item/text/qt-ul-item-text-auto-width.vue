<template>
  <div
    class="qt-ul-item-text-root"
    :style="{ backgroundColor: backgroundColor }"
    :focusable="true"
    :enableFocusBorder="true"
  >
    <qt-text
      :text="text"
      class="qt-ul-item-text"
      :gravity="gravity"
      :fontSize="44"
      :ellipsizeMode="2"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'qt-ul-item-text-auto-width',
  emits: [],
  props: {
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
  },
})
</script>

<style scoped>
.qt-ul-item-text-root {
  height: 200px;
  padding: 10px;
  background-color: transparent;
}

.qt-ul-item-text {
  height: 180px;
  color: black;
  padding: 10px;
}
</style>
