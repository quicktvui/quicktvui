<template>
  <qt-view class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="qt-long-image-start-page">
      <qt-long-image
        ref="viewRef"
        @onLongImageChange="onLongImageChange"
        @onInitializeSuccess="onInitializeSuccess"
        @onInitializeError="onInitializeError"
        class="qt-long-image-css"
      />
    </qt-view>
  </qt-view>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { QTILongImage } from '../../../packages'

export default defineComponent({
  emits: [],
  setup(props, context) {
    const viewRef = ref<QTILongImage>()
    function onLongImageChange(success, message) {
      console.log('----------onLongImageChange--------->>>>', success, message)
    }

    function onInitializeSuccess() {
      console.log('----------onInitializeSuccess--------->>>>')
      viewRef.value?.setSrc(
        'https://www.shuomingshu.cn/wp-content/uploads/images/2023/06/23/4b30c4d172cd4c709d170e8194cae245_ajwo1tt5eln.jpg'
      )
    }

    function onInitializeError(error) {
      console.log('----------onInitializeError--------->>>>', error)
    }

    return {
      viewRef,
      onLongImageChange,
      onInitializeSuccess,
      onInitializeError,
    }
  },
})
</script>

<style>
.qt-long-image-start-page {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.qt-long-image-css {
  width: 1920px;
  height: 1080px;
  background-color: red;
}
</style>
