import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerESTVItemViewComponent(app: ESApp) {
  registerElement('FastItemView', {
    component: {
      name: 'FastItemView',
      processEventData(
        evtData: any,
        nativeEventParams: {
          position: number
          index: number
          item: any
          hasFocus: Boolean
          name: string
          parentPosition: number
          pageIndex: number
          itemData: any
          eventName: any
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onBindItem':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.pageIndex = nativeEventParams.pageIndex
              event.name = nativeEventParams.name
              event.item = nativeEventParams.item
            }
            break
          case 'onItemFocused':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.name = nativeEventParams.name
              event.item = nativeEventParams.item
              event.parentPosition = nativeEventParams.parentPosition
              event.hasFocus = nativeEventParams.hasFocus
            }
            break
          case 'onItemRecycled':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.name = nativeEventParams.name
              event.item = nativeEventParams.item
              event.pageIndex = nativeEventParams.pageIndex
            }
            break
          case 'onAttachedToWindow':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.name = nativeEventParams.name
              event.item = nativeEventParams.item
              event.pageIndex = nativeEventParams.pageIndex
            }
            break
          case 'onDetachedFromWindow':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.name = nativeEventParams.name
              event.item = nativeEventParams.item
              event.pageIndex = nativeEventParams.pageIndex
            }
            break
          case 'onItemClick':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.index = nativeEventParams.index
              event.item = nativeEventParams.item
              event.name = nativeEventParams.name
              event.parentPosition = nativeEventParams.parentPosition
            }
            break
          case 'onItemViewEvent':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.eventName = nativeEventParams.eventName
              event.item = nativeEventParams.itemData
            }
            break
          default:
            break
        }
        return event
      },
    },
  })

  const TVItemView = defineComponent({
    emits: [
      'item-event',
      'itemViewEvent',
      'item-bind',
      'bindItem',
      'item-unbind',
      'itemRecycled',
      'item-focused',
      'itemFocused',
      'item-attached',
      'attachedToWindow',
      'item-detached',
      'detachedFromWindow',
    ],
    setup(props, context) {
      const viewRef = ref()

      function updateItem(posInList: number, data: Object) {
        Native.callUIFunction(viewRef.value, 'updateItem', [posInList, data])
      }

      function dispatchItemFunction(position: number, name: string, funcName: string, params: any) {
        Native.callUIFunction(viewRef.value, 'dispatchItemFunction', [
          position,
          name,
          funcName,
          params,
        ])
      }

      function updateItemProps(position: number, name: string, toUpdateMap: Object) {
        Native.callUIFunction(viewRef.value, 'updateItemProps', [name, position, toUpdateMap, true])
      }

      function batch(pos: number) {
        Native.callUIFunction(viewRef.value, 'batch', [pos])
      }

      context.expose({
        viewRef,
        updateItem,
        dispatchItemFunction,
        updateItemProps,
        batch,
      })
      const children = context.slots.default && context.slots.default()
      return () => {
        return h(
          'FastItemView',
          {
            ref: viewRef,
            onItemViewEvent: (evt) => {
              context.emit('item-event', evt)
            },
            onBindItem: (evt) => {
              context.emit('item-bind', evt)
            },
            // onItemClick: (evt) => {
            //   context.emit('item-click', evt);
            // },
            onItemFocused: (evt) => {
              context.emit('item-focused', evt)
            },
            onAttachedToWindow: (evt) => {
              context.emit('item-attached', evt)
            },
            onDetachedFromWindow: (evt) => {
              context.emit('item-detached', evt)
            },
            onItemRecycled: (evt) => {
              context.emit('item-unbind', evt)
            },
          },
          children
        )
      }
    },
  })
  app.component('tv-item', TVItemView)
}

export default registerESTVItemViewComponent
