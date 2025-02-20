//

import {QTListViewItemDecoration} from "../list-view/core/QTListViewItemDecoration";

export interface QTULItem {
  id?: string
  type: number
  decoration?: QTListViewItemDecoration

  [prop: string]: any
}
