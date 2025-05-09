import { QTLottieRepeatMode } from './QTLottieRepeatMode'
import { QTLottieRenderMode } from './QTLottieRenderMode'
import { QTLottieAsyncUpdates } from './QTLottieAsyncUpdates'
import { QTIView } from '../view/QTIView'

export interface QTILottieView extends QTIView {
  loadRaw(rawRes: string): void

  loadFile(fileName: string): void

  loadJsonFile(fileName: string): void

  loadZipFile(filePath: string, keyCache: string): void

  loadUrl(url: string): void

  loadCacheUrl(url: string, cacheKey: string): void

  setFallbackResource(res: number): void

  setAutoPlay(auto: boolean): void

  setLottieLoop(loop: boolean): void

  setRepeatMode(mode: QTLottieRepeatMode): void

  setRepeatCount(repeatCount: number): void

  setSpeed(speed: string): void

  setClipToCompositionBounds(clipToCompositionBounds: boolean): void

  setDefaultFontFileExtension(extension: string): void

  setImageAssetsFolder(imageAssetsFolder: string): void

  setProgress(progress: string): void

  enableMergePathsForKitKatAndAbove(enable: boolean): void

  setColorFilter(colorRes: string): void

  setRenderMode(renderModeOrdinal: QTLottieRenderMode): void

  setAsyncUpdate(asyncUpdatesOrdinal: QTLottieAsyncUpdates): void

  setIgnoreDisabledSystemAnimations(ignore: boolean): void

  setUseCompositionFrameRate(useCompositionFrameRate: boolean): void

  playAnimation(): void

  resumeAnimation(): void

  pauseAnimation(): void

  cancelAnimation(): void

  cacheComposition(cache: boolean): void

  removeAllListener(): void
}
