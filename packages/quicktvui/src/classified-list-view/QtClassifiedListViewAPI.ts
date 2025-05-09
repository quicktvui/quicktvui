import { Ref } from '@vue/reactivity'
import { QTIClassifiedListView } from './core/QTIClassifiedListView'
import { QTClassifiedListViewItem } from './core/QTClassifiedListViewItem'
import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtClassifiedListViewAPI extends QtBaseViewAPI {
  init(
    instance: Ref<QTIClassifiedListView | undefined>,
    itemList: Array<QTClassifiedListViewItem>
  ): void

  scrollToIndex(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number,
    anim: Boolean,
    offset: number
  ): void

  setItemFocused(instance: Ref<QTIClassifiedListView | undefined>, index: number): void

  scrollToFocused(instance: Ref<QTIClassifiedListView | undefined>, index: number): void

  setItemSelected(instance: Ref<QTIClassifiedListView | undefined>, index: number, b: boolean): void

  scrollToSelected(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number,
    b: boolean
  ): void

  updateItem(
    instance: Ref<QTIClassifiedListView | undefined>,
    position: number,
    data: QTClassifiedListViewItem
  ): void
}

export function createQtClassifiedListViewAPI(viewAPI: QtBaseViewAPI): QtClassifiedListViewAPI {
  function init(
    instance: Ref<QTIClassifiedListView | undefined>,
    itemList: Array<QTClassifiedListViewItem>
  ): void {
    instance.value?.init(itemList)
  }

  function scrollToIndex(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number,
    anim: Boolean,
    offset: number
  ): void {
    instance.value?.scrollToIndex(index, anim, offset)
  }

  function setItemFocused(instance: Ref<QTIClassifiedListView | undefined>, index: number): void {
    instance.value?.setItemFocused(index)
  }

  function scrollToFocused(instance: Ref<QTIClassifiedListView | undefined>, index: number): void {
    instance.value?.scrollToFocused(index)
  }

  function setItemSelected(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number,
    b: boolean
  ): void {
    instance.value?.setItemSelected(index, b)
  }

  function scrollToSelected(
    instance: Ref<QTIClassifiedListView | undefined>,
    index: number,
    b: boolean
  ): void {
    instance.value?.scrollToSelected(index, b)
  }

  function updateItem(
    instance: Ref<QTIClassifiedListView | undefined>,
    position: number,
    data: QTClassifiedListViewItem
  ): void {
    instance.value?.updateItem(position, data)
  }

  return {
    ...viewAPI,
    init,
    scrollToIndex,
    setItemFocused,
    scrollToFocused,
    setItemSelected,
    scrollToSelected,
    updateItem,
  }
}
