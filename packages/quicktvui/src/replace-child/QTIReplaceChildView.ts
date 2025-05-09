import { QTIView } from '../view/QTIView'

export interface QTIReplaceChildView extends QTIView {
  setChildSID(sid: string): void
}
