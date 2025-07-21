import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'
import { ESPageData } from './ESPageData'

function registerESViewPagerComponent(app: ESApp) {
  const RecyclerViewPagerComponent = {
    component: {
      name: 'RecyclerViewPager',
    },
  }
  registerElement('RecyclerViewPager', RecyclerViewPagerComponent)

  const RecyclerViewPagerView = defineComponent({
    setup(props, context) {
      const viewRef = ref()

      function setPageData(page: number, data: ESPageData): void {
        Native.callUIFunction(viewRef.value, 'setListData', [
          page,
          {
            useDiff: data.useDiff,
            disableScrollOnFirstScreen: data.disableScrollOnFirstScreen,
            firstFocusTargetID: data.firstFocusTargetID,
          },
          data.data,
        ])
      }

      function translationLeft(): void {
        Native.callUIFunction(viewRef.value, 'translationLeft', [])
      }

      function translationRight(): void {
        Native.callUIFunction(viewRef.value, 'translationRight', [])
      }

      context.expose({
        viewRef,
        setPageData,
        translationLeft,
        translationRight,
      })
      const children = context.slots.default && context.slots.default()
      return () => {
        return h(
          'RecyclerViewPager',
          {
            ref: viewRef,
          },
          children
        )
      }
    },
  })
  app.component('recycler-view-pager', RecyclerViewPagerView)
}

export default registerESViewPagerComponent
