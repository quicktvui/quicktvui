<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-row-css">
      <s-text-button text="显示弹窗" @onButtonClicked="show" />
    </div>
  </div>
  <qt-dialog class="qt-sdk-dialog-css" v-if="showDialog" @show="show" @requestClose="dismiss">
    <qt-view class="qt-sdk-dialog-content-css">
      <qt-text class="qt-sdk-dialog-content-text-css" text="我是弹窗" font-size="30" />
    </qt-view>
  </qt-dialog>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'

export default defineComponent({
  name: '使用初探',
  emits: [],
  setup() {
    const showDialog = ref<boolean>(false)

    function show() {
      console.log('--------onShow------->>>>>')
      showDialog.value = true
    }

    function dismiss() {
      console.log('--------onDismiss---------->>>>>')
      showDialog.value = false
    }

    return {
      show,
      dismiss,
      showDialog,
    }
  },
})
</script>

<style>
.qt-sdk-dialog-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
  position: absolute;
}

.qt-sdk-dialog-content-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: center;
  background-color: palevioletred;
}

.qt-sdk-dialog-content-text-css {
  width: 192px;
  height: 108px;
  color: black;
}
</style>
