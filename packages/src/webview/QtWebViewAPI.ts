import {QtViewAPI} from "../view/QtViewAPI";
import {Native} from "@extscreen/es3-vue";
import {isRef, Ref} from "@vue/reactivity";
import {QTIWebView} from "./QTIWebView";
import {QT_CALL_UI_FUNCTION, QT_API_MODULE} from "../qt/QtAPI";
import {isString} from "../utils/type";

export interface QtWebViewAPI extends QtViewAPI {
  loadUrl(sid: string | Ref<QTIWebView | undefined>, url: string): void
}

export function createQtWebViewAPI(viewAPI: QtViewAPI): QtWebViewAPI {

  function loadUrl(instance: string | Ref<QTIWebView | undefined>, url: string): void {
    if (isString(instance)) {
      console.log("---------loadUrl----------String------>>>>>")
      Native.callNative(QT_API_MODULE, QT_CALL_UI_FUNCTION, instance, 'loadUrl', [url]);
    } else if (isRef(instance)) {
      console.log("---------loadUrl----------Ref------>>>>>")
      instance.value?.loadUrl(url)
    } else {
      console.log("---------loadUrl----------other------>>>>>")
    }
  }

  return {
    loadUrl,
    ...viewAPI
  }
}
