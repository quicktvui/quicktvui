import {Ref} from "@vue/reactivity";
import {QTIListView} from "../list-view/core/QTIListView";
import {QTListInitPosition} from "./QTListInitPosition";
import {QTListViewItem} from "../list-view/core/QTListViewItem";
import {QTNativeArray, QTNativeMap, QTNativeParams} from "../core/QTNativeParams";
import {QTPosition} from "../core/QTPosition";
import {Native} from "@extscreen/es3-vue";

export default function (viewRef: Ref<QTIListView | undefined>) {
  function scrollToIndex(x: number, y: number, animated?: boolean, duration?: number, offset?: number): void {
    viewRef.value?.scrollToIndex(x, y, animated, duration, offset)
  }

  function startScroll(position: QTListInitPosition): void {
    viewRef.value?.startScroll(position)
  }

  function setSelectChildPosition(position: number, changeTargetFocusChild?: boolean): void {
    viewRef.value?.setSelectChildPosition(position, changeTargetFocusChild)
  }

  function scrollToPositionWithOffset(position: number, offset: number, animated: boolean): void {
    viewRef.value?.scrollToPositionWithOffset(position, offset, animated)
  }

  function scrollToPositionWithOffsetInfiniteMode(position: number, offset: number, animated: boolean): void {
    viewRef.value?.scrollToPositionWithOffsetInfiniteMode(position, offset, animated)
  }

  function scrollToPosition(position: number, offset?: number): void {
    viewRef.value?.scrollToPosition(position, offset)
  }

  function refreshListData(): void {
    viewRef.value?.refreshListData()
  }

  function updateItemTraverse(position: number, data?: QTListViewItem, traverse?: boolean): void {
    viewRef.value?.updateItemTraverse(position, data, traverse)
  }

  function requestItemLayout(position: number): void {
    viewRef.value?.requestItemLayout(position)
  }

  function updateItemRange(position: number, count: number, itemList: Array<QTListViewItem>): void {
    viewRef.value?.updateItemRange(position, count, itemList)
  }

  function insertItemRange(position: number, itemList: Array<QTListViewItem>): void {
    viewRef.value?.insertItemRange(position, itemList)
  }

  function updateItemMatched(params: QTNativeParams, data: QTListViewItem): void {
    viewRef.value?.updateItemMatched(params, data)
  }

  function updateItemMatchedByKey(idKey: string, params: QTNativeParams, data: QTListViewItem): void {
    viewRef.value?.updateItemMatchedByKey(idKey, params, data)
  }

  function deleteItemRange(position: number, count: number): void {
    viewRef.value?.deleteItemRange(position, count)
  }

  function setListData(itemList: Array<QTListViewItem>): void {
    viewRef.value?.setListData(itemList)
  }

  function setListDataWithParams(itemList: Array<QTListViewItem>, autoChangeVisible: boolean, useDiff: boolean): void {
    viewRef.value?.setListDataWithParams(itemList, autoChangeVisible, useDiff)
  }

  function addListData(itemList: Array<QTListViewItem>): void {
    viewRef.value?.addListData(itemList)
  }

  function addListDataWithParams(itemList: Array<QTListViewItem>, deleteCount: number): void {
    viewRef.value?.addListDataWithParams(itemList, deleteCount)
  }

  function destroy(): void {
    viewRef.value?.destroy()
  }

  function recycle(): void {
    viewRef.value?.recycle()
  }

  function scrollToTop(): void {
    viewRef.value?.scrollToTop()
  }

  function scrollToFocus(position: number, scrollOffset: number, delay: number, target: string): void {
    viewRef.value?.scrollToFocus(position, scrollOffset, delay, target)
  }

  function prepareForRecycle(): void {
    viewRef.value?.prepareForRecycle()
  }

  function setDisplay(display: boolean): void {
    viewRef.value?.setDisplay(display)
  }

  function changeDisplayState(display: boolean, autoDataState: boolean): void {
    viewRef.value?.changeDisplayState(display, autoDataState)
  }

  function notifySaveInstance(): void {
    viewRef.value?.notifySaveInstance()
  }

  function notifyRestoreInstance(): void {
    viewRef.value?.notifyRestoreInstance()
  }

  function updateItemProps(name: string, position: number, dataToUpdate: QTNativeMap, updateView: boolean): void {
    viewRef.value?.updateItemProps(name, position, dataToUpdate, updateView)
  }

  function dispatchItemFunction(params: QTNativeArray): void {
    viewRef.value?.dispatchItemFunction(params)
  }

  function clearPostTask(): void {
    viewRef.value?.clearPostTask()
  }

  function clearPostTaskByCate(data: Array<number>): void {
    viewRef.value?.clearPostTaskByCate(data)
  }

  function clearData(): void {
    viewRef.value?.clearData()
  }

  function pausePostTask(): void {
    viewRef.value?.pausePostTask()
  }

  function resumePostTask(): void {
    viewRef.value?.resumePostTask()
  }

  function requestLayoutManual(): void {
    viewRef.value?.requestLayoutManual()
  }

  function setSpanCount(spanCount: number): void {
    viewRef.value?.setSpanCount(spanCount)
  }

  function searchReplaceItem(id: string, item: QTListViewItem): void {
    viewRef.value?.searchReplaceItem(id, item)
  }

  function setCustomStateEnableOnFocus(id: string, params: Array<Array<string>>): void {
    viewRef.value?.setCustomStateEnableOnFocus(id, params)
  }

  function setItemCustomState(position: number, state: string, on: boolean): void {
    viewRef.value?.setItemCustomState(position, state, on)
  }

  function dispatchItemFunctionWithPromise(position: number,
                                           targetName: string,
                                           functionTargetName: string,
                                           params: Array<QTNativeParams>): Promise<QTNativeParams> {
    return viewRef.value!.dispatchItemFunctionWithPromise(position, targetName, functionTargetName, params)
  }

  function getScrollOffset(): Promise<QTPosition> {
    return viewRef.value!.getScrollOffset()
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
