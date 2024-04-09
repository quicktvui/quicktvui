<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px;">
      <div class="es-sdk-content-row-css">
        <s-text-button text="设置PivotX" @onButtonClicked="setPivotX"/>
        <s-text-button text="设置PivotY" @onButtonClicked="setPivotY"/>
        <s-text-button text="重置Pivot" @onButtonClicked="resetPivot"/>
        <s-text-button text="重置" @onButtonClicked="reset"/>
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="Rotation+" @onButtonClicked="startRotationA"/>
        <s-text-button text="Rotation-" @onButtonClicked="startRotationD"/>
        <s-text-button text="RotationXY+" @onButtonClicked="startRotationXYA"/>
        <s-text-button text="RotationXY-" @onButtonClicked="startRotationXYD"/>
      </div>
      <div class="es-sdk-content-row-css">
        <s-text-button text="RotationX+" @onButtonClicked="startRotationXA"/>
        <s-text-button text="RotationX-" @onButtonClicked="startRotationXD"/>
        <s-text-button text="RotationY+" @onButtonClicked="startRotationYA"/>
        <s-text-button text="RotationY-" @onButtonClicked="startRotationYD"/>
      </div>
      <qt-animation
        ref="animation_view"
        class="animation-inner-img-view-css">
        <img class="animation-inner-img-view-css" :src="imgSrc"/>
      </qt-animation>
    </div>
  </div>
</template>

<script lang="ts">

import {defineComponent, ref} from "@vue/runtime-core";
import {useESRouter} from "@extscreen/es3-router";
import {QTAnimationPropertyName, QTAnimationValueType, QTIAnimation} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'RotationXYAnimation',
  setup() {
    let imgSrc = require('../../../src/assets/ic_car.jpg').default

    const animation_view = ref<QTIAnimation>()
    const router = useESRouter()

    let rotation = 0
    let rotationX = 0
    let rotationY = 0

    function startRotationA() {
      startRotation(rotation + 15)
    }

    function startRotationD() {
      startRotation(rotation - 15)
    }

    function startRotation(value: number) {
      if (value > 45 || value < -45) {
        return
      }
      animation_view.value?.objectAnimator2(
        "4",
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION,
        rotation,
        value,
        100,
        -1,
        0,
        false,
        false,
      );
      animation_view.value?.startAnimator("4");
      rotation = value
    }


    //-------------------------------------------------------------------

    function startRotationXYA() {
      startRotationXA()
      startRotationYA()
    }

    function startRotationXYD() {
      startRotationXD()
      startRotationYD()
    }

    function startRotationXA() {
      startRotationX(rotationX + 15)
    }

    function startRotationXD() {
      startRotationX(rotationX - 15)
    }

    function startRotationX(value: number) {
      animation_view.value?.objectAnimator2(
        "2",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION_X,
        rotationX,
        value,
        100,
        -1,
        0,
        false,
        false,
      );
      animation_view.value?.startAnimator("2");
      rotationX = value
    }

    function startRotationYA() {
      startRotationY(rotationY + 15)
    }

    function startRotationYD() {
      startRotationY(rotationY - 15)
    }

    function startRotationY(value: number) {
      animation_view.value?.objectAnimator2(
        "3",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION_Y,
        rotationY,
        value,
        100,
        -1,
        0,
        false,
        false,
      );
      animation_view.value?.startAnimator("3");
      rotationY = value
    }

    //------------------------------------------------------------
    function reset() {
      animation_view.value?.objectAnimator2(
        "5",
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION,
        0,
        0,
        100,
        -1,
        0,
        false,
        false,
      );
      animation_view.value?.startAnimator("5");


      animation_view.value?.objectAnimator2(
        "6",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION_X,
        0,
        0,
        100,
        -1,
        0,
        false,
        false,
      );
      animation_view.value?.startAnimator("6");


      animation_view.value?.objectAnimator2(
        "7",//自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ROTATION_Y,
        0,
        0,
        100,
        -1,
        0,
        false,
        false,
      );
      animation_view.value?.startAnimator("7");
    }

    //------------------------------------------------------------
    function setPivotX() {
      animation_view.value?.setPivotX(0);
    }

    function setPivotY() {
      animation_view.value?.setPivotY(200);
    }

    function resetPivot() {
      animation_view.value?.resetPivot();
    }

    function reverseAnimator() {
      animation_view.value?.reverseAnimator("n");
    }

    function pauseAnimator() {
      animation_view.value?.pauseAnimator("n");
    }

    function resumeAnimator() {
      animation_view.value?.resumeAnimator("n");
    }

    function cancelAnimator() {
      animation_view.value?.cancelAnimator("n");
    }

    function resetAnimators() {
      animation_view.value?.resetAnimators();
    }

    function onBackPressed() {
      resetAnimators();
      router.back()
    }

    return {
      imgSrc,
      animation_view,
      startRotationA,
      startRotationD,
      startRotationXA,
      startRotationXD,
      startRotationYA,
      startRotationYD,
      setPivotX,
      setPivotY,
      resetPivot,
      reset,
      reverseAnimator,
      pauseAnimator,
      resumeAnimator,
      cancelAnimator,
      resetAnimators,
      onBackPressed,
      startRotationXYA,
      startRotationXYD
    }
  },
});

</script>

<style>
.animation-inner-img-view-css {
  width: 480px;
  height: 240px;
  background-color: #42b983;
}
</style>
