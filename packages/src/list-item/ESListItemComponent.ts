import {defineComponent, h, ref,} from "vue";
import {ESApp, Native} from "@extscreen/es3-vue";
import useBaseView from '../base/useBaseView'

function registerESListItemComponent(app: ESApp) {

  const ListItemImpl = defineComponent({
    emits: [
      'item-focused',
      'item-attached',
      'item-detached',
      'item-bind',
      'item-unbind',
    ],
    setup(props, ctx) {
      const viewRef = ref()
      const updateItem = (posInList: number, data: Object) => {
        Native.callUIFunction(viewRef.value, 'updateItem', [posInList, data]);
      }
      const dispatchItemFunction = (position: number, name: string, funcName: string, params: any) => {
        Native.callUIFunction(viewRef.value, 'dispatchItemFunction', [position, name, funcName, params]);
      }
      const updateItemProps = (position: number, name: string, toUpdateMap: Object) => {
        Native.callUIFunction(viewRef.value, 'updateItemProps', [name, position, toUpdateMap, true]);
      }
      const batch = (pos: number) => {
        Native.callUIFunction(viewRef.value, 'batch', [pos]);
      }

      ctx.expose({
        viewRef,
        updateItem,
        dispatchItemFunction,
        updateItemProps,
        batch,
        ...useBaseView(viewRef)
      })
      return () => {
        const children = ctx.slots.default && ctx.slots.default()
        return h(
          'FastListView',
          {
            ref: viewRef,
            onBindItem: (evt) => {
              ctx.emit('item-bind', evt);
            },
            onItemFocused: (evt) => {
              ctx.emit('item-focused', evt);
            },
            onAttachedToWindow: (evt) => {
              ctx.emit('item-attached', evt);
            },
            onDetachedFromWindow: (evt) => {
              ctx.emit('item-detached', evt);
            },
            onItemRecycled: (evt) => {
              ctx.emit('item-unbind', evt);
            },
          },
          children
        )
      }
    },
  })
  app.component('qt-list-item', ListItemImpl);
}

export default registerESListItemComponent;
