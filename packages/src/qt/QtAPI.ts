import {createQtViewAPI, QtViewAPI} from "../view/QtViewAPI";
import {createQtWebViewAPI, QtWebViewAPI} from "../webview/QtWebViewAPI";
import {createQtListViewAPI, QtListViewAPI} from "../list-view/QtListViewAPI";
import {createQtBaseListViewAPI, QtBaseListViewAPI} from "../list/QtBaseListViewAPI";

export interface QtAPI {
  view: QtViewAPI
  webView: QtWebViewAPI
  listView: QtListViewAPI
}

export function createQtAPI(): QtAPI {

  const viewAPI: QtViewAPI = createQtViewAPI()
  const baseListViewAPI: QtBaseListViewAPI = createQtBaseListViewAPI()
  //
  const webViewAPI: QtWebViewAPI = createQtWebViewAPI(viewAPI)
  const listViewAPI: QtListViewAPI = createQtListViewAPI(viewAPI, baseListViewAPI)

  return {
    view: viewAPI,
    webView: webViewAPI,
    listView: listViewAPI
  }
}

export const QT_API_MODULE = 'ExtendModule'
export const QT_CALL_UI_FUNCTION = 'callUIFunction'
export const QT_CALL_UI_FUNCTION_WITH_PROMISE = 'callUIFunctionWithPromise'

