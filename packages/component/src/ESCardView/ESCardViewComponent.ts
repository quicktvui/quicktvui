import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerESCardViewComponent(app: ESApp) {
  registerElement('ESCardGroupView', {
    component: {
      name: 'ESCardGroupView',
    },
  })

  const CardGroupViewImpl = defineComponent({
    setup(props, context) {
      const viewRef = ref()

      function load(cardId: string, useCache: boolean) {
        Native.callUIFunction(viewRef.value, 'load', [cardId, useCache])
      }

      function reload() {
        Native.callUIFunction(viewRef.value, 'reload', [])
      }

      function showDefaultBg(data: boolean) {
        Native.callUIFunction(viewRef.value, 'showDefaultBg', [data])
      }

      function requestCardFocus() {
        Native.callUIFunction(viewRef.value, 'requestCardFocus', [])
      }

      context.expose({
        viewRef,
        load,
        reload,
        showDefaultBg,
        requestCardFocus,
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'ESCardGroupView',
          {
            ref: viewRef,
          },
          children
        )
      }
    },
  })
  app.component('es-card', CardGroupViewImpl)
}

export default registerESCardViewComponent
