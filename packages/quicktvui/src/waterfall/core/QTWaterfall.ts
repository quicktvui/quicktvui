//

import { QTWaterfallVisibleType } from './QTWaterfallVisibleType'

export interface QTWaterfall {
  width: number
  height: number

  //
  visibleType?: QTWaterfallVisibleType

  [prop: string]: any
}
