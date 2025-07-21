import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESSeekBarViewComponent(app: ESApp) {
  const SeekBarViewComponent = {
    component: {
      name: 'TVSeekBarViewComponent',
      processEventData(
        evtData,
        nativeEventParams: {
          isFocused: boolean
          fromUser: boolean
          leftProgress: number
          rightProgress: number
          progress: number
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onFocus':
            event.isFocused = nativeEventParams.isFocused
            break
          case 'onSeekBarChange':
            event.fromUser = nativeEventParams.fromUser
            event.progress = nativeEventParams.progress
            event.leftProgress = nativeEventParams.leftProgress
            event.rightProgress = nativeEventParams.rightProgress
            break
          default:
            break
        }
        return event
      },
    },
  }
  registerElement('TVSeekBarViewComponent', SeekBarViewComponent)
}

export default registerESSeekBarViewComponent
