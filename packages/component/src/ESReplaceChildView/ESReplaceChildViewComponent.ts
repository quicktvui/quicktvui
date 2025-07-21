import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerReplaceChildViewComponent(app: ESApp) {
  registerElement('ReplaceChildView', {
    component: {
      name: 'ReplaceChildView',
      processEventData(
        evtData: any,
        nativeEventParams: {
          // position: number;
          // eventName: string;
          // item: any;
          // itemData: any;
          // name: string;
          // param: any;
          // bindId: any;
          // pageIndex: number;
          // parentPosition: number;
          // index: number;
          // hasFocus: boolean;
          childSID: any
          sid: any
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          // case 'onItemViewEvent':
          //   event.position = nativeEventParams.position;
          //   event.eventName = nativeEventParams.eventName;
          //   event.item = nativeEventParams.itemData;
          //   break;
          // case 'onCall':
          //   event.name = nativeEventParams.name;
          //   event.param = nativeEventParams.param;
          //   event.bindId = nativeEventParams.bindId;
          //   break;
          // case 'onBindItem':
          //   event.position = nativeEventParams.position;
          //   event.name = nativeEventParams.name;
          //   event.item = nativeEventParams.item;
          //   event.pageIndex = nativeEventParams.pageIndex;
          //   break;
          // case 'onBind':
          //   event.position = nativeEventParams.position;
          //   event.name = nativeEventParams.name;
          //   event.item = nativeEventParams.item;
          //   event.pageIndex = nativeEventParams.pageIndex;
          //   break;
          // case 'onItemFocused':
          //   event.position = nativeEventParams.position;
          //   event.name = nativeEventParams.name;
          //   event.item = nativeEventParams.item;
          //   event.parentPosition = nativeEventParams.parentPosition;
          //   event.hasFocus = nativeEventParams.hasFocus;
          //   event.pageIndex = nativeEventParams.pageIndex;
          //   break;
          // case 'onItemRecycled':
          //   event.position = nativeEventParams.position;
          //   event.name = nativeEventParams.name;
          //   event.item = nativeEventParams.item;
          //   event.pageIndex = nativeEventParams.pageIndex;
          //   break;
          // case 'onAttachedToWindow':
          //   event.position = nativeEventParams.position;
          //   event.name = nativeEventParams.name;
          //   event.item = nativeEventParams.item;
          //   event.pageIndex = nativeEventParams.pageIndex;
          //   break;
          // case 'onDetachedFromWindow':
          //   event.position = nativeEventParams.position;
          //   event.name = nativeEventParams.name;
          //   event.item = nativeEventParams.item;
          //   event.pageIndex = nativeEventParams.pageIndex;
          //   break;
          // case 'onItemClick':
          //   event.position = nativeEventParams.position;
          //   event.index = nativeEventParams.index;
          //   event.item = nativeEventParams.item;
          //   event.name = nativeEventParams.name;
          //   event.pageIndex = nativeEventParams.pageIndex;
          //   event.parentPosition = nativeEventParams.parentPosition;
          //   break;
          case 'onChildChanged':
            event.childSID = nativeEventParams.childSID
            event.sid = nativeEventParams.sid
            break
          default:
            break
        }
        return event
      },
    },
  })

  app.component('replace-child', {
    emits: [
      // 'item-click','item-event','call','item-bind','bind', 'item-unbind',
      // 'item-focused',
      // 'item-attached',
      // 'item-detached',
      'childChanged',
    ],
    setup(props, context) {
      const viewRef = ref()
      context.expose({})
      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'ReplaceChildView',
          {
            ref: viewRef,
            // onItemViewEvent: (evt) => {
            //   context.emit('item-event', evt);
            // },
            onChildChanged: (evt) => {
              context.emit('childChanged', evt)
            },
            // onCall: (evt) => {
            //   context.emit('call', evt);
            // },
            // onBindItem: (evt) => {
            //   context.emit('item-bind', evt);
            // },
            // onBind: (evt) => {
            //   context.emit('bind', evt);
            // },
            // onItemRecycled: (evt) => {
            //   context.emit('item-unbind', evt);
            // },
            // onAttachedToWindow: (evt) => {
            //   context.emit('item-attached', evt);
            // },
            // onDetachedFromWindow: (evt) => {
            //   context.emit('item-detached', evt);
            // },
            // onItemFocused: (evt) => {
            //   context.emit('item-focused', evt);
            // },
            // onItemClick: (evt) => {
            //   context.emit('item-click', evt);
            // },
          },
          children
        )
      }
    },
  })
}

export default registerReplaceChildViewComponent
