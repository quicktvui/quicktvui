import { ESApp } from '@extscreen/es3-vue'
import { defineComponent, h } from 'vue'

function registerESLoadingViewComponent(app: ESApp) {
  const LoadingViewImpl = defineComponent({
    name: 'LoadingViewComponent',
    setup(props, context) {
      return () => {
        return h('LoadingViewComponent', {})
      }
    },
  })
  app.component('loading-view', LoadingViewImpl)
}

export default registerESLoadingViewComponent
