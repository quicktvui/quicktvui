import { QTClassifiedListViewItem } from './QTClassifiedListViewItem'
import { QTIView } from '../../view/QTIView'

export interface QTIClassifiedListView extends QTIView {
  init(itemList: Array<QTClassifiedListViewItem>): void

  scrollToIndex(index: number, anim: Boolean, offset: number): void

  setItemFocused(index: number): void

  scrollToFocused(index: number): void

  setItemSelected(index: number, b: boolean): void

  scrollToSelected(index: number, b: boolean): void

  updateItem(position: number, data: QTClassifiedListViewItem): void
}
