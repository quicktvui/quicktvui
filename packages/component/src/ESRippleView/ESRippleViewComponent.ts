import { defineComponent, h, ref } from 'vue'
import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESRippleViewComponent(app: ESApp) {
  const RippleViewComponent = {
    component: {
      name: 'RippleViewComponent',
      processEventData(
        evtData,
        nativeEventParams: {
          isFocused: boolean
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onFocus':
            event.isFocused = nativeEventParams.isFocused
            break
          default:
            break
        }
        return event
      },
    },
  }
  registerElement('RippleViewComponent', RippleViewComponent)

  const RippleView = defineComponent({
    emits: ['focus'],
    setup(props, context) {
      const viewRef = ref()
      return () => {
        return h('RippleViewComponent', {
          ref: viewRef,
          onFocusChange: (evt) => {
            context.emit('focus', evt)
          },
        })
      }
    },
  })
  app.component('ripple-view', RippleView)
}

export default registerESRippleViewComponent
