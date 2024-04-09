import {h, ref} from "vue";
import {ESApp, Native} from "@extscreen/es3-vue";
import {QTLottieRepeatMode} from "./QTLottieRepeatMode";

import useBaseView from '../base/useBaseView'

function registerQTLottieView(app: ESApp) {
  app.component('qt-lottie-view', {
    emits: ['animation-event'],
    setup(props, context) {
      const viewRef = ref()

      const loadRaw = (res) => {
        Native.callUIFunction(viewRef.value, 'lottie_rawRes', [res]);
      }
      const loadFile = (fileName) => {
        Native.callUIFunction(viewRef.value, 'lottie_localRes', [fileName]);
      }
      const loadUrl = (url) => {
        Native.callUIFunction(viewRef.value, 'lottie_url', [url]);
      }
      const loadCacheUrl = (url, cacheKey) => {
        Native.callUIFunction(viewRef.value, 'lottie_cache_url', [url, cacheKey]);
      }
      const setFallbackResource = (res) => {
        Native.callUIFunction(viewRef.value, 'lottie_fallbackRes', [res]);
      }
      const setAutoPlay = (auto) => {
        Native.callUIFunction(viewRef.value, 'lottie_autoPlay', [auto]);
      }
      const setLottieLoop = (loop) => {
        Native.callUIFunction(viewRef.value, 'lottie_loop', [loop]);
      }
      const setRepeatMode = (mode: QTLottieRepeatMode) => {
        Native.callUIFunction(viewRef.value, 'lottie_repeatMode', [mode]);
      }
      const setRepeatCount = (repeatCount) => {
        Native.callUIFunction(viewRef.value, 'lottie_repeatCount', [repeatCount]);
      }
      const setSpeed = (speed) => {
        Native.callUIFunction(viewRef.value, 'lottie_speed', [speed]);
      }
      const setClipToCompositionBounds = (clipToCompositionBounds) => {
        Native.callUIFunction(viewRef.value, 'lottie_clipToCompositionBounds', [clipToCompositionBounds]);
      }
      const setDefaultFontFileExtension = (extension) => {
        Native.callUIFunction(viewRef.value, 'lottie_defaultFontFileExtension', [extension]);
      }
      const setImageAssetsFolder = (imageAssetsFolder) => {
        Native.callUIFunction(viewRef.value, 'lottie_imageAssetsFolder', [imageAssetsFolder]);
      }
      const setProgress = (progress) => {
        Native.callUIFunction(viewRef.value, 'lottie_progress', [progress]);
      }
      const enableMergePathsForKitKatAndAbove = (enable) => {
        Native.callUIFunction(viewRef.value, 'lottie_enableMergePathsForKitKatAndAbove', [enable]);
      }
      const setColorFilter = (colorRes) => {
        Native.callUIFunction(viewRef.value, 'lottie_colorFilter', [colorRes]);
      }
      const setRenderMode = (renderModeOrdinal) => {
        Native.callUIFunction(viewRef.value, 'lottie_renderMode', [renderModeOrdinal]);
      }
      const setAsyncUpdate = (asyncUpdatesOrdinal) => {
        Native.callUIFunction(viewRef.value, 'lottie_asyncUpdates', [asyncUpdatesOrdinal]);
      }
      const setIgnoreDisabledSystemAnimations = (ignore) => {
        Native.callUIFunction(viewRef.value, 'lottie_ignoreDisabledSystemAnimations', [ignore]);
      }
      const setUseCompositionFrameRate = (useCompositionFrameRate) => {
        Native.callUIFunction(viewRef.value, 'lottie_useCompositionFrameRate', [useCompositionFrameRate]);
      }
      const playAnimation = () => {
        Native.callUIFunction(viewRef.value, 'playAnimation', []);
      }
      const resumeAnimation = () => {
        Native.callUIFunction(viewRef.value, 'resumeAnimation', []);
      }
      const pauseAnimation = () => {
        Native.callUIFunction(viewRef.value, 'pauseAnimation', []);
      }
      const cancelAnimation = () => {
        Native.callUIFunction(viewRef.value, 'cancelAnimation', []);
      }
      const cacheComposition = (cache) => {
        Native.callUIFunction(viewRef.value, 'cacheComposition', [cache]);
      }
      const removeAllListener = () => {
        Native.callUIFunction(viewRef.value, 'removeAllListener', []);
      }
      context.expose({
        loadRaw,
        loadFile,
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
        ...useBaseView(viewRef)
      })
      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'ESLottieViewComponent',
          {
            ref: viewRef,
            onAnimationEvent: (evt) => {
              context.emit('animation-event', evt);
            },
          },
          children
        )
      }
    },
  });
}

export default registerQTLottieView;


