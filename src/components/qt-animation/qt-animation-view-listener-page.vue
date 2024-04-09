<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px;">
      <s-text-view text="listenAnimator监听动画状态变化  listenAnimatorValue监听动画值的变化"></s-text-view>
      <s-text-view :text="'动画状态：' + animationStatus"></s-text-view>
      <s-text-view :text="'动画值：' + animationValue"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-text-button text="创建并开始动画" @onButtonClicked="init"/>
        <s-text-button text="反转动画" @onButtonClicked="reverseAnimator"/>
        <s-text-button text="暂停动画" @onButtonClicked="pauseAnimator"/>
        <s-text-button text="恢复动画" @onButtonClicked="resumeAnimator"/>
        <s-text-button text="取消动画" @onButtonClicked="cancelAnimator"/>
        <s-text-button text="重置所有动画" @onButtonClicked="resetAnimators"/>
      </div>
      <qt-animation
        ref="animation_view"
        class="animation-view-css"
        @onAnimationCancel="onAnimationCancel"
        @onAnimationEnd="onAnimationEnd"
        @onAnimationStart="onAnimationStart"
        @onAnimationRepeat="onAnimationRepeat"
        @onAnimationPause="onAnimationPause"
        @onAnimationResume="onAnimationResume"
        @onAnimationUpdate="onAnimationUpdate">
        <div class="animation-inner-view-css"/>
      </qt-animation>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {useESRouter} from "@extscreen/es3-router";
import {QTAnimationPropertyName, QTAnimationValueType, QTIAnimation} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'AnimationListener',
  setup() {

    const animationStatus = ref('重置')
    const animationValue = ref('-1')
    const router = useESRouter()
    const animation_view = ref<QTIAnimation>()

    function init() {
      animation_view.value?.objectAnimator5(
        "AnimationListener",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        0,
        500,
        0,
        -500,
        0,
        10000,
        -1,
        0,
        true,//listenAnimator
        true,//listenAnimatorValue
      );
      animation_view.value?.startAnimator("AnimationListener");
    }

    function onAnimationCancel(id) {
      animationStatus.value = 'onAnimationCancel';
    }

    function onAnimationEnd(id, isReverse) {
      animationStatus.value = 'onAnimationEnd';
    }

    function onAnimationRepeat(id) {
      animationStatus.value = 'onAnimationRepeat';
    }

    function onAnimationStart(id, isReverse) {
      animationStatus.value = 'onAnimationStart';
    }

    function onAnimationPause(id) {
      animationStatus.value = 'onAnimationPause';
    }

    function onAnimationResume(id) {
      animationStatus.value = 'onAnimationResume';
    }

    function onAnimationUpdate(id, value) {
      animationValue.value = value;
    }

    function reverseAnimator() {
      animation_view.value?.reverseAnimator("AnimationListener");
    }

    function pauseAnimator() {
      animation_view.value?.pauseAnimator("AnimationListener");
    }

    function resumeAnimator() {
      animation_view.value?.resumeAnimator("AnimationListener");
    }

    function cancelAnimator() {
      animation_view.value?.cancelAnimator("AnimationListener");
    }

    function resetAnimators() {
      animation_view.value?.resetAnimators();
    }

    function onBackPressed() {
      resetAnimators();
      router.back()
    }

    return {
      animationStatus,
      animationValue,
      router,
      animation_view,
      init,
      onAnimationCancel,
      onAnimationEnd,
      onAnimationRepeat,
      onAnimationStart,
      onAnimationPause,
      onAnimationResume,
      onAnimationUpdate,
      reverseAnimator,
      pauseAnimator,
      resumeAnimator,
      cancelAnimator,
      resetAnimators,
      onBackPressed,
    }
  },
});

</script>

<style src="./css/qt-animation-css.css">
</style>
