import { defineComponent, h, ref } from 'vue'
import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESFlexViewComponent(app: ESApp) {
  registerElement('FastFlexView', {
    component: {
      name: 'FastFlexView',
    },
  })

  const FlexViewImpl = defineComponent({
    setup(props, context) {
      const children = context.slots.default && context.slots.default()
      return () => {
        return h('FastFlexView', {}, children)
      }
    },
  })
  app.component('tv-flex', FlexViewImpl)
}

export default registerESFlexViewComponent
