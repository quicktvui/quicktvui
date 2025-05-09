//
import { QTNavBar } from './QTNavBar'
import { QTIView } from '../view/QTIView'

export interface QTINavBar extends QTIView {
  init(navBar: QTNavBar): void

  scrollToPosition(index: number): void

  scrollToTop(): void
}
