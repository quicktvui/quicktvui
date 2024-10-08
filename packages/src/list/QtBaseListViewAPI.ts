import {QTListInitPosition} from "../list/QTListInitPosition";
import {QTListViewItem} from "../list-view/core/QTListViewItem";
import {QTNativeArray, QTNativeMap, QTNativeParams} from "../core/QTNativeParams";
import {QTPosition} from "../core/QTPosition";
import {isRef, Ref} from "@vue/reactivity";
import {QTIListView} from "../list-view/core/QTIListView";
import {isString} from "../utils/type";
import {Native} from "@extscreen/es3-vue";
import {QT_API_MODULE, QT_CALL_UI_FUNCTION, QT_CALL_UI_FUNCTION_WITH_PROMISE} from "../qt/QtAPIModule";

export interface QtBaseListViewAPI {
  scrollToIndex(instance: string | Ref<QTIListView | undefined>, x: number, y: number, animated?: boolean, duration?: number, offset?: number): void

  startScroll(instance: string | Ref<QTIListView | undefined>, position: QTListInitPosition): void

  setSelectChildPosition(instance: string | Ref<QTIListView | undefined>, position: number, changeTargetFocusChild?: boolean): void

  scrollToPositionWithOffset(instance: string | Ref<QTIListView | undefined>, position: number, offset: number, animated: boolean): void

  scrollToPositionWithOffsetInfiniteMode(instance: string | Ref<QTIListView | undefined>, position: number, offset: number, animated: boolean): void

  scrollToPosition(instance: string | Ref<QTIListView | undefined>, position: number, offset?: number): void

  refreshListData(instance: string | Ref<QTIListView | undefined>): void

  updateItemTraverse(instance: string | Ref<QTIListView | undefined>, position: number, data?: QTListViewItem, traverse?: boolean): void

  requestItemLayout(instance: string | Ref<QTIListView | undefined>, position: number): void

  updateItemRange(instance: string | Ref<QTIListView | undefined>, position: number, count: number, itemList: Array<QTListViewItem>): void

  insertItemRange(instance: string | Ref<QTIListView | undefined>, position: number, itemList: Array<QTListViewItem>): void

  updateItemMatched(instance: string | Ref<QTIListView | undefined>, params: QTNativeParams, data: QTListViewItem): void

  updateItemMatchedByKey(instance: string | Ref<QTIListView | undefined>, idKey: string, params: QTNativeParams, data: QTListViewItem): void

  deleteItemRange(instance: string | Ref<QTIListView | undefined>, position: number, count: number): void

  setListData(instance: string | Ref<QTIListView | undefined>, itemList: Array<QTListViewItem>): void

  setListDataWithParams(instance: string | Ref<QTIListView | undefined>, itemList: Array<QTListViewItem>, autoChangeVisible: boolean, useDiff: boolean): void

  addListData(instance: string | Ref<QTIListView | undefined>, itemList: Array<QTListViewItem>): void

  addListDataWithParams(instance: string | Ref<QTIListView | undefined>, itemList: Array<QTListViewItem>, deleteCount: number): void

  destroy(instance: string | Ref<QTIListView | undefined>): void

  recycle(instance: string | Ref<QTIListView | undefined>): void

  scrollToTop(instance: string | Ref<QTIListView | undefined>): void

  scrollToFocus(instance: string | Ref<QTIListView | undefined>, position: number, scrollOffset: number, delay: number, target: string): void

  prepareForRecycle(instance: string | Ref<QTIListView | undefined>,): void

  setDisplay(instance: string | Ref<QTIListView | undefined>, display: boolean): void

  changeDisplayState(instance: string | Ref<QTIListView | undefined>, display: boolean, autoDataState: boolean): void

  notifySaveInstance(instance: string | Ref<QTIListView | undefined>): void

  notifyRestoreInstance(instance: string | Ref<QTIListView | undefined>,): void

  updateItemProps(instance: string | Ref<QTIListView | undefined>, name: string, position: number, dataToUpdate: QTNativeMap, updateView: boolean): void

