import { ESListViewItem } from './ESListViewItem'
import { ESListViewItemFunctionParams } from './ESListViewItemFunctionParams'
import { ESDirections } from '../ESView/ESDirections'
import { ESIView } from '../ESView/ESIView'
import { ESListInitPosition } from './ESListInitPosition'

export interface ESIListView extends ESIView {
  scrollToIndex(x: number, y: number, animated?: boolean, duration?: number, offset?: number): void

  startScroll(position: ESListInitPosition): void

  setSelectChildPosition(position: number, requestFocus: boolean): void

  scrollToPositionWithOffset(position: number, offset: number, animated: boolean): void

  scrollToPositionWithOffsetInfiniteMode(position: number, offset: number, animated: boolean): void

  scrollToPosition(index: number, offset?: number): void

  refreshListData(): void

  updateItemTraverse(position: number, data?: ESListViewItem, traverse?: boolean): void

  requestItemLayout(position: number): void

  updateItemRange(position: number, count: number, data: Array<ESListViewItem>)

  insertItemRange(position: number, data: Array<ESListViewItem>): void

  updateItemMatched(params: Record<string, any>, data: ESListViewItem): void

  updateItemMatchedByKey(idKey: string, params: Record<string, any>, data: ESListViewItem): void

  deleteItemRange(position: number, count: number): void

  setListData(itemList: Array<ESListViewItem>): void

  setListDataWithParams(data: Array<ESListViewItem>, autoChangeVisible: boolean): void

  addListData(data: Array<ESListViewItem>): void

  addListDataWithParams(data: Array<ESListViewItem>, deleteCount: number): void

  destroy(): void

  recycle(): void

  scrollToTop(): void

  scrollToFocus(position: number, scrollOffset: number, delay: number, target: string): void

  prepareForRecycle(): void

  setDisplay(value: boolean): void

  changeDisplayState(display: string, autoDataState: any): void

  notifySaveInstance(): void

  updateItemProps(position: number, name: string, toUpdateMap: Object): void

  dispatchItemFunction(
    position: number,
    name: string,
    funcName: string,
    params: ESListViewItemFunctionParams
  ): void

  clearPostTask(): void

  clearPostTaskByCate(data: Array<number>): void

  clearData(): void

  pausePostTask(): void

  resumePostTask(): void

  requestLayoutManual(): void

  setSpanCount(count: number)

  searchReplaceItem(id: string, item: ESListViewItem): void

  setCustomStateEnableOnFocus(id: string, params: Array<Array<string>>): void

  setItemCustomState(position: number, stateName: string, stateValue: boolean): void

  dispatchItemFunctionWithPromise(
    position: number,
    targetName: string,
    functionTargetName: string,
    params: Array<Record<string, any>>
  ): Promise<Record<string, any>>

  getScrollOffset(callback: (offset: number) => void): void

  //---------------------------------------------------------------------------------------
  //#######################################################################################
  //---------------------------------------------------------------------------------------

  setInitPosition(position: number): void

  deleteItem(position: number, count: number): void

  updateItem(position: number, data: ESListViewItem): void

  updateItemList(position: number, count: number, data: Array<ESListViewItem>): void

  addItem(position: number, data: Array<ESListViewItem>): void

  dispatchTVItemFunction(
    id: number | string,
    name: string,
    funcName: string,
    params: ESListViewItemFunctionParams
  ): void

  scrollToPositionOffset(
    x: number,
    y: number,
    anim: boolean,
    offset: number,
    duration: number
  ): void

  notifyRestoreInstance(): void

  setSelectPosition(position: number, requestFocus: boolean): void

  requestFocus(position: number): void

  clearFocus(): void

  blockRootFocus(): void

  unBlockRootFocus(): void

  hasFocus(callback: (value: boolean) => void): void

  setBlockFocusDirectionsOnFail(data: Array<ESDirections>): void

  setBackgroundColor(color: string): void

  setAutoFocus(tag: string, delay: number): void
}
