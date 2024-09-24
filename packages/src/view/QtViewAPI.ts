import {QTIViewVisibility} from "./QTIViewVisibility";
import {Native} from "@extscreen/es3-vue";
import {Ref, isRef} from "@vue/reactivity";
import {QTIView} from "./QTIView";

export interface QtViewAPI {

  requestFocus(instance: string | Ref<QTIView | undefined>)

  clearFocus(instance: string | Ref<QTIView | undefined>)

  requestFocusDirectly(instance: string | Ref<QTIView | undefined>)

  setVisibility(instance: string | Ref<QTIView | undefined>, v: QTIViewVisibility)

}

export function createQtViewAPI(): QtViewAPI {

  function requestFocus(instance: string | Ref<QTIView | undefined>) {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'requestFocus', []]);
    } else if (isRef(instance)) {
      instance.value?.requestFocus()
    }
  }

  function clearFocus(instance: string | Ref<QTIView | undefined>) {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'clearFocus', []]);
    } else if (isRef(instance)) {
      instance.value?.clearFocus()
    }
  }

  function requestFocusDirectly(instance: string | Ref<QTIView | undefined>) {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'requestFocusDirectly', []]);
    } else if (isRef(instance)) {
      instance.value?.requestFocusDirectly()
    }
  }

  function setVisibility(instance: string | Ref<QTIView | undefined>, v: QTIViewVisibility) {
    if (instance instanceof String) {
      Native.callNative('ExtendModule', 'callFunction', [instance, 'changeVisibility', [v]]);
    } else if (isRef(instance)) {
      instance.value?.setVisibility(v)
    }
  }


  return {
    requestFocus,
    clearFocus,
    requestFocusDirectly,
    setVisibility,
  }
}
