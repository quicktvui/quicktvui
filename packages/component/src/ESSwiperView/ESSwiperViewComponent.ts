import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerESSwiperViewComponent(app: ESApp) {
  const ViewPagerComponent = {
    component: {
      name: 'ViewPager',
      processEventData(
        evtData,
        nativeEventParams: {
          position: number
          offset: number
          pageScrollState: number
        }
      ) {
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
            break
        }
        return event
      },
    },
  }
  registerElement('ViewPager', ViewPagerComponent)

  //-------------------------------------------------------------------
  const ViewPagerComponentImpl = defineComponent({
    emits: ['dropped', 'dragging', 'stateChanged'],
    setup(props, context) {
      const viewRef = ref()

      function setSlide(slideIndex: number) {
        Native.callUIFunction(viewRef.value, 'setPage', [slideIndex])
      }

      function setSlideWithoutAnimation(slideIndex: number) {
        Native.callUIFunction(viewRef.value, 'setPageWithoutAnimation', [slideIndex])
      }

      context.expose({
        setSlide,
        setSlideWithoutAnimation,
      })
      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'ViewPager',
          {
            ref: viewRef,
            onPageSelected: (evt) => {
              context.emit('dropped', evt.currentSlide)
            },
            onPageScroll: (evt) => {
              context.emit('dragging', evt.offset, evt.nextSlide)
            },
            onPageScrollStateChanged: (evt) => {
              context.emit('stateChanged', evt.state)
            },
          },
          children
        )
      }
    },
  })

  app.component('swiper', ViewPagerComponentImpl)
}

export default registerESSwiperViewComponent
