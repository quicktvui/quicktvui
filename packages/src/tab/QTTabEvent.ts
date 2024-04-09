//
import {QTTabEventParams} from "./QTTabEventParams";
import {QTTabItem} from "./QTTabItem";

export interface QTTabEvent {
  pageIndex: number,
  useDiff: boolean
  eventName: string
  params: QTTabEventParams
  data: QTTabItem
}
