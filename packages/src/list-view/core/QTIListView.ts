import {QTListViewItem} from "./QTListViewItem";
import {QTIView} from "../../view/QTIView";

export interface QTIListView extends QTIView {

  init(target: Array<QTListViewItem>, isInit? : boolean): Array<QTListViewItem>

  scrollToTop(): void

  clearFocus(): void

  stopPage(): void

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

  setListData(itemList: Array<QTListViewItem>): void

  clearPostTask(): void

  destroy(): void

  updateItem(position: number, data: QTListViewItem): void
}
