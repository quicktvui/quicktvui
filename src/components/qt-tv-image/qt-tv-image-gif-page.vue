<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-row class="qt-sdk-content-row-css" id="demo-tv-img">
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
        class="image"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
      />
    </qt-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import defaultImage from '../../assets/ad.jpg'

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup() {
    const id = ref('image1')

    function onESCreate(params) {}

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
      // gifLoadResult.value = {
      //   width,
      //   height,
      //   url,
      // };
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
      onESCreate,
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
  width: 150px;
  height: 90px;
  margin: 15px;
  border-width: 1px;
  border-style: solid;
  border-color: #40b883;
}

#demo-tv-img .contain {
  resize-mode: contain;
}

#demo-tv-img .cover {
  resize-mode: cover;
}

#demo-tv-img .center {
  resize-mode: center;
}
</style>
