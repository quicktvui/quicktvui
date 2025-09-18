import { registerElement, Native } from '@extscreen/es3-vue'
import type { App } from '@vue/runtime-core'
import { h, ref } from '@vue/runtime-core'
import { defineComponent } from 'vue'
import { QTFocusDirection, QTVisibility } from '@quicktvui/quicktvui3'

export function registerTVDivComponent(vueApp: App) {
  registerElement('tv-div', {
    component: {
      name: 'TvView',
      processEventData(evtData: any, nativeEventParams: any) {
        const { handler: event, __evt: nativeEventName } = evtData

        switch (nativeEventName) {
          case 'onScroll':
          case 'onScrollBeginDrag':
          case 'onScrollEndDrag':
          case 'onMomentumScrollBegin':
          case 'onMomentumScrollEnd':
            event.offsetX = nativeEventParams.contentOffset?.x
            event.offsetY = nativeEventParams.contentOffset?.y
            /**
             * If it is a scroll event and the size of the scroll content area is included in the event response,
             * the actual size of the scroll content area will be assigned
             */
            if (nativeEventParams?.contentSize) {
              event.scrollHeight = nativeEventParams.contentSize.height
              event.scrollWidth = nativeEventParams.contentSize.width
            }
            break
          case 'onTouchDown':
          case 'onTouchMove':
          case 'onTouchEnd':
          case 'onTouchCancel':
            event.touches = {
              0: {
                clientX: nativeEventParams.page_x,
                clientY: nativeEventParams.page_y,
              },
              length: 1,
            }
            break
          case 'onFocus':
            event.isFocused = nativeEventParams.focus
            break
          default:
        }
        return event
      },
    },
  })

  const TVDivImpl = defineComponent({
    emits: [],
    setup(props, context) {
      const viewRef = ref()

      function setFocus(isFocus: boolean, id: string) {
        Native.callUIFunction(viewRef.value, 'setFocus', [isFocus, id])
      }

      function requestFocus(id: string) {
        Native.callUIFunction(viewRef.value, 'requestFocus', [id])
      }

      function focus(isFocused: boolean) {
        Native.callUIFunction(viewRef.value, 'focus', [isFocused])
      }

      function blur(isFocused: boolean) {
        Native.callUIFunction(viewRef.value, 'blur', [isFocused])
      }

      function hasFocus(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
          Native.callUIFunction(viewRef.value, 'hasFocus', [], (res) => {
            resolve(res.value)
          })
        })
      }

      function isFocused(): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
          Native.callUIFunction(viewRef.value, 'isFocused', [], (res) => {
            resolve(res.value)
          })
        })
      }

      function setBackGroundColor(focusAbility: string, id: string) {
        Native.callUIFunction(viewRef.value, 'setBackGroundColor', [focusAbility, id])
      }

      function setVisibility(v: QTVisibility) {
        Native.callUIFunction(viewRef.value, 'setVisibility', [v])
      }

      function clearFocus() {
        Native.callUIFunction(viewRef.value, 'clearFocus', [])
      }

      function requestFocusDirectly(direction: QTFocusDirection) {
        Native.callUIFunction(viewRef.value, 'requestFocusDirectly', [direction])
      }

      context.expose({
        viewRef,
        requestFocusDirectly,
        clearFocus,
        setVisibility,
        setBackGroundColor,
        isFocused,
        hasFocus,
        blur,
        focus,
        requestFocus,
        setFocus,
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h('tv-div', { ref: viewRef }, children)
      }
    },
  })
  vueApp.component('tv-div', TVDivImpl)
}
