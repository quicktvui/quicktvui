import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'
import { ESVersion, useES } from '@extscreen/es3-core'
import { ESCardEvent } from './ESCardEvent'

function registerESCardContainerViewComponent(app: ESApp) {
  const cardViewComponent = {
    component: {
      name: 'ESCardViewComponent',
      processEventData(
        evtData,
        nativeEventParams: {
          cardId: string
          result: number
          position: number
          eventName: string
          itemData: object
          isFocused: boolean
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onCardBind':
            event.eventName = nativeEventParams.eventName
            event.itemData = nativeEventParams.itemData
            event.position = nativeEventParams.position
            break
          case 'onFocus':
            event.isFocused = nativeEventParams.isFocused
            break
          default:
            break
        }
        return event
      },
    },
  }
  registerElement('ESCardViewComponent', cardViewComponent)

  //-------------------------------------------------------------
  const CardViewImpl = defineComponent({
    emits: ['onCardBind', 'focus'],
    setup(props, context) {
      const viewRef = ref()
      const es = useES()

      function load(cardId: string) {
        Native.callUIFunction(viewRef.value, 'load', [cardId], (res) => {})
      }

      function loadWithoutCache(value: string) {
        Native.callUIFunction(viewRef.value, 'loadWithoutCache', [value])
      }

      function reload() {
        Native.callUIFunction(viewRef.value, 'reload', [])
      }

      function autoRecycle(data: boolean) {
        Native.callUIFunction(viewRef.value, 'autoRecycle', [data])
      }

      function getLoadingStatus() {
        Native.callUIFunction(viewRef.value, 'getLoadingStatus', [])
      }

      function sendEvent2Vue(event: ESCardEvent) {
        Native.callUIFunction(viewRef.value, 'sendEvent2Vue', [event])
      }

      function reset() {
        Native.callUIFunction(viewRef.value, 'reset', [])
      }

      function recycle() {
        Native.callUIFunction(viewRef.value, 'recycle', [])
      }

      function removeCache() {
        Native.callUIFunction(viewRef.value, 'removeCache', [])
      }

      function resizeCacheSize(size: number) {
        Native.callUIFunction(viewRef.value, 'resizeCacheSize', [size])
      }

      function clearAllCache() {
        Native.callUIFunction(viewRef.value, 'clearAllCache', [])
      }

      context.expose({
        load,
        loadWithoutCache,
        reload,
        autoRecycle,
        getLoadingStatus,
        sendEvent2Vue,
        reset,
        recycle,
        removeCache,
        resizeCacheSize,
        clearAllCache,
      })
      return () => {
        let componentName = 'ESCardViewComponent'
        if (es.getESSDKVersionCode() < ESVersion.ES_SDK_VERSION_26) {
          componentName = 'div'
        }
        return h(componentName, {
          ref: viewRef,
          onCardBind: (evt) => {
            const eventName: string = evt.eventName
            const itemData: any = evt.itemData
            const position: number = evt.position
            context.emit('onCardBind', eventName, position, itemData)
          },
          onFocus: (evt) => {
            context.emit('focus', evt)
          },
        })
      }
    },
  })
  app.component('es-card-container', CardViewImpl)
}

export default registerESCardContainerViewComponent
