//-------------------------------------------------------------------------------
import View from "./view/index.vue";
import Text from "./text/index.vue";
import Image from "./image/index.vue";
import Column from "./column/index.vue";
import Row from "./row/index.vue";
import Button from "./button/index.vue";
import GridView from "./grid-view/index.vue";
import Poster from "./poster/index.vue";
import NavBar from "./nav-bar/index.vue";
import Waterfall from "./waterfall/index.vue";
import Tab from "./tab/index.vue";
import VueSection from "./section/index.vue";
import ClassifiedListView from "./classified-list-view/index.vue";
import QTMediaSeries from "./series/index.vue";
import QTCollapse from "./collapse/index.vue";

//
import {arrangeChildren4ListView} from "./utils/utils";
import {QTListViewItemDecoration} from "./list-view/core/QTListViewItemDecoration";
import {QTTabPage} from "./tab/QTTabPage";
//
import registerESListViewComponent from "./list-view/QTListViewComponent";
import registerESListItemComponent from "./list-item/ESListItemComponent";
import registerQTLoadingViewComponent from "./loading/QTLoadingView";
import registerQTWebView from "./webview/QTWebView";
import registerQTX5WebView from "./x5webview/QTX5WebView";
import registerQTQRCodeView from "./qrcode/QTQRCodeView";
import registerQTSeekBarView from "./seekbar/QTSeekBar";
import registerQTProgressBarView from "./progressbar/QTProgressBar";
import registerQTAnimation from "./animation/QTAnimation";
import registerQTDialog from "./dialog/QTDialog";
import registerQTScrollView from "./scroll-view/QTScrollView";
import registerQTLottieView from "./lottie/QTLottieView";
import {QTListViewItemState} from "./list-view/core/QTListViewItemState";
import registerAppIconView from "./app/QTAppIcon";
import registerQTIReplaceChildView from "./replace-child/QTReplaceChildView";


export {qtRef, qtWatchAll, qtGetParent} from "./qtListen/index";
import registerQTPluginView from "./plugin/QTPluginView";

const components = [
  View,
  Text,
  Image,
  Column,
  Row,
  Button,
  GridView,
  Poster,
  NavBar,
  Waterfall,
  Tab,
  ClassifiedListView,
  VueSection,
  QTMediaSeries,
  QTCollapse,
]

//---------------------------------------------------------------------------
import {createQtAPI, QtAPI} from "./qt/QtAPI";

declare global {
  var qt: QtAPI
}

export type {QTNativeParams} from './core/QTNativeParams'
export type {QTNativeMap} from './core/QTNativeParams'

//
export {QTDescendantFocusability} from './focus/QTDescendantFocusability'
export {QTFocusDescendant} from './focus/QTFocusDescendant'
export {QTFocusDirection} from './focus/QTFocusDirection'
export {QTFocusDirectionName} from './focus/QTFocusDirectionName'

//---------------------------------------------------------------------------

export const QuickTVUI = (Vue) => {
  registerQTLoadingViewComponent(Vue)
  registerESListViewComponent(Vue)
  registerESListItemComponent(Vue)
  registerQTWebView(Vue)
  registerQTX5WebView(Vue)
  registerQTQRCodeView(Vue)
  registerQTSeekBarView(Vue)
  registerQTProgressBarView(Vue)
  registerQTAnimation(Vue)
  registerQTDialog(Vue)
  registerQTScrollView(Vue)
  registerQTLottieView(Vue)
  registerAppIconView(Vue)
  registerQTPluginView(Vue)
  registerQTIReplaceChildView(Vue)

  for (let key in components) {
    Vue.component(components[key].name, components[key])
  }

  const qtAPI: QtAPI = createQtAPI()
  global.qt = qtAPI
}

//
export type {QTIGridView} from './grid-view/core/QTIGridView'
//
export type {QTIListView} from './list-view/core/QTIListView'

//View
export type {QTIView} from './view/QTIView'
export {QTIViewVisibility} from './view/QTIViewVisibility'
export type {QTViewEvent} from './view/QTViewEvent'
export type {QTViewState} from './view/QTViewState'
export type {QTPosition} from './core/QTPosition'

//text
export type {QTTextSpan} from './text/QTTextSpan'
export type {QTTextSpanAttribute} from './text/QTTextSpanAttribute'
export {QTTextSpanAttributeType} from './text/QTTextSpanAttributeType'

//
export {QTImageResizeMode} from './image/QTImageResizeMode'

//ul
export type {QTULInitPosition} from './ul/QTULInitPosition'
export type {QTIUL} from './ul/QTIUL'


//QTFocusable
export type {QTFocusable} from './core/QTFocusable'

