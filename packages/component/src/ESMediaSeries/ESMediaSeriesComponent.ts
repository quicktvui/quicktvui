import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'
import { ESMediaSeries } from './ESMediaSeries'

function registerESMediaSeriesComponent(app: ESApp) {
  const SelectSeries = {
    component: {
      name: 'SelectSeries',
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
  registerElement('SelectSeries', SelectSeries)

  const SelectSeriesViewImpl = defineComponent({
    name: 'select-series',
    emits: ['load-data', 'item-click', 'item-focused', 'group-item-focused'],
    setup(props, context) {
      const viewRef = ref()

      function setInitData(totalCount: number, pageSize: number) {
        Native.callUIFunction(viewRef.value, 'setInitData', [totalCount, pageSize])
      }

      function setVisible(display: boolean) {
        Native.callUIFunction(viewRef.value, 'setDisplay', [display])
      }

      function setPageData(page: number, data: Array<ESMediaSeries>) {
        Native.callUIFunction(viewRef.value, 'setPageData', [page, data])
      }

      function scrollTo(pos: number) {
        Native.callUIFunction(viewRef.value, 'scrollToPosition', [pos])
      }

      function scrollToWithOffset(pos: number, offset: number, anim: boolean) {
        Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [pos, offset, anim])
      }

      function requestFocus(position: number) {
        Native.callUIFunction(viewRef.value, 'requestChildFocus', [position])
      }

      function setSelected(position: number) {
        Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position])
      }

      function setup() {
        Native.callUIFunction(viewRef.value, 'setup', [])
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
        const children = context.slots.default && context.slots.default()
        return h(
          'SelectSeries',
          {
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
          },
          children
        )
      }
    },
  })
  app.component('select-series', SelectSeriesViewImpl)
}

export default registerESMediaSeriesComponent
