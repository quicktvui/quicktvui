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

  resetAnimators(instance: string | Ref<QTIAnimation | undefined>)

  animatorSet(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId,
    duration: number,
    listenAnimator: boolean
  )

  startAnimator(instance: string | Ref<QTIAnimation | undefined>, animatorId: QTAnimatorId)

  startAnimatorDelay(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId,
    delay: number
  )

  pauseAnimator(instance: string | Ref<QTIAnimation | undefined>, animatorId: QTAnimatorId)

  resumeAnimator(instance: string | Ref<QTIAnimation | undefined>, animatorId: QTAnimatorId)

  cancelAnimator(instance: string | Ref<QTIAnimation | undefined>, animatorId: QTAnimatorId)

  reverseAnimator(instance: string | Ref<QTIAnimation | undefined>, animatorId: QTAnimatorId)

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

  function resetAnimators(instance: string | Ref<QTIAnimation | undefined>) {
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

  function startAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ) {
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

  function startAnimatorDelay(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId,
    delay: number
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

  function pauseAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ) {
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

  function resumeAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ) {
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

  function cancelAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ) {
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

  function reverseAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorId: QTAnimatorId
  ) {
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
    playTogether,
    animator,
  }
}
