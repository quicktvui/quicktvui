import { ESApp, registerElement } from '@extscreen/es3-vue'
import { defineComponent, h, ref } from 'vue'

function registerESItemComponent(app: ESApp) {
  const ItemFrameComponent = {
    component: {
      name: 'ItemFrameComponent',
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
  registerElement('ItemFrameComponent', ItemFrameComponent)

  const ItemFrameComponentImpl = defineComponent({
    name: 'ItemFrame',
    setup(props, context) {
      const children = context.slots.default && context.slots.default()
      return () => {
        return h('ItemFrameComponent', {}, children)
      }
    },
  })
  app.component('item-frame', ItemFrameComponentImpl)
}

export default registerESItemComponent
