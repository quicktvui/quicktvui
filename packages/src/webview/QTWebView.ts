import {ESApp, Native} from "@extscreen/es3-vue";
import {defineComponent, h, onMounted, ref} from "vue";

import useBaseView from '../base/useBaseView'

function registerQTWebView(app: ESApp) {

  const WebViewImpl = defineComponent({
      name: 'WebView',
      emits: [
        'onCanGoBack',
        'onCanGoForward',
        'onCanGoBackOrForward',
        'onPageStarted',
        'onPageFinished',
        'onLoadResource',
        'onReceivedSslError',
        'onReceivedError',
        'shouldOverrideUrlLoading',
        'onJs2Vue'
      ],
      setup(props, context) {
        const webViewRef = ref()

        onMounted(() => {
          setJavaScriptEnabled(true);
          setJavaScriptCanOpenWindowsAutomatically(true);
          setAllowFileAccess(true);
          setSupportZoom(true);
          setBuiltInZoomControls(true);
          setUseWideViewPort(true);
          setSupportMultipleWindows(true);
          setAppCacheEnabled(true);
          setDomStorageEnabled(true);
          setGeolocationEnabled(true);
          setPluginState(1);
          setCacheMode(2);
        })

        const loadUrl = (url: string) => {
          Native.callUIFunction(webViewRef.value, 'loadUrl', [url], (res) => {
          });
        }
        const evaluateJavascript = (value: string) => {
          return new Promise((resolve, reject) => {
            Native.callUIFunction(webViewRef.value, 'evaluateJavascript', [value], (res) => {
              resolve(res)
            });
          });
        }
        const canGoBack = () => {
          Native.callUIFunction(webViewRef.value,
            'canGoBack', [], (res) => {
              context.emit('onCanGoBack', res);
            });
        }
        const goBack = () => {
          Native.callUIFunction(webViewRef.value,
            'goBack', [], (res) => {
            });
        }
        const canGoForward = () => {
          Native.callUIFunction(webViewRef.value,
            'canGoForward', [], (res) => {
              context.emit('onCanGoForward', res);
            });
        }
        const goForward = () => {
          Native.callUIFunction(webViewRef.value,
            'goForward', [], (res) => {
            });
        }
        const canGoBackOrForward = (steps: number) => {
          Native.callUIFunction(webViewRef.value,
            'canGoBackOrForward', [steps], (res) => {
              context.emit('onCanGoBackOrForward', res);
            });
        }
        const goBackOrForward = (steps: number) => {
          Native.callUIFunction(webViewRef.value,
            'goBackOrForward', [steps], (res) => {
            });
        }
        const onResume = () => {
          Native.callUIFunction(webViewRef.value,
            'onResume', [], (res) => {
            });
        }
        const onPause = () => {
          Native.callUIFunction(webViewRef.value,
            'onPause', [], (res) => {
            });
        }
        const pauseTimers = () => {
          Native.callUIFunction(webViewRef.value,
            'pauseTimers', [], (res) => {
            });
        }
        const resumeTimers = () => {
          Native.callUIFunction(webViewRef.value,
            'resumeTimers', [], (res) => {
            });
        }
        const destroy = () => {
          Native.callUIFunction(webViewRef.value,
            'destroy', [], (res) => {
            });
        }
        const setJavaScriptEnabled = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setJavaScriptEnabled', [value], (res) => {
            });
        }
        const setPluginState = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setPluginState', [value], (res) => {
            });
        }
        const setJavaScriptCanOpenWindowsAutomatically = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setJavaScriptCanOpenWindowsAutomatically', [value], (res) => {
            });
        }
        const setUseWideViewPort = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setUseWideViewPort', [value], (res) => {
            });
        }
        const setLoadWithOverviewMode = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setLoadWithOverviewMode', [value], (res) => {
            });
        }
        const setSupportZoom = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setSupportZoom', [value], (res) => {
            });
        }
        const setBuiltInZoomControls = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setBuiltInZoomControls', [value], (res) => {
            });
        }
        const setDisplayZoomControls = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setDisplayZoomControls', [value], (res) => {
            });
        }
        const setAllowFileAccess = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setAllowFileAccess', [value], (res) => {
            });
        }
        const setDomStorageEnabled = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setDomStorageEnabled', [value], (res) => {
            });
        }
        const setDatabaseEnabled = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setDatabaseEnabled', [value], (res) => {
            });
        }
        const setAppCacheEnabled = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setAppCacheEnabled', [value], (res) => {
            });
        }
        const setAppCachePath = (value: string) => {
          Native.callUIFunction(webViewRef.value,
            'setAppCachePath', [value], (res) => {
            });
        }
        const setMediaPlaybackRequiresUserGesture = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setMediaPlaybackRequiresUserGesture', [value], (res) => {
            });
        }
        const setStandardFontFamily = (value: string) => {
          Native.callUIFunction(webViewRef.value,
            'setStandardFontFamily', [value], (res) => {
            });
        }
        const setFixedFontFamily = (value: string) => {
          Native.callUIFunction(webViewRef.value,
            'setFixedFontFamily', [value], (res) => {
            });
        }
        const setSansSerifFontFamily = (value: string) => {
          Native.callUIFunction(webViewRef.value,
            'setSansSerifFontFamily', [value], (res) => {
            });
        }
        const setSerifFontFamily = (value: string) => {
          Native.callUIFunction(webViewRef.value,
            'setSerifFontFamily', [value], (res) => {
            });
        }
        const setCursiveFontFamily = (value: string) => {
          Native.callUIFunction(webViewRef.value,
            'setCursiveFontFamily', [value], (res) => {
            });
        }
        const setFantasyFontFamily = (value: string) => {
          Native.callUIFunction(webViewRef.value,
            'setFantasyFontFamily', [value], (res) => {
            });
        }
        const setTextZoom = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setTextZoom', [value], (res) => {
            });
        }
        const setMinimumFontSize = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setMinimumFontSize', [value], (res) => {
            });
        }
        const setDefaultFontSize = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setDefaultFontSize', [value], (res) => {
            });
        }
        const setLayoutAlgorithm = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setLayoutAlgorithm', [value], (res) => {
            });
        }
        const setLoadsImagesAutomatically = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setLoadsImagesAutomatically', [value], (res) => {
            });
        }
        const setDefaultTextEncodingName = (value: string) => {
          Native.callUIFunction(webViewRef.value,
            'setDefaultTextEncodingName', [value], (res) => {
            });
        }
        const setNeedInitialFocus = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setNeedInitialFocus', [value], (res) => {
            });
        }
        const setGeolocationEnabled = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setGeolocationEnabled', [value], (res) => {
            });
        }
        const setBlockNetworkLoads = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setBlockNetworkLoads', [value], (res) => {
            });
        }
        const setSupportMultipleWindows = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setSupportMultipleWindows', [value], (res) => {
            });
        }
        const setAppCacheMaxSize = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setAppCacheMaxSize', [value], (res) => {
            });
        }
        const setRenderPriority = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setRenderPriority', [value], (res) => {
            });
        }
        const setCacheMode = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setCacheMode', [value], (res) => {
            });
        }
        //-----------------------------------------------
        const setAllowContentAccess = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setAllowContentAccess', [value], (res) => {
            });
        }
        const setEnableSmoothTransition = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setEnableSmoothTransition', [value], (res) => {
            });
        }
        const setSaveFormData = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setSaveFormData', [value], (res) => {
            });
        }
        const setSavePassword = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setSavePassword', [value], (res) => {
            });
        }
        const setTextSize = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setTextSize', [value], (res) => {
            });
        }
        const setDefaultZoom = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setDefaultZoom', [value], (res) => {
            });
        }
        const setLightTouchEnabled = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setLightTouchEnabled', [value], (res) => {
            });
        }
        const setMinimumLogicalFontSize = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setMinimumLogicalFontSize', [value], (res) => {
            });
        }
        const setDefaultFixedFontSize = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setDefaultFixedFontSize', [value], (res) => {
            });
        }
        const setBlockNetworkImage = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setBlockNetworkImage', [value], (res) => {
            });
        }
        const setAllowUniversalAccessFromFileURLs = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setAllowUniversalAccessFromFileURLs', [value], (res) => {
            });
        }
        const setAllowFileAccessFromFileURLs = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setAllowFileAccessFromFileURLs', [value], (res) => {
            });
        }
        const setDatabasePath = (value: string) => {
          Native.callUIFunction(webViewRef.value,
            'setDatabasePath', [value], (res) => {
            });
        }
        const setGeolocationDatabasePath = (value: string) => {
          Native.callUIFunction(webViewRef.value,
            'setGeolocationDatabasePath', [value], (res) => {
            });
        }
        const setUserAgentString = (value: string) => {
          Native.callUIFunction(webViewRef.value,
            'setUserAgentString', [value], (res) => {
            });
        }
        const setMixedContentMode = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setMixedContentMode', [value], (res) => {
            });
        }
        const setOffscreenPreRaster = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setOffscreenPreRaster', [value], (res) => {
            });
        }
        const setSafeBrowsingEnabled = (value: boolean) => {
          Native.callUIFunction(webViewRef.value,
            'setSafeBrowsingEnabled', [value], (res) => {
            });
        }
        const setForceDark = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setForceDark', [value], (res) => {
            });
        }
        const setDisabledActionModeMenuItems = (value: number) => {
          Native.callUIFunction(webViewRef.value,
            'setDisabledActionModeMenuItems', [value], (res) => {
            });
        }

        const initJavaScriptInterface = () => {
          Native.callUIFunction(webViewRef.value,
            'initJavaScriptInterface', [], (res) => {
            });
        }
        const removeJavaScriptInterface = () => {
          Native.callUIFunction(webViewRef.value,
            'removeJavaScriptInterface', [], (res) => {
            });
        }
        const initWebViewFocus = (delayTime: number, x: number, y: number) => {
          Native.callUIFunction(webViewRef.value,
            'initWebViewFocus', [delayTime, x, y], (res) => {
            });
        }

        context.expose({
          loadUrl,
          evaluateJavascript,
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
          ...useBaseView(webViewRef)
        });
        return () => {
          return h(
            'ESWebViewComponent',
            {
              onPageStarted: (evt) => {
                let url = evt.url;
                context.emit('onPageStarted', url);
              },
              onPageFinished: (evt) => {
                let url = evt.url;
                context.emit('onPageFinished', url);
              },
              onLoadResource: (evt) => {
                let url = evt.url;
                context.emit('onLoadResource', url);
              },
              onReceivedSslError: (evt) => {
                context.emit('onReceivedSslError', evt);
              },
              onReceivedError: (evt) => {
                let errorCode = evt.errorCode;
                let description = evt.description;
                let failingUrl = evt.failingUrl;
                context.emit('onReceivedError', errorCode, description, failingUrl);
              },
              onShouldOverrideUrlLoading: (evt) => {
                let url = evt.url;
                context.emit("shouldOverrideUrlLoading", url);
              },
              onJs2Vue: (evt) => {
                let value = evt.js2VueValue;
                context.emit("onJs2Vue", value);
              },
              ref: webViewRef,
            },
          )
        }
      },
    }
  )
  app.component('qt-web-view', WebViewImpl);
}

export default registerQTWebView;
