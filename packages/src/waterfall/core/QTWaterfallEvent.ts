//

import {QTWaterfallItem} from "./QTWaterfallItem";

export interface QTWaterfallEvent {
  position: number
  parentPosition: number
  item: QTWaterfallItem
  isFocused: boolean
  hasFocus: boolean
}
