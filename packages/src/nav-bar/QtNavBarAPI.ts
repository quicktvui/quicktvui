import {QtViewAPI} from "../view/QtViewAPI";
import {Ref} from "@vue/reactivity";
import {QTNavBar} from "./QTNavBar";
import {QTINavBar} from "./QTINavBar";

export interface QtNavBarAPI extends QtViewAPI {

  init(instance: Ref<QTINavBar | undefined>, navBar: QTNavBar): void

  scrollToPosition(instance: Ref<QTINavBar | undefined>, index: number): void

  scrollToTop(instance: Ref<QTINavBar | undefined>): void
}

export function createQtNavBarAPI(viewAPI: QtViewAPI): QtNavBarAPI {

  function init(instance: Ref<QTINavBar | undefined>, navBar: QTNavBar): void {
    instance.value?.init(navBar)
  }

  function scrollToPosition(instance: Ref<QTINavBar | undefined>, index: number): void {
    instance.value?.scrollToPosition(index)
  }

  function scrollToTop(instance: Ref<QTINavBar | undefined>): void {
    instance.value?.scrollToTop()
  }

  return {
    init,
    scrollToPosition,
    scrollToTop,
    ...viewAPI
  }
}
