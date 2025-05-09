import { QTTabItem } from './QTTabItem'

export interface QTTab {
  defaultIndex: number
  defaultFocusIndex?: number

  itemList: Array<QTTabItem>
}
