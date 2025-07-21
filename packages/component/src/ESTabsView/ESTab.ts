import { ESTabItem } from './ESTabItem'

export interface ESTab {
  defaultIndex?: number
  focusIndex?: number
  data: Array<ESTabItem>
}
