import { defineComponent, h, ref } from 'vue'
import { ESApp, Native } from '@extscreen/es3-vue'

import useBaseView from '../base/useBaseView'

function registerQTScrollView(app: ESApp) {
  const ScrollViewImpl = defineComponent({
    setup(props, context) {
      const viewRef = ref()

      function scrollTo(x: number, y: number): void {
        Native.callUIFunction(viewRef.value, 'scrollTo', [x, y])
      }

      function scrollToWithOptions(x: number, y: number, duration: number): void {
        Native.callUIFunction(viewRef.value, 'scrollToWithOptions', [
          {
            x: x,
            y: y,
            duration: duration,
          },
        ])
      }

      context.expose({
        viewRef,
        scrollTo,
        scrollToWithOptions,
        ...useBaseView(viewRef),
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h('ScrollView', { ref: viewRef }, children)
      }
    },
  })
  app.component('qt-scroll-view', ScrollViewImpl)
}

export default registerQTScrollView