//FlexStyle
export type {QTFlexStyleCoordinate} from './core/QTFlexStyleCoordinate'
export type {QTFlexStyleMargin} from './core/QTFlexStyleMargin'
export type {QTFlexStylePadding} from './core/QTFlexStylePadding'
export type {QTFlexStylePosition} from './core/QTFlexStylePosition'
export type {QTFlexStyleSpacing} from './core/QTFlexStyleSpacing'
export type {QTFlexStyleSize} from './core/QTFlexStyleSize'
export type {QTFlexStyleDecoration} from './core/QTFlexStyleDecoration'
export type {QTFlexStyleBackground} from './core/QTFlexStyleBackground'
export type {QTFlexStyleGradientBackground} from './core/QTFlexStyleGradientBackground'
export type {QTFlexStyleText} from './core/QTFlexStyleText'

//
export type {QTVisibility} from './core/QTVisibility'

//
export type {QTEventData} from './core/QTEventData'
export type {QTLocation} from './core/QTLocation'

//Poster
export type {QTPoster} from './poster/core/QTPoster'
export type {QTPosterCorner} from './poster/core/QTPosterCorner'
export type {QTPosterRipple} from './poster/core/QTPosterRipple'
export type {QTPosterShadow} from './poster/core/QTPosterShadow'
export type {QTPosterShimmer} from './poster/core/QTPosterShimmer'
export type {QTPosterTitle} from './poster/core/QTPosterTitle'

//Waterfall
export {QTWaterfallSectionType} from './waterfall/core/QTWaterfallSectionType'
export {QTWaterfallItemType} from './waterfall/core/QTWaterfallItemType'
export {QTScrollState} from './waterfall/core/QTScrollState'
export type {QTWaterfallSection} from './waterfall/core/QTWaterfallSection'
export type {QTWaterfallItem} from './waterfall/core/QTWaterfallItem'
export type {QTWaterfallTabItem} from './waterfall/core/QTWaterfallTabItem'
export type {QTWaterfall} from './waterfall/core/QTWaterfall'
export type {QTIWaterfall} from './waterfall/core/QTIWaterfall'
export type {QTWaterfallFlexStyle} from './waterfall/core/QTWaterfallFlexStyle'
export type {QTWaterfallPlaceholder} from './waterfall/core/QTWaterfallPlaceholder'
//
export type {QTWaterfallCardSection} from './waterfall/core/QTWaterfallCardSection'
export type {QTWaterfallCardItem} from './waterfall/core/QTWaterfallCardItem'
export type {QTWaterfallCardPlaceHolder} from './waterfall/core/QTWaterfallCardPlaceHolder'
export {QTWaterfallVisibleType} from './waterfall/core/QTWaterfallVisibleType'
//
export type {QTWaterfallPluginSection} from './waterfall/core/QTWaterfallPluginSection'
export type {QTWaterfallPluginItem} from './waterfall/core/QTWaterfallPluginItem'

//List
export type {QTListInitPosition} from './list/QTListInitPosition'

//ListView
export type {QTListViewItem} from './list-view/core/QTListViewItem'
export type {QTListViewItemDecoration} from './list-view/core/QTListViewItemDecoration'
export type {QTListViewItemFunctionParams} from './list-view/core/QTListViewItemFunctionParams'
export type {QTListViewItemState} from './list-view/core/QTListViewItemState'

//GridView
export type {QTGridViewItemFunctionParams} from './grid-view/core/QTGridViewItemFunctionParams'

//NavBar
export type {QTINavBar} from './nav-bar/QTINavBar'
export type {QTNavBarItem} from './nav-bar/QTNavBarItem'
export type {QTNavBar} from './nav-bar/QTNavBar'
export {QTNavBarItemType} from './nav-bar/QTNavBarItemType'


//Tab
export type {QTITab} from './tab/QTITab'
export type {QTTabPageData} from './tab/QTTabPageData'
export type {QTTab} from './tab/QTTab'

export type {QTTabItem} from './tab/QTTabItem'
export type {QTTabPage} from './tab/QTTabPage'

export {QTTabItemType} from './tab/QTTabItemType'
export {QTTabPageState} from './tab/QTTabPageState'
export type {QTTabEventParams} from './tab/QTTabEventParams'

//ClassifiedListView
export type {QTIClassifiedListView} from './classified-list-view/core/QTIClassifiedListView'
export type {QTClassifiedListViewItem} from './classified-list-view/core/QTClassifiedListViewItem'
export type {
  QTClassifiedListViewItemDecoration
} from './classified-list-view/core/QTClassifiedListViewItemDecoration'

