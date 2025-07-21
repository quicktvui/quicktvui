import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'
import { useES } from '@extscreen/es3-core'

function registerESTestViewComponent(app: ESApp) {
  const testViewComponent = {
    component: {
      name: 'ESTestViewComponent',
      processEventData(evtData, nativeEventParams: {}) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          default:
            break
        }
        return event
      },
    },
  }
  registerElement('ESTestViewComponent', testViewComponent)

  //-------------------------------------------------------------
  const TestViewImpl = defineComponent({
    setup(props, context) {
      const viewRef = ref()
      const es = useES()

      function showPlaceHolder(tag: boolean) {
        Native.callUIFunction(viewRef.value, 'showPlaceHolder', [tag])
      }

      context.expose({
        showPlaceHolder,
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        let componentName = 'ESTestViewComponent'
        return h(
          componentName,
          {
            ref: viewRef,
          },
          children
        )
      }
    },
  })
  app.component('es-test-view', TestViewImpl)
}

export default registerESTestViewComponent
