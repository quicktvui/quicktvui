import { defineComponent, h, ref } from 'vue'
import { ESApp, Native } from '@extscreen/es3-vue'
import { ESGradient } from '@extscreen/es3-component'
import useBaseView from '../base/useBaseView'

function registerQTSeekBarView(app: ESApp) {
  const QT_SEEK_BAR_MODE_PROGRESS = 1 //
  const QT_SEEK_BAR_MODE_SEEK = 2 //

  const SeekBarViewImpl = defineComponent({
    name: 'qt-seek-bar',
    props: {
      emitEventDelay: {
        type: Number,
        default: 100,
      },
      onProgressChanged: {
        type: Function,
        default: null,
      },
    },
    emits: ['onSeekStart', 'onSeekStop', 'onFocusChanged', 'onSeekChanged'],
    setup(props, context) {
      const viewRef = ref()

      const seekBarFocused = ref(false)
      const seekBarMode = ref(1)
      const seekCount = ref(0)
      const progressCallBackTime = ref(0)

      const maxProgress = ref(0)
      const progress = ref(0)

      //--------------------------------------------------------------------
      function setProgress(p: number) {
        if (seekBarMode.value === QT_SEEK_BAR_MODE_PROGRESS) {
          progress.value = p
          Native.callUIFunction(viewRef.value, 'setProgress', [p], (res) => {})
        }
      }

      function setMaxProgress(value: number) {
        if (seekBarMode.value === QT_SEEK_BAR_MODE_PROGRESS) {
          maxProgress.value = value
          Native.callUIFunction(viewRef.value, 'setMaxProgress', [value], (value) => {})
        }
      }

      function resetSeekbar() {
        seekBarMode.value = QT_SEEK_BAR_MODE_PROGRESS
        setMaxProgress(0)
        setProgress(0)
      }

      function startSeek(forward) {
        if (seekBarFocused.value) {
          seekBarMode.value = QT_SEEK_BAR_MODE_SEEK
          context.emit('onSeekStart', progress.value)
          seekCount.value += 1
          let base = 1
          if (seekCount.value > 20) {
            base = 2
          } else if (seekCount.value > 50) {
            base = 4
          } else if (seekCount.value > 100) {
            base = 6
          }
          let duration = maxProgress.value
          let seekProgress = Math.floor(duration * 0.01 * base)
          progress.value = progress.value + (forward ? seekProgress : -seekProgress)

          if (progress.value > duration) {
            progress.value = duration
          } else if (progress.value < 0) {
            progress.value = 0
          }

          Native.callUIFunction(viewRef.value, 'setProgress', [progress.value], (res) => {})

          if (props.onProgressChanged) {
            let now = new Date().getTime()
            if (now - progressCallBackTime.value > props.emitEventDelay) {
              props.onProgressChanged(progress.value)
              progressCallBackTime.value = now
            }
          }
        }
        //
        else {
        }
      }

      function stopSeek() {
        seekCount.value = 0
        if (seekBarMode.value == QT_SEEK_BAR_MODE_SEEK) {
          context.emit('onSeekStop', progress.value)
        }
        seekBarMode.value = QT_SEEK_BAR_MODE_PROGRESS
      }

      function isSeekBarFocused() {
        return seekBarFocused.value
      }

      //--------------------------------------------------------------------
      function invalidateSeekBar() {
        Native.callUIFunction(viewRef.value, 'invalidateSeekBar', [], (res) => {})
      }

      function setFocusable(focusable: boolean) {
        Native.callUIFunction(viewRef.value, 'setFocusable', [focusable], (res) => {})
      }

      function setClickable(clickable: boolean) {
        Native.callUIFunction(viewRef.value, 'setClickable', [clickable], (res) => {})
      }

      function setVisible(visible: boolean) {
        Native.callUIFunction(viewRef.value, 'setVisible', [visible], (res) => {})
      }

      function setLeftSeekBarVisible(visible: boolean) {
        Native.callUIFunction(viewRef.value, 'setLeftSeekBarVisible', [visible], (res) => {})
      }

      function setRightSeekBarVisible(visible: boolean) {
        Native.callUIFunction(viewRef.value, 'setRightSeekBarVisible', [visible], (res) => {})
      }

      function setSeekBarMode(mode: number) {
        Native.callUIFunction(viewRef.value, 'setSeekBarMode', [mode], (res) => {})
      }

      function setRangeProgress(leftValue: number, rightValue: number) {
        Native.callUIFunction(viewRef.value, 'setProgress', [leftValue, rightValue], (res) => {})
      }

      function getProgress() {
        Native.callUIFunction(viewRef.value, 'getProgress', [], (progress) => {})
      }

      function getLeftProgress() {
        Native.callUIFunction(viewRef.value, 'getLeftProgress', [], (progress) => {})
      }

      function getRightProgress() {
        Native.callUIFunction(viewRef.value, 'getRightProgress', [], (progress) => {})
      }

      function setRange(min: number, max: number, minInterval: number) {
        Native.callUIFunction(viewRef.value, 'setRange', [min, max, minInterval], (value) => {})
      }

      function setGravity(gravity: number) {
        Native.callUIFunction(viewRef.value, 'setGravity', [gravity], (value) => {})
      }

      function setProgressWidth(progressWidth: number) {
        Native.callUIFunction(viewRef.value, 'setProgressWidth', [progressWidth], (value) => {})
      }

      function setProgressHeight(progressHeight: number) {
        Native.callUIFunction(viewRef.value, 'setProgressHeight', [progressHeight], (value) => {})
      }

      function setProgressRadius(progressRadius: number) {
        Native.callUIFunction(viewRef.value, 'setProgressRadius', [progressRadius], (value) => {})
      }

      function setProgressColor(progressColor: number) {
        Native.callUIFunction(viewRef.value, 'setProgressColor', [progressColor], (value) => {})
      }

      function setProgressDefaultColor(defaultProgressColor: number) {
        Native.callUIFunction(
          viewRef.value,
          'setProgressDefaultColor',
          [defaultProgressColor],
          (value) => {}
        )
      }

      function setProgressDrawable(progressDrawable: ESGradient) {
        Native.callUIFunction(
          viewRef.value,
          'setProgressDrawable',
          [progressDrawable],
          (value) => {}
        )
      }

      function setProgressDefaultDrawable(progressDefaultDrawable: ESGradient) {
        Native.callUIFunction(
          viewRef.value,
          'setProgressDefaultDrawable',
          [progressDefaultDrawable],
          (value) => {}
        )
      }

      function setProgressUrl(progressUrl: string) {
        Native.callUIFunction(viewRef.value, 'setProgressUrl', [progressUrl], (value) => {})
      }

      function setProgressDefaultUrl(progressDefaultUrl: string) {
        Native.callUIFunction(
          viewRef.value,
          'setProgressDefaultUrl',
          [progressDefaultUrl],
          (value) => {}
        )
      }

      function showIndicator(showIndicator: boolean) {
        Native.callUIFunction(viewRef.value, 'showIndicator', [showIndicator], (value) => {})
      }

      function showLeftIndicator(showLeftIndicator: boolean) {
        Native.callUIFunction(
          viewRef.value,
          'showLeftIndicator',
          [showLeftIndicator],
          (value) => {}
        )
      }

      function showRightIndicator(showRightIndicator: boolean) {
        Native.callUIFunction(
          viewRef.value,
          'showRightIndicator',
          [showRightIndicator],
          (value) => {}
        )
      }

      function setIndicatorShowMode(indicatorShowMode: number) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorShowMode',
          [indicatorShowMode],
          (value) => {}
        )
      }

      function setLeftIndicatorShowMode(indicatorShowMode: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorShowMode',
          [indicatorShowMode],
          (value) => {}
        )
      }

      function setRightIndicatorShowMode(indicatorShowMode: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorShowMode',
          [indicatorShowMode],
          (value) => {}
        )
      }

      function setIndicatorWidth(indicatorWidth: number) {
        Native.callUIFunction(viewRef.value, 'setIndicatorWidth', [indicatorWidth], (value) => {})
      }

      function setLeftIndicatorWidth(indicatorWidth: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorWidth',
          [indicatorWidth],
          (value) => {}
        )
      }

      function setRightIndicatorWidth(indicatorWidth: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorWidth',
          [indicatorWidth],
          (value) => {}
        )
      }

      function setIndicatorHeight(indicatorHeight: number) {
        Native.callUIFunction(viewRef.value, 'setIndicatorHeight', [indicatorHeight], (value) => {})
      }

      function setLeftIndicatorHeight(indicatorHeight: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorHeight',
          [indicatorHeight],
          (value) => {}
        )
      }

      function setRightIndicatorHeight(indicatorHeight: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorHeight',
          [indicatorHeight],
          (value) => {}
        )
      }

      function setIndicatorTextDecimalFormat(formatPattern: string) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorTextDecimalFormat',
          [formatPattern],
          (value) => {}
        )
      }

      function setLeftIndicatorTextDecimalFormat(formatPattern: string) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorTextDecimalFormat',
          [formatPattern],
          (value) => {}
        )
      }

      function setRightIndicatorTextDecimalFormat(formatPattern: string) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorTextDecimalFormat',
          [formatPattern],
          (value) => {}
        )
      }

      function setIndicatorTextStringFormat(formatPattern: string) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorTextStringFormat',
          [formatPattern],
          (value) => {}
        )
      }

      function setLeftIndicatorTextStringFormat(formatPattern: string) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorTextStringFormat',
          [formatPattern],
          (value) => {}
        )
      }

      function setRightIndicatorTextStringFormat(formatPattern: string) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorTextStringFormat',
          [formatPattern],
          (value) => {}
        )
      }

      function setIndicatorMargin(indicatorMargin: number) {
        Native.callUIFunction(viewRef.value, 'setIndicatorMargin', [indicatorMargin], (value) => {})
      }

      function setLeftIndicatorMargin(indicatorMargin: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorMargin',
          [indicatorMargin],
          (value) => {}
        )
      }

      function setRightIndicatorMargin(indicatorMargin: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorMargin',
          [indicatorMargin],
          (value) => {}
        )
      }

      function setIndicatorPaddingBottom(indicatorPaddingBottom: number) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorPaddingBottom',
          [indicatorPaddingBottom],
          (value) => {}
        )
      }

      function setLeftIndicatorPaddingBottom(indicatorPaddingBottom: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorPaddingBottom',
          [indicatorPaddingBottom],
          (value) => {}
        )
      }

      function setRightIndicatorPaddingBottom(indicatorPaddingBottom: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorPaddingBottom',
          [indicatorPaddingBottom],
          (value) => {}
        )
      }

      function setIndicatorPaddingTop(indicatorPaddingTop: number) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorPaddingTop',
          [indicatorPaddingTop],
          (value) => {}
        )
      }

      function setLeftIndicatorPaddingTop(indicatorPaddingTop: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorPaddingTop',
          [indicatorPaddingTop],
          (value) => {}
        )
      }

      function setRightIndicatorPaddingTop(indicatorPaddingTop: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorPaddingTop',
          [indicatorPaddingTop],
          (value) => {}
        )
      }

      function setIndicatorPaddingLeft(indicatorPaddingLeft: number) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorPaddingLeft',
          [indicatorPaddingLeft],
          (value) => {}
        )
      }

      function setLeftIndicatorPaddingLeft(indicatorPaddingLeft: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorPaddingLeft',
          [indicatorPaddingLeft],
          (value) => {}
        )
      }

      function setRightIndicatorPaddingLeft(indicatorPaddingLeft: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorPaddingLeft',
          [indicatorPaddingLeft],
          (value) => {}
        )
      }

      function setIndicatorPaddingRight(indicatorPaddingRight: number) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorPaddingRight',
          [indicatorPaddingRight],
          (value) => {}
        )
      }

      function setLeftIndicatorPaddingRight(indicatorPaddingRight: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorPaddingRight',
          [indicatorPaddingRight],
          (value) => {}
        )
      }

      function setRightIndicatorPaddingRight(indicatorPaddingRight: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorPaddingRight',
          [indicatorPaddingRight],
          (value) => {}
        )
      }

      function setIndicatorBackgroundColor(indicatorBackgroundColor: number) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorBackgroundColor',
          [indicatorBackgroundColor],
          (value) => {}
        )
      }

      function setLeftIndicatorBackgroundColor(indicatorBackgroundColor: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorBackgroundColor',
          [indicatorBackgroundColor],
          (value) => {}
        )
      }

      function setRightIndicatorBackgroundColor(indicatorBackgroundColor: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorBackgroundColor',
          [indicatorBackgroundColor],
          (value) => {}
        )
      }

      function setIndicatorRadius(indicatorRadius: number) {
        Native.callUIFunction(viewRef.value, 'setIndicatorRadius', [indicatorRadius], (value) => {})
      }

      function setLeftIndicatorRadius(indicatorRadius: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorRadius',
          [indicatorRadius],
          (value) => {}
        )
      }

      function setRightIndicatorRadius(indicatorRadius: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorRadius',
          [indicatorRadius],
          (value) => {}
        )
      }

      function setIndicatorTextSize(indicatorTextSize: number) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorTextSize',
          [indicatorTextSize],
          (value) => {}
        )
      }

      function setLeftIndicatorTextSize(indicatorTextSize: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorTextSize',
          [indicatorTextSize],
          (value) => {}
        )
      }

      function setRightIndicatorTextSize(indicatorTextSize: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorTextSize',
          [indicatorTextSize],
          (value) => {}
        )
      }

      function setIndicatorTextColor(indicatorTextColor: number) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorTextColor',
          [indicatorTextColor],
          (value) => {}
        )
      }

      function setLeftIndicatorTextColor(indicatorTextColor: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorTextColor',
          [indicatorTextColor],
          (value) => {}
        )
      }

      function setRightIndicatorTextColor(indicatorTextColor: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorTextColor',
          [indicatorTextColor],
          (value) => {}
        )
      }

      function setIndicatorArrowSize(indicatorArrowSize: number) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorArrowSize',
          [indicatorArrowSize],
          (value) => {}
        )
      }

      function setLeftIndicatorArrowSize(indicatorArrowSize: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorArrowSize',
          [indicatorArrowSize],
          (value) => {}
        )
      }

      function setRightIndicatorArrowSize(indicatorArrowSize: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorArrowSize',
          [indicatorArrowSize],
          (value) => {}
        )
      }

      function setIndicatorDrawable(indicatorDrawable: ESGradient) {
        Native.callUIFunction(
          viewRef.value,
          'setIndicatorDrawable',
          [indicatorDrawable],
          (value) => {}
        )
      }

      function setLeftIndicatorDrawable(leftIndicatorDrawable: ESGradient) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorDrawable',
          [leftIndicatorDrawable],
          (value) => {}
        )
      }

      function setRightIndicatorDrawable(rightIndicatorDrawable: ESGradient) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorDrawable',
          [rightIndicatorDrawable],
          (value) => {}
        )
      }

      function setIndicatorUrl(indicatorUrl: string) {
        Native.callUIFunction(viewRef.value, 'setIndicatorUrl', [indicatorUrl], (value) => {})
      }

      function setLeftIndicatorUrl(leftIndicatorUrl: string) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftIndicatorUrl',
          [leftIndicatorUrl],
          (value) => {}
        )
      }

      function setRightIndicatorUrl(rightIndicatorUrl: string) {
        Native.callUIFunction(
          viewRef.value,
          'setRightIndicatorUrl',
          [rightIndicatorUrl],
          (value) => {}
        )
      }

      function setThumbWidth(thumbWidth: number) {
        Native.callUIFunction(viewRef.value, 'setThumbWidth', [thumbWidth], (value) => {})
      }

      function setLeftThumbWidth(thumbWidth: number) {
        Native.callUIFunction(viewRef.value, 'setLeftThumbWidth', [thumbWidth], (value) => {})
      }

      function setRightThumbWidth(thumbWidth: number) {
        Native.callUIFunction(viewRef.value, 'setRightThumbWidth', [thumbWidth], (value) => {})
      }

      function setThumbHeight(thumbHeight: number) {
        Native.callUIFunction(viewRef.value, 'setThumbHeight', [thumbHeight], (value) => {})
      }

      function setLeftThumbHeight(thumbHeight: number) {
        Native.callUIFunction(viewRef.value, 'setLeftThumbHeight', [thumbHeight], (value) => {})
      }

      function setRightThumbHeight(thumbHeight: number) {
        Native.callUIFunction(viewRef.value, 'setRightThumbHeight', [thumbHeight], (value) => {})
      }

      function scaleThumb() {
        Native.callUIFunction(viewRef.value, 'scaleThumb', [], (value) => {})
      }

      function scaleLeftThumb() {
        Native.callUIFunction(viewRef.value, 'scaleLeftThumb', [], (value) => {})
      }

      function scaleRightThumb() {
        Native.callUIFunction(viewRef.value, 'scaleLeftThumb', [], (value) => {})
      }

      function resetThumb() {
        Native.callUIFunction(viewRef.value, 'resetThumb', [], (value) => {})
      }

      function resetLeftThumb() {
        Native.callUIFunction(viewRef.value, 'resetLeftThumb', [], (value) => {})
      }

      function resetRightThumb() {
        Native.callUIFunction(viewRef.value, 'resetRightThumb', [], (value) => {})
      }

      function setThumbScaleRatio(thumbScaleRatio: number) {
        Native.callUIFunction(viewRef.value, 'setThumbScaleRatio', [thumbScaleRatio], (value) => {})
      }

      function setLeftThumbScaleRatio(thumbScaleRatio: number) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftThumbScaleRatio',
          [thumbScaleRatio],
          (value) => {}
        )
      }

      function setRightThumbScaleRatio(thumbScaleRatio: number) {
        Native.callUIFunction(
          viewRef.value,
          'setRightThumbScaleRatio',
          [thumbScaleRatio],
          (value) => {}
        )
      }

      function setThumbActivate(activate: boolean) {
        Native.callUIFunction(viewRef.value, 'setThumbActivate', [activate], (value) => {})
      }

      function setLeftThumbActivate(activate: boolean) {
        Native.callUIFunction(viewRef.value, 'setLeftThumbActivate', [activate], (value) => {})
      }

      function setRightThumbActivate(activate: boolean) {
        Native.callUIFunction(viewRef.value, 'setRightThumbActivate', [activate], (value) => {})
      }

      function setThumbDrawable(drawable: ESGradient) {
        Native.callUIFunction(viewRef.value, 'setThumbDrawable', [drawable], (value) => {})
      }

      function setLeftThumbDrawable(drawable: ESGradient) {
        Native.callUIFunction(viewRef.value, 'setLeftThumbDrawable', [drawable], (value) => {})
      }

      function setRightThumbDrawable(drawable: ESGradient) {
        Native.callUIFunction(viewRef.value, 'setRightThumbDrawable', [drawable], (value) => {})
      }

      function setThumbUrl(url: string) {
        Native.callUIFunction(viewRef.value, 'setThumbUrl', [url], (value) => {})
      }

      function setLeftThumbUrl(url: string) {
        Native.callUIFunction(viewRef.value, 'setLeftThumbUrl', [url], (value) => {})
      }

      function setRightThumbUrl(url: string) {
        Native.callUIFunction(viewRef.value, 'setRightThumbUrl', [url], (value) => {})
      }

      function setThumbInactivatedDrawable(drawable: ESGradient) {
        Native.callUIFunction(
          viewRef.value,
          'setThumbInactivatedDrawable',
          [drawable],
          (value) => {}
        )
      }

      function setLeftThumbInactivatedDrawable(drawable: ESGradient) {
        Native.callUIFunction(
          viewRef.value,
          'setLeftThumbInactivatedDrawable',
          [drawable],
          (value) => {}
        )
      }

      function setRightThumbInactivatedDrawable(drawable: ESGradient) {
        Native.callUIFunction(
          viewRef.value,
          'setRightThumbInactivatedDrawable',
          [drawable],
          (value) => {}
        )
      }

      function setThumbInactivatedUrl(url: string) {
        Native.callUIFunction(viewRef.value, 'setThumbInactivatedUrl', [url], (value) => {})
      }

      function setLeftThumbInactivatedUrl(url: string) {
        Native.callUIFunction(viewRef.value, 'setLeftThumbInactivatedUrl', [url], (value) => {})
      }

      function setRightThumbInactivatedUrl(url: string) {
        Native.callUIFunction(viewRef.value, 'setRightThumbInactivatedUrl', [url], (value) => {})
      }

      function setTickMarkMode(tickMarkMode: number) {
        Native.callUIFunction(viewRef.value, 'setTickMarkMode', [tickMarkMode], (value) => {})
      }

      function setTickMarkGravity(tickMarkGravity: number) {
        Native.callUIFunction(viewRef.value, 'setTickMarkGravity', [tickMarkGravity], (value) => {})
      }

      function setTickMarkLayoutGravity(tickMarkLayoutGravity: number) {
        Native.callUIFunction(
          viewRef.value,
          'setTickMarkLayoutGravity',
          [tickMarkLayoutGravity],
          (value) => {}
        )
      }

      function setTickMarkTextArray(tickMarkTextArray: Array<string>) {
        Native.callUIFunction(
          viewRef.value,
          'setTickMarkTextArray',
          [tickMarkTextArray],
          (value) => {}
        )
      }

      function setTickMarkTextMargin(tickMarkTextMargin: number) {
        Native.callUIFunction(
          viewRef.value,
          'setTickMarkTextMargin',
          [tickMarkTextMargin],
          (value) => {}
        )
      }

      function setTickMarkTextSize(tickMarkTextSize: number) {
        Native.callUIFunction(
          viewRef.value,
          'setTickMarkTextSize',
          [tickMarkTextSize],
          (value) => {}
        )
      }

      function setTickMarkTextColor(tickMarkTextColor: number) {
        Native.callUIFunction(
          viewRef.value,
          'setTickMarkTextColor',
          [tickMarkTextColor],
          (value) => {}
        )
      }

      function setTickMarkInRangeTextColor(tickMarkInRangeTextColor: number) {
        Native.callUIFunction(
          viewRef.value,
          'setTickMarkInRangeTextColor',
          [tickMarkInRangeTextColor],
          (value) => {}
        )
      }

      function setSteps(steps: number) {
        Native.callUIFunction(viewRef.value, 'setSteps', [steps], (value) => {})
      }

      function setStepsWidth(stepsWidth: number) {
        Native.callUIFunction(viewRef.value, 'setStepsWidth', [stepsWidth], (value) => {})
      }

      function setStepsHeight(stepsHeight: number) {
        Native.callUIFunction(viewRef.value, 'setStepsHeight', [stepsHeight], (value) => {})
      }

      function setStepsRadius(stepsRadius: number) {
        Native.callUIFunction(viewRef.value, 'setStepsRadius', [stepsRadius], (value) => {})
      }

      function setStepsColor(stepsColor: number) {
        Native.callUIFunction(viewRef.value, 'setStepsColor', [stepsColor], (value) => {})
      }

      function setStepsAutoBonding(stepsAutoBonding: boolean) {
        Native.callUIFunction(
          viewRef.value,
          'setStepsAutoBonding',
          [stepsAutoBonding],
          (value) => {}
        )
      }

      function setStepsDrawable(drawableArray: Array<ESGradient>) {
        Native.callUIFunction(viewRef.value, 'setStepsDrawable', [drawableArray], (value) => {})
      }

      function setStepsUrl(urlArray: Array<string>) {
        Native.callUIFunction(viewRef.value, 'setStepsUrl', [urlArray], (value) => {})
      }

      function setSecondProgress(progress: number) {
        Native.callUIFunction(viewRef.value, 'setSecondProgress', [progress], (value) => {})
      }

      function show(value: boolean) {
        Native.callUIFunction(viewRef.value, 'show', [value], (value) => {})
      }

      context.expose({
        viewRef,
        seekBarFocused,
        seekBarMode,
        seekCount,
        progressCallBackTime,
        maxProgress,
        progress,
        startSeek,
        stopSeek,
        isSeekBarFocused,
        resetSeekbar,
        invalidateSeekBar,
        setFocusable,
        setClickable,
        setVisible,
        setLeftSeekBarVisible,
        setRightSeekBarVisible,
        setSeekBarMode,
        setProgress,
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
        setSecondProgress,
        show,
        setMaxProgress,
        ...useBaseView(viewRef),
      })

      return () => {
        return h('TVSeekBarViewComponent', {
          ref: viewRef,
          onFocus: (evt) => {
            seekBarFocused.value = evt.isFocused
            context.emit('onFocusChanged', evt.isFocused)
          },
          onSeekBarChange: (evt) => {
            context.emit('onSeekChanged', evt.progress)
          },
        })
      }
    },
  })
  app.component('qt-seek-bar', SeekBarViewImpl)
}

export default registerQTSeekBarView