export {
  arrangeChildren4ListView
}

//QTWebView
export type {QTIWebView} from './webview/QTIWebView'

//QTX5WebView
export type {QTIX5WebView} from './x5webview/QTIX5WebView'

//QTISeekBar
export type {QTISeekBar} from './seekbar/QTISeekBar'
export {QTSeekBarMode} from './seekbar/QTSeekBarMode'
export {QTSeekBarGravity} from './seekbar/QTSeekBarGravity'
export {QTSeekBarIndicatorMode} from './seekbar/QTSeekBarIndicatorMode'
export {QTSeekBarTickMarkMode} from './seekbar/QTSeekBarTickMarkMode'
export {QTSeekBarTickMarkGravity} from './seekbar/QTSeekBarTickMarkGravity'
export {QTSeekBarTickMarkLayoutGravity} from './seekbar/QTSeekBarTickMarkLayoutGravity'

//QTIProgressBar
export type {QTIProgressBar} from './progressbar/QTIProgressBar'

//--------------------------------QTIAnimation---------------------------------
export type {
  QTIAnimation
} from './animation/QTIAnimation'

export {
  QTAnimationInterpolatorType,
  QTAnimationPropertyName,
  QTAnimationRepeatMode,
  QTAnimationValueType
} from './animation/types'


export type {
  QTAnimationInterpolator,
  QTAnimatorId
} from './animation/types'

//--------------------------------QTMediaSeries------------------------------
export type {QTIMediaSeries} from './series/QTIMediaSeries'
export type {QTMediaSeries} from './series/QTMediaSeries'
export type {QTMediaSeriesGroup} from './series/QTMediaSeriesGroup'
export type {QTMediaSeriesGroupStyle} from './series/QTMediaSeriesGroupStyle'
export type {QTMediaSeriesDataStyle} from './series/QTMediaSeriesDataStyle'
export type {QTMediaSeriesData} from './series/QTMediaSeriesData'
export type {QTMediaSeriesEvent} from './series/QTMediaSeriesEvent'
export {QTMediaSeriesType} from './series/QTMediaSeriesType'
export {QTMediaSeriesStyleType} from './series/QTMediaSeriesStyleType'
export type {QTMediaSeriesVip} from './series/QTMediaSeriesVip'

//--------------------------------QTCollapse---------------------------------
export type {QTICollapse} from './collapse/core/QTICollapse'
export type {QTCollapse} from './collapse/core/QTCollapse'
export type {QTICollapseItem} from './collapse/core/QTICollapseItem'
export type {QTCollapseItem} from './collapse/core/QTCollapseItem'

//--------------------------------QTIScrollView---------------------------------
export type {QTIScrollView} from './scroll-view/QTIScrollView'

//--------------------------------QTILottieView---------------------------------
export type {QTILottieView} from './lottie/QTILottieView'
export {QTLottieRepeatMode} from './lottie/QTLottieRepeatMode'
export {QTLottieAsyncUpdates} from './lottie/QTLottieAsyncUpdates'
export {QTLottieEvent} from './lottie/QTLottieEvent'

//--------------------------------QTGradient---------------------------------
export type {QTGradient} from './gradient/QTGradient'
export {QTGradientOrientation} from './gradient/QTGradientOrientation'
export {QTGradientShape} from './gradient/QTGradientShape'
export {QTGradientType} from './gradient/QTGradientType'

//--------------------------------QTIButton---------------------------------
export type {QTIButton} from './button/QTIButton'

//--------------------------------QTIColumn---------------------------------
export type {QTIColumn} from './column/QTIColumn'

//--------------------------------QTIDialog---------------------------------
export type {QTIDialog} from './dialog/QTIDialog'

//--------------------------------QTIImage---------------------------------
export type {QTIImage} from './image/QTIImage'

//--------------------------------QTILoadingView---------------------------------
export type {QTILoadingView} from './loading/QTILoadingView'

//--------------------------------QTIPoster---------------------------------
export type {QTIPoster} from './poster/core/QTIPoster'

//--------------------------------QTIQRCode---------------------------------
export type {QTIQRCode} from './qrcode/QTIQRCode'

//--------------------------------QTIRow---------------------------------
export type {QTIRow} from './row/QTIRow'

//--------------------------------QTIText---------------------------------
export type {QTIText} from './text/QTIText'

//--------------------------------QTIText---------------------------------
export type {QTIAppIcon} from './app/QTIAppIcon'

//--------------------------------QTIPluginView---------------------------------
export type {QTIPluginView, QTPluginViewEvent} from './plugin/QTIPluginView'

export {VirtualView} from './utils/VirtualView'

