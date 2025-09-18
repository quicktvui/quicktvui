import {
  HIPPY_DEBUG_ADDRESS,
  IS_PROD,
  registerElement,
  HIPPY_STATIC_PROTOCOL,
  Native,
} from '@extscreen/es3-vue'
import type { App } from '@vue/runtime-core'
import { h, ref } from '@vue/runtime-core'
import { defineComponent } from 'vue'

export function registerTVImageComponent(vueApp: App) {
  registerElement('h-tv-img', {
    component: {
      name: 'TvImage',
      processEventData(evtData: any, nativeEventParams: any) {
        const { handler: event, __evt: nativeEventName } = evtData

        switch (nativeEventName) {
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
          case 'onLoad': {
            const { width, height, url } = nativeEventParams
            event.width = width
            event.height = height
            event.url = url
            break
          }
        }
        return event
      },
      defaultNativeStyle: {
        backgroundColor: 0,
      },
      attributeMaps: {
        placeholder: {
          name: 'defaultSource',
          propsValue(value: string) {
            const url = convertImageLocalPath(value)
            if (
              url?.indexOf(HIPPY_DEBUG_ADDRESS) < 0 &&
              ['https://', 'http://'].some((schema) => url.indexOf(schema) === 0)
            ) {
              console.warn(
                `img placeholder ${url} recommend to use base64 image or local path image`
              )
            }
            return url
          },
        },
        /**
         * For Android, will use src property
         * For iOS, will convert to use source property
         * At line: hippy-vue/renderer/native/index.js line 196.
         */
        src(value: string) {
          return convertImageLocalPath(value)
        },
        visibility(value: string) {
          return value
        },
        sid(value: string) {
          return value
        },
      },
    },
  })

  const TVImageImpl = defineComponent({
    emits: [],
    setup(props, context) {
      const viewRef = ref()

      function setFocus(isFocus: boolean, id: string) {
        Native.callUIFunction(viewRef.value, 'setFocus', [isFocus, id])
      }

      function setSrc(src: string) {
        Native.callUIFunction(viewRef.value, 'setSrc', [convertImageLocalPath(src)])
      }

      context.expose({
        viewRef,
        setSrc,
        setFocus,
      })

      return () => {
        const children = context.slots.default && context.slots.default()
        return h('h-tv-img', { ref: viewRef }, children)
      }
    },
  })

  vueApp.component('tv-img', TVImageImpl)
}

function convertImageLocalPath(originalUrl: string): string {
  let url: string = originalUrl

  if (/^assets/.test(url)) {
    if (IS_PROD) {
      url = `${HIPPY_STATIC_PROTOCOL}./${url}`
    } else {
      url = `${HIPPY_DEBUG_ADDRESS}${url}`
    }
  }

  return url
}
