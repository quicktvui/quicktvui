import {createQtViewAPI, QtViewAPI} from "../view/QtViewAPI";
import {createQtWebViewAPI, QtWebViewAPI} from "../webview/QtWebViewAPI";
import {createQtListViewAPI, QtListViewAPI} from "../list-view/QtListViewAPI";
import {createQtBaseListViewAPI, QtBaseListViewAPI} from "../list/QtBaseListViewAPI";
import {createQtGridViewAPI, QtGridViewAPI} from "../grid-view/QtGridViewAPI";
import {createQtWaterfallAPI, QtWaterfallAPI} from "../waterfall/QtWaterfallAPI";
import {createQtImageAPI, QtImageAPI} from "../image/QtImageAPI";
import {createQtULAPI, QtULAPI} from "../ul/QtULAPI";
import {createQtScrollViewAPI, QtScrollViewAPI} from "../scroll-view/QtScrollViewAPI";
import {createQtTextAPI, QtTextAPI} from "../text/QtTextAPI";
import {createQtReplaceChildViewAPI, QtReplaceChildViewAPI} from "../replace-child/QtReplaceChildViewAPI";
import {createQtAnimationAPI, QtAnimationAPI} from "../animation/QtAnimationAPI";
import {createQtAppIconAPI, QtAppIconAPI} from "../app/QtAppIconAPI";
import {createQtClassifiedListViewAPI, QtClassifiedListViewAPI} from "../classified-list-view/QtClassifiedListViewAPI";
import {createQtCollapseAPI, QtCollapseAPI} from "../collapse/QtCollapseAPI";
import {createQtListItemAPI, QtListItemAPI} from "../list-item/QtListItemAPI";
import {createQtLottieViewAPI, QtLottieViewAPI} from "../lottie/QtLottieViewAPI";
import {createQtNavBarAPI, QtNavBarAPI} from "../nav-bar/QtNavBarAPI";
import {createQtPluginViewAPI, QtPluginViewAPI} from "../plugin/QtPluginViewAPI";
import {createQtProgressBarAPI, QtProgressBarAPI} from "../progressbar/QtProgressBarAPI";
import {createQtSeekBarAPI, QtSeekBarAPI} from "../seekbar/QtSeekBarAPI";
import {createQtMediaSeriesAPI, QtMediaSeriesAPI} from "../series/QtMediaSeriesAPI";

export interface QtAPI {
  view: QtViewAPI
  webView: QtWebViewAPI
  listView: QtListViewAPI
  gridView: QtGridViewAPI
  waterfall: QtWaterfallAPI
  image: QtImageAPI
  ul: QtULAPI
  scrollView: QtScrollViewAPI
  text: QtTextAPI
  replaceChildView: QtReplaceChildViewAPI
  animation: QtAnimationAPI
  appIcon: QtAppIconAPI
  classifiedListView: QtClassifiedListViewAPI
  collapse: QtCollapseAPI
  listItem: QtListItemAPI
  lottieView: QtLottieViewAPI
  navBar: QtNavBarAPI
  pluginView: QtPluginViewAPI
  progressBar: QtProgressBarAPI
  seekBar: QtSeekBarAPI
  mediaSeries: QtMediaSeriesAPI
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
  const ulAPI: QtULAPI = createQtULAPI(viewAPI)
  const scrollViewAPI: QtScrollViewAPI = createQtScrollViewAPI(viewAPI)
  const textAPI: QtTextAPI = createQtTextAPI(viewAPI)
  const replaceChildViewAPI: QtReplaceChildViewAPI = createQtReplaceChildViewAPI(viewAPI)
  const animationAPI: QtAnimationAPI = createQtAnimationAPI(viewAPI)
  const appIconAPI: QtAppIconAPI = createQtAppIconAPI(viewAPI)
  const classifiedListViewAPI: QtClassifiedListViewAPI = createQtClassifiedListViewAPI(viewAPI)
  const collapseAPI: QtCollapseAPI = createQtCollapseAPI(viewAPI)
  const listItemAPI: QtListItemAPI = createQtListItemAPI(viewAPI)
  const lottieViewAPI: QtLottieViewAPI = createQtLottieViewAPI(viewAPI)
  const navBarAPI: QtNavBarAPI = createQtNavBarAPI(viewAPI)
  const pluginViewAPI: QtPluginViewAPI = createQtPluginViewAPI(viewAPI)
  const progressBarAPI: QtProgressBarAPI = createQtProgressBarAPI(viewAPI)
  const seekBarAPI: QtSeekBarAPI = createQtSeekBarAPI(viewAPI)
  const mediaSeriesAPI: QtMediaSeriesAPI = createQtMediaSeriesAPI(viewAPI)

  return {
    view: viewAPI,
    webView: webViewAPI,
    listView: listViewAPI,
    gridView: gridViewAPI,
    waterfall: waterfallAPI,
    image: imageAPI,
    ul: ulAPI,
    scrollView: scrollViewAPI,
    text: textAPI,
    replaceChildView: replaceChildViewAPI,
    animation: animationAPI,
    appIcon: appIconAPI,
    classifiedListView: classifiedListViewAPI,
    collapse: collapseAPI,
    listItem: listItemAPI,
    lottieView: lottieViewAPI,
    navBar: navBarAPI,
    pluginView: pluginViewAPI,
    progressBar: progressBarAPI,
    seekBar: seekBarAPI,
    mediaSeries: mediaSeriesAPI
  }
}

export const QT_API_MODULE = 'ExtendModule'
export const QT_CALL_UI_FUNCTION = 'callUIFunction'
export const QT_CALL_UI_FUNCTION_WITH_PROMISE = 'callUIFunctionWithPromise'

