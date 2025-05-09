//
import { ESTabItem } from '@extscreen/es3-component'
import { QTWaterfallFlexStyle } from '../waterfall/core/QTWaterfallFlexStyle'

export interface QTNavBarItem extends ESTabItem {
  style?: QTWaterfallFlexStyle

  [prop: string]: any
}
