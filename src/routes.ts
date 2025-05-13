import index from './views/index.vue'
import error from './views/error.vue'
import splash from './views/splash/es-splash-page.vue'
import QTAPINavPageList from './views/nav/index'
import QTButtonPageList from './components/qt-button'
import QTGridViewPageList from './components/qt-grid-view'
import QTListViewPageList from './components/qt-list-view'
import QTPosterPageList from './components/qt-poster'
import QTNavBarPageList from './components/qt-nav-bar'
import QTRowPageList from './components/qt-row'
import QTColumnPageList from './components/qt-column'
import QTViewPageList from './components/qt-view'
import QTTextPageList from './components/qt-text'
import QTImagePageList from './components/qt-image'
import TextViewPageList from './components/text-view'
import QTLoadingPageList from './components/qt-loading'
import QTAnimationPageList from './components/qt-animation'
import QTWebViewComponentList from './components/qt-web-view'
import QTX5WebViewComponentList from './components/qt-x5web-view'
import QTQRCodePageList from './components/qt-qr-code'
import QTProgressBarPageList from './components/qt-progress-bar'
import QTSeekBarPageList from './components/qt-seek-bar'
import QTSelectSeriesPageList from './components/qt-select-series'
import QTCollapsePageList from './components/qt-collapse'
import QTScrollViewPageList from './components/qt-scroll-view'
import QTAppIconPageList from './components/qt-app-icon'
import QTPluginViewPageList from './components/qt-plugin-view'
import QTAPIPageList from './components/qt-api'
import QTSwiperPageList from './components/qt-swiper'
import QTLottiePageList from './components/qt-lottie'
import QTIndicatorPageList from './components/qt-indicator-list-view'
import QTDialogPageList from './components/qt-dialog'

import {
  QTWaterfallItemPageList,
  QTWaterfallPageList,
  QTWaterfallSectionPageList,
} from './components/qt-waterfall'
import {
  QTTabsWaterfallItemPageList,
  QTTabsWaterfallPageList,
  QTTabsWaterfallSamplePageList,
  QTTabsWaterfallSectionPageList,
} from './components/qt-tabs-waterfall'
import QTClassifiedListViewPageList from './components/qt-classified-list-view'

import {
  QTTabsWaterfallDataBindingItemPageList,
  QTTabsWaterfallDataBindingPageList,
  QTTabsWaterfallDataBindingSamplePageList,
  QTTabsWaterfallDataBindingSectionPageList,
} from './components/qt-tabs-data-binding'

import QtModulePageList from './components/qt-module'
import QtComponentPageList from './components/qt-component'
import QTCanvasViewPageList from './components/qt-canvas-view'

import QTLongImagePageList from './components/qt-long-image'
//--------------------------------WEB------------------------------------------------
import WebVideoPageList from './components/web-video'
import WebAudioPageList from './components/web-audio'
import WebAudioServicePageList from './components/web-audio-service'
import WebHPageList from './components/web-h'

