import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESPluginViewComponent(app: ESApp) {
  const pluginViewComponent = {
    component: {
      name: 'ESPluginViewComponent',
      processEventData(
        evtData,
        nativeEventParams: {
          errorCode: number
          errorMessage: string
          sid: string
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onPluginLoadSuccess':
            event.sid = nativeEventParams.sid
            break
          case 'onPluginLoadError':
            event.sid = nativeEventParams.sid
            event.errorCode = nativeEventParams.errorCode
            event.errorMessage = nativeEventParams.errorMessage
            break
          default:
        }
        return event
      },
    },
  }
  registerElement('ESPluginViewComponent', pluginViewComponent)
}

export default registerESPluginViewComponent
