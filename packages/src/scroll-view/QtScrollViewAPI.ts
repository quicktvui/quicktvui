import {isRef, Ref} from "@vue/reactivity";
import {isString} from "../utils/type";
import {Native} from "@extscreen/es3-vue";
import {QT_API_MODULE, QT_CALL_UI_FUNCTION} from "../qt/QtAPIModule";
import {QTIScrollView} from "./QTIScrollView";
import {QtBaseViewAPI} from "../base/QtBaseViewAPI";

export interface QtScrollViewAPI extends QtBaseViewAPI {

  scrollTo(instance: string | Ref<QTIScrollView | undefined>, x: number, y: number): void

  scrollToWithOptions(instance: string | Ref<QTIScrollView | undefined>, x: number, y: number, duration: number): void

}

export function createQtScrollViewAPI(viewAPI: QtBaseViewAPI): QtScrollViewAPI {

  function scrollTo(instance: string | Ref<QTIScrollView | undefined>, x: number, y: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scrollTo', [x, y]]);
    } else if (isRef(instance) && instance.value) {
      instance.value?.scrollTo(x, y)
    }
  }

  function scrollToWithOptions(instance: string | Ref<QTIScrollView | undefined>, x: number, y: number, duration: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'scrollToWithOptions', [x, y, duration]]);
    } else if (isRef(instance) && instance.value) {
      instance.value?.scrollToWithOptions(x, y, duration)
    }
  }

  return {
    ...viewAPI,
    scrollTo,
    scrollToWithOptions,
  }
}
