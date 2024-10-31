<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-column class="qt-sdk-content-column-css">
      <div class="es-sdk-content-row-css">
        <s-text-button text="开始动画" @onButtonClicked="startAnimation"/>
        <s-text-button text="暂停动画" @onButtonClicked="pauseAnimation"/>
        <s-text-button text="取消动画" @onButtonClicked="cancelAnimation"/>
        <s-text-button text="恢复动画" @onButtonClicked="resumeAnimation"/>
        <s-text-button text="设置进度" @onButtonClicked="setProgress"/>
      </div>

      <!--      https://gaeacdn.jiliguala.com/jlgl/pages/animation/finger02.json-->
      <qt-lottie-view
          ref="lottieRef"
          class="lottie-view-root-css"
          :animationListenerState="true"
          :lottie_loop="true"
          :lottie_speed="10"
          :lottie_autoPlay="true"
          :lottie_url="'https://extcdn.hsrc.tv/channelzero_image/web_static/extend_screen/mood/lottie1.json'"
          @onAnimationStart="onAnimationStart"
          @onAnimationEnd="onAnimationEnd"
          @onAnimationCancel="onAnimationCancel"
          @onAnimationRepeat="onAnimationRepeat"
          @onAnimationUpdate="onAnimationUpdate"
          @onAnimationPause="onAnimationPause"
          @onAnimationResume="onAnimationResume"/>
    </qt-column>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTILottieView} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '使用初探',
  setup() {

    const lottieRef = ref<QTILottieView>()

    function startAnimation() {
      lottieRef.value?.playAnimation()
    }

    function pauseAnimation() {
      lottieRef.value?.pauseAnimation()
    }

    function cancelAnimation() {
      lottieRef.value?.cancelAnimation()
    }

    function resumeAnimation() {
      lottieRef.value?.resumeAnimation()
    }

    function setProgress() {
      lottieRef.value?.setProgress('0.5')
      lottieRef.value?.resumeAnimation()
    }

    //--------------------------------事件------------------------------------
    function onAnimationStart() {
      console.log('---------onAnimationStart------------->>>>')
    }

    function onAnimationEnd() {
      console.log('---------onAnimationEnd------------->>>>')
    }

    function onAnimationCancel() {
      console.log('---------onAnimationCancel------------->>>>')
    }

    function onAnimationRepeat() {
      console.log('---------onAnimationRepeat------------->>>>')
    }

    function onAnimationUpdate(value: number) {
      console.log('---------onAnimationUpdate------------->>>>')
    }

    function onAnimationPause() {
      console.log('---------onAnimationPause------------->>>>')
    }

    function onAnimationResume() {
      console.log('---------onAnimationResume------------->>>>')
    }

    return {
      lottieRef,
      startAnimation,
      pauseAnimation,
      cancelAnimation,
      resumeAnimation,
      setProgress,
      onAnimationStart,
      onAnimationEnd,
      onAnimationCancel,
      onAnimationRepeat,
      onAnimationUpdate,
      onAnimationPause,
      onAnimationResume
    }
  },
});
</script>

<style>
.qt-sdk-content-column-css {
  width: 1920px;
  height: 1080px;
  align-items: center;
  justify-content: flex-start;
}


.lottie-view-root-css {
  width: 500px;
  height: 500px;
}

</style>
