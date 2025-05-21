import { defineComponent, h, ref } from 'vue'
import { ESApp, Native } from '@extscreen/es3-vue'
import {
  QTAnimationInterpolator,
  QTAnimationPropertyName,
  QTAnimationRepeatMode,
  QTAnimationValueType,
  QTAnimatorId,
} from './types'
import useBaseView from '../base/useBaseView'
import { useESDisplay } from '@extscreen/es3-core'

function registerQTAnimation(app: ESApp) {
  const AnimationViewImpl = defineComponent({
    emits: [
      'onAnimationEnd',
      'onAnimationCancel',
      'onAnimationStart',
      'onAnimationRepeat',
      'onAnimationPause',
      'onAnimationResume',
      'onAnimationUpdate',
    ],
    setup(props, context) {
      const viewRef = ref()
      const display = useESDisplay()
      const displayScale = display.getDisplayScale()

      function setPivotX(pivotX: number) {
        Native.callUIFunction(viewRef.value, 'setPivotX', [pivotX], (res) => {})
      }

      function setPivotY(pivotY: number) {
        Native.callUIFunction(viewRef.value, 'setPivotY', [pivotY], (res) => {})
      }

      function resetPivot() {
        Native.callUIFunction(viewRef.value, 'resetPivot', [], (res) => {})
      }

      function resetAnimators() {
        Native.callUIFunction(viewRef.value, 'resetAnimators', [], (res) => {})
      }

      function animatorSet(animatorId: QTAnimatorId, duration: number, listenAnimator: boolean) {
        Native.callUIFunction(
          viewRef.value,
          'animatorSet',
          [animatorId, duration, listenAnimator],
          (res) => {}
        )
      }

      function startAnimator(animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'startAnimator', [animatorId], (res) => {})
      }

      function startAnimatorDelay(animatorId: QTAnimatorId, delay: number) {
        Native.callUIFunction(viewRef.value, 'startAnimatorDelay', [animatorId, delay], (res) => {})
      }

      function pauseAnimator(animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'pauseAnimator', [animatorId], (res) => {})
      }

      function resumeAnimator(animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'resumeAnimator', [animatorId], (res) => {})
      }

      function cancelAnimator(animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'cancelAnimator', [animatorId], (res) => {})
      }

      function reverseAnimator(animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'reverseAnimator', [animatorId], (res) => {})
      }

      function play(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'play', [animatorSetId, animatorId], (res) => {})
      }

      function playWith(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'with', [animatorSetId, animatorId], (res) => {})
      }

      function playBefore(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'before', [animatorSetId, animatorId], (res) => {})
      }

      function playAfter(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'after', [animatorSetId, animatorId], (res) => {})
      }

      function playAfterDelay(animatorSetId: QTAnimatorId, delay: number) {
        Native.callUIFunction(viewRef.value, 'afterDelay', [animatorSetId, delay], (res) => {})
      }

      //------------------------------------------------------------------------

      function playSequentially(animatorSetId: QTAnimatorId, animatorIds: QTAnimatorId[]) {
        const count = animatorIds.length
        const funcName = `playSequentially${count}`

        Native.callUIFunction(viewRef.value, funcName, [animatorSetId, ...animatorIds], (res) => {})
      }

      function playSequentially1(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId) {
        playSequentially(animatorSetId, [animatorId1])
      }

      function playSequentially2(
        animatorSetId: QTAnimatorId,
        animatorId1: QTAnimatorId,
        animatorId2: QTAnimatorId
      ) {
        playSequentially(animatorSetId, [animatorId1, animatorId2])
      }

      function playSequentially3(
        animatorSetId: QTAnimatorId,
        animatorId1: QTAnimatorId,
        animatorId2: QTAnimatorId,
        animatorId3: QTAnimatorId
      ) {
        playSequentially(animatorSetId, [animatorId1, animatorId2, animatorId3])
      }

      function playSequentially4(
        animatorSetId: QTAnimatorId,
        animatorId1: QTAnimatorId,
        animatorId2: QTAnimatorId,
        animatorId3: QTAnimatorId,
        animatorId4: QTAnimatorId
      ) {
        playSequentially(animatorSetId, [animatorId1, animatorId2, animatorId3, animatorId4])
      }

      function playSequentially5(
        animatorSetId: QTAnimatorId,
        animatorId1: QTAnimatorId,
        animatorId2: QTAnimatorId,
        animatorId3: QTAnimatorId,
        animatorId4: QTAnimatorId,
        animatorId5: QTAnimatorId
      ) {
        playSequentially(animatorSetId, [
          animatorId1,
          animatorId2,
          animatorId3,
          animatorId4,
          animatorId5,
        ])
      }

      //----------------------------------------------------------------------------

      function playTogether(animatorSetId: QTAnimatorId, animatorIds: QTAnimatorId[]) {
        const count = animatorIds.length
        const funcName = `playTogether${count}`

        Native.callUIFunction(viewRef.value, funcName, [animatorSetId, ...animatorIds], (res) => {})
      }

      function playTogether1(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId) {
        playTogether(animatorSetId, [animatorId1])
      }

      function playTogether2(
        animatorSetId: QTAnimatorId,
        animatorId1: QTAnimatorId,
        animatorId2: QTAnimatorId
      ) {
        playTogether(animatorSetId, [animatorId1, animatorId2])
      }

      function playTogether3(
        animatorSetId: QTAnimatorId,
        animatorId1: QTAnimatorId,
        animatorId2: QTAnimatorId,
        animatorId3: QTAnimatorId
      ) {
        playTogether(animatorSetId, [animatorId1, animatorId2, animatorId3])
      }

      function playTogether4(
        animatorSetId: QTAnimatorId,
        animatorId1: QTAnimatorId,
        animatorId2: QTAnimatorId,
        animatorId3: QTAnimatorId,
        animatorId4: QTAnimatorId
      ) {
        playTogether(animatorSetId, [animatorId1, animatorId2, animatorId3, animatorId4])
      }

      function playTogether5(
        animatorSetId: QTAnimatorId,
        animatorId1: QTAnimatorId,
        animatorId2: QTAnimatorId,
        animatorId3: QTAnimatorId,
        animatorId4: QTAnimatorId,
        animatorId5: QTAnimatorId
      ) {
        playTogether(animatorSetId, [
          animatorId1,
          animatorId2,
          animatorId3,
          animatorId4,
          animatorId5,
        ])
      }

      function objectAnimator(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        values: number[],
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        const isTranslationProp =
          propertyName === QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X ||
          propertyName === QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y ||
          propertyName === QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z

        const scaledValues = isTranslationProp ? values.map((v) => v * displayScale) : values

        const funcName = `objectAnimator${values.length == 0 ? '' : values.length}`
        Native.callUIFunction(
          viewRef.value,
          funcName,
          [
            id,
            valueType,
            propertyName,
            ...scaledValues,
            duration,
            repeatMode,
            repeatCount,
            listenAnimator,
            listenAnimatorValue,
            interpolator,
          ],
          (res) => {}
        )
      }

      function objectAnimator1(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        value1: number,
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        objectAnimator(
          id,
          valueType,
          propertyName,
          [value1],
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator
        )
      }

      function objectAnimator2(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        value1: number,
        value2: number,
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        objectAnimator(
          id,
          valueType,
          propertyName,
          [value1, value2],
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator
        )
      }

      function objectAnimator3(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        value1: number,
        value2: number,
        value3: number,
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        objectAnimator(
          id,
          valueType,
          propertyName,
          [value1, value2, value3],
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator
        )
      }

      function objectAnimator4(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        value1: number,
        value2: number,
        value3: number,
        value4: number,
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        objectAnimator(
          id,
          valueType,
          propertyName,
          [value1, value2, value3, value4],
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator
        )
      }

      function objectAnimator5(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        value1: number,
        value2: number,
        value3: number,
        value4: number,
        value5: number,
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        objectAnimator(
          id,
          valueType,
          propertyName,
          [value1, value2, value3, value4, value5],
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator
        )
      }

      function objectAnimator6(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        value1: number,
        value2: number,
        value3: number,
        value4: number,
        value5: number,
        value6: number,
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        objectAnimator(
          id,
          valueType,
          propertyName,
          [value1, value2, value3, value4, value5, value6],
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator
        )
      }

      function objectAnimator7(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        value1: number,
        value2: number,
        value3: number,
        value4: number,
        value5: number,
        value6: number,
        value7: number,
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        objectAnimator(
          id,
          valueType,
          propertyName,
          [value1, value2, value3, value4, value5, value6, value7],
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator
        )
      }

      function objectAnimator8(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        value1: number,
        value2: number,
        value3: number,
        value4: number,
        value5: number,
        value6: number,
        value7: number,
        value8: number,
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        objectAnimator(
          id,
          valueType,
          propertyName,
          [value1, value2, value3, value4, value5, value6, value7, value8],
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator
        )
      }

      function objectAnimator9(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        value1: number,
        value2: number,
        value3: number,
        value4: number,
        value5: number,
        value6: number,
        value7: number,
        value8: number,
        value9: number,
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        objectAnimator(
          id,
          valueType,
          propertyName,
          [value1, value2, value3, value4, value5, value6, value7, value8, value9],
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator
        )
      }

      function objectAnimator10(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        value1: number,
        value2: number,
        value3: number,
        value4: number,
        value5: number,
        value6: number,
        value7: number,
        value8: number,
        value9: number,
        value10: number,
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        objectAnimator(
          id,
          valueType,
          propertyName,
          [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10],
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator
        )
      }

      context.expose({
        setPivotX,
        setPivotY,
        resetPivot,
        resetAnimators,
        animatorSet,
        startAnimator,
        startAnimatorDelay,
        pauseAnimator,
        resumeAnimator,
        cancelAnimator,
        reverseAnimator,
        play,
        playWith,
        playBefore,
        playAfter,
        playAfterDelay,
        playSequentially,
        playSequentially1,
        playSequentially2,
        playSequentially3,
        playSequentially4,
        playSequentially5,
        playTogether,
        playTogether1,
        playTogether2,
        playTogether3,
        playTogether4,
        playTogether5,
        objectAnimator,
        objectAnimator1,
        objectAnimator2,
        objectAnimator3,
        objectAnimator4,
        objectAnimator5,
        objectAnimator6,
        objectAnimator7,
        objectAnimator8,
        objectAnimator9,
        objectAnimator10,
        ...useBaseView(viewRef),
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'AnimationViewComponent',
          {
            ref: viewRef,
            onAnimationCancel: (evt) => {
              let id = evt.animationId
              context.emit('onAnimationCancel', id)
            },
            onAnimationEnd: (evt) => {
              let id = evt.animationId
              let isReverse = evt.isReverse
              context.emit('onAnimationEnd', id, isReverse)
            },
            onAnimationRepeat: (evt) => {
              let id = evt.animationId
              context.emit('onAnimationRepeat', id)
            },
            onAnimationStart: (evt) => {
              let id = evt.animationId
              let isReverse = evt.isReverse
              context.emit('onAnimationStart', id, isReverse)
            },
            onAnimationPause: (evt) => {
              let id = evt.animationId
              context.emit('onAnimationPause', id)
            },
            onAnimationResume: (evt) => {
              let id = evt.animationId
              context.emit('onAnimationResume', id)
            },
            onAnimationUpdate: (evt) => {
              let id = evt.animationId
              let value = evt.animatedValue
              context.emit('onAnimationUpdate', id, value)
            },
          },
          children
        )
      }
    },
  })
  app.component('qt-animation', AnimationViewImpl)
}

export default registerQTAnimation
