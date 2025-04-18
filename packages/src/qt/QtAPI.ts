import { createQtBaseViewAPI, QtBaseViewAPI } from '../base/QtBaseViewAPI'
import { createQtViewAPI, QtViewAPI } from '../view/QtViewAPI'
import { createQtWebViewAPI, QtWebViewAPI } from '../webview/QtWebViewAPI'
import { createQtListViewAPI, QtListViewAPI } from '../list-view/QtListViewAPI'
import { createQtBaseListViewAPI, QtBaseListViewAPI } from '../list/QtBaseListViewAPI'
import { createQtGridViewAPI, QtGridViewAPI } from '../grid-view/QtGridViewAPI'
import { createQtWaterfallAPI, QtWaterfallAPI } from '../waterfall/QtWaterfallAPI'
import { createQtImageAPI, QtImageAPI } from '../image/QtImageAPI'
import { createQtULAPI, QtULAPI } from '../ul/QtULAPI'
import { createQtScrollViewAPI, QtScrollViewAPI } from '../scroll-view/QtScrollViewAPI'
import { createQtTextAPI, QtTextAPI } from '../text/QtTextAPI'
import {
  createQtReplaceChildViewAPI,
  QtReplaceChildViewAPI,
} from '../replace-child/QtReplaceChildViewAPI'
import { createQtAnimationAPI, QtAnimationAPI } from '../animation/QtAnimationAPI'
import { createQtAppIconAPI, QtAppIconAPI } from '../app/QtAppIconAPI'
import {
  createQtClassifiedListViewAPI,
  QtClassifiedListViewAPI,
} from '../classified-list-view/QtClassifiedListViewAPI'
import { createQtCollapseAPI, QtCollapseAPI } from '../collapse/QtCollapseAPI'
import { createQtListItemAPI, QtListItemAPI } from '../list-item/QtListItemAPI'
import { createQtLottieViewAPI, QtLottieViewAPI } from '../lottie/QtLottieViewAPI'
import { createQtNavBarAPI, QtNavBarAPI } from '../nav-bar/QtNavBarAPI'
import { createQtPluginViewAPI, QtPluginViewAPI } from '../plugin/QtPluginViewAPI'
import { createQtProgressBarAPI, QtProgressBarAPI } from '../progressbar/QtProgressBarAPI'
import { createQtSeekBarAPI, QtSeekBarAPI } from '../seekbar/QtSeekBarAPI'
import { createQtMediaSeriesAPI, QtMediaSeriesAPI } from '../series/QtMediaSeriesAPI'
import { createQtTabAPI, QtTabAPI } from '../tab/QtTabAPI'
import { createQtX5WebViewAPI, QtX5WebViewAPI } from '../x5webview/QtX5WebViewAPI'
import { createQtButtonAPI, QtButtonAPI } from '../button/QtButtonAPI'
import { createQtColumnAPI, QtColumnAPI } from '../column/QtColumnAPI'
import { createQtLoadingAPI, QtLoadingAPI } from '../loading/QtLoadingAPI'
import { createQtPosterAPI, QtPosterAPI } from '../poster/QtPosterAPI'
import { createQtQRCodeAPI, QtQRCodeAPI } from '../qrcode/QtQRCodeAPI'
import { createQtRowAPI, QtRowAPI } from '../row/QtRowAPI'
import { createQtVirtualViewAPI, QtVirtualViewAPI } from '../utils/QtVirtualViewAPI'
import { createQtIndicatorViewAPI, QtIndicatorViewAPI } from '../list-indicator/QtIndicatorViewAPI'
import {
  ES,
  ESActionBar,
  ESAppList,
  ESAudio,
  ESBrightness,
  ESBroadcast,
  ESContentProvider,
  ESDevelop,
  ESDevice,
  ESDisplay,
  ESDownload,
  ESEventBus,
  ESFocus,
  ESIAC,
  ESLocalStorage,
  ESLocation,
  ESLog,
  ESLogUpload,
  ESNetwork,
  ESPermission,
  ESPlugin,
  ESPower,
  ESRuntime,
  ESService,
  ESShareData,
  ESToast,
  ESUpload,
  ESUsbDevice,
  ESXLog,
  log,
  es,
  develop,
  toast,
  storage,
  device,
  display,
  network,
  appList,
  power,
  permission,
  usbDevice,
  broadcast,
  audio,
  shareData,
  runtime,
  plugin,
  download,
  upload,
  actionBar,
  iac,
  location,
  focus,
  provider,
  eventBus,
  xlog,
  logUpload,
  brightness,
  service,
} from '@extscreen/es3-core'
import { createQtLongImageAPI, QtLongImageAPI } from '../long-image/QtLongImageAPI'

export interface QtAPI {
  div: QtViewAPI
  img: QtViewAPI
  li: QtViewAPI
  p: QtViewAPI
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
  tabs: QtTabAPI
  x5WebView: QtX5WebViewAPI
  button: QtButtonAPI
  column: QtColumnAPI
  loading: QtLoadingAPI
  longImage: QtLongImageAPI
  poster: QtPosterAPI
  qrCode: QtQRCodeAPI
  row: QtRowAPI
  virtualView: QtVirtualViewAPI
  indicator: QtIndicatorViewAPI
  log: ESLog
  es: ES
  develop: ESDevelop
  toast: ESToast
  storage: ESLocalStorage
  device: ESDevice
  display: ESDisplay
  network: ESNetwork
  appList: ESAppList
  power: ESPower
  permission: ESPermission
  usbDevice: ESUsbDevice
  broadcast: ESBroadcast
  audio: ESAudio
  shareData: ESShareData
  runtime: ESRuntime
  plugin: ESPlugin
  download: ESDownload
  upload: ESUpload
  actionBar: ESActionBar
  iac: ESIAC
  location: ESLocation
  focus: ESFocus
  provider: ESContentProvider
  eventBus: ESEventBus
  xlog: ESXLog
  logUpload: ESLogUpload
  brightness: ESBrightness
  service: ESService
}

