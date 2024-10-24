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

      <qt-lottie-view
          ref="lottieRef"
          class="lottie-view-root-css"
          :lottie_loop="true"
          :lottie_speed="10"
          :lottie_autoPlay="true"/>
    </qt-column>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTILottieView} from "@quicktvui/quicktvui3";
import {useES} from "@extscreen/es3-core";

export default defineComponent({
  name: '使用初探',
  setup() {

    const lottieRef = ref<QTILottieView>()
    const es = useES()

    const onESCreate = (params) => {
      const runtimePath = es.getESAppRuntimePath()
      lottieRef.value?.loadFile(runtimePath + "/assets/d05079474695b25d2078.json")
    }

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

    return {
      lottieRef,
      onESCreate,
      startAnimation,
      pauseAnimation,
      cancelAnimation,
      resumeAnimation,
      setProgress,
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
