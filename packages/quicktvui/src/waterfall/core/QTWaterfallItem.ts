//
import { QTListViewItem } from '../../list-view/core/QTListViewItem'
import { QTWaterfallFlexStyle } from './QTWaterfallFlexStyle'

export interface QTWaterfallItem extends QTListViewItem {
  style: QTWaterfallFlexStyle

  [prop: string]: any
}
