<template>
  <tabs ref="tabs"
        v-if="ifTabs"
        class="tabs-root-css"
        :dataStrategy="tabsDataStrategy"
        :hideOnSingleTab="hideOnSingleTab"
        :pageSwitchDelay="tabContentSwitchDelay"
        :resumeTaskDelay="tabContentResumeDelay"
        :suspension="floatNavBar"
        :useSuspensionBg="useNavBarBg"
        :clipChildren="false"
        :outOfDateTime="outOfDateTime"
        :class="tabClass"
        :blockFocusDirections="tabContentBlockFocusDirections"
        @scroll-to-start="onTabPageScrollToStart"
        @scroll-to-end="onTabPageScrollToEnd"
        @load-page="onTabPageLoadData"
        @page-changed="onTabPageChanged"
        @tab-event="onTabEvent">

    <qt-nav-bar ref="navBarRef"
                name="tabList"
                :focusable="false"
                :class="tabNavBarClass"
                :sid="tabNavBarSid"
                :tabEnable="qtTabSectionEnable.tabEnable"
                text-key="text"
                :nextFocusName="navBarNextFocusName"
                :horizontalFadingEdgeEnabled="horizontalFadingEdgeEnabled"
                :verticalFadingEdgeEnabled="verticalFadingEdgeEnabled"
                :fadingEdgeLength="fadingEdgeLength"
                @tab-focus="onTabChange"
                @tab-click="onTabClick"
                :clipChldren="false"
                :horizontal="horizontal">
      <slot name="tab-item"/>
    </qt-nav-bar>

    <recycler-view-pager
        :nextFocusName="contentNextFocus"
        ref="viewPager"
        :class="tabPageClass"
        name="content"
        :loadingItemType="-1"
        :clipChldren="false"
        :opacity="rootOpacity"
        :focusable="false"
        :enableTransform="pageTransform"
        :slidingEnable="slidingEnable"
        :slidingMode="slidingMode"
        :initTranslation="initTranslation"
        :rightTranslation="rightTranslation"
        :leftTranslation="leftTranslation"
        :duration="duration"
        :interpolatorType="interpolatorType"
        :triggerTask="triggerTask"
        :direction="horizontal ? 'horizontal' : 'vertical'">

      <qt-waterfall
          keyName="_id"
          :endHintEnabled="endHintEnabled"
          :enablePlaceholder="enablePlaceholder"
          @onScrollStateChanged="onWaterfallScrollStateChanged"
          @onScroll="onWaterfallScroll"
          :custom-pool="customPool"
          sid="${sid}"
          :custom-item-pool="customItemPool"
          :blockFocusDirections="horizontal ? blockViewPager : blockViewPagerVertical"
          :qt-tab-section-enable="qtTabSectionEnable"
          @onSectionBind="onWaterfallSectionBind"
          @onSectionAttached="onWaterfallSectionAttached"
          @onSectionDetached="onWaterfallSectionDetached"
          @onItemFocused="onWaterfallItemFocused"
          @onItemClick="onWaterfallItemClick"
          @onPluginLoadSuccess="onPluginLoadSuccess"
          @onPluginLoadError="onPluginLoadError">
        <template v-slot:item>
          <slot name="waterfall-item"/>
        </template>
        <template v-slot:shared-item>
          <slot name="waterfall-shared-item"/>
        </template>
        <template v-slot:list-item>
          <slot name="waterfall-list-item"/>
        </template>
        <template v-slot:section>
          <slot name="waterfall-section"/>
        </template>
        <template v-slot:vue-section>
          <slot name="waterfall-vue-section"/>
        </template>
      </qt-waterfall>

    </recycler-view-pager>
  </tabs>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {QTINavBar} from "../nav-bar/QTINavBar";
import {QTTab} from "./QTTab";
import {QTTabEvent} from "./QTTabEvent";
import {QTTabPageData} from "./QTTabPageData";
import {QTWaterfall} from "../waterfall/core/QTWaterfall";
import {generateSection, generateSectionList} from "../waterfall/core/QTWaterfallDataAdapter";
import {
  ESITab,
  ESIViewPager,
  ESListViewItemFunctionParams,
  ESPageData,
  ESTab,
  ESViewStateCallback
} from "@extscreen/es3-component";
import {QTWaterfallItem} from "../waterfall/core/QTWaterfallItem";
import {ESLogLevel, useESDevice, useESLog} from "@extscreen/es3-core";
import {createQTTabDataManager} from "./QTTabDataManager";
import {QTTabPageState} from "./QTTabPageState";
import {QTWaterfallSection} from "../waterfall/core/QTWaterfallSection";
import {QTTabItem} from "./QTTabItem";
import {QTListViewItemState} from "../list-view/core/QTListViewItemState";
import useBaseView from "../base/useBaseView";
import {QTPluginViewEvent} from "../plugin/QTIPluginView";
import {useQtTabWatch} from './useQtTabWatch'

