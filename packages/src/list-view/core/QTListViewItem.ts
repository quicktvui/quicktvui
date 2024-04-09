//
import {QTListViewItemDecoration} from "./QTListViewItemDecoration";
import {QTListViewItemState} from "./QTListViewItemState";

export interface QTListViewItem {
  _id?: string
  type: number
  decoration?: QTListViewItemDecoration
  state?: QTListViewItemState

  [prop: string]: any
}
