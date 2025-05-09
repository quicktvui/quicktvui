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

  playSequentially1(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId
  )

  playSequentially2(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId
  )

  playSequentially3(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId
  )

  playSequentially4(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId
  )

  playSequentially5(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId,
    animatorId5: QTAnimatorId
  )

  playTogether1(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId
  )

  playTogether2(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId
  )

  playTogether3(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId
  )

  playTogether4(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId
  )

  playTogether5(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId,
    animatorId5: QTAnimatorId
  )

  objectAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
    id: QTAnimatorId,
    valueType: QTAnimationValueType,
    propertyName: QTAnimationPropertyName,
    duration: number,
    repeatMode: QTAnimationRepeatMode,
    repeatCount: number,
    listenAnimator: boolean,
    listenAnimatorValue: boolean,
    interpolator?: QTAnimationInterpolator
  )

  objectAnimator1(
    instance: string | Ref<QTIAnimation | undefined>,
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
  )

  objectAnimator2(
    instance: string | Ref<QTIAnimation | undefined>,
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
  )

  objectAnimator3(
    instance: string | Ref<QTIAnimation | undefined>,
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
  )

  objectAnimator4(
    instance: string | Ref<QTIAnimation | undefined>,
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
  )

  objectAnimator5(
    instance: string | Ref<QTIAnimation | undefined>,
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
  )

  objectAnimator6(
    instance: string | Ref<QTIAnimation | undefined>,
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
  )

  objectAnimator7(
    instance: string | Ref<QTIAnimation | undefined>,
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
  )

  objectAnimator8(
    instance: string | Ref<QTIAnimation | undefined>,
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
  )

  objectAnimator9(
    instance: string | Ref<QTIAnimation | undefined>,
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
  )

  objectAnimator10(
    instance: string | Ref<QTIAnimation | undefined>,
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

  function playSequentially1(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playSequentially1',
        [animatorSetId, animatorId1],
      ])
    } else if (isRef(instance)) {
      instance.value?.playSequentially1(animatorSetId, animatorId1)
    }
  }

  function playSequentially2(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playSequentially2',
        [animatorSetId, animatorId1, animatorId2],
      ])
    } else if (isRef(instance)) {
      instance.value?.playSequentially2(animatorSetId, animatorId1, animatorId2)
    }
  }

  function playSequentially3(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playSequentially3',
        [animatorSetId, animatorId1, animatorId2, animatorId3],
      ])
    } else if (isRef(instance)) {
      instance.value?.playSequentially3(animatorSetId, animatorId1, animatorId2, animatorId3)
    }
  }

  function playSequentially4(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playSequentially4',
        [animatorSetId, animatorId1, animatorId2, animatorId3, animatorId4],
      ])
    } else if (isRef(instance)) {
      instance.value?.playSequentially4(
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4
      )
    }
  }

  function playSequentially5(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId,
    animatorId5: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playSequentially5',
        [animatorSetId, animatorId1, animatorId2, animatorId3, animatorId4, animatorId5],
      ])
    } else if (isRef(instance)) {
      instance.value?.playSequentially5(
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4,
        animatorId5
      )
    }
  }

  function playTogether1(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playTogether1',
        [animatorSetId, animatorId1],
      ])
    } else if (isRef(instance)) {
      instance.value?.playTogether1(animatorSetId, animatorId1)
    }
  }

  function playTogether2(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playTogether2',
        [animatorSetId, animatorId1, animatorId2],
      ])
    } else if (isRef(instance)) {
      instance.value?.playTogether2(animatorSetId, animatorId1, animatorId2)
    }
  }

  function playTogether3(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playTogether3',
        [animatorSetId, animatorId1, animatorId2, animatorId3],
      ])
    } else if (isRef(instance)) {
      instance.value?.playTogether3(animatorSetId, animatorId1, animatorId2, animatorId3)
    }
  }

  function playTogether4(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playTogether4',
        [animatorSetId, animatorId1, animatorId2, animatorId3, animatorId4],
      ])
    } else if (isRef(instance)) {
      instance.value?.playTogether4(
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4
      )
    }
  }

  function playTogether5(
    instance: string | Ref<QTIAnimation | undefined>,
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId,
    animatorId5: QTAnimatorId
  ) {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'playTogether5',
        [animatorSetId, animatorId1, animatorId2, animatorId3, animatorId4, animatorId5],
      ])
    } else if (isRef(instance)) {
      instance.value?.playTogether5(
        animatorSetId,
        animatorId1,
        animatorId2,
        animatorId3,
        animatorId4,
        animatorId5
      )
    }
  }

  function objectAnimator(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'objectAnimator',
        [
          id,
          valueType,
          propertyName,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator(
        id,
        valueType,
        propertyName,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator1(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'objectAnimator1',
        [
          id,
          valueType,
          propertyName,
          value1,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator1(
        id,
        valueType,
        propertyName,
        value1,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator2(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'objectAnimator2',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator2(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator3(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'objectAnimator3',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator3(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator4(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'objectAnimator4',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator4(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator5(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'objectAnimator5',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator5(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator6(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'objectAnimator6',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          value6,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator6(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator7(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'objectAnimator7',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          value6,
          value7,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator7(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator8(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'objectAnimator8',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          value6,
          value7,
          value8,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator8(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator9(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'objectAnimator9',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          value6,
          value7,
          value8,
          value9,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator9(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        value9,
        duration,
        repeatMode,
        repeatCount,
        listenAnimator,
        listenAnimatorValue,
        interpolator
      )
    }
  }

  function objectAnimator10(
    instance: string | Ref<QTIAnimation | undefined>,
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
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'objectAnimator10',
        [
          id,
          valueType,
          propertyName,
          value1,
          value2,
          value3,
          value4,
          value5,
          value6,
          value7,
          value8,
          value9,
          value10,
          duration,
          repeatMode,
          repeatCount,
          listenAnimator,
          listenAnimatorValue,
          interpolator,
        ],
      ])
    } else if (isRef(instance)) {
      instance.value?.objectAnimator10(
        id,
        valueType,
        propertyName,
        value1,
        value2,
        value3,
        value4,
        value5,
        value6,
        value7,
        value8,
        value9,
        value10,
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
  }
}
