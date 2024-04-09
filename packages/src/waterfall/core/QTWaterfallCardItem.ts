//

import {QTWaterfallItem} from "./QTWaterfallItem";
import {QTWaterfallCardPlaceHolder} from "./QTWaterfallCardPlaceHolder";

export interface QTWaterfallCardItem extends QTWaterfallItem {
  cardId: string
  cardPlaceHolder?: QTWaterfallCardPlaceHolder

  [prop: string]: any
}
