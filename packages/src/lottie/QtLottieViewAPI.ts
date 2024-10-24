import {QtViewAPI} from "../view/QtViewAPI";
import {isRef, Ref} from "@vue/reactivity";
import {isString} from "../utils/type";
import {Native} from "@extscreen/es3-vue";
import {QT_API_MODULE, QT_CALL_UI_FUNCTION} from "../qt/QtAPIModule";
import {QTILottieView} from "./QTILottieView";
import {QTLottieRepeatMode} from "./QTLottieRepeatMode";
import {QTLottieRenderMode} from "./QTLottieRenderMode";
import {QTLottieAsyncUpdates} from "./QTLottieAsyncUpdates";

export interface QtLottieViewAPI extends QtViewAPI {

  loadRaw(instance: string | Ref<QTILottieView | undefined>, rawRes: string): void

  loadFile(instance: string | Ref<QTILottieView | undefined>, fileName: string): void

  loadJsonFile(instance: string | Ref<QTILottieView | undefined>, fileName: string): void

  loadZipFile(instance: string | Ref<QTILottieView | undefined>, filePath: string, keyCache: string): void

  loadUrl(instance: string | Ref<QTILottieView | undefined>, url: string): void

  loadCacheUrl(instance: string | Ref<QTILottieView | undefined>, url: string, cacheKey: string): void

  setFallbackResource(instance: string | Ref<QTILottieView | undefined>, res: number): void

  setAutoPlay(instance: string | Ref<QTILottieView | undefined>, auto: boolean): void

  setLottieLoop(instance: string | Ref<QTILottieView | undefined>, loop: boolean): void

  setRepeatMode(instance: string | Ref<QTILottieView | undefined>, mode: QTLottieRepeatMode): void

  setRepeatCount(instance: string | Ref<QTILottieView | undefined>, repeatCount: number): void

  setSpeed(instance: string | Ref<QTILottieView | undefined>, speed: string): void

  setClipToCompositionBounds(instance: string | Ref<QTILottieView | undefined>, clipToCompositionBounds: boolean): void

  setDefaultFontFileExtension(instance: string | Ref<QTILottieView | undefined>, extension: string): void

  setImageAssetsFolder(instance: string | Ref<QTILottieView | undefined>, imageAssetsFolder: string): void

  setProgress(instance: string | Ref<QTILottieView | undefined>, progress: string): void

  enableMergePathsForKitKatAndAbove(instance: string | Ref<QTILottieView | undefined>, enable: boolean): void

  setColorFilter(instance: string | Ref<QTILottieView | undefined>, colorRes: string): void

  setRenderMode(instance: string | Ref<QTILottieView | undefined>, renderModeOrdinal: QTLottieRenderMode): void

  setAsyncUpdate(instance: string | Ref<QTILottieView | undefined>, asyncUpdatesOrdinal: QTLottieAsyncUpdates): void

  setIgnoreDisabledSystemAnimations(instance: string | Ref<QTILottieView | undefined>, ignore: boolean): void

  setUseCompositionFrameRate(instance: string | Ref<QTILottieView | undefined>, useCompositionFrameRate: boolean): void

  playAnimation(instance: string | Ref<QTILottieView | undefined>): void

  resumeAnimation(instance: string | Ref<QTILottieView | undefined>): void

  pauseAnimation(instance: string | Ref<QTILottieView | undefined>): void

  cancelAnimation(instance: string | Ref<QTILottieView | undefined>): void

  cacheComposition(instance: string | Ref<QTILottieView | undefined>, cache: boolean): void

  removeAllListener(instance: string | Ref<QTILottieView | undefined>): void
}

