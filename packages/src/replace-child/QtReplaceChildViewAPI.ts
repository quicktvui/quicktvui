import {QtViewAPI} from "../view/QtViewAPI";
import {isRef, Ref} from "@vue/reactivity";
import {isString} from "../utils/type";
import {Native} from "@extscreen/es3-vue";
import {QT_API_MODULE, QT_CALL_UI_FUNCTION} from "../qt/QtAPIModule";
import {QTIReplaceChildView} from "./QTIReplaceChildView";

export interface QtReplaceChildViewAPI extends QtViewAPI {

  setChildSID(instance: string | Ref<QTIReplaceChildView | undefined>, sid: string): void
}

export function createQtReplaceChildViewAPI(viewAPI: QtViewAPI): QtReplaceChildViewAPI {

  function setChildSID(instance: string | Ref<QTIReplaceChildView | undefined>, sid: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setChildSID', [sid]]);
    } else if (isRef(instance) && instance.value) {
      instance.value?.setChildSID(sid)
    }
  }

  return {
    ...viewAPI,
    setChildSID,
  }
}
