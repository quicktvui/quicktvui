import { h } from 'vue'
import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESSurfaceViewComponent(app: ESApp) {
  registerElement('ESSurfaceViewComponent', {
    component: {
      name: 'ESSurfaceViewComponent',
    },
  })

  app.component('surface-view', {
    setup(props, context) {
      return () => {
        const children = context.slots.default && context.slots.default()
        return h('ESSurfaceViewComponent', {}, children)
      }
    },
  })
}

export default registerESSurfaceViewComponent
