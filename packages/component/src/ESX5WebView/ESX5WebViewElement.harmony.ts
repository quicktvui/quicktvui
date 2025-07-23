import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESX5WebViewElementForHarmony(app: ESApp) {
  const webviewComponent = {
    component: {
      name: 'ESWebViewComponent',
      processEventData(
        evtData,
        nativeEventParams: {
          errorCode: number
          description: string
          failingUrl: string
          js2VueValue: string
          jsRewardCallValue: string
          jsFinishGameValue: string
          url: string
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onPageStarted':
            event.url = nativeEventParams.url
            break
          case 'onPageFinished':
            event.url = nativeEventParams.url
            break
          case 'onLoadResource':
            event.url = nativeEventParams.url
            break
          case 'onReceivedError':
            event.errorCode = nativeEventParams.errorCode
            event.description = nativeEventParams.description
            event.failingUrl = nativeEventParams.failingUrl
            break
          case 'onShouldOverrideUrlLoading':
            event.url = nativeEventParams.url
            break
          case 'onJs2Vue':
            event.js2VueValue = nativeEventParams.js2VueValue
            break
          case 'onJsRewardCall':
            event.jsRewardCallValue = nativeEventParams.jsRewardCallValue
            break
          case 'onJsFinishGame':
            event.jsFinishGameValue = nativeEventParams.jsFinishGameValue
            break
          default:
        }
        return event
      },
    },
  }
  registerElement('ESX5WebViewComponent', webviewComponent)
}

export default registerESX5WebViewElementForHarmony
