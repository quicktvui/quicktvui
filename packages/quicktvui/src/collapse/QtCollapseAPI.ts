import { Ref } from '@vue/reactivity'
import { QTICollapse } from './core/QTICollapse'
import { QTICollapseItem } from './core/QTICollapseItem'
import { QTCollapse } from './core/QTCollapse'
import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtCollapseAPI extends QtBaseViewAPI {
  init(instance: Ref<QTICollapse | undefined>, collapse: QTCollapse): void

  getItem(instance: Ref<QTICollapse | undefined>, index: number): QTICollapseItem | undefined

  expandItem(instance: Ref<QTICollapse | undefined>, index: number): void

  collapse(instance: Ref<QTICollapse | undefined>): void

  expand(instance: Ref<QTICollapse | undefined>): void
}

export function createQtCollapseAPI(viewAPI: QtBaseViewAPI): QtCollapseAPI {
  function init(instance: Ref<QTICollapse | undefined>, collapse: QTCollapse): void {
    instance.value?.init(collapse)
  }

  function getItem(
    instance: Ref<QTICollapse | undefined>,
    index: number
  ): QTICollapseItem | undefined {
    return instance.value?.getItem(index)
  }

  function expandItem(instance: Ref<QTICollapse | undefined>, index: number): void {
    instance.value?.expandItem(index)
  }

  function collapse(instance: Ref<QTICollapse | undefined>): void {
    instance.value?.collapse()
  }

  function expand(instance: Ref<QTICollapse | undefined>): void {
    instance.value?.expand()
  }

  return {
    ...viewAPI,
    init,
    getItem,
    expandItem,
    collapse,
    expand,
  }
}
