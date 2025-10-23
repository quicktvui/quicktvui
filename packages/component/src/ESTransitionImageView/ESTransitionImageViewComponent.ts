import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerESTransitionImageViewComponent(app: ESApp) {
  registerElement('TransitionImageComponent', {
    component: {
      name: 'TransitionImageComponent',
    },
  })

  const TransitionImageImpl = defineComponent({
    name: 'LoadingViewComponent',
    setup(props, context) {
      const viewRef = ref()

      function setNextColor(color: string | number) {
        Native.callUIFunction(viewRef.value, 'setNextColor', [color], (res) => {})
      }

      function setNextImage(url: string) {
        Native.callUIFunction(viewRef.value, 'setNextImage', [url], (res) => {})
      }

      function setTransitionTime(duration: number) {
        Native.callUIFunction(viewRef.value, 'setTransitionTime', [duration], (res) => {})
      }

      context.expose({
        setNextColor,
        setNextImage,
        setTransitionTime,
      })
      return () => {
        return h('TransitionImageComponent', {
          ref: viewRef,
        })
      }
    },
  })
  app.component('img-transition', TransitionImageImpl)
}

export default registerESTransitionImageViewComponent
