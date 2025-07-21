import { defineComponent, h, ref } from 'vue'
import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESTestAViewComponent(app: ESApp) {
  registerElement('ESTestAView', {
    component: {
      name: 'ESTestAView',
    },
  })

  const TestAViewImpl = defineComponent({
    setup(props, context) {
      const viewRef = ref()

      context.expose({
        viewRef,
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'ESTestAView',
          {
            ref: viewRef,
          },
          children
        )
      }
    },
  })
  app.component('es-testA-view', TestAViewImpl)
}

export default registerESTestAViewComponent
