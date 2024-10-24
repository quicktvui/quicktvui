//
import {QTWaterfallItem} from "./QTWaterfallItem";
import {QTWaterfallFlexStyle} from "./QTWaterfallFlexStyle";
import {QTListViewItem} from "../../list-view/core/QTListViewItem";
import {QTFlexStyleText} from "../../core/QTFlexStyleText";
import {QTWaterfallPlaceholder} from "./QTWaterfallPlaceholder";

export interface QTWaterfallSection extends QTListViewItem {
  title?: string
  titleStyle?: QTWaterfallFlexStyle & QTFlexStyleText
  itemList: Array<QTWaterfallItem>,
  style: QTWaterfallFlexStyle
  contentStyle?: QTWaterfallFlexStyle
  placeholder?: QTWaterfallPlaceholder

  [prop: string]: any
}
