import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESLottieViewElementForHarmony(app: ESApp) {
  registerElement('ESLottieViewComponent', {
    component: {
      name: 'ESLottieViewComponent',
      processEventData(
        evtData: any,
        nativeEventParams: {
          value: any
          eventName: any
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onAnimationEvent':
            event.eventName = nativeEventParams.eventName
            event.value = nativeEventParams.value
            break
          default:
            break
        }
        return event
      },
    },
  })
}

export default registerESLottieViewElementForHarmony
