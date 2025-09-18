import type { App } from '@vue/runtime-core'
import { h, ref } from '@vue/runtime-core'
import { Native, registerElement } from '@extscreen/es3-vue'
import { defineComponent, watch } from 'vue'

export function registerTVSwiperComponent(vueApp: App): void {
  registerElement('tv-hi-swiper', {
    component: {
      name: 'TvViewPager',
      processEventData(evtData: any, nativeEventParams: { [key: string]: any }) {
        const { handler: event, __evt: nativeEventName } = evtData

        switch (nativeEventName) {
          case 'onPageSelected':
            event.currentSlide = nativeEventParams.position
            break
          case 'onPageScroll':
            event.nextSlide = nativeEventParams.position
            event.offset = nativeEventParams.offset
            break
          case 'onPageScrollStateChanged':
            event.state = nativeEventParams.pageScrollState
            break
          default:
        }
        return event
      },
    },
  })

  registerElement('tv-hi-swiper-slide', {
    component: {
      name: 'TvViewPagerItem',
      defaultNativeStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  })

  const swiperImpl = defineComponent({
    emits: [],
    props: {
      current: {
        type: Number,
        defaultValue: 0,
      },
      needAnimation: {
        type: Boolean,
        defaultValue: true,
      },
    },
    setup(props, context) {
      // watch(props.current, (newVal: number) => {
      //     if (props.needAnimation) {
      //         setSlide(newVal);
      //     } else {
      //         setSlideWithoutAnimation(newVal);
      //     }
      // })

      const viewRef = ref()

      function setSlide(slideIndex: number) {
        Native.callUIFunction(viewRef.value, 'setPage', [slideIndex])
      }

      function setSlideWithoutAnimation(slideIndex: number) {
        Native.callUIFunction(viewRef.value, 'setPageWithoutAnimation', [slideIndex])
      }

      context.expose({
        viewRef,
        setSlide,
        setSlideWithoutAnimation,
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h('tv-hi-swiper', { ref: viewRef }, children)
      }
    },
  })

  vueApp.component('tv-Swiper', swiperImpl)

  const SwiperSlideImpl = defineComponent({
    emits: [],
    setup(props, context) {
      const viewRef = ref()

      context.expose({
        viewRef,
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h('tv-hi-swiper-slide', { ref: viewRef }, children)
      }
    },
  })
  vueApp.component('tv-SwiperSlide', SwiperSlideImpl)
}
