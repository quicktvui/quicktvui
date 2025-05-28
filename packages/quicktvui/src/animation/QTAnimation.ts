import { defineComponent, h, ref, toRef, watch } from 'vue'
import { ESApp, Native } from '@extscreen/es3-vue'
import {
  QTAnimationInterpolator,
  QTAnimationInterpolatorType,
  QTAnimationPropertyName,
  QTAnimationRepeatMode,
  QTAnimationType,
  QTAnimationValueType,
  QTAnimator,
  QTAnimatorId,
  QTAnimatorRelationType,
  QTAnimatorSet,
} from './types'
import useBaseView from '../base/useBaseView'
import { useESDisplay } from '@extscreen/es3-core'
import { definePropType } from '../utils'
import { nextTick } from '@vue/runtime-core'

function registerQTAnimation(app: ESApp) {
  const AnimationViewImpl = defineComponent({
    props: {
      animator: {
        type: definePropType<QTAnimatorSet | QTAnimator>(Object),
      },
      autoPlay: {
        type: Boolean,
        default: false,
      },
      loop: {
        type: Boolean,
        default: false,
      },
    },
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

      const animatorProps = toRef(props, 'animator')

      let propsAnimatorId: string | null | undefined

      // viewRef 初始化时触发（确保 animator 有值）
      watch(viewRef, (el) => {
        if (el && animatorProps.value) {
          initAnimatorSet(animatorProps.value)
        }
      })

      // animator 变化时触发（确保 viewRef 已准备好）
      watch(
        animatorProps,
        (newVal) => {
          if (newVal && viewRef.value) {
            initAnimatorSet(newVal)
          }
        },
        { deep: true }
      )

      function isAnimatorSet(obj: QTAnimatorSet | QTAnimator): obj is QTAnimatorSet {
        return Array.isArray((obj as QTAnimatorSet).animators)
      }

      function isNonEmptyString(str): str is string {
        return typeof str === 'string' && str.trim().length > 0
      }

      function generateUniqueId(id: string | undefined, prefix = 'id'): string {
        if (isNonEmptyString(id)) {
          return id
        }
        const timestamp = Date.now().toString(36) // 当前时间戳，转成36进制
        const random = Math.random().toString(36).slice(2, 8) // 随机字符串
        return `${prefix}_${timestamp}_${random}`
      }

      function initAnimatorSet(animatorObject: QTAnimatorSet | QTAnimator) {
        if (!animatorObject) {
          return
        }
        reset()

        if (isAnimatorSet(animatorObject)) {
          const ids: QTAnimatorId[] = []
          animatorObject.animators.forEach((animatorValue, index) => {
            const {
              id,
              valueType,
              type,
              values,
              duration,
              repeatMode,
              repeatCount,
              listenAnimator,
              listenAnimatorValue,
              interpolator,
            } = animatorValue

            const uniqueId = generateUniqueId(id)
            ids.push(uniqueId)

            //创建动画
            __animator(
              uniqueId,
              valueType ?? QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
              type,
              values,
              duration,
              repeatMode ??
                (props.loop
                  ? QTAnimationRepeatMode.QT_ANIMATION_REPEAT_MODE_INFINITE
                  : QTAnimationRepeatMode.QT_ANIMATION_REPEAT_MODE_RESTART),
              repeatCount ?? (props.loop ? -1 : 0),
              listenAnimator ?? false,
              listenAnimatorValue ?? false,
              interpolator
            )
          })

          const uniqueId = generateUniqueId(animatorObject.id)
          propsAnimatorId = uniqueId //赋值
          // 应用动画集的组合类型
          animatorSet(
            uniqueId,
            animatorObject.duration ?? -1,
            animatorObject.listenAnimator ?? false
          )

          switch (animatorObject.relationType) {
            case QTAnimatorRelationType.SEQUENCE:
              playSequentially(uniqueId, ids)
              break
            case QTAnimatorRelationType.TOGETHER:
              playTogether(uniqueId, ids)
              break
            case QTAnimatorRelationType.WITH:
              if (ids.length >= 2) {
                play(uniqueId, ids[0])
                playWith(uniqueId, ids[1])
              }
              break
            case QTAnimatorRelationType.BEFORE:
              if (ids.length >= 2) {
                play(uniqueId, ids[0])
                playBefore(uniqueId, ids[1])
              }
              break
            case QTAnimatorRelationType.AFTER:
              if (ids.length >= 2) {
                play(uniqueId, ids[0])
                playAfter(uniqueId, ids[1])
              }
              break
            default:
              playSequentially(uniqueId, ids)
              break
          }
        }
        //
        else {
          const {
            id,
            valueType,
            type,
            values,
            duration,
            repeatMode,
            repeatCount,
            listenAnimator,
            listenAnimatorValue,
            interpolator,
          } = animatorObject

          const uniqueId = generateUniqueId(id)
          propsAnimatorId = uniqueId
          __animator(
            uniqueId,
            valueType ?? QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
            type,
            values,
            duration,
            repeatMode ??
              (props.loop
                ? QTAnimationRepeatMode.QT_ANIMATION_REPEAT_MODE_INFINITE
                : QTAnimationRepeatMode.QT_ANIMATION_REPEAT_MODE_RESTART),
            repeatCount ?? (props.loop ? -1 : 0),
            listenAnimator ?? false,
            listenAnimatorValue ?? false,
            interpolator
          )
        }

        //自动执行
        if (props.autoPlay) {
          start(propsAnimatorId)
        }
      }

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
      function reset() {
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

      //-----------------------------------------------------------------------------------------------
      function startAnimator(animatorId?: QTAnimatorId) {
        nextTick(() => {
          if (!animatorId && !propsAnimatorId) {
            return
          }
          const id = animatorId ?? propsAnimatorId
          Native.callUIFunction(viewRef.value, 'startAnimator', [id], (res) => {})
        })
      }

      function startAnimatorDelay(animatorId?: QTAnimatorId, delay?: number) {
        nextTick(() => {
          if (!animatorId && !propsAnimatorId) {
            return
          }
          const id = animatorId ?? propsAnimatorId
          Native.callUIFunction(viewRef.value, 'startAnimatorDelay', [id, delay ?? 0], (res) => {})
        })
      }

      function pauseAnimator(animatorId?: QTAnimatorId) {
        if (!animatorId && !propsAnimatorId) {
          return
        }
        const id = animatorId ?? propsAnimatorId
        Native.callUIFunction(viewRef.value, 'pauseAnimator', [id], (res) => {})
      }

      function resumeAnimator(animatorId?: QTAnimatorId) {
        if (!animatorId && !propsAnimatorId) {
          return
        }
        const id = animatorId ?? propsAnimatorId
        Native.callUIFunction(viewRef.value, 'resumeAnimator', [id], (res) => {})
      }

      function cancelAnimator(animatorId?: QTAnimatorId) {
        if (!animatorId && !propsAnimatorId) {
          return
        }
        const id = animatorId ?? propsAnimatorId
        Native.callUIFunction(viewRef.value, 'cancelAnimator', [id], (res) => {})
      }

      function reverseAnimator(animatorId?: QTAnimatorId) {
        if (!animatorId && !propsAnimatorId) {
          return
        }
        const id = animatorId ?? propsAnimatorId
        Native.callUIFunction(viewRef.value, 'reverseAnimator', [id], (res) => {})
      }

      function start(animatorId?: QTAnimatorId) {
        nextTick(() => {
          if (!animatorId && !propsAnimatorId) {
            return
          }
          const id = animatorId ?? propsAnimatorId
          Native.callUIFunction(viewRef.value, 'startAnimator', [id], (res) => {})
        })
      }

      function startDelay(animatorId?: QTAnimatorId, delay?: number) {
        nextTick(() => {
          if (!animatorId && !propsAnimatorId) {
            return
          }
          const id = animatorId ?? propsAnimatorId
          Native.callUIFunction(viewRef.value, 'startAnimatorDelay', [id, delay], (res) => {})
        })
      }

      function pause(animatorId?: QTAnimatorId) {
        if (!animatorId && !propsAnimatorId) {
          return
        }
        const id = animatorId ?? propsAnimatorId
        Native.callUIFunction(viewRef.value, 'pauseAnimator', [id], (res) => {})
      }

      function resume(animatorId?: QTAnimatorId) {
        if (!animatorId && !propsAnimatorId) {
          return
        }
        const id = animatorId ?? propsAnimatorId
        Native.callUIFunction(viewRef.value, 'resumeAnimator', [id], (res) => {})
      }

      function cancel(animatorId?: QTAnimatorId) {
        if (!animatorId && !propsAnimatorId) {
          return
        }
        const id = animatorId ?? propsAnimatorId
        Native.callUIFunction(viewRef.value, 'cancelAnimator', [id], (res) => {})
      }

      function reverse(animatorId?: QTAnimatorId) {
        if (!animatorId && !propsAnimatorId) {
          return
        }
        const id = animatorId ?? propsAnimatorId
        Native.callUIFunction(viewRef.value, 'reverseAnimator', [id], (res) => {})
      }

      //----------------------------------------------------------------------------------------------------------------
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

      function __animator(
        id: QTAnimatorId,
        valueType: QTAnimationValueType,
        type: QTAnimationType,
        values: number[],
        duration: number,
        repeatMode: QTAnimationRepeatMode,
        repeatCount: number,
        listenAnimator: boolean,
        listenAnimatorValue: boolean,
        interpolator?: QTAnimationInterpolator
      ) {
        const isTranslationProp =
          type === QTAnimationType.TRANSLATION_X ||
          type === QTAnimationType.TRANSLATION_Y ||
          type === QTAnimationType.TRANSLATION_Z

        const scaledValues = isTranslationProp ? values.map((v) => v * displayScale) : values

        const funcName = `objectAnimator${values.length == 0 ? '' : values.length}`

        Native.callUIFunction(
          viewRef.value,
          funcName,
          [
            id,
            valueType,
            type,
            ...scaledValues,
            duration,
            repeatMode,
            repeatCount,
            listenAnimator,
            listenAnimatorValue,
            interpolator ?? {
              type: QTAnimationInterpolatorType.QT_LINEAR_INTERPOLATOR,
            },
          ],
          (res) => {}
        )
      }

      function animator(
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
            interpolator ?? {
              type: QTAnimationInterpolatorType.QT_LINEAR_INTERPOLATOR,
            },
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
        animator(
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
        animator(
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
        animator(
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
        animator(
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
        animator(
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
        animator(
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
        animator(
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
        animator(
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
        animator(
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
        animator(
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
        animator,
        animatorSet,
        //
        reset,
        start,
        startDelay,
        pause,
        resume,
        cancel,
        reverse,
        //
        setPivotX,
        setPivotY,
        resetPivot,
        //
        resetAnimators,
        startAnimator,
        startAnimatorDelay,
        pauseAnimator,
        resumeAnimator,
        cancelAnimator,
        reverseAnimator,
        //
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
        //
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
