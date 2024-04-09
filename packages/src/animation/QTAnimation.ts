import {defineComponent, h, ref} from 'vue';
import {ESApp, Native} from "@extscreen/es3-vue";
import {
  QTAnimationInterpolator,
  QTAnimationPropertyName,
  QTAnimationRepeatMode,
  QTAnimationValueType,
  QTAnimatorId
} from "./types";
import useBaseView from '../base/useBaseView'
import {useESDisplay} from "@extscreen/es3-core";

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
        Native.callUIFunction(viewRef.value, 'setPivotX', [pivotX], (res) => {
        });
      }

      function setPivotY(pivotY: number) {
        Native.callUIFunction(viewRef.value, 'setPivotY', [pivotY], (res) => {
        });
      }

      function resetPivot() {
        Native.callUIFunction(viewRef.value, 'resetPivot', [], (res) => {
        });
      }

      function resetAnimators() {
        Native.callUIFunction(viewRef.value, 'resetAnimators', [], (res) => {
        });
      }

      function animatorSet(animatorId: QTAnimatorId, duration: number, listenAnimator: boolean) {
        Native.callUIFunction(viewRef.value, 'animatorSet', [animatorId, duration, listenAnimator], (res) => {
        });
      }

      function startAnimator(animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'startAnimator', [animatorId], (res) => {
        });
      }

      function startAnimatorDelay(animatorId: QTAnimatorId, delay: number) {
        Native.callUIFunction(viewRef.value, 'startAnimatorDelay', [animatorId, delay], (res) => {
        });
      }

      function pauseAnimator(animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'pauseAnimator', [animatorId], (res) => {
        });
      }

      function resumeAnimator(animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'resumeAnimator', [animatorId], (res) => {
        });
      }

      function cancelAnimator(animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'cancelAnimator', [animatorId], (res) => {
        });
      }

      function reverseAnimator(animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'reverseAnimator', [animatorId], (res) => {
        });
      }

      function play(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'play', [animatorSetId, animatorId], (res) => {
        });
      }

      function playWith(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'with', [animatorSetId, animatorId], (res) => {
        });
      }

      function playBefore(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'before', [animatorSetId, animatorId], (res) => {
        });
      }

      function playAfter(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'after', [animatorSetId, animatorId], (res) => {
        });
      }

      function playAfterDelay(animatorSetId: QTAnimatorId, delay: number) {
        Native.callUIFunction(viewRef.value, 'afterDelay', [animatorSetId, delay], (res) => {
        });
      }

      function playSequentially1(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'playSequentially1', [animatorSetId, animatorId1], (res) => {
        });
      }

      function playSequentially2(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'playSequentially2', [animatorSetId, animatorId1, animatorId2], (res) => {
        });
      }

      function playSequentially3(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'playSequentially3', [animatorSetId, animatorId1, animatorId2, animatorId3], (res) => {
        });
      }

      function playSequentially4(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId, animatorId4: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'playSequentially4', [animatorSetId, animatorId1, animatorId2, animatorId3, animatorId4], (res) => {
        });
      }

      function playSequentially5(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId, animatorId4: QTAnimatorId, animatorId5: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'playSequentially5', [animatorSetId, animatorId1, animatorId2, animatorId3, animatorId4, animatorId5], (res) => {
        });
      }

      function playTogether1(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'playTogether1', [animatorSetId, animatorId1], (res) => {
        });
      }

      function playTogether2(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'playTogether2', [animatorSetId, animatorId1, animatorId2], (res) => {
        });
      }

      function playTogether3(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'playTogether3', [animatorSetId, animatorId1, animatorId2, animatorId3], (res) => {
        });
      }

      function playTogether4(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId, animatorId4: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'playTogether4', [animatorSetId, animatorId1, animatorId2, animatorId3, animatorId4], (res) => {
        });
      }

      function playTogether5(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId, animatorId3: QTAnimatorId, animatorId4: QTAnimatorId, animatorId5: QTAnimatorId) {
        Native.callUIFunction(viewRef.value, 'playTogether5', [animatorSetId, animatorId1, animatorId2, animatorId3, animatorId4, animatorId5], (res) => {
        });
      }

      function objectAnimator(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        propertyName: QTAnimationPropertyName,
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        Native.callUIFunction(viewRef.value,
          'objectAnimator', [
            id,
            valueType, propertyName,
            duration, repeatMode, repeatCount,
            listenAnimator, listenAnimatorValue,
            interpolator],
          (res) => {
          });
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
        if (propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z) {
          value1 = value1 * displayScale;
        }
        Native.callUIFunction(viewRef.value,
          'objectAnimator1', [
            id,
            valueType, propertyName,
            value1,
            duration, repeatMode, repeatCount,
            listenAnimator, listenAnimatorValue,
            interpolator], (res) => {
          });
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
        if (propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z) {
          value1 = value1 * displayScale;
          value2 = value2 * displayScale;
        }
        Native.callUIFunction(viewRef.value,
          'objectAnimator2', [
            id,
            valueType, propertyName,
            value1, value2,
            duration, repeatMode, repeatCount,
            listenAnimator, listenAnimatorValue,
            interpolator], (res) => {
          });
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
        if (propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z) {
          value1 = value1 * displayScale;
          value2 = value2 * displayScale;
          value3 = value3 * displayScale;
        }
        Native.callUIFunction(viewRef.value,
          'objectAnimator3', [
            id,
            valueType, propertyName,
            value1, value2, value3,
            duration, repeatMode, repeatCount,
            listenAnimator, listenAnimatorValue,
            interpolator], (res) => {
          });
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
        if (propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z) {
          value1 = value1 * displayScale;
          value2 = value2 * displayScale;
          value3 = value3 * displayScale;
          value4 = value4 * displayScale;
        }
        Native.callUIFunction(viewRef.value,
          'objectAnimator4', [
            id,
            valueType, propertyName,
            value1, value2, value3, value4,
            duration, repeatMode, repeatCount,
            listenAnimator, listenAnimatorValue,
            interpolator], (res) => {
          });
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
        if (propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z) {
          value1 = value1 * displayScale;
          value2 = value2 * displayScale;
          value3 = value3 * displayScale;
          value4 = value4 * displayScale;
          value5 = value5 * displayScale;
        }
        Native.callUIFunction(viewRef.value,
          'objectAnimator5', [
            id,
            valueType, propertyName,
            value1, value2, value3, value4, value5,
            duration, repeatMode, repeatCount,
            listenAnimator, listenAnimatorValue,
            interpolator], (res) => {
          });
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
        if (propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z) {
          value1 = value1 * displayScale;
          value2 = value2 * displayScale;
          value3 = value3 * displayScale;
          value4 = value4 * displayScale;
          value5 = value5 * displayScale;
          value6 = value6 * displayScale;
        }
        Native.callUIFunction(viewRef.value,
          'objectAnimator6', [
            id,
            valueType, propertyName,
            value1, value2, value3, value4, value5, value6,
            duration, repeatMode, repeatCount,
            listenAnimator, listenAnimatorValue,
            interpolator], (res) => {
          });
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
        if (propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z) {
          value1 = value1 * displayScale;
          value2 = value2 * displayScale;
          value3 = value3 * displayScale;
          value4 = value4 * displayScale;
          value5 = value5 * displayScale;
          value6 = value6 * displayScale;
          value7 = value7 * displayScale;
        }
        Native.callUIFunction(viewRef.value,
          'objectAnimator7', [
            id,
            valueType, propertyName,
            value1, value2, value3, value4, value5, value6, value7,
            duration, repeatMode, repeatCount,
            listenAnimator, listenAnimatorValue,
            interpolator], (res) => {
          });
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
        if (propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z) {
          value1 = value1 * displayScale;
          value2 = value2 * displayScale;
          value3 = value3 * displayScale;
          value4 = value4 * displayScale;
          value5 = value5 * displayScale;
          value6 = value6 * displayScale;
          value7 = value7 * displayScale;
          value8 = value8 * displayScale;
        }
        Native.callUIFunction(viewRef.value,
          'objectAnimator8', [
            id,
            valueType, propertyName,
            value1, value2, value3, value4, value5, value6, value7, value8,
            duration, repeatMode, repeatCount,
            listenAnimator, listenAnimatorValue,
            interpolator], (res) => {
          });
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
        if (propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z) {
          value1 = value1 * displayScale;
          value2 = value2 * displayScale;
          value3 = value3 * displayScale;
          value4 = value4 * displayScale;
          value5 = value5 * displayScale;
          value6 = value6 * displayScale;
          value7 = value7 * displayScale;
          value8 = value8 * displayScale;
          value9 = value9 * displayScale;
        }
        Native.callUIFunction(viewRef.value,
          'objectAnimator9', [
            id,
            valueType, propertyName,
            value1, value2, value3, value4, value5, value6, value7, value8, value9,
            duration, repeatMode, repeatCount,
            listenAnimator, listenAnimatorValue,
            interpolator], (res) => {
          });
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
        interpolator?: QTAnimationInterpolator) {
        if (propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_X
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y
          || propertyName == QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Z) {
          value1 = value1 * displayScale;
          value2 = value2 * displayScale;
          value3 = value3 * displayScale;
          value4 = value4 * displayScale;
          value5 = value5 * displayScale;
          value6 = value6 * displayScale;
          value7 = value7 * displayScale;
          value8 = value8 * displayScale;
          value9 = value9 * displayScale;
          value10 = value10 * displayScale;
        }
        Native.callUIFunction(viewRef.value,
          'objectAnimator10', [
            id,
            valueType, propertyName,
            value1, value2, value3, value4, value5, value6, value7, value8, value9, value10,
            duration, repeatMode, repeatCount,
            listenAnimator, listenAnimatorValue,
            interpolator], (res) => {
          });
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
        playSequentially1,
        playSequentially2,
        playSequentially3,
        playSequentially4,
        playSequentially5,
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
        ...useBaseView(viewRef)
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'AnimationViewComponent',
          {
            ref: viewRef,
            onAnimationCancel: (evt) => {
              let id = evt.animationId;
              context.emit('onAnimationCancel', id);
            },
            onAnimationEnd: (evt) => {
              let id = evt.animationId;
              let isReverse = evt.isReverse;
              context.emit('onAnimationEnd', id, isReverse);
            },
            onAnimationRepeat: (evt) => {
              let id = evt.animationId;
              context.emit('onAnimationRepeat', id);
            },
            onAnimationStart: (evt) => {
              let id = evt.animationId;
              let isReverse = evt.isReverse;
              context.emit('onAnimationStart', id, isReverse);
            },
            onAnimationPause: (evt) => {
              let id = evt.animationId;
              context.emit('onAnimationPause', id);
            },
            onAnimationResume: (evt) => {
              let id = evt.animationId;
              context.emit('onAnimationResume', id);
            },
            onAnimationUpdate: (evt) => {
              let id = evt.animationId;
              let value = evt.animatedValue;
              context.emit('onAnimationUpdate', id, value);
            }
          },
          children
        )
      }
    },
  })
  app.component('qt-animation', AnimationViewImpl)
}

export default registerQTAnimation;
