import {QtViewAPI} from "../view/QtViewAPI";
import {Native} from "@extscreen/es3-vue";

export interface QtWebViewAPI extends QtViewAPI {
  loadUrl(sid: string, url: string): void
}

export function createQtWebViewAPI(viewAPI: QtViewAPI): QtWebViewAPI {
  console.log("------------createQtWebViewAPI----------->>>>")

  function loadUrl(sid: string, url: string): void {
    console.log("------------loadUrl------xxxx----->>>>", sid, url)
    Native.callNative('ExtendModule', 'callUIFunction', sid, 'loadUrl', [url]);
  }

  return {
    loadUrl,
    ...viewAPI
  }
}
