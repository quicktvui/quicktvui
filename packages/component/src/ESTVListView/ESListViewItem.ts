//
import { ESListViewItemDecoration } from './ESListViewItemDecoration'

export interface ESListViewItem {
  _id?: string
  type: number
  decoration?: ESListViewItemDecoration

  [prop: string]: any
}
