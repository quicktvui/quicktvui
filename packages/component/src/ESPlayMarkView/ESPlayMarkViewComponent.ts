import { ESApp, registerElement } from '@extscreen/es3-vue'
import { defineComponent, h } from 'vue'

function registerESPlayMarkViewComponent(app: ESApp) {
  registerElement('ESPlayMarkViewComponent', {
    component: {
      name: 'ESPlayMarkViewComponent',
    },
  })

  const PlayMarkImpl = defineComponent({
    setup(props, context) {
      return () => {
        return h('ESPlayMarkViewComponent', {})
      }
    },
  })
  app.component('play-mark', PlayMarkImpl)
}

export default registerESPlayMarkViewComponent
