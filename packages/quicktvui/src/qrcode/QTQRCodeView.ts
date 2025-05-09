import { ESApp } from '@extscreen/es3-vue'
import { h, ref } from 'vue'
import useBaseView from '../base/useBaseView'

function registerQTQRCodeView(app: ESApp) {
  app.component('qt-qr-code', {
    setup(props, context) {
      const viewRef = ref()

      context.expose({
        viewRef,
        ...useBaseView(viewRef),
      })

      return () => {
        return h('QrCodeComponent', {
          ref: viewRef,
        })
      }
    },
  })
}

export default registerQTQRCodeView