  dispatchItemFunction(instance: string | Ref<QTIListView | undefined>, params: QTNativeArray): void

  clearPostTask(instance: string | Ref<QTIListView | undefined>): void

  clearPostTaskByCate(instance: string | Ref<QTIListView | undefined>, data: Array<number>): void

  clearData(instance: string | Ref<QTIListView | undefined>): void

  pausePostTask(instance: string | Ref<QTIListView | undefined>): void

  resumePostTask(instance: string | Ref<QTIListView | undefined>): void

  requestLayoutManual(instance: string | Ref<QTIListView | undefined>): void

  setSpanCount(instance: string | Ref<QTIListView | undefined>, spanCount: number): void

  searchReplaceItem(instance: string | Ref<QTIListView | undefined>, id: string, item: QTListViewItem): void

  setCustomStateEnableOnFocus(instance: string | Ref<QTIListView | undefined>, id: string, params: Array<Array<string>>): void

  setItemCustomState(instance: string | Ref<QTIListView | undefined>, position: number, state: string, on: boolean): void

  dispatchItemFunctionWithPromise(instance: string | Ref<QTIListView | undefined>,
                                  position: number,
                                  targetName: string,
                                  functionTargetName: string,
                                  params: Array<QTNativeParams>): Promise<QTNativeParams>

  getScrollOffset(instance: string | Ref<QTIListView | undefined>): Promise<QTPosition>
}

