import { ESApp, registerElement } from '@extscreen/es3-vue'
import { defineComponent, h } from 'vue'

function registerESViewComponent(app: ESApp) {
  registerElement('ESViewComponent', {
    component: {
      name: 'ESViewComponent',
    },
  })

  const ViewImpl = defineComponent({
    name: 'ESViewComponent',
    emits: [],
    setup(props, context) {
      return () => {
        const children = context.slots.default && context.slots.default()
        return h('ESViewComponent', {}, children)
      }
    },
  })
  app.component('es-view', ViewImpl)
}

export default registerESViewComponent
