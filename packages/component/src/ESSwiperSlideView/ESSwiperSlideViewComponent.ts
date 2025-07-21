import { defineComponent, h, ref } from 'vue'
import { ESApp, registerElement } from '@extscreen/es3-vue'

function registerESSwiperSlideViewComponent(app: ESApp) {
  const ViewPagerItemComponent = {
    component: {
      name: 'ViewPagerItem',
    },
  }
  registerElement('ViewPagerItem', ViewPagerItemComponent)

  //-------------------------------------------------------------------
  const ViewPagerItemComponentImpl = defineComponent({
    setup(props, context) {
      const viewRef = ref()
      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'ViewPagerItem',
          {
            ref: viewRef,
          },
          children
        )
      }
    },
  })
  app.component('swiper-slide', ViewPagerItemComponentImpl)
}

export default registerESSwiperSlideViewComponent
