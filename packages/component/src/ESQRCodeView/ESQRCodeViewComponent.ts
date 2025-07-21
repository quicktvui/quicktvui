import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESQRCodeViewComponent(app: ESApp) {
  registerElement('QrCodeComponent', {
    component: {
      name: 'QrCodeComponent',
    },
  })
}

export default registerESQRCodeViewComponent
