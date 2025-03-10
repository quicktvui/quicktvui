<template>
  <div
    class="qt-ul-item-text-root"
    :style="{ width: rootStyle.width, height: rootStyle.height }"
    :focusable="true"
    :enableFocusBorder="true"
  >
    <qt-text
      :text="text"
      class="qt-ul-item-text"
      :style="{ backgroundColor: backgroundColor }"
      :gravity="gravity"
      :fontSize="44"
      :ellipsizeMode="2"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { buildRandomColor } from '../../__mocks__/colors'

/**
 * 注意：
 * 1、style上的属性，不支持变量进行变更
 *
 *
 *
 *
 */
export default defineComponent({
  name: 'qt-ul-item-text',
  emits: [],
  props: {
    text: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: buildRandomColor(),
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
  background-color: red;
}

.qt-ul-item-text {
  width: 780px;
  height: 180px;
  color: black;
  padding: 10px;
}
</style>
