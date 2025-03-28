import { QTULInitPosition } from './QTULInitPosition'
import { QTPosition } from '../core/QTPosition'
import { QTIListView } from '../list-view/core/QTIListView'

export interface QTIUL extends QTIListView {
  scrollToIndex(x: number, y: number, animated: boolean, duration: number, offset: number): void

  setInitPosition(initPosition: QTULInitPosition): void

  clearInitPosition(): void

  scrollToContentOffset(x: number, y: number, animated: boolean, duration: number): void

  scrollToTop(): void

  setSelectChildPosition(position: number, changeFocusTarget?: boolean): void

  setTargetFocusChildPosition(position: number): void

  refreshListData(): void

  getScrollOffset(): Promise<QTPosition>

  setPendingListCount(count: number): void
}
