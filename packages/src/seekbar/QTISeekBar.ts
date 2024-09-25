import {ESGradient} from "@extscreen/es3-component";
import {QTSeekBarMode} from "./QTSeekBarMode";
import {QTSeekBarGravity} from "./QTSeekBarGravity";
import {QTSeekBarIndicatorMode} from "./QTSeekBarIndicatorMode";
import {QTSeekBarTickMarkMode} from "./QTSeekBarTickMarkMode";
import {QTSeekBarTickMarkGravity} from "./QTSeekBarTickMarkGravity";
import {QTSeekBarTickMarkLayoutGravity} from "./QTSeekBarTickMarkLayoutGravity";
import {QTIView} from "../view/QTIView";

export interface QTISeekBar extends QTIView {
  setProgress(p: number): void

  setMaxProgress(value: number): void

  resetSeekbar(): void

  startSeek(forward: boolean): void

  stopSeek(): void

//--------------------------------------------------------------------
  invalidateSeekBar(): void

  setFocusable(focusable: boolean): void

  setClickable(clickable: boolean): void

  requestFocus(): void

  requestLayout(): void

  invalidate(): void

  setVisible(visible: boolean): void

  setLeftSeekBarVisible(visible: boolean): void

  setRightSeekBarVisible(visible: boolean): void

  setSeekBarMode(mode: QTSeekBarMode): void

  setRangeProgress(leftValue: number, rightValue: number): void

  getProgress(): void

  getLeftProgress(): void

  getRightProgress(): void

  setRange(min: number, max: number, minInterval: number): void

  setGravity(gravity: QTSeekBarGravity): void

  setProgressWidth(progressWidth: number): void

  setProgressHeight(progressHeight: number): void

  setProgressRadius(progressRadius: number): void

  setProgressColor(progressColor: number): void

  setProgressDefaultColor(defaultProgressColor: number): void

  setProgressDrawable(progressDrawable: ESGradient): void

  setProgressDefaultDrawable(progressDefaultDrawable: ESGradient): void

  setProgressUrl(progressUrl: string): void

  setProgressDefaultUrl(progressDefaultUrl: string): void

  showIndicator(showIndicator: boolean): void

  showLeftIndicator(showLeftIndicator: boolean): void

  showRightIndicator(showRightIndicator: boolean): void

  setIndicatorShowMode(indicatorShowMode: QTSeekBarIndicatorMode): void

  setLeftIndicatorShowMode(indicatorShowMode: QTSeekBarIndicatorMode): void

  setRightIndicatorShowMode(indicatorShowMode: QTSeekBarIndicatorMode): void

  setIndicatorWidth(indicatorWidth: number): void

  setLeftIndicatorWidth(indicatorWidth: number): void

  setRightIndicatorWidth(indicatorWidth: number): void

  setIndicatorHeight(indicatorHeight: number): void

  setLeftIndicatorHeight(indicatorHeight: number): void

  setRightIndicatorHeight(indicatorHeight: number): void

  setIndicatorTextDecimalFormat(formatPattern: string): void

  setLeftIndicatorTextDecimalFormat(formatPattern: string): void

  setRightIndicatorTextDecimalFormat(formatPattern: string): void

  setIndicatorTextStringFormat(formatPattern: string): void

  setLeftIndicatorTextStringFormat(formatPattern: string): void

  setRightIndicatorTextStringFormat(formatPattern: string): void

  setIndicatorMargin(indicatorMargin: number): void

  setLeftIndicatorMargin(indicatorMargin: number): void

  setRightIndicatorMargin(indicatorMargin: number): void

  setIndicatorPaddingBottom(indicatorPaddingBottom: number): void

  setLeftIndicatorPaddingBottom(indicatorPaddingBottom: number): void

  setRightIndicatorPaddingBottom(indicatorPaddingBottom: number): void

  setIndicatorPaddingTop(indicatorPaddingTop: number): void

  setLeftIndicatorPaddingTop(indicatorPaddingTop: number): void

  setRightIndicatorPaddingTop(indicatorPaddingTop: number): void

  setIndicatorPaddingLeft(indicatorPaddingLeft: number): void

  setLeftIndicatorPaddingLeft(indicatorPaddingLeft: number): void

  setRightIndicatorPaddingLeft(indicatorPaddingLeft: number): void

  setIndicatorPaddingRight(indicatorPaddingRight: number): void

