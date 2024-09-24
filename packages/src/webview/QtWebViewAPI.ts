import {QtViewAPI} from "../view/QtViewAPI";
import {Native} from "@extscreen/es3-vue";
import {isRef, Ref} from "@vue/reactivity";
import {QTIWebView} from "./QTIWebView";

export interface QtWebViewAPI extends QtViewAPI {
  loadUrl(sid: string | Ref<QTIWebView | undefined>, url: string): void
}

export function createQtWebViewAPI(viewAPI: QtViewAPI): QtWebViewAPI {

  function loadUrl(instance: string | Ref<QTIWebView | undefined>, url: string): void {
    if (instance instanceof String) {
      console.log("---------loadUrl----------String------>>>>>")
      Native.callNative('ExtendModule', 'callUIFunction', instance, 'loadUrl', [url]);
    } else if (isRef(instance)) {
      console.log("---------loadUrl----------Ref------>>>>>")
      instance.value?.loadUrl(url)
    }else{
      console.log("---------loadUrl----------other------>>>>>")
    }
  }

  return {
    loadUrl,
    ...viewAPI
  }
}
