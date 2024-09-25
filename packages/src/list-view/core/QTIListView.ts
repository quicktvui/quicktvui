import {QTListViewItem} from "./QTListViewItem";
import {QTIBaseListView} from "../../list/QTIBaseListView";

export interface QTIListView extends QTIBaseListView {

  /**
   * @deprecated 不再推荐使用，请使用最新的:list-data语法绑定数据
   */
  init(target: Array<QTListViewItem>, isInit?: boolean): Array<QTListViewItem>

  stopPage(isTip?: boolean): void

  setItemFocused(pos: number): void

  scrollToFocused(pos: number): void

  setItemSelected(pos: number, b: boolean): void

  scrollToSelected(pos: number, b: boolean): void
}
