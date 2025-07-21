import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerESFastSwiperSlideViewComponent(app: ESApp) {
  registerElement('ESSwiperSlideViewComponent', {
    component: {
      name: 'ESSwiperSlideViewComponent',
    },
  })

  const SwiperSlideViewImpl = defineComponent({
    setup(props, context) {
      const viewRef = ref()

      function doAnimation(
        fromX: string,
        toX: string,
        fromY: string,
        toY: string,
        fromAlpha: string,
        toAlpha: string,
        duration: number = 1000
      ) {
        Native.callUIFunction(
          viewRef.value,
          'doAnimation',
          [fromX, toX, fromY, toY, fromAlpha, toAlpha, duration],
          (res) => {}
        )
      }

      context.expose({
        doAnimation,
      })
      return () => {
        return h('ESSwiperSlideViewComponent', {
          ref: viewRef,
        })
      }
    },
  })

  app.component('fast-swiper-slide', SwiperSlideViewImpl)
}

export default registerESFastSwiperSlideViewComponent
