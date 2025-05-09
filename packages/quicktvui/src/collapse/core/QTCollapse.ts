import { QTCollapseItem } from './QTCollapseItem'

export interface QTCollapse {
  width: number
  height: number

  expandDuration?: number

  //默认选中的位置
  defaultIndex?: number
  //
  itemList: Array<QTCollapseItem>
}
