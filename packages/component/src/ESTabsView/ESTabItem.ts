import { ESListViewItem } from '../ESTVListView/ESListViewItem'

export interface ESTabItem extends ESListViewItem {
  text: string
  titleSize: number

  [prop: string]: any
}
