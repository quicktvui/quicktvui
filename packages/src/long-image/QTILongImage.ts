import { QTIView } from '../view/QTIView'

export interface QTILongImage extends QTIView {
  setSrc(url: string): void

  //放大缩小
  setZoomEnabled(value: boolean): void

  zoomIn(step: number): void

  zoomOut(step: number): void

  //滚动
  scrollDown(step: number): void

  scrollUp(step: number): void

  scrollLeft(step: number): void

  scrollRight(step: number): void

  scrollTo(offsetX: number, offsetY: number): void
}
