import {QTGridViewItem} from "./QTGridViewItem";
import {QTIView} from "../../view/QTIView";

export interface QTIGridView extends QTIView {

  init(target: Array<QTGridViewItem>, isInit?: boolean): Array<QTGridViewItem>

  scrollToTop(): void

  clearFocus(): void

  stopPage(): void

  restartPage(): void

  blockRootFocus(): void

  unBlockRootFocus(): void

  setDisplay(value: Boolean): void

  scrollToPosition(index: number): void

  scrollToIndex(y: number, anim: Boolean, offset: number): void

  setItemFocused(pos: number): void

  scrollToFocused(pos: number): void

  setItemSelected(pos: number, b: boolean): void

  scrollToSelected(pos: number, b: boolean): void

  setInitPosition(position: number): void

  setListData(itemList: Array<QTGridViewItem>): void

  clearPostTask(): void

  destroy(): void

}
