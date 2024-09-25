import {QTIView} from "../view/QTIView";
import {QTULInitPosition} from "./QTULInitPosition";
import {QTPosition} from "../core/QTPosition";

export interface QTIUL extends QTIView {

  scrollToIndex(x: number, y: number, animated: boolean, duration: number, offset: number): void

  setInitPosition(initPosition: QTULInitPosition): void

  clearInitPosition(): void

  scrollToContentOffset(x: number, y: number, animated: boolean, duration: number): void

  scrollToTop(): void

  setSelectChildPosition(position: number, changeFocusTarget?: boolean): void

  setTargetFocusChildPosition(position: number): void

  refreshListData(): void

  getScrollOffset(): Promise<QTPosition>
}
