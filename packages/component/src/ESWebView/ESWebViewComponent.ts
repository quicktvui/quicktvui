import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESWebViewComponent(app: ESApp) {
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
          default:
        }
        return event
      },
    },
  }
  registerElement('ESWebViewComponent', webviewComponent)
}

export default registerESWebViewComponent
