import { QTGridViewItem } from './QTGridViewItem'
import { QTIBaseListView } from '../../list/QTIBaseListView'

export interface QTIGridView extends QTIBaseListView {
  /**
   * @deprecated 不再推荐使用，请使用最新的:list-data语法绑定数据
   */
  init(target: Array<QTGridViewItem>, isInit?: boolean): Array<QTGridViewItem>

  stopPage(isTip?: boolean): void

  restartPage(): void

  setItemFocused(position: number): void

  scrollToFocused(position: number): void

  setItemSelected(position: number, b: boolean): void

  scrollToSelected(position: number, b: boolean): void

  setInitPosition(position: number): void
}
