//
import { QTWaterfallSection } from './QTWaterfallSection'
import { QTWaterfallFlexStyle } from './QTWaterfallFlexStyle'
import { QTWaterfallCardPlaceHolder } from './QTWaterfallCardPlaceHolder'

export interface QTWaterfallCardSection extends QTWaterfallSection {
  cardId: string
  cardStyle: QTWaterfallFlexStyle
  cardPlaceHolder?: QTWaterfallCardPlaceHolder

  [prop: string]: any
}
