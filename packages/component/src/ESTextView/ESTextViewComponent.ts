import { ESApp, registerElement } from '@extscreen/es3-vue'
import { defineComponent, h } from 'vue'

function registerESTextViewComponent(app: ESApp) {
  registerElement('TextView', {
    component: {
      name: 'TextView',
    },
  })

  const TextViewImpl = defineComponent({
    name: 'TextView',
    setup(props, context) {
      return () => {
        return h('TextView', {})
      }
    },
  })
  app.component('text-view', TextViewImpl)
}

export default registerESTextViewComponent
