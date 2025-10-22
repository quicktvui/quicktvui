import { QTIView } from '../view/QTIView'
import { QTLongImageScaleType } from './QTLongImageScaleType'
import { QTLongImagePositionType } from './QTLongImagePositionType'
import { QTLongImageOrientation } from './QTLongImageOrientation'

export interface QTILongImage extends QTIView {
  setInitScale(type: QTLongImageScaleType, scale?: number): void

  setInitPosition(type: QTLongImagePositionType): void

  setInitCenter(x: number, y: number): void

  setInitOrientation(orientation: QTLongImageOrientation): void

  setSrc(url: string, fileId?: string): void

  zoom(type: QTLongImageScaleType, scale?: number): void

  zoomByPoint(type: QTLongImageScaleType, x?: number, y?: number, scale?: number): void

  zoomByCenter(type: QTLongImageScaleType, scale?: number): void

  //滚动
  scrollDown(step?: number): void

  scrollUp(step?: number): void

  scrollLeft(step?: number): void

  scrollRight(step?: number): void

  scrollTo(offsetX: number, offsetY: number): void

  rotate(rotation: number): void

  setScaleByAnimal(useAnimal: boolean): void

  setDebug(debug: boolean): void
}
