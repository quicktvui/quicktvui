import { QTIView } from '../../view/QTIView'

export interface QTICollapseItem extends QTIView {
  onCollapseItemExpand(value: boolean, init: boolean): void
}
