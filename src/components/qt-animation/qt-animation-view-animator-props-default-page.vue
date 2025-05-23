<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px">
      <div class="es-sdk-content-row-css">
        <s-text-button text="开始动画" @onButtonClicked="startAnimator" />
        <s-text-button text="反转动画" @onButtonClicked="reverseAnimator" />
        <s-text-button text="暂停动画" @onButtonClicked="pauseAnimator" />
        <s-text-button text="恢复动画" @onButtonClicked="resumeAnimator" />
        <s-text-button text="取消动画" @onButtonClicked="cancelAnimator" />
      </div>
      <qt-animation ref="animation_view" class="animation-view-css" :animator="animator">
        <div class="animation-inner-view-css" />
      </qt-animation>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { useESRouter } from '@extscreen/es3-router'
import { QTAnimationType, QTIAnimation } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'AnimatorPropsDefault',
  emits: [],
  setup() {
    const animation_view = ref<QTIAnimation>()
    const router = useESRouter()
    const animator = {
      type: QTAnimationType.TRANSLATION_X,
      values: [0, 300, 60, -60, 60, 0, 800, 60, -600, 60],
      duration: 10000,
    }

    function startAnimator() {
      animation_view.value?.start()
    }

    function reverseAnimator() {
      animation_view.value?.reverse()
    }

    function pauseAnimator() {
      animation_view.value?.pause()
    }

    function resumeAnimator() {
      animation_view.value?.resume()
    }

    function cancelAnimator() {
      animation_view.value?.cancel()
    }

    function resetAnimators() {
      animation_view.value?.reset()
    }

    function onBackPressed() {
      resetAnimators()
      router.back()
    }

    return {
      animation_view,
      animator,
      startAnimator,
      reverseAnimator,
      pauseAnimator,
      resumeAnimator,
      cancelAnimator,
      resetAnimators,
      onBackPressed,
    }
  },
})
</script>

<style src="./css/qt-animation-css.css"></style>
