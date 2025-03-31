<template>
  <qt-column
    class="qt-ul-item-long-text-root"
    :style="{ width: width, height: height, backgroundColor: backgroundColor }"
    :focusable="true"
    :enableFocusBorder="true"
    @focus="onFocus"
  >
    <p :text="text" class="qt-ul-item-text" :gravity="gravity" :fontSize="44" :ellipsizeMode="2" />

    <p
      text="🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀"
      class="qt-ul-item-text"
      v-show="focus"
      :gravity="gravity"
      :fontSize="44"
      :ellipsizeMode="2"
    />
  </qt-column>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'

export default defineComponent({
  name: 'qt-ul-item-long-text-focus-scale',
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
    const width = ref<number>(1760)
    const height = ref<number>(200)
    const focus = ref<boolean>(false)

    const onFocus = (e) => {
      let focused = e.isFocused
      focus.value = focused
      if (focused) {
        width.value = 1760
        height.value = 400
      } else {
        width.value = 1760
        height.value = 200
      }
    }

    return {
      focus,
      width,
      height,
      onFocus,
    }
  },
})
</script>

<style scoped>
.qt-ul-item-long-text-root {
  width: 1760px;
  height: 200px;
  padding: 10px;
  background-color: transparent;
}

.qt-ul-item-text {
  width: 1740px;
  height: 180px;
  color: black;
  padding: 10px;
}
</style>
