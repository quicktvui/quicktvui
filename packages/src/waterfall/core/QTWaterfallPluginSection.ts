//
import {QTWaterfallSection} from "./QTWaterfallSection";

export interface QTWaterfallPluginSection extends QTWaterfallSection {
  pluginKey: string

  [prop: string]: any
}
