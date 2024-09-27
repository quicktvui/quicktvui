import {Native} from "@extscreen/es3-vue";
import {QT_API_MODULE} from "../qt/QtAPI";
import {QTListViewItem} from "../list-view/core/QTListViewItem";

export interface QtVirtualViewAPI {

  searchReplaceItem(instance: string, item: QTListViewItem): void

  searchReplaceItemTraverse(instance: string, item: QTListViewItem): void
}

export function createQtVirtualViewAPI(): QtVirtualViewAPI {

  function searchReplaceItem(instance: string, item: QTListViewItem): void {
    Native.callNative(QT_API_MODULE, 'searchReplaceItem', instance, item);
  }

  function searchReplaceItemTraverse(instance: string, item: QTListViewItem): void {
    Native.callNative(QT_API_MODULE, 'searchReplaceItemTraverse', instance, item);
  }

  return {
    searchReplaceItem,
    searchReplaceItemTraverse,
  }
}
