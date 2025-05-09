//
import { QTWaterfallFlexStyle } from './QTWaterfallFlexStyle'
import { QTWaterfallItem } from './QTWaterfallItem'

export interface QTWaterfallTabItem extends QTWaterfallItem {
  text: string
  textStyle?: QTWaterfallFlexStyle

  [prop: string]: any
}
