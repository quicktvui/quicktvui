import { QtBaseListViewAPI } from '../list/QtBaseListViewAPI'
import { QTGridViewItem } from './core/QTGridViewItem'
import { Ref } from '@vue/reactivity'
import { QTIGridView } from './core/QTIGridView'
import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtGridViewAPI extends QtBaseViewAPI, QtBaseListViewAPI {
  init(
    instance: Ref<QTIGridView | undefined>,
    target: Array<QTGridViewItem>,
    isInit?: boolean
  ): Array<QTGridViewItem>

  stopPage(instance: Ref<QTIGridView | undefined>, isTip?: boolean): void

  restartPage(instance: Ref<QTIGridView | undefined>): void

  setItemFocused(instance: Ref<QTIGridView | undefined>, position: number): void

  scrollToFocused(instance: Ref<QTIGridView | undefined>, position: number): void

  setItemSelected(instance: Ref<QTIGridView | undefined>, position: number, b: boolean): void

  scrollToSelected(instance: Ref<QTIGridView | undefined>, position: number, b: boolean): void

  setInitPosition(instance: Ref<QTIGridView | undefined>, position: number): void
}

export function createQtGridViewAPI(
  viewAPI: QtBaseViewAPI,
  listViewAPI: QtBaseListViewAPI
): QtGridViewAPI {
  function init(
    instance: Ref<QTIGridView | undefined>,
    target: Array<QTGridViewItem>,
    isInit?: boolean
  ): Array<QTGridViewItem> {
    if (instance.value) {
      return instance.value.init(target, isInit)
    }
    return []
  }

  function stopPage(instance: Ref<QTIGridView | undefined>, isTip?: boolean): void {
    instance.value?.stopPage(isTip)
  }

  function restartPage(instance: Ref<QTIGridView | undefined>): void {
    instance.value?.restartPage()
  }

  function setItemFocused(instance: Ref<QTIGridView | undefined>, position: number): void {
    instance.value?.setItemFocused(position)
  }

  function scrollToFocused(instance: Ref<QTIGridView | undefined>, position: number): void {
    instance.value?.scrollToFocused(position)
  }

  function setItemSelected(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    requestFocus: boolean
  ): void {
    instance.value?.setItemSelected(position, requestFocus)
  }

  function scrollToSelected(
    instance: Ref<QTIGridView | undefined>,
    position: number,
    requestFocus: boolean
  ): void {
    instance.value?.scrollToSelected(position, requestFocus)
  }

  function setInitPosition(instance: Ref<QTIGridView | undefined>, position: number): void {
    instance.value?.setInitPosition(position)
  }

  return {
    ...viewAPI,
    ...listViewAPI,
    init,
    stopPage,
    restartPage,
    setItemFocused,
    scrollToFocused,
    setItemSelected,
    scrollToSelected,
    setInitPosition,
  }
}
