<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="qt-sdk-content-row-css">
      <tv-img
        name="name5"
        :selected="false"
        showOnState="focused"
        :visible="true"
        :src="defaultImage"
        class="image center tint-color"
      />
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import defaultImage from '../../assets/ad.jpg'

/**
 * 问题：
 * 1、:src="defaultImage" 不显示
 */
export default defineComponent({
  name: 'TintColor',
  emits: [],
  setup() {
    const id = ref('image1')
    const gifLoadResult = ref({})

    const changeFocus = (id: string) => {
      // if (imageRef.value) {
      //   isFocused.value = !isFocused.value
      //   // @ts-ignore
      //   imageRef.value.changeFocus(isFocused.value, id);
      // }
    }

    const onLoad = (evt: Event) => {
      console.log('onLoad', evt)
      const { width, height, url } = evt
      //TODO 空值
      gifLoadResult.value = {
        width,
        height,
        url,
      }
    }

    // img touch event is supported after hippy-vue 2.6.2
    const onTouchStart = (evt: Event) => {
      console.log('onTouchDown', evt)
      evt.stopPropagation()
    }
    // img touch event is supported after hippy-vue 2.6.2
    const onTouchMove = (evt: Event) => {
      console.log('onTouchMove', evt)
      evt.stopPropagation()
      console.log(evt)
    }
    // img touch event is supported after hippy-vue 2.6.2
    const onTouchEnd = (evt: Event) => {
      console.log('onTouchEnd', evt)
      evt.stopPropagation()
      console.log(evt)
    }

    return {
      gifLoadResult,
      id,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      onLoad,
      defaultImage,
      changeFocus,
    }
  },
})
</script>

<style scoped>
.qt-sdk-content-row-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
}

.image {
  width: 300px;
  height: 180px;
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
