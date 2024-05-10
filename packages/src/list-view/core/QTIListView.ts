import {QTListViewItem} from "./QTListViewItem";
import {QTIView} from "../../view/QTIView";

export interface QTIListView extends QTIView {

  /**
   * @deprecated 不再推荐使用，请使用最新的:list-data语法绑定数据
   */
  init(target: Array<QTListViewItem>, isInit? : boolean): Array<QTListViewItem>

  scrollToTop(): void

  clearFocus(): void

  stopPage(isTip?:boolean): void

  blockRootFocus(): void

  unBlockRootFocus(): void

  setDisplay(value: Boolean): void

  scrollToPosition(index: number): void

  scrollToIndex(y: number, anim: Boolean, offset: number): void

  setItemFocused(pos: number): void

  scrollToFocused(pos: number): void

  setItemSelected(pos: number, b: boolean): void

  scrollToSelected(pos: number, b: boolean): void

  startScroll(focusPosition?: number,scrollToPosition?: number,scrollOffset?: number): void

  /**
   * @deprecated 不再推荐使用，请使用最新的:list-data语法绑定数据
   */
  setListData(itemList: Array<QTListViewItem>): void

  clearPostTask(): void

  destroy(): void

  /**
   * @deprecated 不再推荐使用，请使用最新的:list-data语法绑定数据
   */
  updateItem(position: number, data: QTListViewItem): void
}