export function createQtLottieViewAPI(viewAPI: QtViewAPI): QtLottieViewAPI {

  function loadRaw(instance: string | Ref<QTILottieView | undefined>, rawRes: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_rawRes', [rawRes]]);
    } else if (isRef(instance)) {
      instance.value?.loadRaw(rawRes)
    }
  }

  function loadFile(instance: string | Ref<QTILottieView | undefined>, fileName: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_localRes', [fileName]]);
    } else if (isRef(instance)) {
      instance.value?.loadFile(fileName)
    }
  }

  function loadJsonFile(instance: string | Ref<QTILottieView | undefined>, fileName: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_localRes', [fileName]]);
    } else if (isRef(instance)) {
      instance.value?.loadJsonFile(fileName)
    }
  }

  function loadZipFile(instance: string | Ref<QTILottieView | undefined>, filePath: string, keyCache: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_zipPath', [filePath, keyCache]]);
    } else if (isRef(instance)) {
      instance.value?.loadZipFile(filePath, keyCache)
    }
  }

  function loadUrl(instance: string | Ref<QTILottieView | undefined>, url: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_url', [url]]);
    } else if (isRef(instance)) {
      instance.value?.loadUrl(url)
    }
  }

  function loadCacheUrl(instance: string | Ref<QTILottieView | undefined>, url: string, cacheKey: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_cache_url', [url, cacheKey]]);
    } else if (isRef(instance)) {
      instance.value?.loadCacheUrl(url, cacheKey)
    }
  }

  function setFallbackResource(instance: string | Ref<QTILottieView | undefined>, res: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_fallbackRes', [res]]);
    } else if (isRef(instance)) {
      instance.value?.setFallbackResource(res)
    }
  }

  function setAutoPlay(instance: string | Ref<QTILottieView | undefined>, auto: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_autoPlay', [auto]]);
    } else if (isRef(instance)) {
      instance.value?.setAutoPlay(auto)
    }
  }

  function setLottieLoop(instance: string | Ref<QTILottieView | undefined>, loop: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_loop', [loop]]);
    } else if (isRef(instance)) {
      instance.value?.setLottieLoop(loop)
    }
  }

  function setRepeatMode(instance: string | Ref<QTILottieView | undefined>, mode: QTLottieRepeatMode): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_repeatMode', [mode]]);
    } else if (isRef(instance)) {
      instance.value?.setRepeatMode(mode)
    }
  }

  function setRepeatCount(instance: string | Ref<QTILottieView | undefined>, repeatCount: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_repeatCount', [repeatCount]]);
    } else if (isRef(instance)) {
      instance.value?.setRepeatCount(repeatCount)
    }
  }

  function setSpeed(instance: string | Ref<QTILottieView | undefined>, speed: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_speed', [speed]]);
    } else if (isRef(instance)) {
      instance.value?.setSpeed(speed)
    }
  }

  function setClipToCompositionBounds(instance: string | Ref<QTILottieView | undefined>, clipToCompositionBounds: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_clipToCompositionBounds', [clipToCompositionBounds]]);
    } else if (isRef(instance)) {
      instance.value?.setClipToCompositionBounds(clipToCompositionBounds)
    }
  }

  function setDefaultFontFileExtension(instance: string | Ref<QTILottieView | undefined>, extension: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_defaultFontFileExtension', [extension]]);
    } else if (isRef(instance)) {
      instance.value?.setDefaultFontFileExtension(extension)
    }
  }

  function setImageAssetsFolder(instance: string | Ref<QTILottieView | undefined>, imageAssetsFolder: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_imageAssetsFolder', [imageAssetsFolder]]);
    } else if (isRef(instance)) {
      instance.value?.setImageAssetsFolder(imageAssetsFolder)
    }
  }

  function setProgress(instance: string | Ref<QTILottieView | undefined>, progress: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_progress', [progress]]);
    } else if (isRef(instance)) {
      instance.value?.setProgress(progress)
    }
  }

  function enableMergePathsForKitKatAndAbove(instance: string | Ref<QTILottieView | undefined>, enable: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_enableMergePathsForKitKatAndAbove', [enable]]);
    } else if (isRef(instance)) {
      instance.value?.enableMergePathsForKitKatAndAbove(enable)
    }
  }

  function setColorFilter(instance: string | Ref<QTILottieView | undefined>, colorRes: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_colorFilter', [colorRes]]);
    } else if (isRef(instance)) {
      instance.value?.setColorFilter(colorRes)
    }
  }

  function setRenderMode(instance: string | Ref<QTILottieView | undefined>, renderModeOrdinal: QTLottieRenderMode): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_renderMode', [renderModeOrdinal]]);
    } else if (isRef(instance)) {
      instance.value?.setRenderMode(renderModeOrdinal)
    }
  }

  function setAsyncUpdate(instance: string | Ref<QTILottieView | undefined>, asyncUpdatesOrdinal: QTLottieAsyncUpdates): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_asyncUpdates', [asyncUpdatesOrdinal]]);
    } else if (isRef(instance)) {
      instance.value?.setAsyncUpdate(asyncUpdatesOrdinal)
    }
  }

  function setIgnoreDisabledSystemAnimations(instance: string | Ref<QTILottieView | undefined>, ignore: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_ignoreDisabledSystemAnimations', [ignore]]);
    } else if (isRef(instance)) {
      instance.value?.setIgnoreDisabledSystemAnimations(ignore)
    }
  }

  function setUseCompositionFrameRate(instance: string | Ref<QTILottieView | undefined>, useCompositionFrameRate: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'lottie_useCompositionFrameRate', [useCompositionFrameRate]]);
    } else if (isRef(instance)) {
      instance.value?.setUseCompositionFrameRate(useCompositionFrameRate)
    }
  }

  function playAnimation(instance: string | Ref<QTILottieView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'playAnimation', []]);
    } else if (isRef(instance)) {
      instance.value?.playAnimation()
    }
  }

  function resumeAnimation(instance: string | Ref<QTILottieView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'resumeAnimation', []]);
    } else if (isRef(instance)) {
      instance.value?.resumeAnimation()
    }
  }

  function pauseAnimation(instance: string | Ref<QTILottieView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'pauseAnimation', []]);
    } else if (isRef(instance)) {
      instance.value?.pauseAnimation()
    }
  }

  function cancelAnimation(instance: string | Ref<QTILottieView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'cancelAnimation', []]);
    } else if (isRef(instance)) {
      instance.value?.cancelAnimation()
    }
  }

  function cacheComposition(instance: string | Ref<QTILottieView | undefined>, cache: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'cacheComposition', [cache]]);
    } else if (isRef(instance)) {
      instance.value?.cacheComposition(cache)
    }
  }

  function removeAllListener(instance: string | Ref<QTILottieView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'removeAllListener', []]);
    } else if (isRef(instance)) {
      instance.value?.removeAllListener()
    }
  }

  return {
    ...viewAPI,
    loadRaw,
    loadFile,
    loadZipFile,
    loadJsonFile,
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
  }
}
