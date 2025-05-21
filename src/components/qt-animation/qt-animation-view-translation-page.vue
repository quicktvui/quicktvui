<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px">
      <div class="es-sdk-content-row-css">
        <s-text-button text="创建并开始2参动画" @onButtonClicked="initTwo" />
        <s-text-button text="创建并开始3参动画" @onButtonClicked="initThree" />
        <s-text-button text="创建并开始4参动画" @onButtonClicked="initFour" />
        <s-text-button text="延迟2s开始5参动画" @onButtonClicked="startAnimatorDelay" />
        <s-text-button text="重置所有动画" @onButtonClicked="resetAnimators" />
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="创建并开始10参动画" @onButtonClicked="initN" />
        <s-text-button text="反转10参动画" @onButtonClicked="reverseAnimator" />
        <s-text-button text="暂停10参动画" @onButtonClicked="pauseAnimator" />
        <s-text-button text="恢复10参动画" @onButtonClicked="resumeAnimator" />
        <s-text-button text="取消10参动画" @onButtonClicked="cancelAnimator" />
      </div>
      <qt-animation ref="animation_view" class="animation-view-css">
        <div class="animation-inner-view-css" />
      </qt-animation>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { useESRouter } from '@extscreen/es3-router'
import { QTAnimationPropertyName, QTAnimationValueType, QTIAnimation } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'TranslationAnimation',
  emits: [],
  setup() {
    const animation_view = ref<QTIAnimation>()
    const router = useESRouter()

    function initTwo() {
      animation_view.value?.animator(
        '2', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        [0, 300],
        1000,
        -1,
        0,
        false,
        false
      )
      animation_view.value?.start('2')
    }

    function initThree() {
      animation_view.value?.animator(
        '3', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        [0, 300, 60],
        1000,
        -1,
        0,
        false,
        false
      )
      animation_view.value?.start('3')
    }

    function initFour() {
      animation_view.value?.animator(
        '4', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        [0, 300, 60, -60],
        1000,
        -1,
        0,
        false,
        false
      )
      animation_view.value?.start('4')
    }

    function initN() {
      animation_view.value?.animator(
        'n', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        [0, 300, 60, -60, 60, 0, 800, 60, -600, 60],
        10000,
        -1,
        0,
        false,
        false
      )
      animation_view.value?.start('n')
    }

    function startAnimatorDelay() {
      animation_view.value?.animator(
        '5', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        [0, 300, 60, -60, 60],
        1000,
        -1,
        0,
        false,
        false
      )
      animation_view.value?.startDelay('5', 2000)
    }

    function reverseAnimator() {
      animation_view.value?.reverse('n')
    }

    function pauseAnimator() {
      animation_view.value?.pause('n')
    }

    function resumeAnimator() {
      animation_view.value?.resume('n')
    }

    function cancelAnimator() {
      animation_view.value?.cancel('n')
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
      initTwo,
      initThree,
      initFour,
      initN,
      startAnimatorDelay,
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
