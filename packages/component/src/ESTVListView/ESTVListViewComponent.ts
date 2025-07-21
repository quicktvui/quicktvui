import { defineComponent, h, ref } from 'vue'
import { ESApp, Native, registerElement } from '@extscreen/es3-vue'
import { ESListViewItem } from './ESListViewItem'
import { ESListViewItemFunctionParams } from './ESListViewItemFunctionParams'
import { ESDirections } from '../ESView/ESDirections'

function registerESTVListViewComponent(app: ESApp) {
  registerElement('FastListView', {
    component: {
      name: 'FastListView',
      processEventData(
        evtData: any,
        nativeEventParams: {
          isFocused: boolean
          position: number
          index: number
          y: number
          item: any
          hasFocus: boolean
          name: string
          parentPosition: number
          pageIndex: number
          child: any
          isLastLine: any
          itemCount: number
          direction: string
          contentOffset: any
          state: any
        }
      ) {
        const { handler: event, __evt: nativeEventName } = evtData
        switch (nativeEventName) {
          case 'onItemClick':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.index = nativeEventParams.index
              event.item = nativeEventParams.item
              event.name = nativeEventParams.name
              event.parentPosition = nativeEventParams.parentPosition
            }
            break
          case 'onItemFocused':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.index = nativeEventParams.index
              event.hasFocus = nativeEventParams.hasFocus
              event.isFocused = nativeEventParams.hasFocus
              event.item = nativeEventParams.item
              event.name = nativeEventParams.name
              event.parentPosition = nativeEventParams.parentPosition
            }
            break
          case 'onBindItem':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.pageIndex = nativeEventParams.pageIndex
              event.name = nativeEventParams.name
              event.item = nativeEventParams.item
            }
            break
          case 'onAttachedToWindow':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.pageIndex = nativeEventParams.pageIndex
              event.name = nativeEventParams.name
              event.item = nativeEventParams.item
            }
            break
          case 'onDetachedFromWindow':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.pageIndex = nativeEventParams.pageIndex
              event.name = nativeEventParams.name
              event.item = nativeEventParams.item
            }
            break
          case 'onUnbindItem':
            if (nativeEventParams) {
              event.position = nativeEventParams.position
              event.name = nativeEventParams.name
            }
            break
          case 'onScroll':
            if (nativeEventParams) {
              event.offsetX = nativeEventParams.contentOffset.x
              event.offsetY = nativeEventParams.contentOffset.y
            }
            break
          case 'onScrollOffset':
            if (nativeEventParams) {
              event.offsetY = nativeEventParams.y
            }
            break
          case 'onScrollStateChanged':
            if (nativeEventParams) {
              event.offsetX = nativeEventParams.contentOffset.x
              event.offsetY = nativeEventParams.contentOffset.y
              event.oldState = nativeEventParams.state.oldState
              event.newState = nativeEventParams.state.newState
            }
            break
          case 'onChildFocus':
            if (nativeEventParams) {
              event.child = {
                index: nativeEventParams.child.index,
                id: nativeEventParams.child.id,
                name: nativeEventParams.child.name,
                position: nativeEventParams.child.position,
              }
              event.focused = {
                id: nativeEventParams.child.id,
                name: nativeEventParams.child.name,
              }
            }
            break
          case 'onChildSelect':
            if (nativeEventParams) {
              event.child = {
                index: nativeEventParams.child.index,
                id: nativeEventParams.child.id,
                name: nativeEventParams.child.name,
                position: nativeEventParams.child.position,
              }
            }
            break
          case 'onFocusSearchFailed':
            if (nativeEventParams) {
              event.child = {
                index: nativeEventParams.child.index,
                id: nativeEventParams.child.id,
                name: nativeEventParams.child.name,
                position: nativeEventParams.child.position,
              }
              event.focused = {
                id: nativeEventParams.child.id,
                name: nativeEventParams.child.name,
              }
              event.direction = nativeEventParams.direction
            }
            break
          case 'onLoadMore':
            if (nativeEventParams) {
              event.name = nativeEventParams.name
              event.isLastLine = nativeEventParams.isLastLine
              event.itemCount = nativeEventParams.itemCount
              event.position = nativeEventParams.position
            }
            break
          default:
            break
        }
        return event
      },
    },
  })

  const TVListViewImpl = defineComponent({
    emits: [
      'item-click',
      'scroll',
      'item-focused',
      'item-attached',
      'item-detached',
      'item-bind',
      'item-unbind',
      'load-more',
      'scroll-state-changed',
      'focus-search-failed',
      'scrollYGreaterReference',
      'scrollYLesserReference',
    ],
    setup(props, context) {
      const viewRef = ref()

      function scrollToIndex(
        x: number,
        y: number,
        animated?: boolean,
        duration?: number,
        offset?: number
      ) {
        Native.callUIFunction(viewRef.value, 'scrollToIndex', [x, y, animated, duration, offset])
      }

      function startScroll(data) {
        Native.callUIFunction(viewRef.value, 'startScroll', [data])
      }

      function setSelectChildPosition(position: number, requestFocus: boolean) {
        Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position, requestFocus])
      }

      function scrollToPositionWithOffset(position: number, offset: number, animated: boolean) {
        Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [
          position,
          offset,
          animated,
        ])
      }

      function scrollToPositionWithOffsetInfiniteMode(
        position: number,
        offset: number,
        animated: boolean
      ): void {
        Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffsetInfiniteMode', [
          position,
          offset,
          animated,
        ])
      }

      function scrollToPosition(index: number, offset?: number) {
        Native.callUIFunction(viewRef.value, 'scrollToPosition', [index, offset])
      }

      function refreshListData(): void {
        Native.callUIFunction(viewRef.value, 'refreshListData', [])
      }

      function updateItemTraverse(
        position: number,
        data?: ESListViewItem,
        traverse?: boolean
      ): void {
        Native.callUIFunction(viewRef.value, 'updateItem', [position, data, traverse])
      }

      function requestItemLayout(position: number): void {
        Native.callUIFunction(viewRef.value, 'requestItemLayout', [position])
      }

      function updateItemRange(position: number, count: number, data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'updateItemRange', [position, count, data])
      }

      function insertItemRange(position: number, data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'insertItemRange', [position, data])
      }

      function updateItemMatched(params: Record<string, any>, data: ESListViewItem): void {
        Native.callUIFunction(viewRef.value, 'updateItemMatched', [params, data])
      }

      function updateItemMatchedByKey(
        idKey: string,
        params: Record<string, any>,
        data: ESListViewItem
      ): void {
        Native.callUIFunction(viewRef.value, 'updateItemMatched', [idKey, params, data])
      }

      function deleteItemRange(position: number, count: number) {
        Native.callUIFunction(viewRef.value, 'deleteItemRange', [position, count])
      }

      function setListData(data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'setListData', data)
      }

      function setListDataWithParams(data: Array<ESListViewItem>, autoChangeVisible: boolean) {
        Native.callUIFunction(viewRef.value, 'setListDataWithParams', [data, autoChangeVisible])
      }

      function addListData(data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'addListData', data)
      }

      function addListDataWithParams(data: Array<ESListViewItem>, deleteCount: number) {
        Native.callUIFunction(viewRef.value, 'addListDataWithParams', [data, deleteCount])
      }

      function destroy() {
        Native.callUIFunction(viewRef.value, 'destroy', [])
      }

      function recycle(): void {
        Native.callUIFunction(viewRef.value, 'recycle', [])
      }

      function scrollToTop() {
        Native.callUIFunction(viewRef.value, 'scrollToTop', [])
      }

      function scrollToFocus(
        position: number,
        scrollOffset: number,
        delay: number,
        target: string
      ): void {
        Native.callUIFunction(viewRef.value, 'scrollToFocus', [
          position,
          scrollOffset,
          delay,
          target,
        ])
      }

      function prepareForRecycle() {
        Native.callUIFunction(viewRef.value, 'prepareForRecycle', [])
      }

      function setDisplay(value: boolean) {
        Native.callUIFunction(viewRef.value, 'setDisplay', [value])
      }

      function changeDisplayState(display: string, autoDataState: any) {
        Native.callUIFunction(viewRef.value, 'changeDisplayState', [display, autoDataState])
      }

      function notifySaveInstance() {
        Native.callUIFunction(viewRef.value, 'notifySaveInstance', [])
      }

      function updateItemProps(position: number, name: string, toUpdateMap: Object) {
        Native.callUIFunction(viewRef.value, 'updateItemProps', [name, position, toUpdateMap, true])
      }

      function dispatchItemFunction(
        position: number,
        name: string,
        funcName: string,
        params: ESListViewItemFunctionParams
      ) {
        Native.callUIFunction(viewRef.value, 'dispatchItemFunction', [
          position,
          name,
          funcName,
          params,
        ])
      }

      function clearPostTask() {
        Native.callUIFunction(viewRef.value, 'clearAllPostTask', [])
      }

      function clearPostTaskByCate(data: Array<number>): void {
        Native.callUIFunction(viewRef.value, 'clearPostTaskByCate', [data])
      }

      function clearData(): void {
        Native.callUIFunction(viewRef.value, 'clearData', [])
      }

      function pausePostTask() {
        Native.callUIFunction(viewRef.value, 'pausePostTask', [])
      }

      function resumePostTask() {
        Native.callUIFunction(viewRef.value, 'resumePostTask', [])
      }

      function requestLayoutManual(): void {
        Native.callUIFunction(viewRef.value, 'requestLayoutManual', [])
      }

      function setSpanCount(count: number) {
        Native.callUIFunction(viewRef.value, 'setSpanCount', [count])
      }

      function searchReplaceItem(id: string, item: ESListViewItem): void {
        Native.callUIFunction(viewRef.value, 'searchReplaceItem', [])
      }

      function setCustomStateEnableOnFocus(id: string, params: Array<Array<string>>): void {
        Native.callUIFunction(viewRef.value, 'setCustomStateEnableOnFocus', [id, params])
      }

      function setItemCustomState(position: number, stateName: string, stateValue: boolean) {
        Native.callUIFunction(viewRef.value, 'setItemCustomState', [
          position,
          stateName,
          stateValue,
        ])
      }

      function dispatchItemFunctionWithPromise(
        position: number,
        targetName: string,
        functionTargetName: string,
        params: Array<Record<string, any>>
      ): Promise<Record<string, any>> {
        return Native.callNativeWithPromise(viewRef.value, 'dispatchItemFunctionWithPromise', [
          position,
          targetName,
          functionTargetName,
          params,
        ])
      }

      function getScrollOffset(callback: () => void) {
        Native.callUIFunction(viewRef.value, 'getScrollOffset', [], callback)
      }

      //----------------------------------------------------------------------------------------
      //########################################################################################
      //########################################################################################
      //########################################################################################
      //----------------------------------------------------------------------------------------
      function setInitPosition(position: number) {
        Native.callUIFunction(viewRef.value, 'setInitPosition', [position])
      }

      function deleteItem(position: number, count: number) {
        Native.callUIFunction(viewRef.value, 'deleteItemRange', [position, count])
      }

      function updateItem(pos: number, data: ESListViewItem) {
        Native.callUIFunction(viewRef.value, 'updateItem', [pos, data])
      }

      function updateItemList(position: number, count: number, data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'updateItemRange', [position, count, data])
      }

      function addItem(position: number, data: Array<ESListViewItem>) {
        Native.callUIFunction(viewRef.value, 'insertItemRange', [position, data])
      }

      function dispatchTVItemFunction(
        id: number | string,
        name: string,
        funcName: string,
        params: ESListViewItemFunctionParams
      ) {
        Native.callUIFunction(viewRef.value, 'dispatchTVItemFunction', [id, name, funcName, params])
      }

      function scrollToPositionOffset(
        x: number,
        y: number,
        anim: boolean,
        offset: number,
        duration: number
      ) {
        Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [y, offset, anim])
      }

      function notifyRestoreInstance() {
        Native.callUIFunction(viewRef.value, 'notifyRestoreInstance', [])
      }

      function setSelectPosition(position: number, requestFocus: boolean) {
        Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position, requestFocus])
      }

      function requestFocus(position: number) {
        Native.callUIFunction(viewRef.value, 'requestChildFocus', [position])
      }

      function clearFocus() {
        Native.callUIFunction(viewRef.value, 'clearFocus', [])
      }

      function blockRootFocus() {
        Native.callUIFunction(viewRef.value, 'blockRootFocus', [])
      }

      function unBlockRootFocus() {
        Native.callUIFunction(viewRef.value, 'unBlockRootFocus', [])
      }

      function hasFocus(callback: (res) => void) {
        Native.callUIFunction(viewRef.value, 'hasFocus', (res) => {
          callback(res)
        })
      }

      function setBlockFocusDirectionsOnFail(data: Array<ESDirections>) {
        Native.callUIFunction(viewRef.value, 'setBlockFocusDirectionsOnFail', [data])
      }

      function setBackgroundColor(color: string) {
        Native.callUIFunction(viewRef.value, 'setBackgroundColor', [color])
      }

      function setAutoFocus(tag: string, delay: number) {
        Native.callUIFunction(viewRef.value, 'setAutoFocus', [tag, delay])
      }

      context.expose({
        viewRef,
        scrollToIndex,
        startScroll,
        setSelectChildPosition,
        scrollToPositionWithOffset,
        scrollToPositionWithOffsetInfiniteMode,
        scrollToPosition,
        refreshListData,
        updateItemTraverse,
        requestItemLayout,
        updateItemRange,
        insertItemRange,
        updateItemMatched,
        updateItemMatchedByKey,
        deleteItemRange,
        setListData,
        setListDataWithParams,
        addListData,
        addListDataWithParams,
        destroy,
        recycle,
        scrollToTop,
        scrollToFocus,
        prepareForRecycle,
        setDisplay,
        changeDisplayState,
        notifySaveInstance,
        updateItemProps,
        dispatchItemFunction,
        clearPostTask,
        clearPostTaskByCate,
        clearData,
        pausePostTask,
        resumePostTask,
        requestLayoutManual,
        setSpanCount,
        searchReplaceItem,
        setCustomStateEnableOnFocus,
        setItemCustomState,
        dispatchItemFunctionWithPromise,
        getScrollOffset,
        setInitPosition,
        deleteItem,
        updateItem,
        updateItemList,
        addItem,
        dispatchTVItemFunction,
        scrollToPositionOffset,
        notifyRestoreInstance,
        setSelectPosition,
        requestFocus,
        clearFocus,
        blockRootFocus,
        unBlockRootFocus,
        hasFocus,
        setBlockFocusDirectionsOnFail,
        setBackgroundColor,
        setAutoFocus,
      })
      return () => {
        const children = context.slots.default && context.slots.default()
        return h(
          'FastListView',
          {
            ref: viewRef,
            onItemClick: (evt) => {
              context.emit('item-click', evt)
            },
            onScroll: (evt) => {
              context.emit('scroll', evt)
            },
            onItemFocused: (evt) => {
              context.emit('item-focused', evt)
            },
            onAttachedToWindow: (evt) => {
              context.emit('item-attached', evt)
            },
            onDetachedFromWindow: (evt) => {
              context.emit('item-detached', evt)
            },
            onBindItem: (evt) => {
              context.emit('item-bind', evt)
            },
            onUnbindItem: (evt) => {
              context.emit('item-unbind', evt)
            },
            onLoadMore: (evt) => {
              context.emit('load-more', evt)
            },
            onScrollStateChanged: (evt) => {
              context.emit('scroll-state-changed', evt)
            },
            onFocusSearchFailed: (evt) => {
              context.emit('focus-search-failed', evt)
            },
            onScrollYGreaterReference: (evt) => {
              context.emit('scrollYGreaterReference', evt)
            },
            onScrollYLesserReference: (evt) => {
              context.emit('scrollYLesserReference', evt)
            },
          },
          children
        )
      }
    },
  })
  app.component('tv-list', TVListViewImpl)
}

export default registerESTVListViewComponent
