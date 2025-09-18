/**
 *
 */
import registerESTextViewComponent from './ESTextView/ESTextViewComponent'
import registerESLoadingViewComponent from './ESLoading/ESLoadingViewComponent'
import registerESPlayMarkViewComponent from './ESPlayMarkView/ESPlayMarkViewComponent'
import registerESQRCodeViewComponent from './ESQRCodeView/ESQRCodeViewComponent'
import registerESScrollViewComponent from './ESScrollView/ESScrollViewComponent'
import registerESWebViewComponent from './ESWebView/ESWebViewComponent'
import registerESSurfaceViewComponent from './ESSurfaceView/ESSurfaceViewComponent'
import registerESAppIconViewComponent from './ESAppIconView/ESAppIconViewComponent'
import registerESTransitionImageViewComponent from './ESTransitionImageView/ESTransitionImageViewComponent'
import registerESAnimationViewComponent from './ESAnimationView/ESAnimationViewComponent'
import registerESFastSwiperSlideViewComponent from './ESFastSwiperSlideView/ESFastSwiperSlideViewComponent'
import registerESHorizontalSeekBarViewComponent from './ESOrientationSeekBar/ESHorizontalSeekBarViewComponent'
import registerESVerticalSeekBarViewComponent from './ESOrientationSeekBar/ESVerticalSeekBarViewComponent'
import registerESProgressBarViewComponent from './ESProgressBarView/ESProgressBarViewComponent'
import registerESSwiftListViewComponent from './ESSwiftListView/ESSwiftListViewComponent'
import registerESLargeListViewComponent from './ESLargeListView/ESLargeListViewComponent'
import registerESBarChartViewComponent from './ESChartView/ESBarChartViewComponent'
import registerESLineChartViewComponent from './ESChartView/ESLineChartViewComponent'
import registerESDialogComponent from './ESDialog/ESDialogComponent'
import registerESTVListComponent from './ESTVListView/ESTVListViewComponent'
import registerESFlexViewComponent from './ESFlexView/ESFlexViewComponent'
import registerESItemStoreViewComponent from './ESItemStoreView/ESItemStoreViewComponent'
import registerESTVItemViewComponent from './ESTVItemView/ESTVItemViewComponent'
import registerESRippleViewComponent from './ESRippleView/ESRippleViewComponent'
import registerESItemComponent from './ESItem/ESItemComponent'
import registerESTabsViewComponent from './ESTabsView/ESTabsViewComponent'
import registerESViewPagerComponent from './ESViewPager/ESViewPagerComponent'
import registerESCardContainerViewComponent from './ESCardView/ESCardContainerViewComponent'
import registerESCardViewComponent from './ESCardView/ESCardViewComponent'
import registerReplaceChildViewComponent from './ESReplaceChildView/ESReplaceChildViewComponent'
import registerESMediaSeriesComponent from './ESMediaSeries/ESMediaSeriesComponent'
import registerESTestViewComponent from './ESTestView/ESTestViewComponent'
import registerESTestGroupComponent from './ESTestView/ESTestGroupComponent'
import registerESTestAViewComponent from './ESTestView/ESTestAViewComponent'

import registerESPluginViewComponent from './ESPluginView/ESPluginViewComponent'
import registerESSwiperSlideViewComponent from './ESSwiperSlideView/ESSwiperSlideViewComponent'
import registerESSwiperViewComponent from './ESSwiperView/ESSwiperViewComponent'
import registerESViewComponent from './ESView/ESViewComponent'
import { Native } from '@extscreen/es3-vue'
//
import registerESLoadingViewElementForAndroid from './ESLoading/ESLoadingViewElement.android'
import registerESLoadingViewElementForHarmony from './ESLoading/ESLoadingViewElement.harmony'
import registerESX5WebViewElementForAndroid from './ESX5WebView/ESX5WebViewElement.android'
import registerESX5WebViewElementForHarmony from './ESX5WebView/ESX5WebViewElement.harmony'
import registerESSeekBarViewElementForAndroid from './ESSeekBarView/ESSeekBarViewElement.android'
import registerESSeekBarViewElementForHarmony from './ESSeekBarView/ESSeekBarViewElement.harmony'
import registerESLottieViewForAndroid from './ESLottieView/ESLottieViewComponent.android'
import registerESLottieViewElementForHarmony from './ESLottieView/ESLottieViewComponent.harmony'

