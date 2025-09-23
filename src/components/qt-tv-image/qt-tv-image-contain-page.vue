<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="justify-content: center">
      <tv-img
        ref="imageRef"
        :sid="id"
        @click="changeFocus(id)"
        alt=""
        name="name1"
        :selected="false"
        showOnState="focused"
        :visible="true"
        src="https://img2.baidu.com/it/u=3447043455,3428211187&fm=253&app=138&f=JPEG?w=800&h=500"
        :placeholder="defaultImage"
        class="image contain"
      />
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import defaultImage from '../../assets/ad.jpg'

export default defineComponent({
  name: 'Contain',
  emits: [],
  setup() {
    const id = ref('image1')
    const imageRef = ref()

    const isFocused = ref(false)

    const changeFocus = (id: string) => {
      isFocused.value = !isFocused.value
      imageRef.value?.setFocus(isFocused.value, id)
    }

    return {
      id,
      defaultImage,
      changeFocus,
      imageRef,
    }
  },
})
</script>

<style scoped>
.image {
  width: 250px;
  height: 190px;
  margin: 15px;
  border-width: 1px;
  border-style: solid;
  border-color: #40b883;
}

.contain {
  resize-mode: contain;
}

.cover {
  resize-mode: cover;
}

.center {
  resize-mode: center;
}
</style>
