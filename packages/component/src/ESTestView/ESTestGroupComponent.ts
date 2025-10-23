import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerESTestGroupComponent(app: ESApp) {
  registerElement('ESTestGroupView', {
    component: {
      name: 'ESTestGroupView',
    },
  })

  const CardGroupViewImpl = defineComponent({
    setup(props, context) {
      const viewRef = ref()

      function showDefaultBg(data: boolean) {
        Native.callUIFunction(viewRef.value, 'showDefaultBg', [data])
      }

      context.expose({
        viewRef,
        showDefaultBg,
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'ESTestGroupView',
          {
            ref: viewRef,
          },
          children
        )
      }
    },
  })
  app.component('es-test-group', CardGroupViewImpl)
}

export default registerESTestGroupComponent
