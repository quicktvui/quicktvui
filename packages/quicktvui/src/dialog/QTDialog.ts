import { ESApp } from '@extscreen/es3-vue'
import { h, ref } from 'vue'
import useBaseView from '../base/useBaseView'

function registerQTDialog(app: ESApp) {
  app.component('qt-dialog', {
    setup(props, context) {
      const viewRef = ref()
      context.expose({
        viewRef,
        ...useBaseView(viewRef),
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'Modal',
          {
            ref: viewRef,
          },
          children
        )
      }
    },
  })
}

export default registerQTDialog
