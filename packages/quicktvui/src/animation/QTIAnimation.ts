import {
  QTAnimationInterpolator,
  QTAnimationPropertyName,
  QTAnimationRepeatMode,
  QTAnimationValueType,
  QTAnimatorId,
} from './types'
import { QTIView } from '../view/QTIView'

export interface QTIAnimation extends QTIView {
  animator(
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

  animatorSet(animatorId: QTAnimatorId, duration: number, listenAnimator: boolean)

  //----------------------------------------

  reset()

  start(animatorId?: QTAnimatorId)

  startDelay(animatorId?: QTAnimatorId, delay?: number)

  pause(animatorId?: QTAnimatorId)

  resume(animatorId?: QTAnimatorId)

  cancel(animatorId?: QTAnimatorId)

  reverse(animatorId?: QTAnimatorId)

  //----------------------------------------
  setPivotX(pivotX: number)

  setPivotY(pivotY: number)

  resetPivot()

  //----------------------------------------
  resetAnimators()

  startAnimator(animatorId?: QTAnimatorId)

  startAnimatorDelay(animatorId?: QTAnimatorId, delay?: number)

  pauseAnimator(animatorId?: QTAnimatorId)

  resumeAnimator(animatorId?: QTAnimatorId)

  cancelAnimator(animatorId?: QTAnimatorId)

  reverseAnimator(animatorId?: QTAnimatorId)

  //----------------------------------------
  play(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId)

  playWith(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId)

  playBefore(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId)

  playAfter(animatorSetId: QTAnimatorId, animatorId: QTAnimatorId)

  playAfterDelay(animatorSetId: QTAnimatorId, delay: number)

  playSequentially(animatorSetId: QTAnimatorId, animatorIds: Array<QTAnimatorId>)

  playTogether(animatorSetId: QTAnimatorId, animatorIds: Array<QTAnimatorId>)

  playSequentially1(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId)

  playSequentially2(
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId
  )

  playSequentially3(
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId
  )

  playSequentially4(
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId
  )

  playSequentially5(
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId,
    animatorId5: QTAnimatorId
  )

  playTogether1(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId)

  playTogether2(animatorSetId: QTAnimatorId, animatorId1: QTAnimatorId, animatorId2: QTAnimatorId)

  playTogether3(
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId
  )

  playTogether4(
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId
  )

  playTogether5(
    animatorSetId: QTAnimatorId,
    animatorId1: QTAnimatorId,
    animatorId2: QTAnimatorId,
    animatorId3: QTAnimatorId,
    animatorId4: QTAnimatorId,
    animatorId5: QTAnimatorId
  )

  objectAnimator(
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
