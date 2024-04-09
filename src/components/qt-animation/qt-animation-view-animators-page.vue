<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px;">
      <s-text-view text="Animators执行顺序"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-text-button text="playSequentially" @onButtonClicked="playSequentially"/>
        <s-text-button text="playTogether" @onButtonClicked="playTogether"/>
        <s-text-button text="with" @onButtonClicked="playWith"/>
        <s-text-button text="before" @onButtonClicked="playBefore"/>
        <s-text-button text="after" @onButtonClicked="playAfter"/>
      </div>
      <div class="es-sdk-content-divider-css"/>
      <s-text-view text="以为Sequentially动画为例，操作Animators，首先点击'playSequentially'按钮，然后再执行以下按钮操作"></s-text-view>
      <div class="es-sdk-content-row-css">
        <s-text-button text="延迟2s开始Sequentially动画" @onButtonClicked="startAnimatorDelay"/>
        <s-text-button text="反转Sequentially动画" @onButtonClicked="reverseAnimator"/>
        <s-text-button text="暂停Sequentially动画" @onButtonClicked="pauseAnimator"/>
        <s-text-button text="恢复Sequentially动画" @onButtonClicked="resumeAnimator"/>
        <s-text-button text="取消Sequentially动画" @onButtonClicked="cancelAnimator"/>
      </div>
      <div class="es-sdk-content-divider-css"/>
      <qt-animation
        ref="animationRef"
        class="animation-view-css">
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
  name: 'Animators',
  setup() {
    const animationRef = ref<QTIAnimation>()
    const router = useESRouter()

    function playSequentially() {
      //1.
      animationRef.value?.animatorSet('SequentiallyAnimatorsId', -1, false);
      animationRef.value?.objectAnimator2(
        "AlphaAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
        0,
        1,
        2000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.objectAnimator2(
        "ScaleAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_SCALE_X,
        0,
        2.5,
        2000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.objectAnimator2(
        "RotationAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION,
        0,
        300,
        2000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.objectAnimator2(
        "TranslationAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        0,
        300,
        2000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.playSequentially4(
        'SequentiallyAnimatorsId',
        "AlphaAnimationId",
        "ScaleAnimationId",
        "RotationAnimationId",
        "TranslationAnimationId",
      );
      animationRef.value?.startAnimator('SequentiallyAnimatorsId');
    }

    function playTogether() {
      //1.
      animationRef.value?.animatorSet('TogetherAnimatorsId', -1, false);
      animationRef.value?.objectAnimator2(
        "AlphaAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
        0,
        1,
        1000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.objectAnimator2(
        "ScaleAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_SCALE_X,
        0,
        1.5,
        1000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.objectAnimator2(
        "RotationAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION,
        0,
        30,
        1000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.objectAnimator2(
        "TranslationAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        0,
        300,
        1000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.playTogether4(
        'TogetherAnimatorsId',
        "AlphaAnimationId",
        "ScaleAnimationId",
        "RotationAnimationId",
        "TranslationAnimationId",
      );
      animationRef.value?.startAnimator('TogetherAnimatorsId');
    }

    function playWith() {
      //1.
      animationRef.value?.animatorSet('WithAnimatorsId', -1, false);
      animationRef.value?.objectAnimator2(
        "AlphaAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
        0,
        1,
        1000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.objectAnimator2(
        "ScaleAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_SCALE_X,
        0,
        1.5,
        1000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.play(
        'WithAnimatorsId',
        "AlphaAnimationId",
      );
      animationRef.value?.playWith(
        'WithAnimatorsId',
        "ScaleAnimationId",
      );
      animationRef.value?.startAnimator('WithAnimatorsId');
    }

    function playBefore() {
      //1.
      animationRef.value?.animatorSet('BeforeAnimatorsId', -1, false);
      animationRef.value?.objectAnimator2(
        "TranslationAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        0,
        300,
        1000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.objectAnimator2(
        "ScaleAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_SCALE_X,
        0,
        1.5,
        1000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.play(
        'BeforeAnimatorsId',
        "TranslationAnimationId",
      );
      animationRef.value?.playBefore(
        'BeforeAnimatorsId',
        "ScaleAnimationId",
      );
      animationRef.value?.startAnimator('BeforeAnimatorsId');
    }

    function playAfter() {
      //1.
      animationRef.value?.animatorSet('WidthAnimatorsId', -1, false);
      animationRef.value?.objectAnimator2(
        "TranslationAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        0,
        300,
        1000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.objectAnimator2(
        "ScaleAnimationId",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_SCALE_X,
        0,
        1.5,
        1000,
        -1,
        0,
        false,
        false,
      );
      animationRef.value?.play(
        'WidthAnimatorsId',
        "TranslationAnimationId",
      );
      animationRef.value?.playAfter(
        'WidthAnimatorsId',
        "ScaleAnimationId",
      );
      animationRef.value?.startAnimator('WidthAnimatorsId');
    }

    function startAnimatorDelay() {
      animationRef.value?.startAnimatorDelay("SequentiallyAnimatorsId", 2000);
    }

    function reverseAnimator() {
      animationRef.value?.reverseAnimator("SequentiallyAnimatorsId");
    }

    function pauseAnimator() {
      animationRef.value?.pauseAnimator("SequentiallyAnimatorsId");
    }

    function resumeAnimator() {
      animationRef.value?.resumeAnimator("SequentiallyAnimatorsId");
    }

    function cancelAnimator() {
      animationRef.value?.cancelAnimator("SequentiallyAnimatorsId");
    }

    function resetAnimators() {
      animationRef.value?.resetAnimators();
    }

    function onBackPressed() {
      resetAnimators();
      router.back()
    }

    return {
      animationRef,
      playSequentially,
      playTogether,
      playWith,
      playBefore,
      playAfter,
      startAnimatorDelay,
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
