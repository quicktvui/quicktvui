import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'

function registerESLargeListViewComponent(app: ESApp) {
  const LargeListComponent = {
    component: {
      name: 'LargeListComponent',
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
          case 'onItemFocused':
            event.position = nativeEventParams.position
            break
          case 'onGroupItemFocused':
            event.position = nativeEventParams.position
            break
          default:
            break
        }
        return event
      },
    },
  }
  registerElement('LargeListComponent', LargeListComponent)

  const LargeListViewImpl = defineComponent({
    name: 'large-list',
    emits: ['load-data', 'item-click', 'item-focused', 'group-item-focused'],
    setup(props, context) {
      const viewRef = ref()

      function setup() {
        Native.callUIFunction(viewRef.value, 'setup', [])
      }

      function setInitData(totalCount: number, pageSize: number): void {
        //do nothing
      }

      function setVisible(visible: boolean): void {
        //do nothing
      }

      function setPageData(page: number, data: Array<any>) {
        Native.callUIFunction(viewRef.value, 'setPageData', [page, data])
      }

      function scrollTo(position: number) {
        Native.callUIFunction(viewRef.value, 'scrollToPosition', [position])
      }

      function scrollToWithOffset(position: number, offset: number, anim: boolean) {
        Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [position, offset])
      }

      function requestFocus(position: number) {
        Native.callUIFunction(viewRef.value, 'requestChildFocus', [position])
      }

      function setSelected(position: number) {
        Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position])
      }

      function setGroupSelected(position: number) {
        Native.callUIFunction(viewRef.value, 'setGroupChildSelectByItemPosition', [position])
      }

      function release() {
        Native.callUIFunction(viewRef.value, 'destroy', [])
      }

      context.expose({
        setup,
        setInitData,
        setVisible,
        setPageData,
        scrollTo,
        scrollToWithOffset,
        requestFocus,
        setSelected,
        setGroupSelected,
        release,
      })

      return () => {
        return h('LargeListComponent', {
          ref: viewRef,
          onLoadPageData: (evt) => {
            context.emit('load-data', evt)
          },
          onItemClick: (evt) => {
            context.emit('item-click', evt)
          },
          onItemFocused: (evt) => {
            context.emit('item-focused', evt)
          },
          onGroupItemFocused: (evt) => {
            context.emit('group-item-focused', evt)
          },
        })
      }
    },
  })
  app.component('large-list', LargeListViewImpl)
}

export default registerESLargeListViewComponent
