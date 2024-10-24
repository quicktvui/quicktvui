import {QtViewAPI} from "../view/QtViewAPI";
import {QtBaseListViewAPI} from "../list/QtBaseListViewAPI";
import {QTListViewItem} from "../list-view/core/QTListViewItem";
import {Ref} from "@vue/reactivity";
import {QTIIndicatorView} from "./core/QTIIndicatorView";

export interface QtIndicatorViewAPI extends QtViewAPI, QtBaseListViewAPI {

  init(instance: Ref<QTIIndicatorView | undefined>, target: Array<QTListViewItem>, isInit?: boolean): Array<QTListViewItem>

  stopPage(instance: Ref<QTIIndicatorView | undefined>, isTip?: boolean): void

  setItemFocused(instance: Ref<QTIIndicatorView | undefined>, position: number): void

  scrollToFocused(instance: Ref<QTIIndicatorView | undefined>, position: number): void

  setItemSelected(instance: Ref<QTIIndicatorView | undefined>, position: number, requestFocus: boolean): void

  scrollToSelected(instance: Ref<QTIIndicatorView | undefined>, position: number, requestFocus: boolean): void

  setIndicatorType(instance: Ref<QTIIndicatorView | undefined>, type: number): void
}

export function createQtIndicatorViewAPI(viewAPI: QtViewAPI, listViewAPI: QtBaseListViewAPI): QtIndicatorViewAPI {

  function init(instance: Ref<QTIIndicatorView | undefined>, target: Array<QTListViewItem>, isInit?: boolean): Array<QTListViewItem> {
    if (instance.value) {
      return instance.value.init(target, isInit)
    }
    return []
  }

  function stopPage(instance: Ref<QTIIndicatorView | undefined>, isTip?: boolean): void {
    instance.value?.stopPage(isTip)
  }

  function setItemFocused(instance: Ref<QTIIndicatorView | undefined>, position: number): void {
    instance.value?.setItemFocused(position)
  }

  function scrollToFocused(instance: Ref<QTIIndicatorView | undefined>, position: number): void {
    instance.value?.scrollToFocused(position)
  }

  function setItemSelected(instance: Ref<QTIIndicatorView | undefined>, position: number, requestFocus: boolean): void {
    instance.value?.setItemSelected(position, requestFocus)
  }

  function scrollToSelected(instance: Ref<QTIIndicatorView | undefined>, position: number, requestFocus: boolean): void {
    instance.value?.scrollToSelected(position, requestFocus)
  }

  function setIndicatorType(instance: Ref<QTIIndicatorView | undefined>, type: number): void {
    instance.value?.setIndicatorType(type)
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
    setIndicatorType
  }
}
