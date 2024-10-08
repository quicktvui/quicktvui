import {QtViewAPI} from "../view/QtViewAPI";
import {QTImageResizeMode} from "./QTImageResizeMode";
import {isRef, Ref} from "@vue/reactivity";
import {QTIImage} from "./QTIImage";
import {isString} from "../utils/type";
import {Native} from "@extscreen/es3-vue";
import {QT_API_MODULE, QT_CALL_UI_FUNCTION} from "../qt/QtAPIModule";

export interface QtImageAPI extends QtViewAPI {
  setSrc(instance: string | Ref<QTIImage | undefined>, url: string): void

  resizeMode(instance: string | Ref<QTIImage | undefined>, mode: QTImageResizeMode): void
}

export function createQtImageAPI(viewAPI: QtViewAPI): QtImageAPI {
  function setSrc(instance: string | Ref<QTIImage | undefined>, url: string): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'setSrc', [url]]);
    } else if (isRef(instance)) {
      instance.value?.setSrc(url)
    }
  }

  function resizeMode(instance: string | Ref<QTIImage | undefined>, mode: QTImageResizeMode): void {
    if (isString(instance)) {
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, [instance, 'resizeMode', [mode]]);
    } else if (isRef(instance)) {
      instance.value?.resizeMode(mode)
    }
  }

  return {
    ...viewAPI,
    setSrc,
    resizeMode,
  }
}