export function createQtBaseListViewAPI(): QtBaseListViewAPI {

  function scrollToIndex(instance: string | Ref<QTIListView | undefined>, x: number, y: number, animated?: boolean, duration?: number, offset?: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scrollToIndex', [x, y, animated, duration, offset]]);
    } else if (isRef(instance)) {
      instance.value?.scrollToIndex(x, y, animated, duration, offset)
    }
  }

  function startScroll(instance: string | Ref<QTIListView | undefined>, position: QTListInitPosition): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'startScroll', [position]]);
    } else if (isRef(instance)) {
      instance.value?.startScroll(position)
    }
  }

  function setSelectChildPosition(instance: string | Ref<QTIListView | undefined>, position: number, changeTargetFocusChild?: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setSelectChildPosition', [position, changeTargetFocusChild]]);
    } else if (isRef(instance)) {
      instance.value?.setSelectChildPosition(position, changeTargetFocusChild)
    }
  }

  function scrollToPositionWithOffset(instance: string | Ref<QTIListView | undefined>, position: number, offset: number, animated: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scrollToPositionWithOffset', [position, offset, animated]]);
    } else if (isRef(instance)) {
      instance.value?.scrollToPositionWithOffset(position, offset, animated)
    }
  }

  function scrollToPositionWithOffsetInfiniteMode(instance: string | Ref<QTIListView | undefined>, position: number, offset: number, animated: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scrollToPositionWithOffsetInfiniteMode', [position, offset, animated]]);
    } else if (isRef(instance)) {
      instance.value?.scrollToPositionWithOffsetInfiniteMode(position, offset, animated)
    }
  }

  function scrollToPosition(instance: string | Ref<QTIListView | undefined>, position: number, offset?: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scrollToPosition', [position, offset]]);
    } else if (isRef(instance)) {
      instance.value?.scrollToPosition(position, offset)
    }
  }

  function refreshListData(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'refreshListData', []]);
    } else if (isRef(instance)) {
      instance.value?.refreshListData()
    }
  }

  function updateItemTraverse(instance: string | Ref<QTIListView | undefined>, position: number, data?: QTListViewItem, traverse?: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'updateItem', [position, data, traverse]]);
    } else if (isRef(instance)) {
      instance.value?.updateItemTraverse(position, data, traverse)
    }
  }

  function requestItemLayout(instance: string | Ref<QTIListView | undefined>, position: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'requestItemLayout', [position]]);
    } else if (isRef(instance)) {
      instance.value?.requestItemLayout(position)
    }
  }

  function updateItemRange(instance: string | Ref<QTIListView | undefined>, position: number, count: number, itemList: Array<QTListViewItem>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'updateItemRange', [position, count, itemList]]);
    } else if (isRef(instance)) {
      instance.value?.updateItemRange(position, count, itemList)
    }
  }

  function insertItemRange(instance: string | Ref<QTIListView | undefined>, position: number, itemList: Array<QTListViewItem>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'insertItemRange', [position, itemList]]);
    } else if (isRef(instance)) {
      instance.value?.insertItemRange(position, itemList)
    }
  }

  function updateItemMatched(instance: string | Ref<QTIListView | undefined>, params: QTNativeParams, data: QTListViewItem): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'updateItemMatched', [params, data]]);
    } else if (isRef(instance)) {
      instance.value?.updateItemMatched(params, data)
    }
  }

  function updateItemMatchedByKey(instance: string | Ref<QTIListView | undefined>, idKey: string, params: QTNativeParams, data: QTListViewItem): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'updateItemMatched', [idKey, params, data]]);
    } else if (isRef(instance)) {
      instance.value?.updateItemMatchedByKey(idKey, params, data)
    }
  }

  function deleteItemRange(instance: string | Ref<QTIListView | undefined>, position: number, count: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'deleteItemRange', [position, count]]);
    } else if (isRef(instance)) {
      instance.value?.deleteItemRange(position, count)
    }
  }

  function setListData(instance: string | Ref<QTIListView | undefined>, itemList: Array<QTListViewItem>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setListData', [itemList]]);
    } else if (isRef(instance)) {
      instance.value?.setListData(itemList)
    }
  }

  function setListDataWithParams(instance: string | Ref<QTIListView | undefined>, itemList: Array<QTListViewItem>, autoChangeVisible: boolean, useDiff: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setListDataWithParams', [itemList, autoChangeVisible, useDiff]]);
    } else if (isRef(instance)) {
      instance.value?.setListDataWithParams(itemList, autoChangeVisible, useDiff)
    }
  }

  function addListData(instance: string | Ref<QTIListView | undefined>, itemList: Array<QTListViewItem>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setListDataWithParams', [itemList]]);
    } else if (isRef(instance)) {
      instance.value?.addListData(itemList)
    }
  }

  function addListDataWithParams(instance: string | Ref<QTIListView | undefined>, itemList: Array<QTListViewItem>, deleteCount: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'addListDataWithParams', [itemList, deleteCount]]);
    } else if (isRef(instance)) {
      instance.value?.addListDataWithParams(itemList, deleteCount)
    }
  }

  function destroy(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'destroy', []]);
    } else if (isRef(instance)) {
      instance.value?.destroy()
    }
  }

  function recycle(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'recycle', []]);
    } else if (isRef(instance)) {
      instance.value?.recycle()
    }
  }

  function scrollToTop(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scrollToTop', []]);
    } else if (isRef(instance)) {
      instance.value?.scrollToTop()
    }
  }

  function scrollToFocus(instance: string | Ref<QTIListView | undefined>, position: number, scrollOffset: number, delay: number, target: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scrollToFocus', [position, scrollOffset, delay, target]]);
    } else if (isRef(instance)) {
      instance.value?.scrollToFocus(position, scrollOffset, delay, target)
    }
  }

  function prepareForRecycle(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'prepareForRecycle', []]);
    } else if (isRef(instance)) {
      instance.value?.prepareForRecycle()
    }
  }

  function setDisplay(instance: string | Ref<QTIListView | undefined>, display: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setDisplay', [display]]);
    } else if (isRef(instance)) {
      instance.value?.setDisplay(display)
    }
  }

  function changeDisplayState(instance: string | Ref<QTIListView | undefined>, display: boolean, autoDataState: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'changeDisplayState', [display, autoDataState]]);
    } else if (isRef(instance)) {
      instance.value?.changeDisplayState(display, autoDataState)
    }
  }

  function notifySaveInstance(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'notifySaveInstance', []]);
    } else if (isRef(instance)) {
      instance.value?.notifySaveInstance()
    }
  }

  function notifyRestoreInstance(instance: string | Ref<QTIListView | undefined>,): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'notifyRestoreInstance', []]);
    } else if (isRef(instance)) {
      instance.value?.notifyRestoreInstance()
    }
  }

  function updateItemProps(instance: string | Ref<QTIListView | undefined>, name: string, position: number, dataToUpdate: QTNativeMap, updateView: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'updateItemProps', [name, position, dataToUpdate, updateView]]);
    } else if (isRef(instance)) {
      instance.value?.updateItemProps(name, position, dataToUpdate, updateView)
    }
  }

  function dispatchItemFunction(instance: string | Ref<QTIListView | undefined>, params: QTNativeArray): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'dispatchItemFunction', [params]]);
    } else if (isRef(instance)) {
      instance.value?.dispatchItemFunction(params)
    }
  }

  function clearPostTask(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'clearPostTask', []]);
    } else if (isRef(instance)) {
      instance.value?.clearPostTask()
    }
  }

  function clearPostTaskByCate(instance: string | Ref<QTIListView | undefined>, data: Array<number>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'clearPostTaskByCate', [data]]);
    } else if (isRef(instance)) {
      instance.value?.clearPostTaskByCate(data)
    }
  }

  function clearData(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'clearData', []]);
    } else if (isRef(instance)) {
      instance.value?.clearData()
    }
  }

  function pausePostTask(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'pausePostTask', []]);
    } else if (isRef(instance)) {
      instance.value?.pausePostTask()
    }
  }

  function resumePostTask(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'resumePostTask', []]);
    } else if (isRef(instance)) {
      instance.value?.resumePostTask()
    }
  }

  function requestLayoutManual(instance: string | Ref<QTIListView | undefined>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'requestLayoutManual', []]);
    } else if (isRef(instance)) {
      instance.value?.requestLayoutManual()
    }
  }

  function setSpanCount(instance: string | Ref<QTIListView | undefined>, spanCount: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setSpanCount', [spanCount]]);
    } else if (isRef(instance)) {
      instance.value?.setSpanCount(spanCount)
    }
  }

  function searchReplaceItem(instance: string | Ref<QTIListView | undefined>, id: string, item: QTListViewItem): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'searchReplaceItem', [id, item]]);
    } else if (isRef(instance)) {
      instance.value?.searchReplaceItem(id, item)
    }
  }

  function setCustomStateEnableOnFocus(instance: string | Ref<QTIListView | undefined>, id: string, params: Array<Array<string>>): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setCustomStateEnableOnFocus', [id, params]]);
    } else if (isRef(instance)) {
      instance.value?.setCustomStateEnableOnFocus(id, params)
    }
  }

  function setItemCustomState(instance: string | Ref<QTIListView | undefined>, position: number, state: string, on: boolean): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setItemCustomState', [position, state, on]]);
    } else if (isRef(instance)) {
      instance.value?.setItemCustomState(position, state, on)
    }
  }

  function dispatchItemFunctionWithPromise(instance: string | Ref<QTIListView | undefined>,
                                           position: number,
                                           targetName: string,
                                           functionTargetName: string,
                                           params: Array<QTNativeParams>): Promise<QTNativeParams> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION_WITH_PROMISE,
          [instance, 'dispatchItemFunctionWithPromise', [position, targetName, functionTargetName, params]], (res) => {
            resolve(res);
          })
      });
    } else if (isRef(instance) && instance.value) {
      return instance.value!.dispatchItemFunctionWithPromise(position, targetName, functionTargetName, params)
    } else {
      return Promise.reject()
    }
  }

  function getScrollOffset(instance: string | Ref<QTIListView | undefined>): Promise<QTPosition> {
    if (isString(instance)) {
      return new Promise((resolve, reject) => {
        Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION_WITH_PROMISE, [instance, 'getScrollOffset', []], (res) => {
          resolve(res);
        })
      });
    } else if (isRef(instance) && instance.value) {
      return instance.value!.getScrollOffset()
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