const routes = [
  {
    path: '/splash',
    name: 'splash',
    component: splash,
    launchMode: 'standard',
  },
  {
    path: '/index',
    name: 'index',
    component: index,
    launchMode: 'clearTask',
  },
  {
    path: '/error',
    name: 'error',
    component: error,
    launchMode: 'standard',
  },
  ...Object.keys(QTAPINavPageList).map((item) => ({
    path: `/nav/${item}`,
    name: `nav/${item}`,
    component: QTAPINavPageList[item].component,
  })),
  ...Object.keys(QTViewPageList).map((item) => ({
    path: `/view/${item}`,
    name: `view/${item}`,
    component: QTViewPageList[item].component,
  })),
  ...Object.keys(QTTextPageList).map((item) => ({
    path: `/text/${item}`,
    name: `text/${item}`,
    component: QTTextPageList[item].component,
  })),
  ...Object.keys(QTImagePageList).map((item) => ({
    path: `/image/${item}`,
    name: `image/${item}`,
    component: QTImagePageList[item].component,
  })),
  ...Object.keys(QTRowPageList).map((item) => ({
    path: `/row/${item}`,
    name: `row/${item}`,
    component: QTRowPageList[item].component,
  })),
  ...Object.keys(QTColumnPageList).map((item) => ({
    path: `/column/${item}`,
    name: `column/${item}`,
    component: QTColumnPageList[item].component,
  })),
  ...Object.keys(QTButtonPageList).map((item) => ({
    path: `/button/${item}`,
    name: `button/${item}`,
    component: QTButtonPageList[item].component,
  })),
  ...Object.keys(TextViewPageList).map((item) => ({
    path: `/text-view/${item}`,
    name: `text-view/${item}`,
    component: TextViewPageList[item].component,
  })),
  ...Object.keys(QTGridViewPageList).map((item) => ({
    path: `/grid-view/${item}`,
    name: `grid-view/${item}`,
    component: QTGridViewPageList[item].component,
  })),
  ...Object.keys(QTListViewPageList).map((item) => ({
    path: `/list-view/${item}`,
    name: `list-view/${item}`,
    component: QTListViewPageList[item].component,
  })),
  ...Object.keys(QTPosterPageList).map((item) => ({
    path: `/poster/${item}`,
    name: `poster/${item}`,
    component: QTPosterPageList[item].component,
  })),
  ...Object.keys(QTNavBarPageList).map((item) => ({
    path: `/nav-bar/${item}`,
    name: `nav-bar/${item}`,
    component: QTNavBarPageList[item].component,
  })),
  ...Object.keys(QTWaterfallPageList).map((item) => ({
    path: `/waterfall/${item}`,
    name: `waterfall/${item}`,
    component: QTWaterfallPageList[item].component,
  })),
  ...Object.keys(QTWaterfallItemPageList).map((item) => ({
    path: `/waterfall/${item}`,
    name: `waterfall/${item}`,
    component: QTWaterfallItemPageList[item].component,
  })),
  ...Object.keys(QTWaterfallSectionPageList).map((item) => ({
    path: `/waterfall/${item}`,
    name: `waterfall/${item}`,
    component: QTWaterfallSectionPageList[item].component,
  })),
  ...Object.keys(QTTabsWaterfallPageList).map((item) => ({
    path: `/tabs-waterfall/${item}`,
    name: `tabs-waterfall/${item}`,
    component: QTTabsWaterfallPageList[item].component,
  })),
  ...Object.keys(QTTabsWaterfallSectionPageList).map((item) => ({
    path: `/tabs-waterfall/${item}`,
    name: `tabs-waterfall/${item}`,
    component: QTTabsWaterfallSectionPageList[item].component,
  })),
  ...Object.keys(QTTabsWaterfallItemPageList).map((item) => ({
    path: `/tabs-waterfall/${item}`,
    name: `tabs-waterfall/${item}`,
    component: QTTabsWaterfallItemPageList[item].component,
  })),
  ...Object.keys(QTTabsWaterfallSamplePageList).map((item) => ({
    path: `/tabs-waterfall/${item}`,
    name: `tabs-waterfall/${item}`,
    component: QTTabsWaterfallSamplePageList[item].component,
  })),

  //----------------------------Tabs 数据绑定------------------------------------
  ...Object.keys(QTTabsWaterfallDataBindingPageList).map((item) => ({
    path: `/tabs-data-binding/${item}`,
    name: `tabs-data-binding/${item}`,
    component: QTTabsWaterfallDataBindingPageList[item].component,
  })),
  ...Object.keys(QTTabsWaterfallDataBindingSectionPageList).map((item) => ({
    path: `/tabs-data-binding/${item}`,
    name: `tabs-data-binding/${item}`,
    component: QTTabsWaterfallDataBindingSectionPageList[item].component,
  })),
  ...Object.keys(QTTabsWaterfallDataBindingItemPageList).map((item) => ({
    path: `/tabs-data-binding/${item}`,
    name: `tabs-data-binding/${item}`,
    component: QTTabsWaterfallDataBindingItemPageList[item].component,
  })),
  ...Object.keys(QTTabsWaterfallDataBindingSamplePageList).map((item) => ({
    path: `/tabs-data-binding/${item}`,
    name: `tabs-data-binding/${item}`,
    component: QTTabsWaterfallDataBindingSamplePageList[item].component,
  })),
  //----------------------------------------------------------------------------
  ...Object.keys(QTClassifiedListViewPageList).map((item) => ({
    path: `/classified-list-view/${item}`,
    name: `classified-list-view/${item}`,
    component: QTClassifiedListViewPageList[item].component,
  })),

  ...Object.keys(QTLoadingPageList).map((item) => ({
    path: `/loading${item}`,
    name: `loading/${item}`,
    component: QTLoadingPageList[item].component,
  })),
  ...Object.keys(QTAnimationPageList).map((item) => ({
    path: `/animation${item}`,
    name: `animation/${item}`,
    component: QTAnimationPageList[item].component,
  })),
  ...Object.keys(QTWebViewComponentList).map((item) => ({
    path: `/webview${item}`,
    name: `webview/${item}`,
    component: QTWebViewComponentList[item].component,
  })),
  ...Object.keys(QTX5WebViewComponentList).map((item) => ({
    path: `/x5webview${item}`,
    name: `x5webview/${item}`,
    component: QTX5WebViewComponentList[item].component,
  })),
  ...Object.keys(QTQRCodePageList).map((item) => ({
    path: `/qrcode${item}`,
    name: `qrcode/${item}`,
    component: QTQRCodePageList[item].component,
  })),
  ...Object.keys(QTSeekBarPageList).map((item) => ({
    path: `/seekbar${item}`,
    name: `seekbar/${item}`,
    component: QTSeekBarPageList[item].component,
  })),
  ...Object.keys(QTProgressBarPageList).map((item) => ({
    path: `/progressbar${item}`,
    name: `progressbar/${item}`,
    component: QTProgressBarPageList[item].component,
  })),
  ...Object.keys(QTSelectSeriesPageList).map((item) => ({
    path: `/select-series${item}`,
    name: `select-series/${item}`,
    component: QTSelectSeriesPageList[item].component,
  })),
  ...Object.keys(QTCollapsePageList).map((item) => ({
    path: `/collapse${item}`,
    name: `collapse/${item}`,
    component: QTCollapsePageList[item].component,
  })),
  ...Object.keys(QTScrollViewPageList).map((item) => ({
    path: `/scroll-view${item}`,
    name: `scroll-view/${item}`,
    component: QTScrollViewPageList[item].component,
  })),
  ...Object.keys(QTAppIconPageList).map((item) => ({
    path: `/qt-app-icon${item}`,
    name: `qt-app-icon/${item}`,
    component: QTAppIconPageList[item].component,
  })),
  ...Object.keys(QTPluginViewPageList).map((item) => ({
    path: `/plugin-view${item}`,
    name: `plugin-view/${item}`,
    component: QTPluginViewPageList[item].component,
  })),
  ...Object.keys(QTAPIPageList).map((item) => ({
    path: `/api${item}`,
    name: `api/${item}`,
    component: QTAPIPageList[item].component,
  })),
  ...Object.keys(QTSwiperPageList).map((item) => ({
    path: `/swiper${item}`,
    name: `swiper/${item}`,
    component: QTSwiperPageList[item].component,
  })),
  ...Object.keys(QTLottiePageList).map((item) => ({
    path: `/lottie${item}`,
    name: `lottie/${item}`,
    component: QTLottiePageList[item].component,
  })),
  ...Object.keys(QTIndicatorPageList).map((item) => ({
    path: `/qt-indicator-list${item}`,
    name: `qt-indicator-list/${item}`,
    component: QTIndicatorPageList[item].component,
  })),
  ...Object.keys(QTSwiperPageList).map((item) => ({
    path: `/swiper${item}`,
    name: `swiper/${item}`,
    component: QTSwiperPageList[item].component,
  })),
  ...Object.keys(QTLottiePageList).map((item) => ({
    path: `/lottie${item}`,
    name: `lottie/${item}`,
    component: QTLottiePageList[item].component,
  })),
  ...Object.keys(QtModulePageList).map((item) => ({
    path: `/module/${item}`,
    name: `module/${item}`,
    component: QtModulePageList[item].component,
  })),
  ...Object.keys(QtComponentPageList).map((item) => ({
    path: `/component/${item}`,
    name: `component/${item}`,
    component: QtComponentPageList[item].component,
  })),
  ...Object.keys(QTCanvasViewPageList).map((item) => ({
    path: `/canvas/${item}`,
    name: `canvas/${item}`,
    component: QTCanvasViewPageList[item].component,
  })),
  ...Object.keys(QTLongImagePageList).map((item) => ({
    path: `/long-image/${item}`,
    name: `long-image/${item}`,
    component: QTLongImagePageList[item].component,
  })),
  ...Object.keys(QTDialogPageList).map((item) => ({
    path: `/dialog/${item}`,
    name: `dialog/${item}`,
    component: QTDialogPageList[item].component,
  })),
  //------------------------------------------------------------------
  ...Object.keys(WebVideoPageList).map((item) => ({
    path: `/web-video/${item}`,
    name: `web-video/${item}`,
    component: WebVideoPageList[item].component,
  })),
  ...Object.keys(WebAudioPageList).map((item) => ({
    path: `/web-audio/${item}`,
    name: `web-audio/${item}`,
    component: WebAudioPageList[item].component,
  })),
  ...Object.keys(WebAudioServicePageList).map((item) => ({
    path: `/web-audio-service/${item}`,
    name: `web-audio-service/${item}`,
    component: WebAudioServicePageList[item].component,
  })),
  ...Object.keys(WebHPageList).map((item) => ({
    path: `/web-h/${item}`,
    name: `web-h/${item}`,
    component: WebHPageList[item].component,
  })),
]

export default routes
