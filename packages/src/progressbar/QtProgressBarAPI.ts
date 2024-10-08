import {QtViewAPI} from "../view/QtViewAPI";
import {isRef, Ref} from "@vue/reactivity";
import {QTSeekBarMode} from "../seekbar/QTSeekBarMode";
import {QTSeekBarGravity} from "../seekbar/QTSeekBarGravity";
import {ESGradient} from "@extscreen/es3-component";
import {QTSeekBarIndicatorMode} from "../seekbar/QTSeekBarIndicatorMode";
import {QTSeekBarTickMarkMode} from "../seekbar/QTSeekBarTickMarkMode";
import {QTSeekBarTickMarkGravity} from "../seekbar/QTSeekBarTickMarkGravity";
import {QTSeekBarTickMarkLayoutGravity} from "../seekbar/QTSeekBarTickMarkLayoutGravity";
import {QTIProgressBar} from "./QTIProgressBar";
import {isString} from "../utils/type";
import {Native} from "@extscreen/es3-vue";
import {QT_API_MODULE, QT_CALL_UI_FUNCTION} from "../qt/QtAPI";

export interface QtProgressBarAPI extends QtViewAPI {

  invalidateProgressBar(instance: string | Ref<QTIProgressBar | undefined>): void

  setFocusable(instance: string | Ref<QTIProgressBar | undefined>, focusable: boolean): void

  setClickable(instance: string | Ref<QTIProgressBar | undefined>, clickable: boolean): void

  setVisible(instance: string | Ref<QTIProgressBar | undefined>, visible: boolean): void

  setLeftSeekBarVisible(instance: string | Ref<QTIProgressBar | undefined>, visible: boolean): void

  setRightSeekBarVisible(instance: string | Ref<QTIProgressBar | undefined>, visible: boolean): void

  setSeekBarMode(instance: string | Ref<QTIProgressBar | undefined>, mode: QTSeekBarMode): void

  setProgress(instance: string | Ref<QTIProgressBar | undefined>, progress: number): void

  setSecondProgress(instance: string | Ref<QTIProgressBar | undefined>, progress: number): void

  show(instance: string | Ref<QTIProgressBar | undefined>, value: boolean): void

  setMaxProgress(instance: string | Ref<QTIProgressBar | undefined>, progress: number): void

  setRangeProgress(instance: string | Ref<QTIProgressBar | undefined>, leftValue: number, rightValue: number): void

  getProgress(instance: string | Ref<QTIProgressBar | undefined>): void

  getLeftProgress(instance: string | Ref<QTIProgressBar | undefined>): void

  getRightProgress(instance: string | Ref<QTIProgressBar | undefined>): void

  setRange(instance: string | Ref<QTIProgressBar | undefined>, min: number, max: number, minInterval: number): void

  setGravity(instance: string | Ref<QTIProgressBar | undefined>, gravity: QTSeekBarGravity): void

  setProgressWidth(instance: string | Ref<QTIProgressBar | undefined>, progressWidth: number): void

  setProgressHeight(instance: string | Ref<QTIProgressBar | undefined>, progressHeight: number): void

  setProgressRadius(instance: string | Ref<QTIProgressBar | undefined>, progressRadius: number): void

  setProgressColor(instance: string | Ref<QTIProgressBar | undefined>, progressColor: number): void

  setProgressDefaultColor(instance: string | Ref<QTIProgressBar | undefined>, defaultProgressColor: number): void

  setProgressDrawable(instance: string | Ref<QTIProgressBar | undefined>, progressDrawable: ESGradient): void

  setProgressDefaultDrawable(instance: string | Ref<QTIProgressBar | undefined>, progressDefaultDrawable: ESGradient): void

  setProgressUrl(instance: string | Ref<QTIProgressBar | undefined>, progressUrl: string): void

  setProgressDefaultUrl(instance: string | Ref<QTIProgressBar | undefined>, progressDefaultUrl: string): void

  showIndicator(instance: string | Ref<QTIProgressBar | undefined>, showIndicator: boolean): void

  showLeftIndicator(instance: string | Ref<QTIProgressBar | undefined>, showIndicator: boolean): void

  showRightIndicator(instance: string | Ref<QTIProgressBar | undefined>, showIndicator: boolean): void

  setIndicatorShowMode(instance: string | Ref<QTIProgressBar | undefined>, indicatorShowMode: QTSeekBarIndicatorMode): void

  setLeftIndicatorShowMode(instance: string | Ref<QTIProgressBar | undefined>, indicatorShowMode: QTSeekBarIndicatorMode): void

  setRightIndicatorShowMode(instance: string | Ref<QTIProgressBar | undefined>, indicatorShowMode: QTSeekBarIndicatorMode): void

  setIndicatorWidth(instance: string | Ref<QTIProgressBar | undefined>, indicatorWidth: number): void

  setLeftIndicatorWidth(instance: string | Ref<QTIProgressBar | undefined>, indicatorWidth: number): void

  setRightIndicatorWidth(instance: string | Ref<QTIProgressBar | undefined>, indicatorWidth: number): void

  setIndicatorHeight(instance: string | Ref<QTIProgressBar | undefined>, indicatorHeight: number): void

  setLeftIndicatorHeight(instance: string | Ref<QTIProgressBar | undefined>, indicatorHeight: number): void

  setRightIndicatorHeight(instance: string | Ref<QTIProgressBar | undefined>, indicatorHeight: number): void

  setIndicatorTextDecimalFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void

  setLeftIndicatorTextDecimalFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void

  setRightIndicatorTextDecimalFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void

  setIndicatorTextStringFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void

  setLeftIndicatorTextStringFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void

  setRightIndicatorTextStringFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void

  setIndicatorMargin(instance: string | Ref<QTIProgressBar | undefined>, indicatorMargin: number): void

  setLeftIndicatorMargin(instance: string | Ref<QTIProgressBar | undefined>, indicatorMargin: number): void

  setRightIndicatorMargin(instance: string | Ref<QTIProgressBar | undefined>, indicatorMargin: number): void

  setIndicatorPaddingBottom(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingBottom: number): void

  setLeftIndicatorPaddingBottom(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingBottom: number): void

  setRightIndicatorPaddingBottom(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingBottom: number): void

  setIndicatorPaddingTop(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingTop: number): void

  setLeftIndicatorPaddingTop(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingTop: number): void

  setRightIndicatorPaddingTop(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingTop: number): void

  setIndicatorPaddingLeft(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingLeft: number): void

  setLeftIndicatorPaddingLeft(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingLeft: number): void

  setRightIndicatorPaddingLeft(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingLeft: number): void

  setIndicatorPaddingRight(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingRight: number): void

  setLeftIndicatorPaddingRight(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingRight: number): void

  setRightIndicatorPaddingRight(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingRight: number): void

  setIndicatorBackgroundColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorBackgroundColor: number): void

  setLeftIndicatorBackgroundColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorBackgroundColor: number): void

  setRightIndicatorBackgroundColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorBackgroundColor: number): void

  setIndicatorRadius(instance: string | Ref<QTIProgressBar | undefined>, indicatorRadius: number): void

  setLeftIndicatorRadius(instance: string | Ref<QTIProgressBar | undefined>, indicatorRadius: number): void

  setRightIndicatorRadius(instance: string | Ref<QTIProgressBar | undefined>, indicatorRadius: number): void

  setIndicatorTextSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextSize: number): void

  setLeftIndicatorTextSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextSize: number): void

  setRightIndicatorTextSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextSize: number): void

  setIndicatorTextColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextColor: number): void

  setLeftIndicatorTextColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextColor: number): void

  setRightIndicatorTextColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextColor: number): void

  setIndicatorArrowSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorArrowSize: number): void

  setLeftIndicatorArrowSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorArrowSize: number): void

  setRightIndicatorArrowSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorArrowSize: number): void

  setIndicatorDrawable(instance: string | Ref<QTIProgressBar | undefined>, indicatorDrawable: ESGradient): void

  setLeftIndicatorDrawable(instance: string | Ref<QTIProgressBar | undefined>, leftIndicatorDrawable: ESGradient): void

  setRightIndicatorDrawable(instance: string | Ref<QTIProgressBar | undefined>, rightIndicatorDrawable: ESGradient): void

  setIndicatorUrl(instance: string | Ref<QTIProgressBar | undefined>, indicatorUrl: string): void

  setLeftIndicatorUrl(instance: string | Ref<QTIProgressBar | undefined>, leftIndicatorUrl: string): void

  setRightIndicatorUrl(instance: string | Ref<QTIProgressBar | undefined>, rightIndicatorUrl: string): void

  setThumbWidth(instance: string | Ref<QTIProgressBar | undefined>, thumbWidth: number): void

  setLeftThumbWidth(instance: string | Ref<QTIProgressBar | undefined>, thumbWidth: number): void

  setRightThumbWidth(instance: string | Ref<QTIProgressBar | undefined>, thumbWidth: number): void

  setThumbHeight(instance: string | Ref<QTIProgressBar | undefined>, thumbHeight: number): void

  setLeftThumbHeight(instance: string | Ref<QTIProgressBar | undefined>, thumbHeight: number): void

  setRightThumbHeight(instance: string | Ref<QTIProgressBar | undefined>, thumbHeight: number): void

  scaleThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  scaleLeftThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  scaleRightThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  resetThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  resetLeftThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  resetRightThumb(instance: string | Ref<QTIProgressBar | undefined>): void

  setThumbScaleRatio(instance: string | Ref<QTIProgressBar | undefined>, thumbScaleRatio: number): void

  setLeftThumbScaleRatio(instance: string | Ref<QTIProgressBar | undefined>, thumbScaleRatio: number): void

  setRightThumbScaleRatio(instance: string | Ref<QTIProgressBar | undefined>, thumbScaleRatio: number): void

  setThumbActivate(instance: string | Ref<QTIProgressBar | undefined>, activate: boolean): void

  setLeftThumbActivate(instance: string | Ref<QTIProgressBar | undefined>, activate: boolean): void

  setRightThumbActivate(instance: string | Ref<QTIProgressBar | undefined>, activate: boolean): void

  setThumbDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void

  setLeftThumbDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void

  setRightThumbDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void

  setThumbUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void

  setLeftThumbUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void

  setRightThumbUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void

  setThumbInactivatedDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void

  setLeftThumbInactivatedDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void

  setRightThumbInactivatedDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void

  setThumbInactivatedUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void

  setLeftThumbInactivatedUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void

  setRightThumbInactivatedUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void

  setTickMarkMode(instance: string | Ref<QTIProgressBar | undefined>, tickMarkMode: QTSeekBarTickMarkMode): void

  setTickMarkGravity(instance: string | Ref<QTIProgressBar | undefined>, tickMarkGravity: QTSeekBarTickMarkGravity): void

  setTickMarkLayoutGravity(instance: string | Ref<QTIProgressBar | undefined>, tickMarkLayoutGravity: QTSeekBarTickMarkLayoutGravity): void

  setTickMarkTextArray(instance: string | Ref<QTIProgressBar | undefined>, tickMarkTextArray: Array<string>): void

  setTickMarkTextMargin(instance: string | Ref<QTIProgressBar | undefined>, tickMarkTextMargin: number): void

  setTickMarkTextSize(instance: string | Ref<QTIProgressBar | undefined>, tickMarkTextSize: number): void

  setTickMarkTextColor(instance: string | Ref<QTIProgressBar | undefined>, tickMarkTextColor: number): void

  setTickMarkInRangeTextColor(instance: string | Ref<QTIProgressBar | undefined>, tickMarkInRangeTextColor: number): void

  setSteps(instance: string | Ref<QTIProgressBar | undefined>, steps: number): void

  setStepsWidth(instance: string | Ref<QTIProgressBar | undefined>, stepsWidth: number): void

  setStepsHeight(instance: string | Ref<QTIProgressBar | undefined>, stepsHeight: number): void

  setStepsRadius(instance: string | Ref<QTIProgressBar | undefined>, stepsRadius: number): void

  setStepsColor(instance: string | Ref<QTIProgressBar | undefined>, stepsColor: number): void

  setStepsAutoBonding(instance: string | Ref<QTIProgressBar | undefined>, stepsAutoBonding: boolean): void

  setStepsDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawableArray: Array<ESGradient>): void

  setStepsUrl(instance: string | Ref<QTIProgressBar | undefined>, urlArray: Array<string>): void
}

