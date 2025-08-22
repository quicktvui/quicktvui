import { Native } from '@extscreen/es3-vue'
import { isRef, Ref } from '@vue/reactivity'
import { QTIWebView } from './QTIWebView'
import {
  QT_CALL_UI_FUNCTION,
  QT_API_MODULE,
  QT_CALL_UI_FUNCTION_WITH_PROMISE,
} from '../qt/QtAPIModule'
import { isString } from '../utils/type'
import { QtBaseViewAPI } from '../base/QtBaseViewAPI'
import { QTWebViewLayerType } from './QTWebViewLayerType'

export interface QtWebViewAPI extends QtBaseViewAPI {
  reload(instance: string | Ref<QTIWebView | undefined>): void

  clearCache(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  getUrl(instance: string | Ref<QTIWebView | undefined>): Promise<string | undefined | null>

  getOriginalUrl(instance: string | Ref<QTIWebView | undefined>): Promise<string | undefined | null>

  setLayerType(instance: string | Ref<QTIWebView | undefined>, value: QTWebViewLayerType): void

  setIgnoreCA(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  getBackForwardList(
    instance: string | Ref<QTIWebView | undefined>
  ): Promise<Array<Record<string, any>>>

  getCurrentIndexWithBackForwardList(
    instance: string | Ref<QTIWebView | undefined>
  ): Promise<number>

  getScreenStatus(instance: string | Ref<QTIWebView | undefined>): Promise<number>

  //---------------------------------------------------------------------------
  loadUrl(instance: string | Ref<QTIWebView | undefined>, url: string): void

  evaluateJavascript(
    instance: string | Ref<QTIWebView | undefined>,
    value: string
  ): Promise<string | undefined | null>

  setUserAgent(instance: string | Ref<QTIWebView | undefined>, value: string): void

  canGoBack(instance: string | Ref<QTIWebView | undefined>): Promise<boolean>

  goBack(instance: string | Ref<QTIWebView | undefined>): void

  canGoForward(instance: string | Ref<QTIWebView | undefined>): Promise<boolean>

  goForward(instance: string | Ref<QTIWebView | undefined>): void

  canGoBackOrForward(instance: string | Ref<QTIWebView | undefined>, steps: number): void

  goBackOrForward(instance: string | Ref<QTIWebView | undefined>, steps: number): void

  onResume(instance: string | Ref<QTIWebView | undefined>): void

  onPause(instance: string | Ref<QTIWebView | undefined>): void

  pauseTimers(instance: string | Ref<QTIWebView | undefined>): void

  resumeTimers(instance: string | Ref<QTIWebView | undefined>): void

  destroy(instance: string | Ref<QTIWebView | undefined>): void

  setJavaScriptEnabled(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setPluginState(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setJavaScriptCanOpenWindowsAutomatically(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void

  setUseWideViewPort(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setLoadWithOverviewMode(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setSupportZoom(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setBuiltInZoomControls(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setDisplayZoomControls(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setAllowFileAccess(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setDomStorageEnabled(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setDatabaseEnabled(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setAppCacheEnabled(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setAppCachePath(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setMediaPlaybackRequiresUserGesture(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void

  setStandardFontFamily(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setFixedFontFamily(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setSansSerifFontFamily(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setSerifFontFamily(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setCursiveFontFamily(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setFantasyFontFamily(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setTextZoom(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setMinimumFontSize(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setDefaultFontSize(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setLayoutAlgorithm(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setLoadsImagesAutomatically(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setDefaultTextEncodingName(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setNeedInitialFocus(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setGeolocationEnabled(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setBlockNetworkLoads(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setSupportMultipleWindows(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setAppCacheMaxSize(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setRenderPriority(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setCacheMode(instance: string | Ref<QTIWebView | undefined>, value: number): void

  //-----------------------------------------------
  setAllowContentAccess(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setEnableSmoothTransition(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setSaveFormData(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setSavePassword(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setTextSize(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setInitialScale(instance: string | Ref<QTIWebView | undefined>, value: number): void

  autoClickPosition(instance: string | Ref<QTIWebView | undefined>, x: number, y: number): void

  disableImageDisplay(instance: string | Ref<QTIWebView | undefined>): void

  enableImageDisplay(instance: string | Ref<QTIWebView | undefined>): void

  clearView(instance: string | Ref<QTIWebView | undefined>): void

  stopLoading(instance: string | Ref<QTIWebView | undefined>): void

  setListenEvents(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setDefaultZoom(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setLightTouchEnabled(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setMinimumLogicalFontSize(instance: string | Ref<QTIWebView | undefined>, value: number)

  setDefaultFixedFontSize(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setBlockNetworkImage(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setAllowUniversalAccessFromFileURLs(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void

  setAllowFileAccessFromFileURLs(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void

  setDatabasePath(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setGeolocationDatabasePath(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setUserAgentString(instance: string | Ref<QTIWebView | undefined>, value: string): void

  setMixedContentMode(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setOffscreenPreRaster(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setSafeBrowsingEnabled(instance: string | Ref<QTIWebView | undefined>, value: boolean): void

  setForceDark(instance: string | Ref<QTIWebView | undefined>, value: number): void

  setDisabledActionModeMenuItems(
    instance: string | Ref<QTIWebView | undefined>,
    value: number
  ): void

  initJavaScriptInterface(instance: string | Ref<QTIWebView | undefined>): void

  removeJavaScriptInterface(instance: string | Ref<QTIWebView | undefined>): void

  initWebViewFocus(
    instance: string | Ref<QTIWebView | undefined>,
    delayTime: number,
    x: number,
    y: number
  ): void
}

export function createQtWebViewAPI(viewAPI: QtBaseViewAPI): QtWebViewAPI {
  function reload(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'reload', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.reload()
    }
  }

  function clearCache(instance: string | Ref<QTIWebView | undefined>, value: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'clearCache', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.clearCache(value)
    }
  }

  function getUrl(
    instance: string | Ref<QTIWebView | undefined>
  ): Promise<string | undefined | null> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(
          QT_API_MODULE,
          QT_CALL_UI_FUNCTION_WITH_PROMISE,
          [instance, 'getUrl', []],
          (res) => {
            resolve(res)
          }
        )
      })
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getUrl()
    } else {
      return Promise.reject()
    }
  }

  function getOriginalUrl(
    instance: string | Ref<QTIWebView | undefined>
  ): Promise<string | undefined | null> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(
          QT_API_MODULE,
          QT_CALL_UI_FUNCTION_WITH_PROMISE,
          [instance, 'getOriginalUrl', []],
          (res) => {
            resolve(res)
          }
        )
      })
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getOriginalUrl()
    } else {
      return Promise.reject()
    }
  }

  function setLayerType(
    instance: string | Ref<QTIWebView | undefined>,
    value: QTWebViewLayerType
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setLayerType', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setLayerType(value)
    }
  }

  function setIgnoreCA(instance: string | Ref<QTIWebView | undefined>, value: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setIgnoreCA', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setIgnoreCA(value)
    }
  }

  function getBackForwardList(
    instance: string | Ref<QTIWebView | undefined>
  ): Promise<Array<Record<string, any>>> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(
          QT_API_MODULE,
          QT_CALL_UI_FUNCTION_WITH_PROMISE,
          [instance, 'getBackForwardList', []],
          (res) => {
            resolve(res)
          }
        )
      })
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getBackForwardList()
    } else {
      return Promise.reject()
    }
  }

  function getCurrentIndexWithBackForwardList(
    instance: string | Ref<QTIWebView | undefined>
  ): Promise<number> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(
          QT_API_MODULE,
          QT_CALL_UI_FUNCTION_WITH_PROMISE,
          [instance, 'getCurrentIndexWithBackForwardList', []],
          (res) => {
            resolve(res)
          }
        )
      })
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getCurrentIndexWithBackForwardList()
    } else {
      return Promise.reject()
    }
  }

  function getScreenStatus(instance: string | Ref<QTIWebView | undefined>): Promise<number> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(
          QT_API_MODULE,
          QT_CALL_UI_FUNCTION_WITH_PROMISE,
          [instance, 'getScreenStatus', []],
          (res) => {
            resolve(res)
          }
        )
      })
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getScreenStatus()
    } else {
      return Promise.reject()
    }
  }

  function setInitialScale(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setInitialScale', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setInitialScale(value)
    }
  }

  function autoClickPosition(
    instance: string | Ref<QTIWebView | undefined>,
    x: number,
    y: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'autoClickPosition', [x, y]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.autoClickPosition(x, y)
    }
  }

  function disableImageDisplay(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'disableImageDisplay', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.disableImageDisplay()
    }
  }

  function enableImageDisplay(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'enableImageDisplay', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.enableImageDisplay()
    }
  }

  function clearView(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'clearView', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.clearView()
    }
  }

  function stopLoading(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'stopLoading', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.stopLoading()
    }
  }

  function setListenEvents(instance: string | Ref<QTIWebView | undefined>, value: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setListenEvents', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setListenEvents(value)
    }
  }

  //---------------------------------------------------------------------------

  function loadUrl(instance: string | Ref<QTIWebView | undefined>, url: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'loadUrl', [url]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.loadUrl(url)
    }
  }

  function evaluateJavascript(
    instance: string | Ref<QTIWebView | undefined>,
    value: string
  ): Promise<string | undefined | null> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(
          QT_API_MODULE,
          QT_CALL_UI_FUNCTION_WITH_PROMISE,
          [instance, 'evaluateJavascript', [value]],
          (res) => {
            resolve(res)
          }
        )
      })
    } else if (isRef(instance) && instance.value) {
      return instance.value!.evaluateJavascript(value)
    } else {
      return Promise.reject()
    }
  }

  function setUserAgent(instance: string | Ref<QTIWebView | undefined>, value: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setUserAgent', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setUserAgent(value)
    }
  }

  function canGoBack(instance: string | Ref<QTIWebView | undefined>): Promise<boolean> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(
          QT_API_MODULE,
          QT_CALL_UI_FUNCTION_WITH_PROMISE,
          [instance, 'canGoBack', []],
          (res) => {
            resolve(res)
          }
        )
      })
    } else if (isRef(instance) && instance.value) {
      return instance.value!.canGoBack()
    } else {
      return Promise.reject()
    }
  }

  function goBack(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'goBack', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.goBack()
    }
  }

  function canGoForward(instance: string | Ref<QTIWebView | undefined>): Promise<boolean> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(
          QT_API_MODULE,
          QT_CALL_UI_FUNCTION_WITH_PROMISE,
          [instance, 'canGoForward', []],
          (res) => {
            resolve(res)
          }
        )
      })
    } else if (isRef(instance) && instance.value) {
      return instance.value!.canGoForward()
    } else {
      return Promise.reject()
    }
  }

  function goForward(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'goForward', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.goForward()
    }
  }

  function canGoBackOrForward(instance: string | Ref<QTIWebView | undefined>, steps: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'canGoBackOrForward',
        [steps],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.canGoBackOrForward(steps)
    }
  }

  function goBackOrForward(instance: string | Ref<QTIWebView | undefined>, steps: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'goBackOrForward', [steps]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.goBackOrForward(steps)
    }
  }

  function onResume(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'onResume', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.onResume()
    }
  }

