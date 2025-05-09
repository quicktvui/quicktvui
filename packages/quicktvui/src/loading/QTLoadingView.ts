import { ESApp } from '@extscreen/es3-vue'
import { h, ref } from 'vue'

import useBaseView from '../base/useBaseView'

function registerQTLoadingViewComponent(app: ESApp) {
  app.component('qt-loading-view', {
    setup(props, context) {
      const viewRef = ref()

      context.expose({
        viewRef,
        ...useBaseView(viewRef),
      })

      return () => {
        return h('LoadingViewComponent', {
          ref: viewRef,
        })
      }
    },
  })
}

export default registerQTLoadingViewComponent