const TAG = 'qt-tabs'

export default defineComponent({
  name: 'qt-tabs',
  emits: [
    'onTabPageLoadData',
    'onTabPageChanged',
    'onTabEvent',
    'onTabPageItemClick',
    'onTabPageItemFocused',
    'onTabPageSectionAttached',
    'onTabPageScroll',
    'onTabPageScrollStateChanged',
    //
    'onTabMoveToTopStart',
    'onTabMoveToTopEnd',
    'onTabMoveToBottomStart',
    'onTabMoveToBottomEnd',
    'onTabChanged',
    //
    'onTabPageScrollToEnd',
    'onTabPageScrollToStart',
    //
    'onTabClick',
    //
    'onPluginLoadSuccess',
    'onPluginLoadError'
  ],
  props: {
    enablePlaceholder: {
      type: Boolean,
      default: true,
    },
    preloadNumber: {
      type: Number,
      default: 3,
    },
    tabNavBarClass: {
      type: String,
      default: ''
    },
    tabNavBarSid: {
      type: String,
      default: ''
    },
    tabClass: {
      type: String,
      default: ''
    },
    tabsDataStrategy: {
      type: String,
      default: 'overTime'
    },
    tabPageClass: {
      type: String,
      default: ''
    },
    horizontal: {
      type: Boolean,
      default: true
    },
    pageTransform: {
      type: Boolean,
      default: true
    },
    hideOnSingleTab: {
      type: Boolean,
      default: true
    },
    floatNavBar: {
      type: Boolean,
      default: true
    },
    useNavBarBg: {
      type: Boolean,
      default: true
    },
    contentNextFocus: {
      type: Object,
      default: () => ({
        up: 'tabList',
        left: 'tabList'
      })
    },
    triggerTask: {
      type: Array,
      default: () => []
    },
    blockViewPager: {
      type: Array,
      default: () => []
    },
    blockViewPagerVertical: {
      type: Array,
      default: () => []
    },
    tabContentBlockFocusDirections: {
      type: Array,
      default: () => ['down']
    },
    tabContentResumeDelay: {
      type: Number,
      default: 300
    },
    tabContentSwitchDelay: {
      type: Number,
      default: 0
    },
    slidingEnable: {
      type: Boolean,
      default: false
    },
    slidingMode: {
      type: String,
      default: ''
    },
    initTranslation: {
      type: Number,
      default: 0
    },
    rightTranslation: {
      type: Number,
      default: 0
    },
    leftTranslation: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 1000
    },
    interpolatorType: {
      type: Number,
      default: 1
    },
    endHintEnabled: {
      type: Boolean,
      default: true,
    },
    outOfDateTime: {
      type: Number,
      default: 5 * 60 * 1000
    },
    customPool: {
      type: Object,
      default: () => {
      }
    },
    customItemPool: {
      type: Object,
      default: () => {
      }
    },
    navBarNextFocusName: {
      type: Object,
      default: () => ({
        down: 'content'
      })
    },
    horizontalFadingEdgeEnabled: {
      type: Boolean,
      default: false
    },
    verticalFadingEdgeEnabled: {
      type: Boolean,
      default: false
    },
    fadingEdgeLength: {
      type: Number,
      default: 0
    },
    qtTabSectionEnable: {
      type: Object,
      default: () => {
        return {
          tabEnable: true,
          flexSectionEnable: true,
          flexSection: {
            qtPosterEnable: true,
            qtPluginItemEnable: true,
            cardItemEnable: true,
          },
          listSectionEnable: true,
          listSection: {
            qtPosterEnable: true
          },
          loadingSectionEnable: true,
          endSectionEnable: true,
          blankSectionEnable: true,
          cardSectionEnable: true,
          pluginSectionEnable: true,
          vueSectionEnable: true,
          itemStoreEnable: false
        }
      }
    },
    tabConfig:{
      type: Object,
      default: () => ({
        defaultFocusIndex: 0,
        defaultIndex: 0,
      })
    },
    waterfallConfig: {
      type: Object,
      default: () => ({width: 1920, height: 1080})
    },
    tabs: {
      type: Array,
      default:()=>[]
    }
  },
  setup(props, context) {
    let ttTabWatchInstance: ReturnType<typeof useQtTabWatch> | undefined;
    const tabs = ref<ESITab>()
    const viewPager = ref<ESIViewPager>()
    const ifTabs = ref(true)
    const rootOpacity = ref(1)
    const log = useESLog()
    const devices = useESDevice()
    const navBarRef = ref<QTINavBar>()
    //
    const tabDataManager = createQTTabDataManager(log)

    let tabItemList: Array<QTTabItem> = []

    let waterfall: QTWaterfall
    let currentTabPageIndex: number = -1
    let lastTabPageIndex: number = -1
    let notifySectionAttachTimer: any = -1

    //--------------------------------------------------------
    function initTab(tab: QTTab): void {
      let data: ESTab = {
        defaultIndex: tab.defaultIndex,
        focusIndex: tab.defaultFocusIndex,
        data: tab.itemList
      }
      tabItemList = tab.itemList
      tabDataManager.initTab(tab)
      tabs.value?.setTabsData(data)
    }

    //--------------------------------------------------------
    function initPage(w: QTWaterfall) {
      waterfall = w;
    }

    function setPageState(pageIndex: number, state: QTTabPageState): void {
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData) {
        pageData.state = state
        tabDataManager.setPageDataState(pageIndex, pageData)
      }
    }

    function setPageBindSectionIndex(pageIndex: number, sectionIndex: number) {
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData) {
        pageData.sectionBindIndex = sectionIndex
        tabDataManager.setPageDataState(pageIndex, pageData)
      }
    }

    function setPageStateReset(pageIndex: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----设置数据---setPageStateReset->>>>pageIndex:' + pageIndex)
      }
      //设置绑定的section index
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData) {
        pageData.state = QTTabPageState.QT_TAB_PAGE_STATE_INIT
        pageData.sectionBindIndex = -1
        tabDataManager.setPageDataState(pageIndex, pageData)
      }

      //重置缓存数据
      const list = tabDataManager.getSectionList(pageIndex);
      tabDataManager.deleteSection(pageIndex, 0, list.length)

      //重置页码
      resetTabPageDataNo(pageIndex)
    }

    function setPageStateRecycled(pageIndex: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----设置数据---setPageStateRecycled---START-->>>pageIndex:' + pageIndex)
      }
      //设置绑定的section index
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData) {
        pageData.sectionBindIndex = 0
        pageData.state = QTTabPageState.QT_TAB_PAGE_STATE_IDLE
        tabDataManager.setPageDataState(pageIndex, pageData)
      }

      //重置缓存数据
      const list = tabDataManager.getSectionList(pageIndex);
      tabDataManager.deleteSection(pageIndex, 1, (list.length - 1))

      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----设置数据---setPageStateRecycled---END--->>pageIndex:' + pageIndex)
      }
      //重置页码
      const pageNo = getTabPageDataNo(pageIndex)
      if (pageNo > 0) {
        setTabPageDataNo(pageIndex, 1)
      }
    }

    function getPageBindSectionIndex(pageIndex: number): number {
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData) {
        return pageData.sectionBindIndex ?? -1
      }
      return -1
    }

    //--------------------------------------------------------
    function setPageData(pageIndex: number, tabPageData: QTTabPageData): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------loadPageData----setPageData-->>>>pageIndex:' + pageIndex)
      }
      //
      const tabIndex = tabDataManager.addSectionList(pageIndex, tabPageData.data, 0)
      const itemList = generateSectionList(waterfall, tabPageData.data)
      const data: ESPageData = {
        data: itemList,
        disableScrollOnFirstScreen: tabPageData.disableScrollOnFirstScreen ?? false,
        firstFocusTargetID: tabPageData.firstFocusTargetID ?? '',
        useDiff: tabPageData.useDiff,
        bindingPlayer: tabPageData.bindingPlayer,
      }
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------设置数据-----setPageData------>>>>' +
            ' pageIndex:' + pageIndex +
            ' data:', data
        )
      }
      //
      increaseTabPageDataNo(pageIndex)
      tabs.value?.setPageData(pageIndex, data)
    }

    function addPageData(pageIndex: number, tabPageData: QTTabPageData, deleteCount: number = 0): void {
      const tabIndex = tabDataManager.addSectionList(pageIndex, tabPageData.data, deleteCount)
      const itemList = generateSectionList(waterfall, tabPageData.data)
      const data: ESPageData = {
        data: itemList,
        disableScrollOnFirstScreen: tabPageData.disableScrollOnFirstScreen ?? false,
        firstFocusTargetID: tabPageData.firstFocusTargetID ?? '',
        useDiff: tabPageData.useDiff
      }
      //
      try {
        const pageNo = getTabPageDataNo(pageIndex)
        if (pageNo == 0) {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(TAG, '---------设置数据------setPageData--->>>>' +
                ' pageIndex:' + pageIndex +
                ' pageNo:' + pageNo +
                ' data:', data,
                ' deleteCount:' + deleteCount
            )
          }
          tabs.value?.setPageData(pageIndex, data)
        } else {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(TAG, '---------设置数据------addPageData--->>>>' +
                ' pageIndex:' + pageIndex +
                ' pageNo:' + pageNo +
                ' data:', data,
                ' deleteCount:' + deleteCount
            )
          }
          tabs.value?.addPageData(pageIndex, data, deleteCount)
        }
      } catch (e) {
      }
      //
      increaseTabPageDataNo(pageIndex)
    }

    function updatePageData(pageIndex: number, tabPageData: QTTabPageData): void {
      const tabIndex = tabDataManager.updateSectionList(pageIndex, tabPageData.data)
      const itemList = generateSectionList(waterfall, tabPageData.data)
      const data: ESPageData = {
        data: itemList,
        disableScrollOnFirstScreen: tabPageData.disableScrollOnFirstScreen ?? false,
        firstFocusTargetID: tabPageData.firstFocusTargetID ?? '',
        useDiff: tabPageData.useDiff
      }
      tabs.value?.updatePageData(pageIndex, data)
    }

    function updatePageSection(pageIndex: number, sectionIndex: number, section: QTWaterfallSection): void {
      tabDataManager.updateSection(pageIndex, sectionIndex, section)
      const updateSection = generateSection(waterfall, section)
      tabs.value?.updateRootNode(pageIndex, sectionIndex, updateSection)
    }


    function getPageSection(pageIndex: number, sectionIndex: number): QTWaterfallSection | undefined {
      return tabDataManager.getSection(pageIndex, sectionIndex)
    }

    function getPageSectionList(pageIndex: number): Array<QTWaterfallSection> | undefined {
      return tabDataManager.getSectionList(pageIndex)
    }

    function deletePageSection(pageIndex: number, sectionIndex: number, count: number): void {
      tabDataManager.deleteSection(pageIndex, sectionIndex, count)
      tabs.value?.invokeContentFunction(pageIndex, 'deleteItemRange', [sectionIndex, count])
    }

    //--------------------------------------------------------
    //get
    function getPageItem(pageIndex: number, sectionIndex: number, itemIndex: number): QTWaterfallItem | undefined {
      return tabDataManager.getItem(pageIndex, sectionIndex, itemIndex)
    }

    //update
    function updatePageItem(pageIndex: number, sectionIndex: number, itemIndex: number, item: QTWaterfallItem): void {
      tabDataManager.updateItem(pageIndex, sectionIndex, itemIndex, item)
      tabs.value?.updateChildNode(pageIndex, sectionIndex, itemIndex, item)
    }

    //add
    function addPageItemList(pageIndex: number, sectionIndex: number, itemList: Array<QTWaterfallItem>, insertIndex?: number, deleteCount?: number): void {
      tabDataManager.addItemList(pageIndex, sectionIndex, itemList, insertIndex, deleteCount)
      const section = tabDataManager.getSection(pageIndex, sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        tabs.value?.updateRootNode(pageIndex, sectionIndex, updateSection)
      }
    }

    //delete
    function deletePageItem(pageIndex: number, sectionIndex: number, itemIndex: number, count: number): void {
      tabDataManager.deleteItem(pageIndex, sectionIndex, itemIndex, count)
      const section = tabDataManager.getSection(pageIndex, sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        tabs.value?.updateRootNode(pageIndex, sectionIndex, updateSection)
      }
    }

    //--------------------------------------------------------

    function focusBackToTop(): void {
      tabs.value?.focusBackToTop()
    }

    function requestNodeFocus(id: string): void {
      tabs.value?.requestNodeFocus(id)
    }

    function reloadAll(updateCurrent: boolean = true): void {
      tabs.value?.reloadAll(updateCurrent)
    }

    function reloadPage(pageIndex: number): void {
      tabs.value?.reloadPage(pageIndex)
    }

    function setCurrentPage(pageIndex: number): void {
      tabs.value?.setCurrentPage(pageIndex)
    }

    function requestTabFocus(tabIndex: number): void {
      tabs.value?.requestTabFocus(tabIndex)
    }

    function invokeContentFunction(pageIndex: number, functionName: string, param: Array<any>): void {
      tabs.value?.invokeContentFunction(pageIndex, functionName, param)
    }

    function invokeContentFunctionDirect(functionName: string, param: Array<any>): void {
      tabs.value?.invokeContentFunctionDirect(functionName, param)
    }

    function contentScrollToFocus(position: number): void {
      tabs.value?.contentScrollToFocus(position)
    }

    //2.4
    function getRootNodeViewState(page: number, position: number, callback: ESViewStateCallback): void {
      tabs.value?.getRootNodeViewState(page, position, callback)
    }

    //2.4
    function getChildNodeViewState(page: number, position: number, childIndex: number, name: number, callback: ESViewStateCallback): void {
      tabs.value?.getChildNodeViewState(page, position, childIndex, name, callback)
    }

    //2.4
    function dispatchUIFunctionOnChildNode(page: number, position: number, childIndex: number,
                                           listViewName: string, functionParams: ESListViewItemFunctionParams): void {
      tabs.value?.dispatchUIFunctionOnChildNode(page, position, childIndex, listViewName, functionParams)
    }

    function updateItemMatched(key: string = 'id', id: any, newData: any): void {
      tabs.value?.updateItemMatched(key, id, newData)
    }

    function updateChildNode(page: number, position: number, childIndex: number, data: any): void {
      tabs.value?.updateChildNode(page, position, childIndex, data)
    }

    function updateRootNode(page: number, position: number, data: Array<any>): void {
      tabs.value?.updateRootNode(page, position, data)
    }

    function destroy(): void {
      tabs.value?.destroy()
    }

    function cancelAll(): void {
      tabs.value?.cancelAll()
    }

    //---------------------------------------------------------------------
    function getTabPageDataNo(pageIndex: number): number {
      if (pageIndex < 0 || pageIndex > tabItemList.length) {
        return 0
      }
      const tabItem: QTTabItem = tabItemList[pageIndex]
      if (tabItem.__pageNo == undefined) {
        tabItem.__pageNo = 0
      }
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------设置数据----getTabPageDataNo--->>>>' +
            ' pageIndex:' + pageIndex +
            ' pageNo:' + tabItem.__pageNo
        )
      }
      return tabItem.__pageNo
    }

    function increaseTabPageDataNo(pageIndex: number) {
      if (pageIndex < 0 || pageIndex > tabItemList.length) {
        return
      }
      const tabItem: QTTabItem = tabItemList[pageIndex]
      if (tabItem.__pageNo == undefined) {
        tabItem.__pageNo = 1
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '---------设置数据----increaseTabPageDataNo--->>>>' +
              ' pageIndex:' + pageIndex +
              ' pageNo:' + 1
          )
        }
        return
      }
      tabItem.__pageNo = (tabItem.__pageNo + 1)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------设置数据----increaseTabPageDataNo--->>>>' +
            ' pageIndex:' + pageIndex +
            ' pageNo:' + tabItem.__pageNo
        )
      }
    }

    function setTabPageDataNo(pageIndex: number, pageNum: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------设置数据----setTabPageDataNo--START--->>>>' +
            ' pageIndex:' + pageIndex +
            ' pageNum:' + pageNum
        )
      }
      if (pageIndex < 0 || pageIndex > tabItemList.length) {
        return
      }
      const tabItem: QTTabItem = tabItemList[pageIndex]
      tabItem.__pageNo = pageNum
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------设置数据----setTabPageDataNo---END--->>>>' +
            ' pageIndex:' + pageIndex +
            ' pageNo:' + tabItem.__pageNo
        )
      }
    }

    function resetTabPageDataNo(pageIndex: number) {
      if (pageIndex < 0 || pageIndex > tabItemList.length) {
        return
      }
      const tabItem: QTTabItem = tabItemList[pageIndex]
      tabItem.__pageNo = 0
    }

    function onTabPageLoadData(e: QTTabEvent): void {
      const pageIndex = e.pageIndex;
      const useDiff = e.useDiff;
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------设置数据----onTabPageLoadData---加载数据开始---->>>>pageIndex:' + pageIndex)
      }
      setPageStateReset(pageIndex)
      emitOnLoadTabPageDataEvent('onTabPageLoadData', pageIndex, useDiff, 0)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------设置数据----onTabPageLoadData---加载数据结束---->>>>pageIndex:' + pageIndex)
      }
    }

    function emitOnLoadTabPageDataEvent(caller: string, pageIndex: number, useDiff: boolean, sectionIndex: number) {
      let pageNo = getTabPageDataNo(pageIndex)
      let pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData && (pageData.state === QTTabPageState.QT_TAB_PAGE_STATE_IDLE
          || pageData.state === QTTabPageState.QT_TAB_PAGE_STATE_INIT)) {
        const sectionList = tabDataManager.getSectionList(pageIndex)

        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----emitOnLoadTabPageDataEvent---设置数据--->>>>'
              + ' caller: ' + caller
              + ' pageIndex: ' + pageIndex
              + ' sectionIndex: ' + sectionIndex
              + ' preloadNumber: ' + props.preloadNumber
              + ' sectionLength: ' + sectionList.length
              + ' section: ', sectionList
          )
        }

        if (sectionIndex >= (sectionList.length - props.preloadNumber - 1)) {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(TAG, '---------设置数据-----<<<<<加载更多数据>>>>>----->>>>' +
                ' pageIndex:' + pageIndex +
                ' pageNo:' + pageNo +
                ' sectionIndex:' + sectionIndex +
                ' sectionListLength:' + sectionList.length
            )
          }
          setPageState(pageIndex, QTTabPageState.QT_TAB_PAGE_STATE_BUSY)
          if (!ttTabWatchInstance?.checkIsStaticDatas(pageIndex, pageNo)) {
            context.emit('onTabPageLoadData', pageIndex, pageNo, useDiff);
          }
        } else {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(TAG, '----设置数据------loadPageData--preloadNumber错误-->>>>',
                pageIndex
            )
          }
        }
      } else {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------设置数据----loadPageData--状态不对-->>>>', pageIndex)
        }
      }
    }

    function onTabPageChanged(e: QTTabEvent): void {
      const pageIndex = e.pageIndex
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '------设置数据----onTabPageChanged---TAB切换开始-->>>>pageIndex:', pageIndex)
      }
      if (currentTabPageIndex == pageIndex) {
        return
      }
      currentTabPageIndex = pageIndex

      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '------设置数据----onTabPageChanged---TAB重置开始-->>>>pageIndex:', pageIndex)
      }
      for (let i = 0; i < tabItemList.length; i++) {
        const pageState = tabDataManager.getTabPageDataState(i);
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '------设置数据--调用setPageStateRecycled--START->>>>' +
              ' index:' + i +
              ' lastTabPageIndex:' + lastTabPageIndex +
              ' pageIndex:' + pageIndex +
              ' pageState:', pageState
          )
        }

        if ((i != pageIndex) &&
            ((i != lastTabPageIndex) || ((i == lastTabPageIndex) && ((pageIndex - lastTabPageIndex) > 1))) &&
            pageState &&
            pageState.state != QTTabPageState.QT_TAB_PAGE_STATE_INIT) {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(TAG, '------设置数据--调用setPageStateRecycled--END->>>>' +
                ' index:' + i +
                ' lastTabPageIndex:' + lastTabPageIndex +
                ' pageIndex:' + pageIndex +
                ' pageState:', pageState
            )
          }
          setPageStateRecycled(i)
        }
      }
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '------设置数据----onTabPageChanged---TAB重置结束-->>>>pageIndex:', pageIndex)
      }

      const data = e.data
      context.emit('onTabPageChanged', pageIndex, data);

      //
      const pageData = tabDataManager.getTabPageDataState(pageIndex)
      if (pageData && pageData.sectionBindIndex >= -1) {
        emitOnLoadTabPageDataEvent('onTabPageChanged', pageIndex, false, pageData.sectionBindIndex)
      }
      notifyTabContentSectionAttached()

      //
      lastTabPageIndex = pageIndex

      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '------设置数据----onTabPageChanged---TAB切换结束-->>>>pageIndex:', pageIndex)
      }
    }


    function notifyTabContentSectionAttached() {
      clearTimeout(notifySectionAttachTimer)
      notifySectionAttachTimer = setTimeout(() => {
        const sectionList = tabDataManager.getSectionListByState(currentTabPageIndex,
            QTListViewItemState.QT_LIST_VIEW_ITEM_STATE_ATTACHED)
        let sectionSize = sectionList ? sectionList.length : 0
        if (sectionSize > 0) {
          sectionList.forEach((s) => {
            if (log.isLoggable(ESLogLevel.DEBUG)) {
              log.d(TAG, '----------notifyTabContentSectionAttached------>>>>' +
                  ' pageIndex' + currentTabPageIndex +
                  ' sectionIndex:', s.sectionIndex
              )
            }
          })
          //如果版块里没有数据，是不需要调用
          context.emit('onTabPageSectionAttached', currentTabPageIndex, sectionList);
        }
      }, 100)
    }

    function onTabEvent(e: QTTabEvent): void {
      const params = e.params
      const eventName = e.eventName
      const tabIndex = e.params.itemPosition
      const scrollX = e.params.x
      const scrollY = e.params.y
      const contentOffset = e.params.contentOffset
      const state = e.params.state
      //
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onTabEvent------>>>>' +
            ' eventName:' + eventName +
            ' tabIndex:' + tabIndex +
            ' params:', params
        )
      }
      context.emit('onTabEvent', tabIndex, eventName, params);

      switch (eventName) {
          //吸顶开始
        case 'onMoveToTopStart':
          context.emit('onTabMoveToTopStart', tabIndex, eventName, params);
          break;
          //吸顶结束
        case 'onMoveToTopEnd':
          context.emit('onTabMoveToTopEnd', tabIndex, eventName, params);
          break;
          //恢复吸顶开始
        case 'onMoveToBottomStart':
          context.emit('onTabMoveToBottomStart', tabIndex, eventName, params);
          break;
          //恢复吸顶结束
        case 'onMoveToBottomEnd':
          context.emit('onTabMoveToBottomEnd', tabIndex, eventName, params);
          break;
          //tab切换
        case 'onTabChanged':
          context.emit('onTabChanged', tabIndex, eventName, params);
          break;
        case 'onScroll':
          onWaterfallScroll(scrollX, scrollY)
          break;
        case 'onScrollStateChanged':
          onWaterfallScrollStateChanged(contentOffset.x, contentOffset.y, state.newState)
          break;
      }
    }

    function onTabChange(e): void {
      //todo 等焦点事件响应后处理e对应的数据
    }

    function onTabClick(e: QTTabItem): void {
      context.emit('onTabClick', e)
    }

    //-------------------------------------------------------------------
    function onTabPageScrollToStart(evt) {
      const pageIndex = evt.pageIndex
      context.emit('onTabPageScrollToStart', pageIndex);
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onTabPageScrollToStart------>>>>' +
            ' pageIndex:' + pageIndex
        )
      }
    }

    function onTabPageScrollToEnd(evt) {
      const pageIndex = evt.pageIndex
      context.emit('onTabPageScrollToEnd', pageIndex);
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onTabPageScrollToEnd------>>>>' +
            ' pageIndex:' + pageIndex
        )
      }
    }

    //-------------------------------------------------------------------
    function onWaterfallItemClick(sectionIndex: number, itemIndex: number, item: QTWaterfallItem, e): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------onWaterfallItemClick--------------->>>>' +
            ' sectionIndex:' + sectionIndex +
            ' itemIndex:' + itemIndex +
            ' item:', item
        )
      }
      context.emit('onTabPageItemClick', currentTabPageIndex, sectionIndex, itemIndex, item, e);
    }

    function onWaterfallItemFocused(sectionIndex: number, itemIndex: number, isFocused: boolean, item: QTWaterfallItem): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------onWaterfallItemFocused--------------->>>>' +
            ' sectionIndex:' + sectionIndex +
            ' itemIndex:' + itemIndex +
            ' isFocused:' + isFocused +
            ' item:', item
        )
      }
      context.emit('onTabPageItemFocused', currentTabPageIndex, sectionIndex, itemIndex, isFocused, item);
    }

    function onWaterfallSectionBind(pageIndex: number, sectionIndex: number): void {
      if (pageIndex < 0) {
        return;
      }
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '---------设置数据-----绑定回调---->>>>' +
            ' pageIndex:' + pageIndex +
            ' sectionIndex:' + sectionIndex
        )
      }
      //
      setPageBindSectionIndex(pageIndex, sectionIndex)

      if (pageIndex === currentTabPageIndex) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------loadPageData----bind-->>>>pageIndex:' + pageIndex)
        }
        emitOnLoadTabPageDataEvent('onTabPageChanged', pageIndex, false, sectionIndex)
      }
    }

    function onWaterfallSectionAttached(pageIndex: number, sectionIndex: number): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------onWaterfallSectionAttached--------------->>>>' +
            ' pageIndex:' + pageIndex +
            ' sectionIndex:' + sectionIndex
        )
      }
      tabDataManager.setSectionState(pageIndex, sectionIndex, QTListViewItemState.QT_LIST_VIEW_ITEM_STATE_ATTACHED)

      //
      if (pageIndex == currentTabPageIndex) {
        notifyTabContentSectionAttached()
      }
    }

    function onWaterfallSectionDetached(pageIndex: number, sectionIndex: number): void {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-----------onWaterfallSectionDetached--------------->>>>' +
            ' pageIndex:' + pageIndex +
            ' sectionIndex:' + sectionIndex
        )
      }
      tabDataManager.setSectionState(pageIndex, sectionIndex, QTListViewItemState.QT_LIST_VIEW_ITEM_STATE_DETACHED)
      //
    }


    function onWaterfallScroll(offsetX: number, scrollY: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onWaterfallScroll---->>>>' +
            ' offsetX:' + offsetX +
            ' scrollY:' + scrollY
        )
      }
      context.emit('onTabPageScroll', offsetX, scrollY);
    }

    function onWaterfallScrollStateChanged(offsetX: number, scrollY: number, newState: number) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onWaterfallScrollStateChanged---->>>>' +
            ' offsetX:' + offsetX +
            ' scrollY:' + scrollY +
            ' newState:' + newState
        )
      }
      context.emit('onTabPageScrollStateChanged', offsetX, scrollY, newState);
    }

    function translationLeft(): void {
      tabs.value?.translationLeft()
    }

    function translationRight(): void {
      tabs.value?.translationRight()
    }

    function getCurrentPageIndex(): number {
      return currentTabPageIndex
    }

    function getCurrentTabIndex(): Promise<number> {
      if (tabs.value) {
        return tabs.value!.getCurrentPage();
      } else {
        return Promise.resolve(-1);
      }
    }

    //---------------------------------------------------------------
    function onPluginLoadSuccess(event: QTPluginViewEvent) {
      context.emit('onPluginLoadSuccess', event)
    }

    function onPluginLoadError(event: QTPluginViewEvent) {
      context.emit('onPluginLoadError', event)
    }

    const insertPageData = (tabPageIndex: number, sectionIndex: number, data: any[]) => {
      const tabIndex = tabDataManager.insertSectionList(tabPageIndex, sectionIndex, data)
      const itemList = generateSectionList(waterfall, data)
      tabs.value?.insertPageData(tabPageIndex, sectionIndex, itemList)
    }

    function getDataManager() {
      return tabDataManager;
    }

    //--------------------------------------------------------------------
    ttTabWatchInstance = useQtTabWatch(props, {
      initPage, initTab,
      setPageData, addPageData, updatePageData, insertPageData,
      updatePageSection, deletePageSection, getPageSectionList,
      addPageItemList, updatePageItem, deletePageItem
    })
    return {
      tabs,
      ifTabs,
      navBarRef,
      initTab,
      initPage,
      setPageState,
      setPageData,
      addPageData,
      updatePageData,
      //
      updatePageSection,
      getPageSection,
      getPageSectionList,
      deletePageSection,
      //
      addPageItemList,
      getPageItem,
      updatePageItem,
      deletePageItem,
      //
      focusBackToTop,
      requestNodeFocus,
      reloadAll,
      reloadPage,
      setCurrentPage,
      requestTabFocus,
      invokeContentFunction,
      invokeContentFunctionDirect,
      contentScrollToFocus,
      getRootNodeViewState,
      getChildNodeViewState,
      dispatchUIFunctionOnChildNode,
      updateItemMatched,
      updateRootNode,
      updateChildNode,
      destroy,
      cancelAll,
      translationLeft,
      translationRight,
      rootOpacity,
      onTabPageLoadData,
      onTabPageChanged,
      onTabEvent,
      onWaterfallItemClick,
      onWaterfallItemFocused,
      onWaterfallSectionBind,
      onWaterfallSectionAttached,
      onWaterfallSectionDetached,
      onWaterfallScroll,
      onWaterfallScrollStateChanged,
      onTabPageScrollToStart,
      onTabPageScrollToEnd,
      onTabChange,
      onTabClick,
      getCurrentPageIndex,
      getCurrentTabIndex,
      insertPageData,
      onPluginLoadSuccess,
      onPluginLoadError,
      getDataManager,
      ...useBaseView(tabs)
    }
  },
});

</script>

<style>
.tabs-root-css {
  background-color: transparent;
}


</style>
