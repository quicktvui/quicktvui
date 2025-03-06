import { QTListViewItem } from './QTListViewItem'
import { QTIBaseListView } from '../../list/QTIBaseListView'

export interface QTIListView extends QTIBaseListView {
  /**
   * @deprecated 不再推荐使用，请使用最新的:list-data语法绑定数据
   */
  init<T extends QTListViewItem>(target: Array<T>, isInit?: boolean): Array<QTListViewItem>

  initTemplate<T extends QTListViewItem>(itemList: Array<T>): void

  stopPage(isTip?: boolean): void

  setItemFocused(position: number): void

  scrollToFocused(position: number): void

  setItemSelected(position: number, b: boolean): void

  scrollToSelected(position: number, b: boolean): void
}
