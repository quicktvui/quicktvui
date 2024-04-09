import {Native} from "@extscreen/es3-vue";
import {QTIViewVisibility} from "../view/QTIViewVisibility";
import {Ref} from "@vue/reactivity";
import {ESIView} from "@extscreen/es3-component";

export default function (viewRef: Ref<ESIView | undefined>) {

  const dispatchFunctionBySid = (sid: string, funcName: string, args: any[]) => {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'dispatchFunctionBySid', [sid, funcName, args]);
    }
  }

  const requestFocus = () => {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'requestFocus');
    }
  }

  const clearFocus = () => {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'clearFocus');
    }
  }

  const requestFocusDirectly = () => {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'requestFocusDirectly');
    }
  }

  const setVisibility = (v: QTIViewVisibility) => {
    if (viewRef.value) {
      Native.callUIFunction(viewRef.value, 'changeVisibility', [v])
    }
  }

  return {
    dispatchFunctionBySid,
    requestFocus,
    clearFocus,
    requestFocusDirectly,
    setVisibility
  }
}
