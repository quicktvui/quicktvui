//
import { QTClassifiedListViewItemDecoration } from './QTClassifiedListViewItemDecoration'
import { QTListViewItem } from '../../list-view/core/QTListViewItem'

export interface QTClassifiedListViewItem extends QTListViewItem {
  type: number
  categoryname: string
  decoration?: QTClassifiedListViewItemDecoration
  isNeedFocus: boolean
  [prop: string]: any
}
