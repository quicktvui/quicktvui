import {createQtViewAPI, QtViewAPI} from "../view/QtViewAPI";
import {createQtWebViewAPI, QtWebViewAPI} from "../webview/QtWebViewAPI";
import {createQtListViewAPI, QtListViewAPI} from "../list-view/QtListViewAPI";
import {createQtBaseListViewAPI, QtBaseListViewAPI} from "../list/QtBaseListViewAPI";
import {createQtGridViewAPI, QtGridViewAPI} from "../grid-view/QtGridViewAPI";
import {createQtWaterfallAPI, QtWaterfallAPI} from "../waterfall/QtWaterfallAPI";
import {createQtImageAPI, QtImageAPI} from "../image/QtImageAPI";

export interface QtAPI {
  view: QtViewAPI
  webView: QtWebViewAPI
  listView: QtListViewAPI
  gridView: QtGridViewAPI
  waterfall: QtWaterfallAPI
  image: QtImageAPI
}

export function createQtAPI(): QtAPI {

  const viewAPI: QtViewAPI = createQtViewAPI()
  //
  const baseListViewAPI: QtBaseListViewAPI = createQtBaseListViewAPI()
  const listViewAPI: QtListViewAPI = createQtListViewAPI(viewAPI, baseListViewAPI)
  const gridViewAPI: QtGridViewAPI = createQtGridViewAPI(viewAPI, baseListViewAPI)
  const waterfallAPI: QtWaterfallAPI = createQtWaterfallAPI(viewAPI, baseListViewAPI)
  //
  const imageAPI: QtImageAPI = createQtImageAPI(viewAPI)
  const webViewAPI: QtWebViewAPI = createQtWebViewAPI(viewAPI)

  return {
    view: viewAPI,
    webView: webViewAPI,
    listView: listViewAPI,
    gridView: gridViewAPI,
    waterfall: waterfallAPI,
    image: imageAPI
  }
}

export const QT_API_MODULE = 'ExtendModule'
export const QT_CALL_UI_FUNCTION = 'callUIFunction'
export const QT_CALL_UI_FUNCTION_WITH_PROMISE = 'callUIFunctionWithPromise'

