import {Ref} from "@vue/reactivity";
import {QTIListView} from "../list-view/core/QTIListView";
import {QTListInitPosition} from "./QTListInitPosition";
import {QTListViewItem} from "../list-view/core/QTListViewItem";
import {QTNativeArray, QTNativeMap, QTNativeParams} from "../core/QTNativeParams";
import {QTPosition} from "../core/QTPosition";
import {Native} from "@extscreen/es3-vue";

export default function (viewRef: Ref<QTIListView | undefined>) {
  function scrollToIndex(x: number, y: number, animated?: boolean, duration?: number, offset?: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'scrollToIndex', [x, y, animated, duration, offset])
    }
  }

  function startScroll(position: QTListInitPosition): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'startScroll', [position])
    }
  }

  function setSelectChildPosition(position: number, changeTargetFocusChild?: boolean): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setSelectChildPosition', [position, changeTargetFocusChild])
    }
  }

  function scrollToPositionWithOffset(position: number, offset: number, animated: boolean): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffset', [position, offset, animated])
    }
  }

  function scrollToPositionWithOffsetInfiniteMode(position: number, offset: number, animated: boolean): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'scrollToPositionWithOffsetInfiniteMode', [position, offset, animated])
    }
  }

  function scrollToPosition(position: number, offset?: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'scrollToPosition', [position, offset])
    }
  }

  function refreshListData(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'refreshListData', [])
    }
  }

  function updateItemTraverse(position: number, data?: QTListViewItem, traverse?: boolean): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'updateItemTraverse', [position, data, traverse])
    }
  }

  function requestItemLayout(position: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'requestItemLayout', [position])
    }
  }

  function updateItemRange(position: number, count: number, itemList: Array<QTListViewItem>): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'updateItemRange', [position, count, itemList])
    }
  }

  function insertItemRange(position: number, itemList: Array<QTListViewItem>): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'insertItemRange', [position, itemList])
    }
  }

  function updateItemMatched(params: QTNativeParams, data: QTListViewItem): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'updateItemMatched', [params, data])
    }
  }

  function updateItemMatchedByKey(idKey: string, params: QTNativeParams, data: QTListViewItem): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'updateItemMatched', [idKey, params, data])
    }
  }

  function deleteItemRange(position: number, count: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'deleteItemRange', [position, count])
    }
  }

  function setListData(itemList: Array<QTListViewItem>): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setListData', [...itemList])
    }
  }

  function setListDataWithParams(itemList: Array<QTListViewItem>, autoChangeVisible: boolean, useDiff: boolean): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setListDataWithParams', [itemList, autoChangeVisible, useDiff])
    }
  }

  function addListData(itemList: Array<QTListViewItem>): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'addListData', [itemList])
    }
  }

  function addListDataWithParams(itemList: Array<QTListViewItem>, deleteCount: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'addListDataWithParams', [itemList, deleteCount])
    }
  }

  function destroy(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'destroy', [])
    }
  }

  function recycle(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'recycle', [])
    }
  }

  function scrollToTop(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'scrollToTop', [])
    }
  }

  function scrollToFocus(position: number, scrollOffset: number, delay: number, target: string): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'scrollToFocus', [position, scrollOffset, delay, target])
    }
  }

  function prepareForRecycle(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'prepareForRecycle', [])
    }
  }

  function setDisplay(display: boolean): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setDisplay', [display])
    }
  }

  function changeDisplayState(display: boolean, autoDataState: boolean): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'changeDisplayState', [display, autoDataState])
    }
  }

  function notifySaveInstance(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'notifySaveInstance', [])
    }
  }

  function notifyRestoreInstance(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'notifyRestoreInstance', [])
    }
  }

  function updateItemProps(name: string, position: number, dataToUpdate: QTNativeMap, updateView: boolean): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'updateItemProps', [name, position, dataToUpdate, updateView])
    }
  }

  function dispatchItemFunction(params: QTNativeArray): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'dispatchItemFunction', [params])
    }
  }

  function clearPostTask(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'clearPostTask', [])
    }
  }

  function clearPostTaskByCate(data: Array<number>): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'clearPostTaskByCate', [data])
    }
  }

  function clearData(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'clearData', [])
    }
  }

  function pausePostTask(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'pausePostTask', [])
    }
  }

  function resumePostTask(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'resumePostTask', [])
    }
  }

  function requestLayoutManual(): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'requestLayoutManual', [])
    }
  }

  function setSpanCount(spanCount: number): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setSpanCount', [spanCount])
    }
  }

  function searchReplaceItem(id: string, item: QTListViewItem): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'searchReplaceItem', [id, item])
    }
  }

  function setCustomStateEnableOnFocus(id: string, params: Array<Array<string>>): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setCustomStateEnableOnFocus', [id, params])
    }
  }

  function setItemCustomState(position: number, state: string, on: boolean): void {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'setItemCustomState', [position, state, on])
    }
  }

  function dispatchItemFunctionWithPromise(position: number,
                                           targetName: string,
                                           functionTargetName: string,
                                           params: Array<QTNativeParams>): Promise<QTNativeParams> {
    if (viewRef.value) {
      return new Promise((resolve, reject) => {
        Native.callUIFunction(viewRef.value!, 'dispatchItemFunctionWithPromise', [], (res: QTNativeParams) => {
          resolve(res)
        });
      });
    } else {
      return Promise.reject()
    }
  }

  function getScrollOffset(): Promise<QTPosition> {
    if (viewRef.value) {
      return new Promise((resolve, reject) => {
        Native.callUIFunction(viewRef.value!, 'getScrollOffset', [], (res: QTPosition) => {
          resolve(res)
        });
      });
    } else {
      return Promise.reject()
    }
  }

  return {
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
    notifyRestoreInstance,
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
    getScrollOffset
  }
}
