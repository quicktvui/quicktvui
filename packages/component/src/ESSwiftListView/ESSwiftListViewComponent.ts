import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerESSwiftListViewComponent(app: ESApp) {
  const SwiftListViewComponent = {
    component: {
      name: 'SwiftListComponent',
      processEventData(
        evtData,
        nativeEventParams: {
          page: number
          tag: number
          position: number
          data: any
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onLoadPageData':
            event.page = nativeEventParams.page
            event.tag = nativeEventParams.tag
            break
          case 'onItemClick':
            event.position = nativeEventParams.position
            event.data = nativeEventParams.data
            break
          default:
            break
        }
        return event
      },
    },
  }
  registerElement('SwiftListComponent', SwiftListViewComponent)

  const SwiftListViewImpl = defineComponent({
    name: 'swift-list',
    emits: ['load-data', 'item-click'],
    setup(props, context) {
      const viewRef = ref()

      function setPageData(page: number, data: Array<any>) {
        Native.callUIFunction(viewRef.value, 'setPageData', [page, data])
      }

      function updateData(position: number, data: any) {
        Native.callUIFunction(viewRef.value, 'updateData', [position, data])
      }

      function notifyNoMoreData() {
        Native.callUIFunction(viewRef.value, 'notifyNoMoreData', [])
      }

      function requestMore() {
        Native.callUIFunction(viewRef.value, 'notifyNoMoreData', [])
      }

      function scrollToPosition(pos: number) {
        Native.callUIFunction(viewRef.value, 'scrollToPosition', [pos])
      }

      function scrollToPositionWithOffset(pos: number, offset: number, anim: boolean) {
        Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [pos, offset])
      }

      function requestChildFocus(position: number) {
        Native.callUIFunction(viewRef.value, 'requestChildFocus', [position])
      }

      function setSelectChildPosition(position: number) {
        Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position])
      }

      function setFocusTargetChildPosition(position: number) {
        Native.callUIFunction(viewRef.value, 'setFocusTargetChildPosition', [position])
      }

      context.expose({
        setPageData,
        updateData,
        notifyNoMoreData,
        requestMore,
        scrollToPosition,
        scrollToPositionWithOffset,
        requestChildFocus,
        setSelectChildPosition,
        setFocusTargetChildPosition,
      })

      return () => {
        return h('SwiftListComponent', {
          ref: viewRef,
          onLoadPageData: (evt) => {
            context.emit('load-data', evt)
          },
          onItemClick: (evt) => {
            context.emit('item-click', evt)
          },
        })
      }
    },
  })
  app.component('swift-list', SwiftListViewImpl)
}

export default registerESSwiftListViewComponent