export function createQtAPI(): QtAPI {
  //base
  const baseViewAPI: QtBaseViewAPI = createQtBaseViewAPI()
  const baseListViewAPI: QtBaseListViewAPI = createQtBaseListViewAPI()
  //------------------------------------------------------------------------
  //
  const viewAPI: QtViewAPI = createQtViewAPI(baseViewAPI)

  //
  const listViewAPI: QtListViewAPI = createQtListViewAPI(baseViewAPI, baseListViewAPI)
  const gridViewAPI: QtGridViewAPI = createQtGridViewAPI(baseViewAPI, baseListViewAPI)
  const waterfallAPI: QtWaterfallAPI = createQtWaterfallAPI(baseViewAPI, baseListViewAPI)
  const indicatorViewAPI: QtIndicatorViewAPI = createQtIndicatorViewAPI(
    baseViewAPI,
    baseListViewAPI
  )
  //
  const imageAPI: QtImageAPI = createQtImageAPI(baseViewAPI)
  const webViewAPI: QtWebViewAPI = createQtWebViewAPI(baseViewAPI)
  const x5WebViewAPI: QtX5WebViewAPI = createQtX5WebViewAPI(baseViewAPI)

  const ulAPI: QtULAPI = createQtULAPI(baseViewAPI)
  const scrollViewAPI: QtScrollViewAPI = createQtScrollViewAPI(baseViewAPI)
  const textAPI: QtTextAPI = createQtTextAPI(baseViewAPI)
  const replaceChildViewAPI: QtReplaceChildViewAPI = createQtReplaceChildViewAPI(baseViewAPI)
  const animationAPI: QtAnimationAPI = createQtAnimationAPI(baseViewAPI)
  const appIconAPI: QtAppIconAPI = createQtAppIconAPI(baseViewAPI)
  const classifiedListViewAPI: QtClassifiedListViewAPI = createQtClassifiedListViewAPI(baseViewAPI)
  const collapseAPI: QtCollapseAPI = createQtCollapseAPI(baseViewAPI)
  const listItemAPI: QtListItemAPI = createQtListItemAPI(baseViewAPI)
  const lottieViewAPI: QtLottieViewAPI = createQtLottieViewAPI(baseViewAPI)
  const navBarAPI: QtNavBarAPI = createQtNavBarAPI(baseViewAPI)
  const pluginViewAPI: QtPluginViewAPI = createQtPluginViewAPI(baseViewAPI)
  const progressBarAPI: QtProgressBarAPI = createQtProgressBarAPI(baseViewAPI)
  const seekBarAPI: QtSeekBarAPI = createQtSeekBarAPI(baseViewAPI)
  const mediaSeriesAPI: QtMediaSeriesAPI = createQtMediaSeriesAPI(baseViewAPI)
  const tabAPI: QtTabAPI = createQtTabAPI(baseViewAPI)
  const buttonAPI: QtButtonAPI = createQtButtonAPI(baseViewAPI)
  const columnAPI: QtColumnAPI = createQtColumnAPI(baseViewAPI)
  const loadingAPI: QtLoadingAPI = createQtLoadingAPI(baseViewAPI)
  const posterAPI: QtPosterAPI = createQtPosterAPI(baseViewAPI)
  const qrCodeAPI: QtQRCodeAPI = createQtQRCodeAPI(baseViewAPI)
  const rowAPI: QtRowAPI = createQtRowAPI(baseViewAPI)
  const virtualViewAPI: QtVirtualViewAPI = createQtVirtualViewAPI()
  const longImageAPI: QtLongImageAPI = createQtLongImageAPI(baseViewAPI)

  return {
    div: viewAPI,
    img: viewAPI,
    li: viewAPI,
    p: viewAPI,
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
    mediaSeries: mediaSeriesAPI,
    tabs: tabAPI,
    x5WebView: x5WebViewAPI,
    button: buttonAPI,
    column: columnAPI,
    loading: loadingAPI,
    longImage: longImageAPI,
    poster: posterAPI,
    qrCode: qrCodeAPI,
    row: rowAPI,
    virtualView: virtualViewAPI,
    indicator: indicatorViewAPI,
    log: log,
    es: es,
    develop: develop,
    toast: toast,
    storage: storage,
    device: device,
    display: display,
    network: network,
    appList: appList,
    power: power,
    permission: permission,
    usbDevice: usbDevice,
    broadcast: broadcast,
    audio: audio,
    shareData: shareData,
    runtime: runtime,
    plugin: plugin,
    download: download,
    upload: upload,
    actionBar: actionBar,
    iac: iac,
    location: location,
    focus: focus,
    provider: provider,
    eventBus: eventBus,
    xlog: xlog,
    logUpload: logUpload,
    brightness: brightness,
    service: service,
  }
}
