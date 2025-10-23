import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESAnimationViewComponent(app: ESApp) {
  const AnimationViewComponent = {
    component: {
      name: 'AnimationViewComponent',
      processEventData(
        evtData,
        nativeEventParams: {
          animationId: string
          isReverse: boolean
          animatedValue: number
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onAnimationCancel':
            event.animationId = nativeEventParams.animationId
            break
          case 'onAnimationEnd':
            event.animationId = nativeEventParams.animationId
            event.isReverse = nativeEventParams.isReverse
            break
          case 'onAnimationRepeat':
            event.animationId = nativeEventParams.animationId
            break
          case 'onAnimationStart':
            event.animationId = nativeEventParams.animationId
            event.isReverse = nativeEventParams.isReverse
            break
          case 'onAnimationPause':
            event.animationId = nativeEventParams.animationId
            break
          case 'onAnimationResume':
            event.animationId = nativeEventParams.animationId
            break
          case 'onAnimationUpdate':
            event.animationId = nativeEventParams.animationId
            event.animatedValue = nativeEventParams.animatedValue
            break
          default:
            break
        }
        return event
      },
    },
  }
  registerElement('AnimationViewComponent', AnimationViewComponent)
}

export default registerESAnimationViewComponent
