import { App } from '@vue/runtime-core'
import { registerElement } from '@extscreen/es3-vue'

export function registerTVLiComponent(vueApp: App) {
  registerElement('tv-li', {
    component: {
      name: 'TvListViewItem',
    },
  })
}
