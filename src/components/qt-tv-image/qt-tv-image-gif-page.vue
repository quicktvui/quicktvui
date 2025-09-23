<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <qt-column class="es-sdk-content-column-css" style="justify-content: center">
      <tv-img
        alt=""
        name="name6"
        :selected="false"
        showOnState="focused"
        :visible="true"
        :src="defaultImage"
        class="image center tint-color"
        @load="onLoad"
      />
      <div class="img-result">
        <p>Load Result: {{ gifLoadResult }}</p>
      </div>
    </qt-column>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import defaultImage from '../../assets/ad.jpg'

/**
 * 问题：
 * 1、不起作用：:placeholder="defaultImage"
 * 2、onLoad 事件里面无宽高信息
 */
export default defineComponent({
  name: 'Gif',
  emits: [],
  setup() {
    const id = ref('image1')
    const gifLoadResult = ref({})

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

    return {
      gifLoadResult,
      id,
      onLoad,
      defaultImage,
    }
  },
})
</script>

<style scoped>
.img-result {
  width: 300px;
  height: 150px;
  margin-top: 50px;
  border-width: 1px;
  border-style: solid;
  border-color: #40b883;
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

.tint-color {
  tint-color: #40b88399;
}
</style>
