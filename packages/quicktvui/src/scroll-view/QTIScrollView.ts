import { QTIView } from '../view/QTIView'

export interface QTIScrollView extends QTIView {
  scrollTo(x: number, y: number): void

  scrollToWithOptions(x: number, y: number, duration: number): void
}