export function createQtProgressBarAPI(viewAPI: QtViewAPI): QtProgressBarAPI {

  function invalidateProgressBar(instance: string | Ref<QTIProgressBar | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'invalidateSeekBar', []]);
    } else if (isRef(instance)) {
      instance.value?.invalidateProgressBar()
    }
  }

  function setFocusable(instance: string | Ref<QTIProgressBar | undefined>, focusable: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setFocusable', [focusable]]);
    } else if (isRef(instance)) {
      instance.value?.setFocusable(focusable)
    }
  }

  function setClickable(instance: string | Ref<QTIProgressBar | undefined>, clickable: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setClickable', [clickable]]);
    } else if (isRef(instance)) {
      instance.value?.setClickable(clickable)
    }
  }

  function setVisible(instance: string | Ref<QTIProgressBar | undefined>, visible: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setVisible', [visible]]);
    } else if (isRef(instance)) {
      instance.value?.setVisible(visible)
    }
  }

  function setLeftSeekBarVisible(instance: string | Ref<QTIProgressBar | undefined>, visible: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftSeekBarVisible', [visible]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftSeekBarVisible(visible)
    }
  }

  function setRightSeekBarVisible(instance: string | Ref<QTIProgressBar | undefined>, visible: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightSeekBarVisible', [visible]]);
    } else if (isRef(instance)) {
      instance.value?.setRightSeekBarVisible(visible)
    }
  }

  function setSeekBarMode(instance: string | Ref<QTIProgressBar | undefined>, mode: QTSeekBarMode): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setSeekBarMode', [mode]]);
    } else if (isRef(instance)) {
      instance.value?.setSeekBarMode(mode)
    }
  }

  function setProgress(instance: string | Ref<QTIProgressBar | undefined>, progress: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setProgress', [progress]]);
    } else if (isRef(instance)) {
      instance.value?.setProgress(progress)
    }
  }

  function setSecondProgress(instance: string | Ref<QTIProgressBar | undefined>, progress: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setSecondProgress', [progress]]);
    } else if (isRef(instance)) {
      instance.value?.setSecondProgress(progress)
    }
  }

  function show(instance: string | Ref<QTIProgressBar | undefined>, value: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'show', [value]]);
    } else if (isRef(instance)) {
      instance.value?.show(value)
    }
  }

  function setMaxProgress(instance: string | Ref<QTIProgressBar | undefined>, progress: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setMaxProgress', [progress]]);
    } else if (isRef(instance)) {
      instance.value?.setMaxProgress(progress)
    }
  }

  function setRangeProgress(instance: string | Ref<QTIProgressBar | undefined>, leftValue: number, rightValue: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRangeProgress', [leftValue, rightValue]]);
    } else if (isRef(instance)) {
      instance.value?.setRangeProgress(leftValue, rightValue)
    }
  }

  function getProgress(instance: string | Ref<QTIProgressBar | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'getProgress', []]);
    } else if (isRef(instance)) {
      instance.value?.getProgress()
    }
  }

  function getLeftProgress(instance: string | Ref<QTIProgressBar | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'getLeftProgress', []]);
    } else if (isRef(instance)) {
      instance.value?.getLeftProgress()
    }
  }

  function getRightProgress(instance: string | Ref<QTIProgressBar | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'getRightProgress', []]);
    } else if (isRef(instance)) {
      instance.value?.getRightProgress()
    }
  }

  function setRange(instance: string | Ref<QTIProgressBar | undefined>, min: number, max: number, minInterval: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRange', [min, max, minInterval]]);
    } else if (isRef(instance)) {
      instance.value?.setRange(min, max, minInterval)
    }
  }

  function setGravity(instance: string | Ref<QTIProgressBar | undefined>, gravity: QTSeekBarGravity): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setGravity', [gravity]]);
    } else if (isRef(instance)) {
      instance.value?.setGravity(gravity)
    }
  }

  function setProgressWidth(instance: string | Ref<QTIProgressBar | undefined>, progressWidth: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setProgressWidth', [progressWidth]]);
    } else if (isRef(instance)) {
      instance.value?.setProgressWidth(progressWidth)
    }
  }

  function setProgressHeight(instance: string | Ref<QTIProgressBar | undefined>, progressHeight: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setProgressHeight', [progressHeight]]);
    } else if (isRef(instance)) {
      instance.value?.setProgressHeight(progressHeight)
    }
  }

  function setProgressRadius(instance: string | Ref<QTIProgressBar | undefined>, progressRadius: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setProgressRadius', [progressRadius]]);
    } else if (isRef(instance)) {
      instance.value?.setProgressRadius(progressRadius)
    }
  }

  function setProgressColor(instance: string | Ref<QTIProgressBar | undefined>, progressColor: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setProgressColor', [progressColor]]);
    } else if (isRef(instance)) {
      instance.value?.setProgressColor(progressColor)
    }
  }

  function setProgressDefaultColor(instance: string | Ref<QTIProgressBar | undefined>, defaultProgressColor: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setProgressDefaultColor', [defaultProgressColor]]);
    } else if (isRef(instance)) {
      instance.value?.setProgressDefaultColor(defaultProgressColor)
    }
  }

  function setProgressDrawable(instance: string | Ref<QTIProgressBar | undefined>, progressDrawable: ESGradient): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setProgressDrawable', [progressDrawable]]);
    } else if (isRef(instance)) {
      instance.value?.setProgressDrawable(progressDrawable)
    }
  }

  function setProgressDefaultDrawable(instance: string | Ref<QTIProgressBar | undefined>, progressDefaultDrawable: ESGradient): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setProgressDefaultDrawable', [progressDefaultDrawable]]);
    } else if (isRef(instance)) {
      instance.value?.setProgressDefaultDrawable(progressDefaultDrawable)
    }
  }

  function setProgressUrl(instance: string | Ref<QTIProgressBar | undefined>, progressUrl: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setProgressUrl', [progressUrl]]);
    } else if (isRef(instance)) {
      instance.value?.setProgressUrl(progressUrl)
    }
  }

  function setProgressDefaultUrl(instance: string | Ref<QTIProgressBar | undefined>, progressDefaultUrl: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setProgressDefaultUrl', [progressDefaultUrl]]);
    } else if (isRef(instance)) {
      instance.value?.setProgressDefaultUrl(progressDefaultUrl)
    }
  }

  function showIndicator(instance: string | Ref<QTIProgressBar | undefined>, showIndicator: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'showIndicator', [showIndicator]]);
    } else if (isRef(instance)) {
      instance.value?.showIndicator(showIndicator)
    }
  }

  function showLeftIndicator(instance: string | Ref<QTIProgressBar | undefined>, showIndicator: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'showLeftIndicator', [showIndicator]]);
    } else if (isRef(instance)) {
      instance.value?.showLeftIndicator(showIndicator)
    }
  }

  function showRightIndicator(instance: string | Ref<QTIProgressBar | undefined>, showIndicator: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'showRightIndicator', [showIndicator]]);
    } else if (isRef(instance)) {
      instance.value?.showRightIndicator(showIndicator)
    }
  }

  function setIndicatorShowMode(instance: string | Ref<QTIProgressBar | undefined>, indicatorShowMode: QTSeekBarIndicatorMode): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorShowMode', [indicatorShowMode]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorShowMode(indicatorShowMode)
    }
  }

  function setLeftIndicatorShowMode(instance: string | Ref<QTIProgressBar | undefined>, indicatorShowMode: QTSeekBarIndicatorMode): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorShowMode', [indicatorShowMode]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorShowMode(indicatorShowMode)
    }
  }

  function setRightIndicatorShowMode(instance: string | Ref<QTIProgressBar | undefined>, indicatorShowMode: QTSeekBarIndicatorMode): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorShowMode', [indicatorShowMode]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorShowMode(indicatorShowMode)
    }
  }

  function setIndicatorWidth(instance: string | Ref<QTIProgressBar | undefined>, indicatorWidth: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorWidth', [indicatorWidth]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorWidth(indicatorWidth)
    }
  }

  function setLeftIndicatorWidth(instance: string | Ref<QTIProgressBar | undefined>, indicatorWidth: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorWidth', [indicatorWidth]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorWidth(indicatorWidth)
    }
  }

  function setRightIndicatorWidth(instance: string | Ref<QTIProgressBar | undefined>, indicatorWidth: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorWidth', [indicatorWidth]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorWidth(indicatorWidth)
    }
  }

  function setIndicatorHeight(instance: string | Ref<QTIProgressBar | undefined>, indicatorHeight: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorHeight', [indicatorHeight]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorHeight(indicatorHeight)
    }
  }

  function setLeftIndicatorHeight(instance: string | Ref<QTIProgressBar | undefined>, indicatorHeight: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorHeight', [indicatorHeight]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorHeight(indicatorHeight)
    }
  }

  function setRightIndicatorHeight(instance: string | Ref<QTIProgressBar | undefined>, indicatorHeight: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorHeight', [indicatorHeight]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorHeight(indicatorHeight)
    }
  }

  function setIndicatorTextDecimalFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorTextDecimalFormat', [formatPattern]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorTextDecimalFormat(formatPattern)
    }
  }

  function setLeftIndicatorTextDecimalFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorTextDecimalFormat', [formatPattern]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorTextDecimalFormat(formatPattern)
    }
  }

  function setRightIndicatorTextDecimalFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorTextDecimalFormat', [formatPattern]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorTextDecimalFormat(formatPattern)
    }
  }

  function setIndicatorTextStringFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorTextStringFormat', [formatPattern]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorTextStringFormat(formatPattern)
    }
  }

  function setLeftIndicatorTextStringFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorTextStringFormat', [formatPattern]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorTextStringFormat(formatPattern)
    }
  }

  function setRightIndicatorTextStringFormat(instance: string | Ref<QTIProgressBar | undefined>, formatPattern: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorTextStringFormat', [formatPattern]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorTextStringFormat(formatPattern)
    }
  }

  function setIndicatorMargin(instance: string | Ref<QTIProgressBar | undefined>, indicatorMargin: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorMargin', [indicatorMargin]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorMargin(indicatorMargin)
    }
  }

  function setLeftIndicatorMargin(instance: string | Ref<QTIProgressBar | undefined>, indicatorMargin: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorMargin', [indicatorMargin]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorMargin(indicatorMargin)
    }
  }

  function setRightIndicatorMargin(instance: string | Ref<QTIProgressBar | undefined>, indicatorMargin: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorMargin', [indicatorMargin]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorMargin(indicatorMargin)
    }
  }

  function setIndicatorPaddingBottom(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingBottom: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorPaddingBottom', [indicatorPaddingBottom]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorPaddingBottom(indicatorPaddingBottom)
    }
  }

  function setLeftIndicatorPaddingBottom(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingBottom: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorPaddingBottom', [indicatorPaddingBottom]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorPaddingBottom(indicatorPaddingBottom)
    }
  }

  function setRightIndicatorPaddingBottom(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingBottom: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorPaddingBottom', [indicatorPaddingBottom]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorPaddingBottom(indicatorPaddingBottom)
    }
  }

  function setIndicatorPaddingTop(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingTop: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorPaddingTop', [indicatorPaddingTop]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorPaddingTop(indicatorPaddingTop)
    }
  }

  function setLeftIndicatorPaddingTop(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingTop: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorPaddingTop', [indicatorPaddingTop]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorPaddingTop(indicatorPaddingTop)
    }
  }

  function setRightIndicatorPaddingTop(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingTop: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorPaddingTop', [indicatorPaddingTop]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorPaddingTop(indicatorPaddingTop)
    }
  }

  function setIndicatorPaddingLeft(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingLeft: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorPaddingLeft', [indicatorPaddingLeft]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorPaddingLeft(indicatorPaddingLeft)
    }
  }

  function setLeftIndicatorPaddingLeft(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingLeft: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorPaddingLeft', [indicatorPaddingLeft]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorPaddingLeft(indicatorPaddingLeft)
    }
  }

  function setRightIndicatorPaddingLeft(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingLeft: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorPaddingLeft', [indicatorPaddingLeft]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorPaddingLeft(indicatorPaddingLeft)
    }
  }

  function setIndicatorPaddingRight(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingRight: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorPaddingRight', [indicatorPaddingRight]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorPaddingRight(indicatorPaddingRight)
    }
  }

  function setLeftIndicatorPaddingRight(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingRight: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorPaddingRight', [indicatorPaddingRight]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorPaddingRight(indicatorPaddingRight)
    }
  }

  function setRightIndicatorPaddingRight(instance: string | Ref<QTIProgressBar | undefined>, indicatorPaddingRight: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorPaddingRight', [indicatorPaddingRight]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorPaddingRight(indicatorPaddingRight)
    }
  }

  function setIndicatorBackgroundColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorBackgroundColor: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorBackgroundColor', [indicatorBackgroundColor]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorBackgroundColor(indicatorBackgroundColor)
    }
  }

  function setLeftIndicatorBackgroundColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorBackgroundColor: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorBackgroundColor', [indicatorBackgroundColor]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorBackgroundColor(indicatorBackgroundColor)
    }
  }

  function setRightIndicatorBackgroundColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorBackgroundColor: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorBackgroundColor', [indicatorBackgroundColor]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorBackgroundColor(indicatorBackgroundColor)
    }
  }

  function setIndicatorRadius(instance: string | Ref<QTIProgressBar | undefined>, indicatorRadius: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorRadius', [indicatorRadius]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorRadius(indicatorRadius)
    }
  }

  function setLeftIndicatorRadius(instance: string | Ref<QTIProgressBar | undefined>, indicatorRadius: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorRadius', [indicatorRadius]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorRadius(indicatorRadius)
    }
  }

  function setRightIndicatorRadius(instance: string | Ref<QTIProgressBar | undefined>, indicatorRadius: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorRadius', [indicatorRadius]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorRadius(indicatorRadius)
    }
  }

  function setIndicatorTextSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextSize: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorTextSize', [indicatorTextSize]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorTextSize(indicatorTextSize)
    }
  }

  function setLeftIndicatorTextSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextSize: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorTextSize', [indicatorTextSize]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorTextSize(indicatorTextSize)
    }
  }

  function setRightIndicatorTextSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextSize: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorTextSize', [indicatorTextSize]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorTextSize(indicatorTextSize)
    }
  }

  function setIndicatorTextColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextColor: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorTextColor', [indicatorTextColor]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorTextColor(indicatorTextColor)
    }
  }

  function setLeftIndicatorTextColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextColor: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorTextColor', [indicatorTextColor]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorTextColor(indicatorTextColor)
    }
  }

  function setRightIndicatorTextColor(instance: string | Ref<QTIProgressBar | undefined>, indicatorTextColor: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorTextColor', [indicatorTextColor]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorTextColor(indicatorTextColor)
    }
  }

  function setIndicatorArrowSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorArrowSize: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorArrowSize', [indicatorArrowSize]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorArrowSize(indicatorArrowSize)
    }
  }

  function setLeftIndicatorArrowSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorArrowSize: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorArrowSize', [indicatorArrowSize]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorArrowSize(indicatorArrowSize)
    }
  }

  function setRightIndicatorArrowSize(instance: string | Ref<QTIProgressBar | undefined>, indicatorArrowSize: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorArrowSize', [indicatorArrowSize]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorArrowSize(indicatorArrowSize)
    }
  }

  function setIndicatorDrawable(instance: string | Ref<QTIProgressBar | undefined>, indicatorDrawable: ESGradient): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorDrawable', [indicatorDrawable]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorDrawable(indicatorDrawable)
    }
  }

  function setLeftIndicatorDrawable(instance: string | Ref<QTIProgressBar | undefined>, leftIndicatorDrawable: ESGradient): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorDrawable', [leftIndicatorDrawable]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorDrawable(leftIndicatorDrawable)
    }
  }

  function setRightIndicatorDrawable(instance: string | Ref<QTIProgressBar | undefined>, rightIndicatorDrawable: ESGradient): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorDrawable', [rightIndicatorDrawable]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorDrawable(rightIndicatorDrawable)
    }
  }

  function setIndicatorUrl(instance: string | Ref<QTIProgressBar | undefined>, indicatorUrl: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIndicatorUrl', [indicatorUrl]]);
    } else if (isRef(instance)) {
      instance.value?.setIndicatorUrl(indicatorUrl)
    }
  }

  function setLeftIndicatorUrl(instance: string | Ref<QTIProgressBar | undefined>, leftIndicatorUrl: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftIndicatorUrl', [leftIndicatorUrl]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftIndicatorUrl(leftIndicatorUrl)
    }
  }

  function setRightIndicatorUrl(instance: string | Ref<QTIProgressBar | undefined>, rightIndicatorUrl: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightIndicatorUrl', [rightIndicatorUrl]]);
    } else if (isRef(instance)) {
      instance.value?.setRightIndicatorUrl(rightIndicatorUrl)
    }
  }

  function setThumbWidth(instance: string | Ref<QTIProgressBar | undefined>, thumbWidth: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setThumbWidth', [thumbWidth]]);
    } else if (isRef(instance)) {
      instance.value?.setThumbWidth(thumbWidth)
    }
  }

  function setLeftThumbWidth(instance: string | Ref<QTIProgressBar | undefined>, thumbWidth: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftThumbWidth', [thumbWidth]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbWidth(thumbWidth)
    }
  }

  function setRightThumbWidth(instance: string | Ref<QTIProgressBar | undefined>, thumbWidth: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightThumbWidth', [thumbWidth]]);
    } else if (isRef(instance)) {
      instance.value?.setRightThumbWidth(thumbWidth)
    }
  }

  function setThumbHeight(instance: string | Ref<QTIProgressBar | undefined>, thumbHeight: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setThumbHeight', [thumbHeight]]);
    } else if (isRef(instance)) {
      instance.value?.setThumbHeight(thumbHeight)
    }
  }

  function setLeftThumbHeight(instance: string | Ref<QTIProgressBar | undefined>, thumbHeight: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftThumbHeight', [thumbHeight]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbHeight(thumbHeight)
    }
  }

  function setRightThumbHeight(instance: string | Ref<QTIProgressBar | undefined>, thumbHeight: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightThumbHeight', [thumbHeight]]);
    } else if (isRef(instance)) {
      instance.value?.setRightThumbHeight(thumbHeight)
    }
  }

  function scaleThumb(instance: string | Ref<QTIProgressBar | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scaleThumb', []]);
    } else if (isRef(instance)) {
      instance.value?.scaleThumb()
    }
  }

  function scaleLeftThumb(instance: string | Ref<QTIProgressBar | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scaleLeftThumb', []]);
    } else if (isRef(instance)) {
      instance.value?.scaleLeftThumb()
    }
  }

  function scaleRightThumb(instance: string | Ref<QTIProgressBar | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scaleRightThumb', []]);
    } else if (isRef(instance)) {
      instance.value?.scaleRightThumb()
    }
  }

  function resetThumb(instance: string | Ref<QTIProgressBar | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'resetThumb', []]);
    } else if (isRef(instance)) {
      instance.value?.resetThumb()
    }
  }

  function resetLeftThumb(instance: string | Ref<QTIProgressBar | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'resetLeftThumb', []]);
    } else if (isRef(instance)) {
      instance.value?.resetLeftThumb()
    }
  }

  function resetRightThumb(instance: string | Ref<QTIProgressBar | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'resetRightThumb', []]);
    } else if (isRef(instance)) {
      instance.value?.resetRightThumb()
    }
  }

  function setThumbScaleRatio(instance: string | Ref<QTIProgressBar | undefined>, thumbScaleRatio: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setThumbScaleRatio', [thumbScaleRatio]]);
    } else if (isRef(instance)) {
      instance.value?.setThumbScaleRatio(thumbScaleRatio)
    }
  }

  function setLeftThumbScaleRatio(instance: string | Ref<QTIProgressBar | undefined>, thumbScaleRatio: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftThumbScaleRatio', [thumbScaleRatio]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbScaleRatio(thumbScaleRatio)
    }
  }

  function setRightThumbScaleRatio(instance: string | Ref<QTIProgressBar | undefined>, thumbScaleRatio: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightThumbScaleRatio', [thumbScaleRatio]]);
    } else if (isRef(instance)) {
      instance.value?.setRightThumbScaleRatio(thumbScaleRatio)
    }
  }

  function setThumbActivate(instance: string | Ref<QTIProgressBar | undefined>, activate: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setThumbActivate', [activate]]);
    } else if (isRef(instance)) {
      instance.value?.setThumbActivate(activate)
    }
  }

  function setLeftThumbActivate(instance: string | Ref<QTIProgressBar | undefined>, activate: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftThumbActivate', [activate]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbActivate(activate)
    }
  }

  function setRightThumbActivate(instance: string | Ref<QTIProgressBar | undefined>, activate: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightThumbActivate', [activate]]);
    } else if (isRef(instance)) {
      instance.value?.setRightThumbActivate(activate)
    }
  }

  function setThumbDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setThumbDrawable', [drawable]]);
    } else if (isRef(instance)) {
      instance.value?.setThumbDrawable(drawable)
    }
  }

  function setLeftThumbDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftThumbDrawable', [drawable]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbDrawable(drawable)
    }
  }

  function setRightThumbDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightThumbDrawable', [drawable]]);
    } else if (isRef(instance)) {
      instance.value?.setRightThumbDrawable(drawable)
    }
  }

  function setThumbUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setThumbUrl', [url]]);
    } else if (isRef(instance)) {
      instance.value?.setThumbUrl(url)
    }
  }

  function setLeftThumbUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftThumbUrl', [url]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbUrl(url)
    }
  }

  function setRightThumbUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightThumbUrl', [url]]);
    } else if (isRef(instance)) {
      instance.value?.setRightThumbUrl(url)
    }
  }

  function setThumbInactivatedDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setThumbInactivatedDrawable', [drawable]]);
    } else if (isRef(instance)) {
      instance.value?.setThumbInactivatedDrawable(drawable)
    }
  }

  function setLeftThumbInactivatedDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftThumbInactivatedDrawable', [drawable]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbInactivatedDrawable(drawable)
    }
  }

  function setRightThumbInactivatedDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawable: ESGradient): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightThumbInactivatedDrawable', [drawable]]);
    } else if (isRef(instance)) {
      instance.value?.setRightThumbInactivatedDrawable(drawable)
    }
  }

  function setThumbInactivatedUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setThumbInactivatedUrl', [url]]);
    } else if (isRef(instance)) {
      instance.value?.setThumbInactivatedUrl(url)
    }
  }

  function setLeftThumbInactivatedUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLeftThumbInactivatedUrl', [url]]);
    } else if (isRef(instance)) {
      instance.value?.setLeftThumbInactivatedUrl(url)
    }
  }

  function setRightThumbInactivatedUrl(instance: string | Ref<QTIProgressBar | undefined>, url: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRightThumbInactivatedUrl', [url]]);
    } else if (isRef(instance)) {
      instance.value?.setRightThumbInactivatedUrl(url)
    }
  }

  function setTickMarkMode(instance: string | Ref<QTIProgressBar | undefined>, tickMarkMode: QTSeekBarTickMarkMode): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTickMarkMode', [tickMarkMode]]);
    } else if (isRef(instance)) {
      instance.value?.setTickMarkMode(tickMarkMode)
    }
  }

  function setTickMarkGravity(instance: string | Ref<QTIProgressBar | undefined>, tickMarkGravity: QTSeekBarTickMarkGravity): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTickMarkGravity', [tickMarkGravity]]);
    } else if (isRef(instance)) {
      instance.value?.setTickMarkGravity(tickMarkGravity)
    }
  }

  function setTickMarkLayoutGravity(instance: string | Ref<QTIProgressBar | undefined>, tickMarkLayoutGravity: QTSeekBarTickMarkLayoutGravity): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTickMarkLayoutGravity', [tickMarkLayoutGravity]]);
    } else if (isRef(instance)) {
      instance.value?.setTickMarkLayoutGravity(tickMarkLayoutGravity)
    }
  }

  function setTickMarkTextArray(instance: string | Ref<QTIProgressBar | undefined>, tickMarkTextArray: Array<string>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTickMarkTextArray', [tickMarkTextArray]]);
    } else if (isRef(instance)) {
      instance.value?.setTickMarkTextArray(tickMarkTextArray)
    }
  }

  function setTickMarkTextMargin(instance: string | Ref<QTIProgressBar | undefined>, tickMarkTextMargin: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTickMarkTextMargin', [tickMarkTextMargin]]);
    } else if (isRef(instance)) {
      instance.value?.setTickMarkTextMargin(tickMarkTextMargin)
    }
  }

  function setTickMarkTextSize(instance: string | Ref<QTIProgressBar | undefined>, tickMarkTextSize: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTickMarkTextSize', [tickMarkTextSize]]);
    } else if (isRef(instance)) {
      instance.value?.setTickMarkTextSize(tickMarkTextSize)
    }
  }

  function setTickMarkTextColor(instance: string | Ref<QTIProgressBar | undefined>, tickMarkTextColor: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTickMarkTextColor', [tickMarkTextColor]]);
    } else if (isRef(instance)) {
      instance.value?.setTickMarkTextColor(tickMarkTextColor)
    }
  }

  function setTickMarkInRangeTextColor(instance: string | Ref<QTIProgressBar | undefined>, tickMarkInRangeTextColor: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTickMarkInRangeTextColor', [tickMarkInRangeTextColor]]);
    } else if (isRef(instance)) {
      instance.value?.setTickMarkInRangeTextColor(tickMarkInRangeTextColor)
    }
  }

  function setSteps(instance: string | Ref<QTIProgressBar | undefined>, steps: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setSteps', [steps]]);
    } else if (isRef(instance)) {
      instance.value?.setSteps(steps)
    }
  }

  function setStepsWidth(instance: string | Ref<QTIProgressBar | undefined>, stepsWidth: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setStepsWidth', [stepsWidth]]);
    } else if (isRef(instance)) {
      instance.value?.setStepsWidth(stepsWidth)
    }
  }

  function setStepsHeight(instance: string | Ref<QTIProgressBar | undefined>, stepsHeight: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setStepsHeight', [stepsHeight]]);
    } else if (isRef(instance)) {
      instance.value?.setStepsHeight(stepsHeight)
    }
  }

  function setStepsRadius(instance: string | Ref<QTIProgressBar | undefined>, stepsRadius: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setStepsRadius', [stepsRadius]]);
    } else if (isRef(instance)) {
      instance.value?.setStepsRadius(stepsRadius)
    }
  }

  function setStepsColor(instance: string | Ref<QTIProgressBar | undefined>, stepsColor: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setStepsColor', [stepsColor]]);
    } else if (isRef(instance)) {
      instance.value?.setStepsColor(stepsColor)
    }
  }

  function setStepsAutoBonding(instance: string | Ref<QTIProgressBar | undefined>, stepsAutoBonding: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setStepsAutoBonding', [stepsAutoBonding]]);
    } else if (isRef(instance)) {
      instance.value?.setStepsAutoBonding(stepsAutoBonding)
    }
  }

  function setStepsDrawable(instance: string | Ref<QTIProgressBar | undefined>, drawableArray: Array<ESGradient>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setStepsDrawable', [drawableArray]]);
    } else if (isRef(instance)) {
      instance.value?.setStepsDrawable(drawableArray)
    }
  }

  function setStepsUrl(instance: string | Ref<QTIProgressBar | undefined>, urlArray: Array<string>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setStepsUrl', [urlArray]]);
    } else if (isRef(instance)) {
      instance.value?.setStepsUrl(urlArray)
    }
  }

  return {
    ...viewAPI,
    invalidateProgressBar,
    setFocusable,
    setClickable,
    setVisible,
    setLeftSeekBarVisible,
    setRightSeekBarVisible,
    setSeekBarMode,
    setProgress,
    setSecondProgress,
    show,
    setMaxProgress,
    setRangeProgress,
    getProgress,
    getLeftProgress,
    getRightProgress,
    setRange,
    setGravity,
    setProgressWidth,
    setProgressHeight,
    setProgressRadius,
    setProgressColor,
    setProgressDefaultColor,
    setProgressDrawable,
    setProgressDefaultDrawable,
    setProgressUrl,
    setProgressDefaultUrl,
    showIndicator,
    showLeftIndicator,
    showRightIndicator,
    setIndicatorShowMode,
    setLeftIndicatorShowMode,
    setRightIndicatorShowMode,
    setIndicatorWidth,
    setLeftIndicatorWidth,
    setRightIndicatorWidth,
    setIndicatorHeight,
    setLeftIndicatorHeight,
    setRightIndicatorHeight,
    setIndicatorTextDecimalFormat,
    setLeftIndicatorTextDecimalFormat,
    setRightIndicatorTextDecimalFormat,
    setIndicatorTextStringFormat,
    setLeftIndicatorTextStringFormat,
    setRightIndicatorTextStringFormat,
    setIndicatorMargin,
    setLeftIndicatorMargin,
    setRightIndicatorMargin,
    setIndicatorPaddingBottom,
    setLeftIndicatorPaddingBottom,
    setRightIndicatorPaddingBottom,
    setIndicatorPaddingTop,
    setLeftIndicatorPaddingTop,
    setRightIndicatorPaddingTop,
    setIndicatorPaddingLeft,
    setLeftIndicatorPaddingLeft,
    setRightIndicatorPaddingLeft,
    setIndicatorPaddingRight,
    setLeftIndicatorPaddingRight,
    setRightIndicatorPaddingRight,
    setIndicatorBackgroundColor,
    setLeftIndicatorBackgroundColor,
    setRightIndicatorBackgroundColor,
    setIndicatorRadius,
    setLeftIndicatorRadius,
    setRightIndicatorRadius,
    setIndicatorTextSize,
    setLeftIndicatorTextSize,
    setRightIndicatorTextSize,
    setIndicatorTextColor,
    setLeftIndicatorTextColor,
    setRightIndicatorTextColor,
    setIndicatorArrowSize,
    setLeftIndicatorArrowSize,
    setRightIndicatorArrowSize,
    setIndicatorDrawable,
    setLeftIndicatorDrawable,
    setRightIndicatorDrawable,
    setIndicatorUrl,
    setLeftIndicatorUrl,
    setRightIndicatorUrl,
    setThumbWidth,
    setLeftThumbWidth,
    setRightThumbWidth,
    setThumbHeight,
    setLeftThumbHeight,
    setRightThumbHeight,
    scaleThumb,
    scaleLeftThumb,
    scaleRightThumb,
    resetThumb,
    resetLeftThumb,
    resetRightThumb,
    setThumbScaleRatio,
    setLeftThumbScaleRatio,
    setRightThumbScaleRatio,
    setThumbActivate,
    setLeftThumbActivate,
    setRightThumbActivate,
    setThumbDrawable,
    setLeftThumbDrawable,
    setRightThumbDrawable,
    setThumbUrl,
    setLeftThumbUrl,
    setRightThumbUrl,
    setThumbInactivatedDrawable,
    setLeftThumbInactivatedDrawable,
    setRightThumbInactivatedDrawable,
    setThumbInactivatedUrl,
    setLeftThumbInactivatedUrl,
    setRightThumbInactivatedUrl,
    setTickMarkMode,
    setTickMarkGravity,
    setTickMarkLayoutGravity,
    setTickMarkTextArray,
    setTickMarkTextMargin,
    setTickMarkTextSize,
    setTickMarkTextColor,
    setTickMarkInRangeTextColor,
    setSteps,
    setStepsWidth,
    setStepsHeight,
    setStepsRadius,
    setStepsColor,
    setStepsAutoBonding,
    setStepsDrawable,
    setStepsUrl,
  }
}
