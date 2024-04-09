<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px;">
      <s-text-view
        text="RepeatMode：Defines what this animation should do when it reaches the end. This setting is applied only when the repeat count is either greater than 0 or INFINITE. Defaults to RESTART."/>
      <s-text-view
        text="RepeatCount：Sets how many times the animation should be repeated. If the repeat count is 0, the animation is never repeated. If the repeat count is greater than 0 or INFINITE, the repeat mode will be taken into account. The repeat count is 0 by default."/>
      <div class="es-sdk-content-row-css">
        <s-text-button text="Restart" @onButtonClicked="restartMode"/>
        <s-text-button text="Reverse" @onButtonClicked="reverseMode"/>
        <s-text-button text="Infinite" @onButtonClicked="infiniteMode"/>
      </div>
      <qt-animation
        ref="animation_view"
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
import {
  QTAnimationPropertyName,
  QTAnimationRepeatMode,
  QTAnimationValueType,
  QTIAnimation
} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'AnimationRepeat',
  setup() {

    const animation_view = ref<QTIAnimation>()
    const router = useESRouter()

    function restartMode() {
      animation_view.value?.objectAnimator5(
        "AnimationRestartRepeatMode",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        300,
        0,
        -300,
        0,
        1000,
        QTAnimationRepeatMode.QT_ANIMATION_REPEAT_MODE_RESTART,
        2,
        false,
        false,
      );
      animation_view.value?.startAnimator("AnimationRestartRepeatMode");
    }

    function reverseMode() {
      animation_view.value?.objectAnimator5(
        "AnimationReverseRepeatMode",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        300,
        0,
        -300,
        0,
        1000,
        QTAnimationRepeatMode.QT_ANIMATION_REPEAT_MODE_REVERSE,
        2,
        false,
        false,
      );
      animation_view.value?.startAnimator("AnimationReverseRepeatMode");
    }

    function infiniteMode() {
      animation_view.value?.objectAnimator5(
        "AnimationRepeatInfinite",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        300,
        0,
        -300,
        0,
        1000,
        QTAnimationRepeatMode.QT_ANIMATION_REPEAT_MODE_RESTART,
        -1,
        false,
        false,
      );
      animation_view.value?.startAnimator("AnimationRepeatInfinite");
    }

    function resetAnimators() {
      animation_view.value?.resetAnimators();
    }

    function onBackPressed() {
      resetAnimators();
      router.back()
    }

    return {
      animation_view,
      restartMode,
      reverseMode,
      infiniteMode,
      resetAnimators,
      onBackPressed,
    }
  },
});

</script>

<style src="./css/qt-animation-css.css">
</style>
