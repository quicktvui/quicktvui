<template>
  <div
    class="qt-ul-item-text-root"
    :style="{ width: width, height: height, backgroundColor: backgroundColor }"
    :focusable="true"
    :enableFocusBorder="true"
    @focus="onFocus"
  >
    <p :text="text" class="qt-ul-item-text" :gravity="gravity" :fontSize="44" :ellipsizeMode="2" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'

export default defineComponent({
  name: 'qt-ul-item-text-focus-scale',
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
  setup() {
    const width = ref<number>(800)
    const height = ref<number>(200)

    const onFocus = (e) => {
      let focused = e.isFocused
      if (focused) {
        width.value = 1200
        height.value = 300
      } else {
        width.value = 800
        height.value = 200
      }
    }

    return {
      width,
      height,
      onFocus,
    }
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

.qt-ul-item-text {
  width: 780px;
  height: 180px;
  color: black;
  padding: 10px;
}
</style>
