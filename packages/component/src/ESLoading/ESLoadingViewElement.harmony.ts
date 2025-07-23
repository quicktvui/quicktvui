import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESLoadingViewElementForHarmony(app: ESApp) {
  registerElement('LoadingViewComponent', {
    component: {
      name: 'LoadingViewComponent',
    },
  })
}

export default registerESLoadingViewElementForHarmony
