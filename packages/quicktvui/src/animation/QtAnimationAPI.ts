import { isRef, Ref } from '@vue/reactivity'
import { isString } from '../utils/type'
import { Native } from '@extscreen/es3-vue'
import { QT_API_MODULE, QT_CALL_UI_FUNCTION } from '../qt/QtAPIModule'
import { QTIAnimation } from './QTIAnimation'
import {
  QTAnimationInterpolator,
  QTAnimationPropertyName,
  QTAnimationRepeatMode,
  QTAnimationValueType,
  QTAnimatorId,
} from './types'
import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtAnimationAPI extends QtBaseViewAPI {
  setPivotX(instance: string | Ref<QTIAnimation | undefined>, pivotX: number)

  setPivotY(instance: string | Ref<QTIAnimation | undefined>, pivotY: number)

  resetPivot(instance: string | Ref<QTIAnimation | undefined>)

  animator(
    instance: string | Ref<QTIAnimation | undefined>,
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
  )

  animatorSet(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId,
    duration: number,
    listenAnimator: boolean
  )

  reset(instance: string | Ref<QTIAnimation | undefined>)

  start(instance: string | Ref<QTIAnimation | undefined>, animatorId?: QTAnimatorId)

  startDelay(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId?: QTAnimatorId,
    delay?: number
  )

  pause(instance: string | Ref<QTIAnimation | undefined>, animatorId?: QTAnimatorId)

  resume(instance: string | Ref<QTIAnimation | undefined>, animatorId?: QTAnimatorId)

  cancel(instance: string | Ref<QTIAnimation | undefined>, animatorId?: QTAnimatorId)

  reverse(instance: string | Ref<QTIAnimation | undefined>, animatorId?: QTAnimatorId)

  play(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  )

  playWith(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  )

  playBefore(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  )

  playAfter(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  )

  playAfterDelay(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    delay: number
  )

  playSequentially(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorIds: Array<QTAnimatorId>
  )

  playTogether(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorIds: Array<QTAnimatorId>
  )
}

export function createQtAnimationAPI(viewAPI: QtBaseViewAPI): QtAnimationAPI {
  function setPivotX(instance: string | Ref<QTIAnimation | undefined>, pivotX: number) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setPivotX', [pivotX]])
    } else if (isRef(instance)) {
      instance.value?.setPivotX(pivotX)
    }
  }

  function setPivotY(instance: string | Ref<QTIAnimation | undefined>, pivotY: number) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setPivotY', [pivotY]])
    } else if (isRef(instance)) {
      instance.value?.setPivotY(pivotY)
    }
  }

  function resetPivot(instance: string | Ref<QTIAnimation | undefined>) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'resetPivot', []])
    } else if (isRef(instance)) {
      instance.value?.resetPivot()
    }
  }

  function reset(instance: string | Ref<QTIAnimation | undefined>) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'resetAnimators', []])
    } else if (isRef(instance)) {
      instance.value?.resetAnimators()
    }
  }

  function animatorSet(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId,
    duration: number,
    listenAnimator: boolean
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'animatorSet',
        [animatorId, duration, listenAnimator],
      ])
    } else if (isRef(instance)) {
      instance.value?.animatorSet(animatorId, duration, listenAnimator)
    }
  }

  function start(instance: string | Ref<QTIAnimation | undefined>, animatorId?: QTAnimatorId) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'startAnimator',
        [animatorId],
      ])
    } else if (isRef(instance)) {
      instance.value?.startAnimator(animatorId)
    }
  }

  function startDelay(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId?: QTAnimatorId,
    delay?: number
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'startAnimatorDelay',
        [animatorId, delay],
      ])
    } else if (isRef(instance)) {
      instance.value?.startAnimatorDelay(animatorId, delay)
    }
  }

  function pause(instance: string | Ref<QTIAnimation | undefined>, animatorId?: QTAnimatorId) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'pauseAnimator',
        [animatorId],
      ])
    } else if (isRef(instance)) {
      instance.value?.pauseAnimator(animatorId)
    }
  }

  function resume(instance: string | Ref<QTIAnimation | undefined>, animatorId?: QTAnimatorId) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'resumeAnimator',
        [animatorId],
      ])
    } else if (isRef(instance)) {
      instance.value?.resumeAnimator(animatorId)
    }
  }

  function cancel(instance: string | Ref<QTIAnimation | undefined>, animatorId?: QTAnimatorId) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'cancelAnimator',
        [animatorId],
      ])
    } else if (isRef(instance)) {
      instance.value?.cancelAnimator(animatorId)
    }
  }

  function reverse(instance: string | Ref<QTIAnimation | undefined>, animatorId?: QTAnimatorId) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'reverseAnimator',
        [animatorId],
      ])
    } else if (isRef(instance)) {
      instance.value?.reverseAnimator(animatorId)
    }
  }

  function play(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'play',
        [animatorSetId, animatorId],
      ])
    } else if (isRef(instance)) {
      instance.value?.play(animatorSetId, animatorId)
    }
  }

  function playWith(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playWith',
        [animatorSetId, animatorId],
      ])
    } else if (isRef(instance)) {
      instance.value?.playWith(animatorSetId, animatorId)
    }
  }

  function playBefore(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playBefore',
        [animatorSetId, animatorId],
      ])
    } else if (isRef(instance)) {
      instance.value?.playBefore(animatorSetId, animatorId)
    }
  }

  function playAfter(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playAfter',
        [animatorSetId, animatorId],
      ])
    } else if (isRef(instance)) {
      instance.value?.playAfter(animatorSetId, animatorId)
    }
  }

  function playAfterDelay(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    delay: number
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playAfterDelay',
        [animatorSetId, delay],
      ])
    } else if (isRef(instance)) {
      instance.value?.playAfterDelay(animatorSetId, delay)
    }
  }

  function playSequentially(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorIds: Array<QTAnimatorId>
  ) {
    if (isString(instance)) {
      const count = animatorIds.length
      const funcName = `playSequentially${count}`
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        funcName,
        [animatorSetId, ...animatorIds],
      ])
    } else if (isRef(instance)) {
      instance.value?.playSequentially(animatorSetId, animatorIds)
    }
  }

  function playTogether(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorIds: Array<QTAnimatorId>
  ) {
    if (isString(instance)) {
      const count = animatorIds.length
      const funcName = `playTogether${count}`
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        funcName,
        [animatorSetId, ...animatorIds],
      ])
    } else if (isRef(instance)) {
      instance.value?.playTogether(animatorSetId, animatorIds)
    }
  }

  function animator(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      const funcName = `objectAnimator${values.length == 0 ? '' : values.length}`
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        funcName,
        [
          id,
          valueType,
          propertyName,
          ...values,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.animator(
        id,
        valueType,
        propertyName,
        values,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  return {
    ...viewAPI,
    setPivotX,
    setPivotY,
    resetPivot,
    reset,
    animatorSet,
    start,
    startDelay,
    pause,
    resume,
    cancel,
    reverse,
    play,
    playWith,
    playBefore,
    playAfter,
    playAfterDelay,
    playSequentially,
    playTogether,
    animator,
  }
}
