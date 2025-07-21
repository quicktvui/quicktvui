import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESLoadingViewElementHarmony(app: ESApp) {
  registerElement('LoadingViewComponent', {
    component: {
      name: 'LoadingViewComponent',
    },
  })
}

export default registerESLoadingViewElementHarmony
