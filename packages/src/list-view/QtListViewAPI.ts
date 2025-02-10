import {QtBaseListViewAPI} from "../list/QtBaseListViewAPI";
import {QTListViewItem} from "./core/QTListViewItem";
import {Ref} from "@vue/reactivity";
import {QTIListView} from "./core/QTIListView";
import {QtBaseViewAPI} from "../base/QtBaseViewAPI";

export interface QtListViewAPI extends QtBaseViewAPI, QtBaseListViewAPI {

  init(instance: Ref<QTIListView | undefined>, target: Array<QTListViewItem>, isInit?: boolean): Array<QTListViewItem>

  stopPage(instance: Ref<QTIListView | undefined>, isTip?: boolean): void

  setItemFocused(instance: Ref<QTIListView | undefined>, position: number): void

  scrollToFocused(instance: Ref<QTIListView | undefined>, position: number): void

  setItemSelected(instance: Ref<QTIListView | undefined>, position: number, requestFocus: boolean): void

  scrollToSelected(instance: Ref<QTIListView | undefined>, position: number, requestFocus: boolean): void
}

export function createQtListViewAPI(viewAPI: QtBaseViewAPI, listViewAPI: QtBaseListViewAPI): QtListViewAPI {

  function init(instance: Ref<QTIListView | undefined>, target: Array<QTListViewItem>, isInit?: boolean): Array<QTListViewItem> {
    if (instance.value) {
      return instance.value.init(target, isInit)
    }
    return []
  }

  function stopPage(instance: Ref<QTIListView | undefined>, isTip?: boolean): void {
    instance.value?.stopPage(isTip)
  }

  function setItemFocused(instance: Ref<QTIListView | undefined>, position: number): void {
    instance.value?.setItemFocused(position)
  }

  function scrollToFocused(instance: Ref<QTIListView | undefined>, position: number): void {
    instance.value?.scrollToFocused(position)
  }

  function setItemSelected(instance: Ref<QTIListView | undefined>, position: number, requestFocus: boolean): void {
    instance.value?.setItemSelected(position, requestFocus)
  }

  function scrollToSelected(instance: Ref<QTIListView | undefined>, position: number, requestFocus: boolean): void {
    instance.value?.scrollToSelected(position, requestFocus)
  }

  return {
    ...viewAPI,
    ...listViewAPI,
    init,
    stopPage,
    setItemFocused,
    scrollToFocused,
    setItemSelected,
    scrollToSelected,
  }
}
