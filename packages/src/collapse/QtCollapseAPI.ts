import {QtViewAPI} from "../view/QtViewAPI";
import {Ref} from "@vue/reactivity";
import {QTICollapse} from "./core/QTICollapse";
import {QTICollapseItem} from "./core/QTICollapseItem";
import {QTCollapse} from "./core/QTCollapse";

export interface QtCollapseAPI extends QtViewAPI {

  init(instance: Ref<QTICollapse | undefined>, collapse: QTCollapse): void

  getItem(instance: Ref<QTICollapse | undefined>, index: number): QTICollapseItem | undefined

  expandItem(instance: Ref<QTICollapse | undefined>, index: number): void

  collapse(instance: Ref<QTICollapse | undefined>): void

  expand(instance: Ref<QTICollapse | undefined>): void

}

export function createQtCollapseAPI(viewAPI: QtViewAPI): QtCollapseAPI {

  function init(instance: Ref<QTICollapse | undefined>, collapse: QTCollapse): void {
    instance.value?.init(collapse)
  }

  function getItem(instance: Ref<QTICollapse | undefined>, index: number): QTICollapseItem | undefined {
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
    init,
    getItem,
    expandItem,
    collapse,
    expand,
    ...viewAPI
  }
}
