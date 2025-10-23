import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESLoadingViewElementForAndroid(app: ESApp) {
  registerElement('LoadingViewComponent', {
    component: {
      name: 'LoadingViewComponent',
    },
  })
}

export default registerESLoadingViewElementForAndroid
