<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px;">
      <div class="es-sdk-content-row-css">
        <s-text-button text="NullInterpolator" @onButtonClicked="nullInterpolator"/>
        <s-text-button text="AccelerateDecelerateInterpolator" @onButtonClicked="accelerateDecelerateInterpolator"/>
        <s-text-button text="AccelerateInterpolator" @onButtonClicked="accelerateInterpolator"/>
        <s-text-button text="AnticipateInterpolator" @onButtonClicked="anticipateInterpolator"/>
        <s-text-button text="AnticipateOvershootInterpolator" @onButtonClicked="anticipateOvershootInterpolator"/>
        <s-text-button text="BounceInterpolator" @onButtonClicked="bounceInterpolator"/>
        <s-text-button text="CycleInterpolator" @onButtonClicked="cycleInterpolator"/>
        <s-text-button text="DecelerateInterpolator" @onButtonClicked="decelerateInterpolator"/>
        <s-text-button text="LinearInterpolator" @onButtonClicked="linearInterpolator"/>
        <s-text-button text="OvershootInterpolator" @onButtonClicked="overshootInterpolator"/>
        <s-text-button text="FastOutLinearInInterpolator" @onButtonClicked="fastOutLinearInInterpolator"/>
        <s-text-button text="FastOutSlowInInterpolator" @onButtonClicked="fastOutSlowInInterpolator"/>
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
  QTAnimationInterpolatorType,
  QTAnimationPropertyName,
  QTAnimationValueType,
  QTIAnimation
} from "@quicktvui/quicktvui3";


export default defineComponent({
  name: 'AnimationInterpolator',
  setup() {

    const animation_view = ref<QTIAnimation>()
    const router = useESRouter()

    function nullInterpolator() {
      animation_view.value?.objectAnimator3(
        "NullInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
      );
      animation_view.value?.startAnimator("NullInterpolator");
    }

    function accelerateDecelerateInterpolator() {
      animation_view.value?.objectAnimator3(
        "AccelerateDecelerateInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_ACCELERATE_DECELERATE_INTERPOLATOR,
        },
      );
      animation_view.value?.startAnimator("AccelerateDecelerateInterpolator");
    }

    function accelerateInterpolator() {
      animation_view.value?.objectAnimator3(
        "AccelerateInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_ACCELERATE_INTERPOLATOR,
        },
      );
      animation_view.value?.startAnimator("AccelerateInterpolator");
    }

    function anticipateInterpolator() {
      animation_view.value?.objectAnimator3(
        "AnticipateInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_ANTICIPATE_INTERPOLATOR,
        },
      );
      animation_view.value?.startAnimator("AnticipateInterpolator");
    }

    function anticipateOvershootInterpolator() {
      animation_view.value?.objectAnimator3(
        "AnticipateOvershootInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_ANTICIPATE_OVERSHOOT_INTERPOLATOR,
        },
      );
      animation_view.value?.startAnimator("AnticipateOvershootInterpolator");
    }

    function bounceInterpolator() {
      animation_view.value?.objectAnimator3(
        "BounceInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_BOUNCE_INTERPOLATOR,
        },
      );
      animation_view.value?.startAnimator("BounceInterpolator");
    }

    function cycleInterpolator() {
      animation_view.value?.objectAnimator3(
        "CycleInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_CYCLE_INTERPOLATOR,
        },
      );
      animation_view.value?.startAnimator("CycleInterpolator");
    }

    function decelerateInterpolator() {
      animation_view.value?.objectAnimator3(
        "DecelerateInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_DECELERATE_INTERPOLATOR,
        },
      );
      animation_view.value?.startAnimator("DecelerateInterpolator");
    }

    function linearInterpolator() {
      animation_view.value?.objectAnimator3(
        "LinearInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_LINEAR_INTERPOLATOR,
        },
      );
      animation_view.value?.startAnimator("LinearInterpolator");
    }

    function overshootInterpolator() {
      animation_view.value?.objectAnimator3(
        "OvershootInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_OVERSHOOT_INTERPOLATOR,
        },
      );
      animation_view.value?.startAnimator("OvershootInterpolator");
    }

    function fastOutLinearInInterpolator() {
      animation_view.value?.objectAnimator3(
        "FastOutLinearInInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_FAST_OUT_LINEAR_IN_INTERPOLATOR,
        },
      );
      animation_view.value?.startAnimator("FastOutLinearInInterpolator");
    }

    function fastOutSlowInInterpolator() {
      animation_view.value?.objectAnimator3(
        "FastOutSlowInInterpolator",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        0,
        500,
        0,
        1500,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_FAST_OUT_SLOW_IN_INTERPOLATOR,
        },
      );
      animation_view.value?.startAnimator("FastOutSlowInInterpolator");
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
      router,
      nullInterpolator,
      accelerateDecelerateInterpolator,
      accelerateInterpolator,
      anticipateInterpolator,
      anticipateOvershootInterpolator,
      bounceInterpolator,
      cycleInterpolator,
      decelerateInterpolator,
      linearInterpolator,
      overshootInterpolator,
      fastOutLinearInInterpolator,
      fastOutSlowInInterpolator,
      resetAnimators,
      onBackPressed,
    }
  },
});

</script>

<style src="./css/qt-animation-css.css">
</style>
