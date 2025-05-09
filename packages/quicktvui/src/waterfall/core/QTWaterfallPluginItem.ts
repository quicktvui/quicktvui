//

import { QTWaterfallItem } from './QTWaterfallItem'

export interface QTWaterfallPluginItem extends QTWaterfallItem {
  pluginKey: string

  [prop: string]: any
}
