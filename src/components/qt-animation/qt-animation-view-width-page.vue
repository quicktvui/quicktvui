<template>
  <div class="es-sdk-root-css" :clipChildren="true">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <div class="es-sdk-content-divider-css" />
    <div class="es-sdk-content-column-css" :clipChildren="true" style="height: 1080px">
      <div class="es-sdk-content-row-css">
        <s-text-button text="打开动画" @onButtonClicked="open" />
        <s-text-button text="关闭动画" @onButtonClicked="close" />
      </div>
      <!--
        宽高可以写成0，
        位置绝对位置，
        执行位移动画，
        把位移动画的值，赋值给需要改变宽的view的宽度
      -->
      <qt-animation
        ref="animation_view"
        @onAnimationCancel="onAnimationCancel"
        @onAnimationEnd="onAnimationEnd"
        @onAnimationStart="onAnimationStart"
        @onAnimationRepeat="onAnimationRepeat"
        @onAnimationPause="onAnimationPause"
        @onAnimationResume="onAnimationResume"
        @onAnimationUpdate="onAnimationUpdate"
      >
      </qt-animation>
      <!-- 父view -->
      <div
        class="es-sdk-content-animation-row-css"
        :style="{ width: 1200, backgroundColor: 'purple' }"
      >
        <!-- 其他 -->
        <div
          class="animation-inner-view-css"
          :style="{ marginRight: 40, backgroundColor: '#669966' }"
        ></div>
        <!-- 需要做动画的view -->
        <div
          class="animation-view-css"
          :style="{ width: width }"
          :clipChildren="true"
          :clipPadding="true"
        >
          <div class="animation-inner-view-gold-css">
            <div class="animation-inner-view-css" :style="{ marginRight: 100 }"></div>
            <p :style="{ backgroundColor: 'yellow' }">
              文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字文字
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { useESRouter } from '@extscreen/es3-router'
import {
  QTAnimationInterpolatorType,
  QTAnimationPropertyName,
  QTAnimationValueType,
  QTIAnimation,
} from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '动画值',
  emits: [],
  setup() {
    const animation_view = ref<QTIAnimation>()
    const router = useESRouter()
    const width = ref<number>(200)

    function open() {
      animation_view.value?.animator(
        '3', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        [200, 1000],
        1000,
        -1,
        0,
        true,
        true,
        {
          type: QTAnimationInterpolatorType.QT_BOUNCE_INTERPOLATOR,
        }
      )
      animation_view.value?.start('3')
    }

    function close() {
      animation_view.value?.animator(
        '2', //自定义id
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X,
        [1000, 200],
        1000,
        -1,
        0,
        true,
        true,
        {
          type: QTAnimationInterpolatorType.QT_ACCELERATE_INTERPOLATOR,
        }
      )
      animation_view.value?.start('2')
    }

    function resetAnimators() {
      animation_view.value?.reset()
    }

    function onBackPressed() {
      resetAnimators()
      router.back()
    }

    function onAnimationCancel(id) {
      console.log('=========onAnimationCancel=========>>>>', id)
    }

    function onAnimationEnd(id, isReverse) {
      console.log('=========onAnimationEnd=========>>>>', id)
    }

    function onAnimationRepeat(id) {
      console.log('=========onAnimationRepeat=========>>>>', id)
    }

    function onAnimationStart(id, isReverse) {
      console.log('=========onAnimationStart=========>>>>', id)
    }

    function onAnimationPause(id) {
      console.log('=========onAnimationPause=========>>>>', id)
    }

    function onAnimationResume(id) {
      console.log('=========onAnimationResume=========>>>>', id)
    }

    /**
     * TODO 动画值
     */
    function onAnimationUpdate(id, value) {
      width.value = value
      console.log('=========onAnimationUpdate=========>>>>', id, value)
    }

    return {
      width,
      animation_view,
      close,
      open,
      resetAnimators,
      onBackPressed,
      onAnimationCancel,
      onAnimationEnd,
      onAnimationRepeat,
      onAnimationStart,
      onAnimationPause,
      onAnimationResume,
      onAnimationUpdate,
    }
  },
})
</script>

<style src="./css/qt-animation-css.css"></style>
