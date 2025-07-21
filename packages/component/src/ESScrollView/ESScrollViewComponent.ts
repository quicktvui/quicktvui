import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerESScrollViewComponent(app: ESApp) {
  registerElement('ScrollView', {
    component: {
      name: 'ScrollView',
    },
  })

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
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h('ScrollView', { ref: viewRef }, children)
      }
    },
  })
  app.component('scroll-view', ScrollViewImpl)
}

export default registerESScrollViewComponent
