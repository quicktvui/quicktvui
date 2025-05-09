import { h, ref } from 'vue'
import { ESApp, Native } from '@extscreen/es3-vue'
import { QTLottieRepeatMode } from './QTLottieRepeatMode'
import { QTLottieEvent } from './QTLottieEvent'

import useBaseView from '../base/useBaseView'

function registerQTLottieView(app: ESApp) {
  app.component('qt-lottie-view', {
    emits: [
      'onAnimationStart',
      'onAnimationEnd',
      'onAnimationCancel',
      'onAnimationRepeat',
      'onAnimationUpdate',
      'onAnimationPause',
      'onAnimationResume',
    ],
    setup(props, context) {
      const viewRef = ref()

      const loadRaw = (res) => {
        Native.callUIFunction(viewRef.value, 'lottie_rawRes', [res])
      }
      const loadFile = (fileName) => {
        Native.callUIFunction(viewRef.value, 'lottie_localRes', [fileName])
      }
      const loadUrl = (url) => {
        Native.callUIFunction(viewRef.value, 'lottie_url', [url])
      }
      const loadJsonFile = (fileName) => {
        Native.callUIFunction(viewRef.value, 'lottie_localRes', [fileName])
      }
      const loadZipFile = (filePath, keyCache) => {
        Native.callUIFunction(viewRef.value, 'lottie_zipPath', [filePath, keyCache])
      }
      const loadCacheUrl = (url, cacheKey) => {
        Native.callUIFunction(viewRef.value, 'lottie_cache_url', [url, cacheKey])
      }
      const setFallbackResource = (res) => {
        Native.callUIFunction(viewRef.value, 'lottie_fallbackRes', [res])
      }
      const setAutoPlay = (auto) => {
        Native.callUIFunction(viewRef.value, 'lottie_autoPlay', [auto])
      }
      const setLottieLoop = (loop) => {
        Native.callUIFunction(viewRef.value, 'lottie_loop', [loop])
      }
      const setRepeatMode = (mode: QTLottieRepeatMode) => {
        Native.callUIFunction(viewRef.value, 'lottie_repeatMode', [mode])
      }
      const setRepeatCount = (repeatCount) => {
        Native.callUIFunction(viewRef.value, 'lottie_repeatCount', [repeatCount])
      }
      const setSpeed = (speed) => {
        Native.callUIFunction(viewRef.value, 'lottie_speed', [speed])
      }
      const setClipToCompositionBounds = (clipToCompositionBounds) => {
        Native.callUIFunction(viewRef.value, 'lottie_clipToCompositionBounds', [
          clipToCompositionBounds,
        ])
      }
      const setDefaultFontFileExtension = (extension) => {
        Native.callUIFunction(viewRef.value, 'lottie_defaultFontFileExtension', [extension])
      }
      const setImageAssetsFolder = (imageAssetsFolder) => {
        Native.callUIFunction(viewRef.value, 'lottie_imageAssetsFolder', [imageAssetsFolder])
      }
      const setProgress = (progress) => {
        Native.callUIFunction(viewRef.value, 'lottie_progress', [progress])
      }
      const enableMergePathsForKitKatAndAbove = (enable) => {
        Native.callUIFunction(viewRef.value, 'lottie_enableMergePathsForKitKatAndAbove', [enable])
      }
      const setColorFilter = (colorRes) => {
        Native.callUIFunction(viewRef.value, 'lottie_colorFilter', [colorRes])
      }
      const setRenderMode = (renderModeOrdinal) => {
        Native.callUIFunction(viewRef.value, 'lottie_renderMode', [renderModeOrdinal])
      }
      const setAsyncUpdate = (asyncUpdatesOrdinal) => {
        Native.callUIFunction(viewRef.value, 'lottie_asyncUpdates', [asyncUpdatesOrdinal])
      }
      const setIgnoreDisabledSystemAnimations = (ignore) => {
        Native.callUIFunction(viewRef.value, 'lottie_ignoreDisabledSystemAnimations', [ignore])
      }
      const setUseCompositionFrameRate = (useCompositionFrameRate) => {
        Native.callUIFunction(viewRef.value, 'lottie_useCompositionFrameRate', [
          useCompositionFrameRate,
        ])
      }
      const playAnimation = () => {
        Native.callUIFunction(viewRef.value, 'playAnimation', [])
      }
      const resumeAnimation = () => {
        Native.callUIFunction(viewRef.value, 'resumeAnimation', [])
      }
      const pauseAnimation = () => {
        Native.callUIFunction(viewRef.value, 'pauseAnimation', [])
      }
      const cancelAnimation = () => {
        Native.callUIFunction(viewRef.value, 'cancelAnimation', [])
      }
      const cacheComposition = (cache) => {
        Native.callUIFunction(viewRef.value, 'cacheComposition', [cache])
      }
      const removeAllListener = () => {
        Native.callUIFunction(viewRef.value, 'removeAllListener', [])
      }
      context.expose({
        loadRaw,
        loadFile,
        loadJsonFile,
        loadZipFile,
        loadUrl,
        loadCacheUrl,
        setFallbackResource,
        setAutoPlay,
        setLottieLoop,
        setRepeatMode,
        setRepeatCount,
        setSpeed,
        setClipToCompositionBounds,
        setDefaultFontFileExtension,
        setImageAssetsFolder,
        setProgress,
        enableMergePathsForKitKatAndAbove,
        setColorFilter,
        setRenderMode,
        setAsyncUpdate,
        playAnimation,
        setIgnoreDisabledSystemAnimations,
        setUseCompositionFrameRate,
        resumeAnimation,
        pauseAnimation,
        cancelAnimation,
        cacheComposition,
        removeAllListener,
        ...useBaseView(viewRef),
      })
      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'ESLottieViewComponent',
          {
            ref: viewRef,
            onAnimationEvent: (evt: QTLottieEvent) => {
              const value = evt.value ?? ''
              switch (evt.eventName) {
                case 'onAnimationStart':
                  context.emit('onAnimationStart')
                  break
                case 'onAnimationEnd':
                  context.emit('onAnimationEnd')
                  break
                case 'onAnimationCancel':
                  context.emit('onAnimationCancel')
                  break
                case 'onAnimationRepeat':
                  context.emit('onAnimationRepeat')
                  break
                case 'onAnimationUpdate':
                  context.emit('onAnimationUpdate', value)
                  break
                case 'onAnimationPause':
                  context.emit('onAnimationPause')
                  break
                case 'onAnimationResume':
                  context.emit('onAnimationResume')
                  break
              }
            },
          },
          children
        )
      }
    },
  })
}

export default registerQTLottieView
