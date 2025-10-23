import { defineComponent, h, ref } from 'vue'
import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESItemStoreViewComponent(app: ESApp) {
  registerElement('ItemStoreView', {
    component: {
      name: 'ItemStoreView',
    },
  })

  const ItemStoreView = defineComponent({
    setup(props, context) {
      const viewRef = ref()
      const children = context.slots.default && context.slots.default()
      return () => {
        return h('ItemStoreView', {}, children)
      }
    },
  })
  app.component('item-store', ItemStoreView)
}

export default registerESItemStoreViewComponent
