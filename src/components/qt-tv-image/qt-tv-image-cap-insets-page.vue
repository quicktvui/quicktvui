<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="justify-content: center">
      <s-text-button text="setSrc" @onButtonClicked="setSrc" />
      <tv-img
        sid="tv-cap-insets-img"
        name="name4"
        :selected="false"
        showOnState="focused"
        :visible="false"
        ref="imgRef"
        :placeholder="defaultImage"
        src="https://img2.baidu.com/it/u=3447043455,3428211187&fm=253&app=138&f=JPEG?w=800&h=500"
        class="image center"
        :capInsets="{
          top: 50,
          left: 50,
          bottom: 50,
          right: 50,
        }"
      />
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import defaultImage from '../../assets/ad.jpg'

export default defineComponent({
  name: 'CapInsets',
  emits: [],
  setup() {
    const imgRef = ref()

    const setSrc = () => {
      imgRef.value.setSrc(
        'https://img2.baidu.com/it/u=2567146266,382400914&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'
      )
    }

    return {
      imgRef,
      setSrc,
      defaultImage,
    }
  },
})
</script>

<style scoped>
.image {
  width: 250px;
  height: 190px;
  border-width: 1px;
  border-style: solid;
  border-color: #40b883;
  background-color: red;
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
