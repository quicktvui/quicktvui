import { QTListViewItem } from '../../list-view/core/QTListViewItem'
import { QTIBaseListView } from '../../list/QTIBaseListView'

export interface QTIIndicatorView extends QTIBaseListView {
  /**
   * @deprecated 不再推荐使用，请使用最新的:list-data语法绑定数据
   */
  init(target: Array<QTListViewItem>, isInit?: boolean): Array<QTListViewItem>

  stopPage(isTip?: boolean): void

  setItemFocused(position: number): void

  scrollToFocused(position: number): void

  setItemSelected(position: number, b: boolean): void

  scrollToSelected(position: number, b: boolean): void

  setIndicatorType(type: number): void
}
