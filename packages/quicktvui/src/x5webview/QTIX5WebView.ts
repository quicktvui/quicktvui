import { QTIView } from '../view/QTIView'

export interface QTIX5WebView extends QTIView {
  loadUrl(url: string): void

  evaluateJavascript(value: string): Promise<string | undefined | null>

  canGoBack(): void

  goBack(): void

  canGoForward(): void

  goForward(): void

  canGoBackOrForward(steps: number): void

  goBackOrForward(steps: number): void

  onResume(): void

  onPause(): void

  pauseTimers(): void

  resumeTimers(): void

  destroy(): void

  setJavaScriptEnabled(value: boolean): void

  setPluginState(value: number): void

  setJavaScriptCanOpenWindowsAutomatically(value: boolean): void

  setUseWideViewPort(value: boolean): void

  setLoadWithOverviewMode(value: boolean): void

  setSupportZoom(value: boolean): void

  setBuiltInZoomControls(value: boolean): void

  setDisplayZoomControls(value: boolean): void

  setAllowFileAccess(value: boolean): void

  setDomStorageEnabled(value: boolean): void

  setDatabaseEnabled(value: boolean): void

  setAppCacheEnabled(value: boolean): void

  setAppCachePath(value: string): void

  setMediaPlaybackRequiresUserGesture(value: boolean): void

  setStandardFontFamily(value: string): void

  setFixedFontFamily(value: string): void

  setSansSerifFontFamily(value: string): void

  setSerifFontFamily(value: string): void

  setCursiveFontFamily(value: string): void

  setFantasyFontFamily(value: string): void

  setTextZoom(value: number): void

  setMinimumFontSize(value: number): void

  setDefaultFontSize(value: number): void

  setLayoutAlgorithm(value: number): void

  setLoadsImagesAutomatically(value: boolean): void

  setDefaultTextEncodingName(value: string): void

  setNeedInitialFocus(value: boolean): void

  setGeolocationEnabled(value: boolean): void

  setBlockNetworkLoads(value: boolean): void

  setSupportMultipleWindows(value: boolean): void

  setAppCacheMaxSize(value: number): void

  setRenderPriority(value: number): void

  setCacheMode(value: number): void

  //-----------------------------------------------
  setAllowContentAccess(value: boolean): void

  setEnableSmoothTransition(value: boolean): void

  setSaveFormData(value: boolean): void

  setSavePassword(value: boolean): void

  setTextSize(value: number): void

  setDefaultZoom(value: number): void

  setLightTouchEnabled(value: boolean): void

  setMinimumLogicalFontSize(value: number)

  setDefaultFixedFontSize(value: number): void

  setBlockNetworkImage(value: boolean): void

  setAllowUniversalAccessFromFileURLs(value: boolean): void

  setAllowFileAccessFromFileURLs(value: boolean): void

  setDatabasePath(value: string): void

  setGeolocationDatabasePath(value: string): void

  setUserAgentString(value: string): void

  setMixedContentMode(value: number): void

  setOffscreenPreRaster(value: boolean): void

  setSafeBrowsingEnabled(value: boolean): void

  setForceDark(value: number): void

  setDisabledActionModeMenuItems(value: number): void

  initJavaScriptInterface(): void

  removeJavaScriptInterface(): void

  initWebViewFocus(delayTime: number, x: number, y: number): void
}
