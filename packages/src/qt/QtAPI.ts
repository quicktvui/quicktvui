import {createQtViewAPI, QtViewAPI} from "../view/QtViewAPI";
import {createQtWebViewAPI, QtWebViewAPI} from "../webview/QtWebViewAPI";

export interface QtAPI {
  view: QtViewAPI
  webView: QtWebViewAPI
}

export function createQtAPI(): QtAPI {

  const viewAPI: QtViewAPI = createQtViewAPI()
  const webViewAPI: QtWebViewAPI = createQtWebViewAPI(viewAPI)

  return {
    view: viewAPI,
    webView: webViewAPI
  }
}