  function onPause(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'onPause', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.onPause()
    }
  }

  function pauseTimers(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'pauseTimers', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.pauseTimers()
    }
  }

  function resumeTimers(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'resumeTimers', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.resumeTimers()
    }
  }

  function destroy(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'destroy', []])
    } else if (isRef(instance) && instance.value) {
      instance.value?.destroy()
    }
  }

  function setJavaScriptEnabled(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setJavaScriptEnabled',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setJavaScriptEnabled(value)
    }
  }

  function setPluginState(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setPluginState', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setPluginState(value)
    }
  }

  function setJavaScriptCanOpenWindowsAutomatically(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setJavaScriptCanOpenWindowsAutomatically',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setJavaScriptCanOpenWindowsAutomatically(value)
    }
  }

  function setUseWideViewPort(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setUseWideViewPort',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setUseWideViewPort(value)
    }
  }

  function setLoadWithOverviewMode(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setLoadWithOverviewMode',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setLoadWithOverviewMode(value)
    }
  }

  function setSupportZoom(instance: string | Ref<QTIWebView | undefined>, value: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setSupportZoom', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSupportZoom(value)
    }
  }

  function setBuiltInZoomControls(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setBuiltInZoomControls',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setBuiltInZoomControls(value)
    }
  }

  function setDisplayZoomControls(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setDisplayZoomControls',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDisplayZoomControls(value)
    }
  }

  function setAllowFileAccess(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setAllowFileAccess',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAllowFileAccess(value)
    }
  }

  function setDomStorageEnabled(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setDomStorageEnabled',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDomStorageEnabled(value)
    }
  }

  function setDatabaseEnabled(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setDatabaseEnabled',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDatabaseEnabled(value)
    }
  }

  function setAppCacheEnabled(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setAppCacheEnabled',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAppCacheEnabled(value)
    }
  }

  function setAppCachePath(instance: string | Ref<QTIWebView | undefined>, value: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setAppCachePath', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAppCachePath(value)
    }
  }

  function setMediaPlaybackRequiresUserGesture(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setMediaPlaybackRequiresUserGesture',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setMediaPlaybackRequiresUserGesture(value)
    }
  }

  function setStandardFontFamily(
    instance: string | Ref<QTIWebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setStandardFontFamily',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setStandardFontFamily(value)
    }
  }

  function setFixedFontFamily(instance: string | Ref<QTIWebView | undefined>, value: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setFixedFontFamily',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setFixedFontFamily(value)
    }
  }

  function setSansSerifFontFamily(
    instance: string | Ref<QTIWebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setSansSerifFontFamily',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSansSerifFontFamily(value)
    }
  }

  function setSerifFontFamily(instance: string | Ref<QTIWebView | undefined>, value: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setSerifFontFamily',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSerifFontFamily(value)
    }
  }

  function setCursiveFontFamily(
    instance: string | Ref<QTIWebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setCursiveFontFamily',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setCursiveFontFamily(value)
    }
  }

  function setFantasyFontFamily(
    instance: string | Ref<QTIWebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setFantasyFontFamily',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setFantasyFontFamily(value)
    }
  }

  function setTextZoom(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTextZoom', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setTextZoom(value)
    }
  }

  function setMinimumFontSize(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setMinimumFontSize',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setMinimumFontSize(value)
    }
  }

  function setDefaultFontSize(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setDefaultFontSize',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDefaultFontSize(value)
    }
  }

  function setLayoutAlgorithm(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setLayoutAlgorithm',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setLayoutAlgorithm(value)
    }
  }

  function setLoadsImagesAutomatically(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setLoadsImagesAutomatically',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setLoadsImagesAutomatically(value)
    }
  }

  function setDefaultTextEncodingName(
    instance: string | Ref<QTIWebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setDefaultTextEncodingName',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDefaultTextEncodingName(value)
    }
  }

  function setNeedInitialFocus(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setNeedInitialFocus',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setNeedInitialFocus(value)
    }
  }

  function setGeolocationEnabled(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setGeolocationEnabled',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setGeolocationEnabled(value)
    }
  }

  function setBlockNetworkLoads(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setBlockNetworkLoads',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setBlockNetworkLoads(value)
    }
  }

  function setSupportMultipleWindows(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setSupportMultipleWindows',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSupportMultipleWindows(value)
    }
  }

  function setAppCacheMaxSize(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setAppCacheMaxSize',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAppCacheMaxSize(value)
    }
  }

  function setRenderPriority(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setRenderPriority',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setRenderPriority(value)
    }
  }

  function setCacheMode(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setCacheMode', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setCacheMode(value)
    }
  }

  //-----------------------------------------------
  function setAllowContentAccess(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setAllowContentAccess',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAllowContentAccess(value)
    }
  }

  function setEnableSmoothTransition(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setEnableSmoothTransition',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setEnableSmoothTransition(value)
    }
  }

  function setSaveFormData(instance: string | Ref<QTIWebView | undefined>, value: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setSaveFormData', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSaveFormData(value)
    }
  }

  function setSavePassword(instance: string | Ref<QTIWebView | undefined>, value: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setSavePassword', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSavePassword(value)
    }
  }

  function setTextSize(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setTextSize', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setTextSize(value)
    }
  }

  function setDefaultZoom(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setDefaultZoom', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDefaultZoom(value)
    }
  }

  function setLightTouchEnabled(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setLightTouchEnabled',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setLightTouchEnabled(value)
    }
  }

  function setMinimumLogicalFontSize(
    instance: string | Ref<QTIWebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setMinimumLogicalFontSize',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setMinimumLogicalFontSize(value)
    }
  }

  function setDefaultFixedFontSize(
    instance: string | Ref<QTIWebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setDefaultFixedFontSize',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDefaultFixedFontSize(value)
    }
  }

  function setBlockNetworkImage(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setBlockNetworkImage',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setBlockNetworkImage(value)
    }
  }

  function setAllowUniversalAccessFromFileURLs(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setAllowUniversalAccessFromFileURLs',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAllowUniversalAccessFromFileURLs(value)
    }
  }

  function setAllowFileAccessFromFileURLs(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setAllowFileAccessFromFileURLs',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setAllowFileAccessFromFileURLs(value)
    }
  }

  function setDatabasePath(instance: string | Ref<QTIWebView | undefined>, value: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setDatabasePath', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDatabasePath(value)
    }
  }

  function setGeolocationDatabasePath(
    instance: string | Ref<QTIWebView | undefined>,
    value: string
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setGeolocationDatabasePath',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setGeolocationDatabasePath(value)
    }
  }

  function setUserAgentString(instance: string | Ref<QTIWebView | undefined>, value: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setUserAgentString',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setUserAgentString(value)
    }
  }

  function setMixedContentMode(
    instance: string | Ref<QTIWebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setMixedContentMode',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setMixedContentMode(value)
    }
  }

  function setOffscreenPreRaster(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setOffscreenPreRaster',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setOffscreenPreRaster(value)
    }
  }

  function setSafeBrowsingEnabled(
    instance: string | Ref<QTIWebView | undefined>,
    value: boolean
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setSafeBrowsingEnabled',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setSafeBrowsingEnabled(value)
    }
  }

  function setForceDark(instance: string | Ref<QTIWebView | undefined>, value: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setForceDark', [value]])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setForceDark(value)
    }
  }

  function setDisabledActionModeMenuItems(
    instance: string | Ref<QTIWebView | undefined>,
    value: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'setDisabledActionModeMenuItems',
        [value],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.setDisabledActionModeMenuItems(value)
    }
  }

  function initJavaScriptInterface(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'initJavaScriptInterface',
        [],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.initJavaScriptInterface()
    }
  }

  function removeJavaScriptInterface(instance: string | Ref<QTIWebView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'removeJavaScriptInterface',
        [],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.removeJavaScriptInterface()
    }
  }

  function initWebViewFocus(
    instance: string | Ref<QTIWebView | undefined>,
    delayTime: number,
    x: number,
    y: number
  ): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [
        instance,
        'initWebViewFocus',
        [delayTime, x, y],
      ])
    } else if (isRef(instance) && instance.value) {
      instance.value?.initWebViewFocus(delayTime, x, y)
    }
  }

  return {
    ...viewAPI,
    //------------------------------------
    reload,
    clearCache,
    getUrl,
    getOriginalUrl,
    setLayerType,
    setIgnoreCA,
    getCurrentIndexWithBackForwardList,
    getScreenStatus,
    getBackForwardList,
    setInitialScale,
    autoClickPosition,
    disableImageDisplay,
    enableImageDisplay,
    setListenEvents,
    stopLoading,
    clearView,
    //------------------------------------
    loadUrl,
    evaluateJavascript,
    setUserAgent,
    canGoBack,
    goBack,
    canGoForward,
    goForward,
    canGoBackOrForward,
    goBackOrForward,
    onResume,
    onPause,
    pauseTimers,
    resumeTimers,
    destroy,
    setJavaScriptEnabled,
    setPluginState,
    setJavaScriptCanOpenWindowsAutomatically,
    setUseWideViewPort,
    setLoadWithOverviewMode,
    setSupportZoom,
    setBuiltInZoomControls,
    setDisplayZoomControls,
    setAllowFileAccess,
    setDomStorageEnabled,
    setDatabaseEnabled,
    setAppCacheEnabled,
    setAppCachePath,
    setMediaPlaybackRequiresUserGesture,
    setStandardFontFamily,
    setFixedFontFamily,
    setSansSerifFontFamily,
    setSerifFontFamily,
    setCursiveFontFamily,
    setFantasyFontFamily,
    setTextZoom,
    setMinimumFontSize,
    setDefaultFontSize,
    setLayoutAlgorithm,
    setLoadsImagesAutomatically,
    setDefaultTextEncodingName,
    setNeedInitialFocus,
    setGeolocationEnabled,
    setBlockNetworkLoads,
    setSupportMultipleWindows,
    setAppCacheMaxSize,
    setRenderPriority,
    setCacheMode,
    setAllowContentAccess,
    setEnableSmoothTransition,
    setSaveFormData,
    setSavePassword,
    setTextSize,
    setDefaultZoom,
    setLightTouchEnabled,
    setMinimumLogicalFontSize,
    setDefaultFixedFontSize,
    setBlockNetworkImage,
    setAllowUniversalAccessFromFileURLs,
    setAllowFileAccessFromFileURLs,
    setDatabasePath,
    setGeolocationDatabasePath,
    setUserAgentString,
    setMixedContentMode,
    setOffscreenPreRaster,
    setSafeBrowsingEnabled,
    setForceDark,
    setDisabledActionModeMenuItems,
    initJavaScriptInterface,
    removeJavaScriptInterface,
    initWebViewFocus,
  }
}