//-----------------------------------------------------------------
import { registerTVDivComponent } from './tv-div/TVDivComponent'
import { registerTVImageComponent } from './tv-image/TVImageComponent'
import { registerTVLiComponent } from './tv-li/TVLiComponent'
import { registerTVSwiperComponent } from './tv-swiper/TVSwiperComponent'
import { registerTVULComponent } from './tv-ul/TVULComponent'
//
export const ESComponent = (Vue) => {
  // android
  if (Native.isAndroid()) {
    registerESLoadingViewElementForAndroid(Vue)
    registerESX5WebViewElementForAndroid(Vue)
    registerESSeekBarViewElementForAndroid(Vue)
    registerESLottieViewForAndroid(Vue)
  }
  //harmony
  else {
    registerESLoadingViewElementForHarmony(Vue)
    registerESX5WebViewElementForHarmony(Vue)
    registerESSeekBarViewElementForHarmony(Vue)
    registerESLottieViewElementForHarmony(Vue)
  }

  //
  registerESViewComponent(Vue)
  registerESTextViewComponent(Vue)
  registerESLoadingViewComponent(Vue)
  registerESPlayMarkViewComponent(Vue)
  registerESQRCodeViewComponent(Vue)
  registerESScrollViewComponent(Vue)
  registerESWebViewComponent(Vue)
  registerESSurfaceViewComponent(Vue)
  registerESAppIconViewComponent(Vue)
  registerESTransitionImageViewComponent(Vue)
  registerESAnimationViewComponent(Vue)
  registerESFastSwiperSlideViewComponent(Vue)
  registerESHorizontalSeekBarViewComponent(Vue)
  registerESVerticalSeekBarViewComponent(Vue)
  registerESProgressBarViewComponent(Vue)
  registerESSwiftListViewComponent(Vue)
  registerESLargeListViewComponent(Vue)
  registerESBarChartViewComponent(Vue)
  registerESLineChartViewComponent(Vue)
  registerESDialogComponent(Vue)
  registerESTVListComponent(Vue)
  registerESFlexViewComponent(Vue)
  registerESItemStoreViewComponent(Vue)
  registerESTVItemViewComponent(Vue)
  registerESRippleViewComponent(Vue)
  registerESItemComponent(Vue)
  registerESViewPagerComponent(Vue)
  registerESTabsViewComponent(Vue)
  registerESCardContainerViewComponent(Vue)
  registerESCardViewComponent(Vue)
  registerReplaceChildViewComponent(Vue)
  registerESMediaSeriesComponent(Vue)
  registerESTestViewComponent(Vue)
  registerESTestGroupComponent(Vue)
  registerESTestAViewComponent(Vue)
  registerESPluginViewComponent(Vue)
  //
  registerESSwiperSlideViewComponent(Vue)
  registerESSwiperViewComponent(Vue)

  //---------------------------------------------------------
  registerTVDivComponent(Vue)
  registerTVImageComponent(Vue)
  registerTVLiComponent(Vue)
  registerTVSwiperComponent(Vue)
  registerTVULComponent(Vue)
}

//---------------------------------------------------------
export type {
  ESPlayerComponentProgressCallback,
  ESPlayerComponentDurationCallback,
} from './typings/index'

//
export type { ESPageData } from './ESViewPager/ESPageData'
export type { ESIViewPager } from './ESViewPager/ESIViewPager'
//
export type { ESTabItem } from './ESTabsView/ESTabItem'
export type { ESTab } from './ESTabsView/ESTab'
export type { ESITab } from './ESTabsView/ESITab'
export type { ESIListView } from './ESTVListView/ESIListView'

//
export type { ESIView } from './ESView/ESIView'
export type { ESViewState } from './ESView/ESViewState'
export type { ESViewScrollState } from './ESView/ESViewScrollState'
export type { ESViewCoordinate } from './ESView/ESViewCoordinate'
export type { ESViewStateCallback } from './ESView/ESViewStateCallback'
export type { ESDirections } from './ESView/ESDirections'

//
export type { ESListViewItemFunctionParams } from './ESTVListView/ESListViewItemFunctionParams'
export type { ESListViewItem } from './ESTVListView/ESListViewItem'
export type { ESListViewItemDecoration } from './ESTVListView/ESListViewItemDecoration'

//ESITransitionImage
export type { ESITransitionImage } from './ESTransitionImageView/ESITransitionImage'
//ESIHorizontalSeekBar
export type { ESIHorizontalSeekBar } from './ESOrientationSeekBar/ESIHorizontalSeekBar'
//ESIVerticalSeekBar
export type { ESIVerticalSeekBar } from './ESOrientationSeekBar/ESIVerticalSeekBar'
//ESIChart
export type { ESIChart } from './ESChartView/ESIChart'
//ESICard
export type { ESICardContainer } from './ESCardView/ESICardContainer'
export type { ESICard } from './ESCardView/ESICard'
export type { ESCardEvent } from './ESCardView/ESCardEvent'
//ESIAppIcon
export type { ESIAppIcon } from './ESAppIconView/ESIAppIcon'

//ESGradient
export type { ESGradient } from './ESGradient/ESGradient'
export { ESGradientOrientation } from './ESGradient/ESGradientOrientation'
export { ESGradientShape } from './ESGradient/ESGradientShape'
export { ESGradientType } from './ESGradient/ESGradientType'

//ESMediaSeries
export type { ESMediaSeries } from './ESMediaSeries/ESMediaSeries'
export type { ESIMediaSeries } from './ESMediaSeries/ESIMediaSeries'

//ESIScrollView
export type { ESIScrollView } from './ESScrollView/ESIScrollView'