  setLeftIndicatorPaddingRight(indicatorPaddingRight: number): void

  setRightIndicatorPaddingRight(indicatorPaddingRight: number): void

  setIndicatorBackgroundColor(indicatorBackgroundColor: number): void

  setLeftIndicatorBackgroundColor(indicatorBackgroundColor: number): void

  setRightIndicatorBackgroundColor(indicatorBackgroundColor: number): void

  setIndicatorRadius(indicatorRadius: number): void

  setLeftIndicatorRadius(indicatorRadius: number): void

  setRightIndicatorRadius(indicatorRadius: number): void

  setIndicatorTextSize(indicatorTextSize: number): void

  setLeftIndicatorTextSize(indicatorTextSize: number): void

  setRightIndicatorTextSize(indicatorTextSize: number): void

  setIndicatorTextColor(indicatorTextColor: number): void

  setLeftIndicatorTextColor(indicatorTextColor: number): void

  setRightIndicatorTextColor(indicatorTextColor: number): void

  setIndicatorArrowSize(indicatorArrowSize: number): void

  setLeftIndicatorArrowSize(indicatorArrowSize: number): void

  setRightIndicatorArrowSize(indicatorArrowSize: number): void

  setIndicatorDrawable(indicatorDrawable: ESGradient): void

  setLeftIndicatorDrawable(leftIndicatorDrawable: ESGradient): void

  setRightIndicatorDrawable(rightIndicatorDrawable: ESGradient): void

  setIndicatorUrl(indicatorUrl: string): void

  setLeftIndicatorUrl(leftIndicatorUrl: string): void

  setRightIndicatorUrl(rightIndicatorUrl: string): void

  setThumbWidth(thumbWidth: number): void

  setLeftThumbWidth(thumbWidth: number): void

  setRightThumbWidth(thumbWidth: number): void

  setThumbHeight(thumbHeight: number): void

  setLeftThumbHeight(thumbHeight: number): void

  setRightThumbHeight(thumbHeight: number): void

  scaleThumb(): void

  scaleLeftThumb(): void

  scaleRightThumb(): void

  resetThumb(): void

  resetLeftThumb(): void

  resetRightThumb(): void

  setThumbScaleRatio(thumbScaleRatio: number): void

  setLeftThumbScaleRatio(thumbScaleRatio: number): void

  setRightThumbScaleRatio(thumbScaleRatio: number): void

  setThumbActivate(activate: boolean): void

  setLeftThumbActivate(activate: boolean): void

  setRightThumbActivate(activate: boolean): void

  setThumbDrawable(drawable: ESGradient): void

  setLeftThumbDrawable(drawable: ESGradient): void

  setRightThumbDrawable(drawable: ESGradient): void

  setThumbUrl(url: string): void

  setLeftThumbUrl(url: string): void

  setRightThumbUrl(url: string): void

  setThumbInactivatedDrawable(drawable: ESGradient): void

  setLeftThumbInactivatedDrawable(drawable: ESGradient): void

  setRightThumbInactivatedDrawable(drawable: ESGradient): void

  setThumbInactivatedUrl(url: string): void

  setLeftThumbInactivatedUrl(url: string): void

  setRightThumbInactivatedUrl(url: string): void

  setTickMarkMode(tickMarkMode: QTSeekBarTickMarkMode): void

  setTickMarkGravity(tickMarkGravity: QTSeekBarTickMarkGravity): void

  setTickMarkLayoutGravity(tickMarkLayoutGravity: QTSeekBarTickMarkLayoutGravity): void

  setTickMarkTextArray(tickMarkTextArray: Array<string>): void

  setTickMarkTextMargin(tickMarkTextMargin: number): void

  setTickMarkTextSize(tickMarkTextSize: number): void

  setTickMarkTextColor(tickMarkTextColor: number): void

  setTickMarkInRangeTextColor(tickMarkInRangeTextColor: number): void

  setSteps(steps: number): void

  setStepsWidth(stepsWidth: number): void

  setStepsHeight(stepsHeight: number): void

  setStepsRadius(stepsRadius: number): void

  setStepsColor(stepsColor: number): void

  setStepsAutoBonding(stepsAutoBonding: boolean): void

  setStepsDrawable(drawableArray: Array<ESGradient>): void

  setStepsUrl(urlArray: Array<string>): void

  setSecondProgress(progress: number): void

  show(value: boolean): void
}
