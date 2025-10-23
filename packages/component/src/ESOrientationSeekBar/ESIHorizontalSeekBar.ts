import { ESGradient } from '../ESGradient/ESGradient'

export interface ESIHorizontalSeekBar {
  invalidateSeekBar()

  setFocusable(focusable: boolean)

  setClickable(clickable: boolean)

  requestFocus()

  requestLayout()

  invalidate()

  setVisible(visible: boolean)

  setLeftSeekBarVisible(visible: boolean)

  setRightSeekBarVisible(visible: boolean)

  setSeekBarMode(mode: number)

  setProgress(progress: number)

  setRangeProgress(leftValue: number, rightValue: number)

  getProgress()

  getLeftProgress()

  getRightProgress()

  setRange(min: number, max: number, minInterval: number)

  setGravity(gravity: number)

  setProgressWidth(progressWidth: number)

  setProgressHeight(progressHeight: number)

  setProgressRadius(progressRadius: number)

  setProgressColor(progressColor: number)

  setProgressDefaultColor(defaultProgressColor: number)

  setProgressDrawable(progressDrawable: ESGradient)

  setProgressDefaultDrawable(progressDefaultDrawable: ESGradient)

  setProgressUrl(progressUrl: string)

  setProgressDefaultUrl(progressDefaultUrl: string)

  showIndicator(showIndicator: boolean)

  showLeftIndicator(showLeftIndicator: boolean)

  showRightIndicator(showRightIndicator: boolean)

  setIndicatorShowMode(indicatorShowMode: number)

  setLeftIndicatorShowMode(indicatorShowMode: number)

  setRightIndicatorShowMode(indicatorShowMode: number)

  setIndicatorWidth(indicatorWidth: number)

  setLeftIndicatorWidth(indicatorWidth: number)

  setRightIndicatorWidth(indicatorWidth: number)

  setIndicatorHeight(indicatorHeight: number)

  setLeftIndicatorHeight(indicatorHeight: number)

  setRightIndicatorHeight(indicatorHeight: number)

  setIndicatorTextDecimalFormat(formatPattern: string)

  setLeftIndicatorTextDecimalFormat(formatPattern: string)

  setRightIndicatorTextDecimalFormat(formatPattern: string)

  setIndicatorTextStringFormat(formatPattern: string)

  setLeftIndicatorTextStringFormat(formatPattern: string)

  setRightIndicatorTextStringFormat(formatPattern: string)

  setIndicatorMargin(indicatorMargin: number)

  setLeftIndicatorMargin(indicatorMargin: number)

  setRightIndicatorMargin(indicatorMargin: number)

  setIndicatorPaddingBottom(indicatorPaddingBottom: number)

  setLeftIndicatorPaddingBottom(indicatorPaddingBottom: number)

  setRightIndicatorPaddingBottom(indicatorPaddingBottom: number)

  setIndicatorPaddingTop(indicatorPaddingTop: number)

  setLeftIndicatorPaddingTop(indicatorPaddingTop: number)

  setRightIndicatorPaddingTop(indicatorPaddingTop: number)

  setIndicatorPaddingLeft(indicatorPaddingLeft: number)

  setLeftIndicatorPaddingLeft(indicatorPaddingLeft: number)

  setRightIndicatorPaddingLeft(indicatorPaddingLeft: number)

  setIndicatorPaddingRight(indicatorPaddingRight: number)

  setLeftIndicatorPaddingRight(indicatorPaddingRight: number)

  setRightIndicatorPaddingRight(indicatorPaddingRight: number)

  setIndicatorBackgroundColor(indicatorBackgroundColor: number)

  setLeftIndicatorBackgroundColor(indicatorBackgroundColor: number)

  setRightIndicatorBackgroundColor(indicatorBackgroundColor: number)

  setIndicatorRadius(indicatorRadius: number)

  setLeftIndicatorRadius(indicatorRadius: number)

  setRightIndicatorRadius(indicatorRadius: number)

  setIndicatorTextSize(indicatorTextSize: number)

  setLeftIndicatorTextSize(indicatorTextSize: number)

  setRightIndicatorTextSize(indicatorTextSize: number)

  setIndicatorTextColor(indicatorTextColor: number)

  setLeftIndicatorTextColor(indicatorTextColor: number)

  setRightIndicatorTextColor(indicatorTextColor: number)

  setIndicatorArrowSize(indicatorArrowSize: number)

  setLeftIndicatorArrowSize(indicatorArrowSize: number)

  setRightIndicatorArrowSize(indicatorArrowSize: number)

  setIndicatorDrawable(indicatorDrawable: ESGradient)

  setLeftIndicatorDrawable(leftIndicatorDrawable: ESGradient)

  setRightIndicatorDrawable(rightIndicatorDrawable: ESGradient)

  setIndicatorUrl(indicatorUrl: string)

  setLeftIndicatorUrl(leftIndicatorUrl: string)

  setRightIndicatorUrl(rightIndicatorUrl: string)

  setThumbWidth(thumbWidth: number)

  setLeftThumbWidth(thumbWidth: number)

  setRightThumbWidth(thumbWidth: number)

  setThumbHeight(thumbHeight: number)

  setLeftThumbHeight(thumbHeight: number)

  setRightThumbHeight(thumbHeight: number)

  scaleThumb()

  scaleLeftThumb()

  scaleRightThumb()

  resetThumb()

  resetLeftThumb()

  resetRightThumb()

  setThumbScaleRatio(thumbScaleRatio: number)

  setLeftThumbScaleRatio(thumbScaleRatio: number)

  setRightThumbScaleRatio(thumbScaleRatio: number)

  setThumbActivate(activate: boolean)

  setLeftThumbActivate(activate: boolean)

  setRightThumbActivate(activate: boolean)

  setThumbDrawable(drawable: ESGradient)

  setLeftThumbDrawable(drawable: ESGradient)

  setRightThumbDrawable(drawable: ESGradient)

  setThumbUrl(url: string)

  setLeftThumbUrl(url: string)

  setRightThumbUrl(url: string)

  setThumbInactivatedDrawable(drawable: ESGradient)

  setLeftThumbInactivatedDrawable(drawable: ESGradient)

  setRightThumbInactivatedDrawable(drawable: ESGradient)

  setThumbInactivatedUrl(url: string)

  setLeftThumbInactivatedUrl(url: string)

  setRightThumbInactivatedUrl(url: string)

  setTickMarkMode(tickMarkMode: number)

  setTickMarkGravity(tickMarkGravity: number)

  setTickMarkLayoutGravity(tickMarkLayoutGravity: number)

  setTickMarkTextArray(tickMarkTextArray: Array<string>)

  setTickMarkTextMargin(tickMarkTextMargin: number)

  setTickMarkTextSize(tickMarkTextSize: number)

  setTickMarkTextColor(tickMarkTextColor: number)

  setTickMarkInRangeTextColor(tickMarkInRangeTextColor: number)

  setSteps(steps: number)

  setStepsWidth(stepsWidth: number)

  setStepsHeight(stepsHeight: number)

  setStepsRadius(stepsRadius: number)

  setStepsColor(stepsColor: number)

  setStepsAutoBonding(stepsAutoBonding: boolean)

  setStepsDrawable(drawableArray: Array<ESGradient>)

  setStepsUrl(urlArray: Array<string>)
}
