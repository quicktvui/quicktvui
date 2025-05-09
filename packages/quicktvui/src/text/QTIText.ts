import { QTIView } from '../view/QTIView'
import { QTTextSpan } from './QTTextSpan'

export interface QTIText extends QTIView {
  setText(text: string): void

  setTextSize(size: number): void

  setTextColor(color: string): void

  textSpan(span: QTTextSpan): void
}
