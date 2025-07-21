import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESDialogComponent(app: ESApp) {
  registerElement('Modal', {
    component: {
      name: 'Modal',
      defaultNativeProps: {
        transparent: true,
        immersionStatusBar: true,
      },
    },
  })
}

export default registerESDialogComponent
