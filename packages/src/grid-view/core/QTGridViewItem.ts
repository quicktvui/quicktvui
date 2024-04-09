//
import {QTGridViewItemDecoration} from "./QTGridViewItemDecoration";

export interface QTGridViewItem {
  type: number
  decoration?: QTGridViewItemDecoration

  [prop: string]: any
}
