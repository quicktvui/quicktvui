import {QTListInitPosition} from "./QTListInitPosition";
import {QTListViewItem} from "../list-view/core/QTListViewItem";
import {QTNativeArray, QTNativeMap, QTNativeParams} from "../core/QTNativeParams";
import {QTPosition} from "../core/QTPosition";
import {QTIBaseView} from "../base/QTIBaseView";

export interface QTIBaseListView extends QTIBaseView {

  scrollToIndex(x: number, y: number, animated?: boolean, duration?: number, offset?: number): void

  startScroll(position: QTListInitPosition): void

  setSelectChildPosition(position: number, changeTargetFocusChild?: boolean): void

  scrollToPositionWithOffset(position: number, offset: number, animated: boolean): void

  scrollToPositionWithOffsetInfiniteMode(position: number, offset: number, animated: boolean): void

  scrollToPosition(position: number, offset?: number): void

  refreshListData(): void

  updateItemTraverse(position: number, data?: QTListViewItem, traverse?: boolean): void

  requestItemLayout(position: number): void

  updateItemRange(position: number, count: number, itemList: Array<QTListViewItem>): void

  insertItemRange(position: number, itemList: Array<QTListViewItem>): void

  updateItemMatched(params: QTNativeParams, data: QTListViewItem): void

  updateItemMatchedByKey(idKey: string, params: QTNativeParams, data: QTListViewItem): void

  deleteItemRange(position: number, count: number): void

  setListData(itemList: Array<QTListViewItem>): void

  setListDataWithParams(itemList: Array<QTListViewItem>, autoChangeVisible: boolean, useDiff: boolean): void

  addListData(itemList: Array<QTListViewItem>): void

  addListDataWithParams(itemList: Array<QTListViewItem>, deleteCount: number): void

  destroy(): void

  recycle(): void

  scrollToTop(): void

  scrollToFocus(position: number, scrollOffset: number, delay: number, target: string): void

  prepareForRecycle(): void

  setDisplay(display: boolean): void

  changeDisplayState(display: boolean, autoDataState: boolean): void

  notifySaveInstance(): void

  notifyRestoreInstance(): void

  updateItemProps(name: string, position: number, dataToUpdate: QTNativeMap, updateView: boolean): void

  dispatchItemFunction(params: QTNativeArray): void

  clearPostTask(): void

  clearPostTaskByCate(data: Array<number>): void

  clearData(): void

  pausePostTask(): void

  resumePostTask(): void

  requestLayoutManual(): void

  setSpanCount(spanCount: number): void

  searchReplaceItem(id: string, item: QTListViewItem): void

  setCustomStateEnableOnFocus(id: string, params: Array<Array<string>>): void

  setItemCustomState(position: number, state: string, on: boolean): void

  dispatchItemFunctionWithPromise(position: number,
                                  targetName: string,
                                  functionTargetName: string,
                                  params: Array<QTNativeParams>): Promise<QTNativeParams>

  getScrollOffset(): Promise<QTPosition>
}
