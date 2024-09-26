import {QtViewAPI} from "../view/QtViewAPI";
import {isRef, Ref} from "@vue/reactivity";
import {isString} from "../utils/type";
import {Native} from "@extscreen/es3-vue";
import {QT_API_MODULE, QT_CALL_UI_FUNCTION} from "../qt/QtAPI";
import {QTIAppIcon} from "./QTIAppIcon";

export interface QtAppIconAPI extends QtViewAPI {

  setPackageName(instance: string | Ref<QTIAppIcon | undefined>, packageName: string): void

  setRoundingRadius(instance: string | Ref<QTIAppIcon | undefined>, roundingRadius: number): void
}

export function createQtAppIconAPI(viewAPI: QtViewAPI): QtAppIconAPI {

  function setPackageName(instance: string | Ref<QTIAppIcon | undefined>, packageName: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setPackageName', [packageName]]);
    } else if (isRef(instance)) {
      instance.value?.setPackageName(packageName)
    }
  }

  function setRoundingRadius(instance: string | Ref<QTIAppIcon | undefined>, roundingRadius: number): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setRoundingRadius', [roundingRadius]]);
    } else if (isRef(instance)) {
      instance.value?.setRoundingRadius(roundingRadius)
    }
  }

  return {
    setPackageName,
    setRoundingRadius,
    ...viewAPI
  }
}
