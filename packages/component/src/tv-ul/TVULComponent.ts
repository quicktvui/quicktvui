import type { App } from '@vue/runtime-core'
import { Native, registerElement } from '@extscreen/es3-vue'
import { defineComponent, h, ref } from 'vue'

export function registerTVULComponent(vueApp: App) {
  registerElement('tv-ul', {
    component: {
      name: 'TvListView',
      processEventData(
        evtData: any,
        nativeEventParams: {
          contentOffset: {
            x: number
            y: number
          }
          index: number
          offsetX: number
          offsetY: number
          pageScrollState: number
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onScroll':
          case 'onScrollBeginDrag':
          case 'onScrollEndDrag':
          case 'onMomentumScrollBegin':
          case 'onMomentumScrollEnd':
            event.offsetX = nativeEventParams.contentOffset?.x
            event.offsetY = nativeEventParams.contentOffset?.y
            break
          case 'onDelete':
            event.index = nativeEventParams.index
            break
          case 'onPageScrollStateChanged':
            event.offsetX = nativeEventParams.offsetX
            event.offsetY = nativeEventParams.offsetY
            event.newState = nativeEventParams.pageScrollState
            break
          default:
        }
        return event
      },
    },
  })

  const TVUlImpl = defineComponent({
    emits: [],
    setup(props, context) {
      const viewRef = ref()

      function hasFocus(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
          Native.callUIFunction(viewRef.value, 'hasFocus', [], (res) => {
            resolve(res.value)
          })
        })
      }

      function requestFocus(id: string) {
        Native.callUIFunction(viewRef.value, 'requestFocus', [id])
      }

      function clearFocus() {
        Native.callUIFunction(viewRef.value, 'clearFocus', [])
      }

      context.expose({
        viewRef,
        clearFocus,
        hasFocus,
        requestFocus,
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h('tv-ul', { ref: viewRef }, children)
      }
    },
  })
  vueApp.component('tv-ul', TVUlImpl)
}
