import {QtViewAPI} from "../view/QtViewAPI";
import {Ref} from "@vue/reactivity";
import {QTITab} from "./QTITab";
import {QTTab} from "./QTTab";
import {QTTabPage} from "./QTTabPage";
import {QTTabPageState} from "./QTTabPageState";
import {QTTabPageData} from "./QTTabPageData";
import {QTWaterfallSection} from "../waterfall/core/QTWaterfallSection";
import {QTWaterfallItem} from "../waterfall/core/QTWaterfallItem";
import {ESListViewItemFunctionParams, ESViewStateCallback} from "@extscreen/es3-component";
import {QTTabDataManager} from "./QTTabDataManager";

export interface QtTabAPI extends Omit<QtViewAPI, 'blockRootFocus' | 'unBlockRootFocus'> {

  initTab(instance: Ref<QTITab | undefined>, tab: QTTab): void

  initPage(instance: Ref<QTITab | undefined>, waterfall: QTTabPage): void

  setPageState(instance: Ref<QTITab | undefined>, pageIndex: number, state: QTTabPageState): void

  getCurrentPageIndex(instance: Ref<QTITab | undefined>): number

  //------------------------SECTION-----------------------------
  //add
  setPageData(instance: Ref<QTITab | undefined>, pageIndex: number, tabPage: QTTabPageData): void

  addPageData(instance: Ref<QTITab | undefined>, pageIndex: number, tabPageData: QTTabPageData, deleteCount: number): void

  insertPageData(instance: Ref<QTITab | undefined>, tabPageIndex: number, sectionIndex: number, data: any[]): void

  //update
  updatePageData(instance: Ref<QTITab | undefined>, pageIndex: number, tabPageData: QTTabPageData): void

  //update
  updatePageSection(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, section: QTWaterfallSection): void

  //delete
  deletePageSection(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, count: number): void

  //get
  getPageSection(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number): QTWaterfallSection | undefined

  getPageSectionList(instance: Ref<QTITab | undefined>, pageIndex: number): Array<QTWaterfallSection> | undefined

  //----------------------ITEM-------------------------------
  getPageItem(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number): QTWaterfallItem | undefined

  updatePageItem(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number, item: QTWaterfallItem): void

  addPageItemList(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemList: Array<QTWaterfallItem>): void

  deletePageItem(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number, count: number): void

  //----------------------FOCUS-------------------------------
  blockRootFocus(instance: Ref<QTITab | undefined>): void

  unBlockRootFocus(instance: Ref<QTITab | undefined>): void

  focusBackToTop(instance: Ref<QTITab | undefined>): void

  requestNodeFocus(instance: Ref<QTITab | undefined>, id: string): void

  reloadAll(instance: Ref<QTITab | undefined>, updateCurrent: boolean): void

  reloadPage(instance: Ref<QTITab | undefined>, pageIndex: number): void

  setCurrentPage(instance: Ref<QTITab | undefined>, pageIndex: number): void

  getCurrentTabIndex(instance: Ref<QTITab | undefined>): Promise<number>

  requestTabFocus(instance: Ref<QTITab | undefined>, tabIndex: number): void

  invokeContentFunction(instance: Ref<QTITab | undefined>, pageIndex: number, functionName: string, param: Array<any>): void

  invokeContentFunctionDirect(instance: Ref<QTITab | undefined>, functionName: string, param: Array<any>): void

  contentScrollToFocus(instance: Ref<QTITab | undefined>, position: number): void

  //2.4
  getRootNodeViewState(instance: Ref<QTITab | undefined>, page: number, position: number, callback: ESViewStateCallback): void

  //2.4
  getChildNodeViewState(instance: Ref<QTITab | undefined>, page: number, position: number, childIndex: number, name: number, callback: ESViewStateCallback): void

  //2.4
  dispatchUIFunctionOnChildNode(instance: Ref<QTITab | undefined>, page: number, position: number, childIndex: number,
                                listViewName: string, functionParams: ESListViewItemFunctionParams): void

  updateItemMatched(instance: Ref<QTITab | undefined>, key: string, id: any, newData: any): void

  updateChildNode(instance: Ref<QTITab | undefined>, page: number, position: number, childIndex: number, data: any): void

  updateRootNode(instance: Ref<QTITab | undefined>, page: number, position: number, data: any): void

  //20231219 add by xuxiaodong
  translationLeft(instance: Ref<QTITab | undefined>): void

  translationRight(instance: Ref<QTITab | undefined>): void

  destroy(instance: Ref<QTITab | undefined>): void

  cancelAll(instance: Ref<QTITab | undefined>): void

  getDataManager(instance: Ref<QTITab | undefined>): QTTabDataManager | undefined

}

export function createQtTabAPI(viewAPI: QtViewAPI): QtTabAPI {

  function initTab(instance: Ref<QTITab | undefined>, tab: QTTab): void {
    instance.value?.initTab(tab)
  }

  function initPage(instance: Ref<QTITab | undefined>, waterfall: QTTabPage): void {
    instance.value?.initPage(waterfall)
  }

  function setPageState(instance: Ref<QTITab | undefined>, pageIndex: number, state: QTTabPageState): void {
    instance.value?.setPageState(pageIndex, state)
  }

  function getCurrentPageIndex(instance: Ref<QTITab | undefined>): number {
    return instance.value?.getCurrentPageIndex() ?? -1
  }

  //------------------------SECTION-----------------------------
  //add
  function setPageData(instance: Ref<QTITab | undefined>, pageIndex: number, tabPage: QTTabPageData): void {
    instance.value?.setPageData(pageIndex, tabPage)
  }

  function addPageData(instance: Ref<QTITab | undefined>, pageIndex: number, tabPageData: QTTabPageData, deleteCount: number): void {
    instance.value?.addPageData(pageIndex, tabPageData, deleteCount)
  }

  function insertPageData(instance: Ref<QTITab | undefined>, tabPageIndex: number, sectionIndex: number, data: any[]): void {
    instance.value?.insertPageData(tabPageIndex, sectionIndex, data)
  }

  //update
  function updatePageData(instance: Ref<QTITab | undefined>, pageIndex: number, tabPageData: QTTabPageData): void {
    instance.value?.updatePageData(pageIndex, tabPageData)
  }

  //update
  function updatePageSection(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, section: QTWaterfallSection): void {
    instance.value?.updatePageSection(pageIndex, sectionIndex, section)
  }

  //delete
  function deletePageSection(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, count: number): void {
    instance.value?.deletePageSection(pageIndex, sectionIndex, count)
  }

  //get
  function getPageSection(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number): QTWaterfallSection | undefined {
    return instance.value?.getPageSection(pageIndex, sectionIndex)
  }

  function getPageSectionList(instance: Ref<QTITab | undefined>, pageIndex: number): Array<QTWaterfallSection> | undefined {
    return instance.value?.getPageSectionList(pageIndex)
  }

  //----------------------ITEM-------------------------------
  function getPageItem(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number): QTWaterfallItem | undefined {
    return instance.value?.getPageItem(pageIndex, sectionIndex, itemIndex)
  }

  function updatePageItem(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number, item: QTWaterfallItem): void {
    instance.value?.updatePageItem(pageIndex, sectionIndex, itemIndex, item)
  }

  function addPageItemList(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemList: Array<QTWaterfallItem>): void {
    instance.value?.addPageItemList(pageIndex, sectionIndex, itemList)
  }

  function deletePageItem(instance: Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number, count: number): void {
    instance.value?.deletePageItem(pageIndex, sectionIndex, itemIndex, count)
  }

  //----------------------FOCUS-------------------------------
  function blockRootFocus(instance: Ref<QTITab | undefined>): void {
    instance.value?.blockRootFocus()
  }

  function unBlockRootFocus(instance: Ref<QTITab | undefined>): void {
    instance.value?.unBlockRootFocus()
  }

  function focusBackToTop(instance: Ref<QTITab | undefined>): void {
    instance.value?.focusBackToTop()
  }

  function requestNodeFocus(instance: Ref<QTITab | undefined>, id: string): void {
    instance.value?.requestNodeFocus(id)
  }

  function reloadAll(instance: Ref<QTITab | undefined>, updateCurrent: boolean): void {
    instance.value?.reloadAll(updateCurrent)
  }

  function reloadPage(instance: Ref<QTITab | undefined>, pageIndex: number): void {
    instance.value?.reloadPage(pageIndex)
  }

  function setCurrentPage(instance: Ref<QTITab | undefined>, pageIndex: number): void {
    instance.value?.setCurrentPage(pageIndex)
  }

  function getCurrentTabIndex(instance: Ref<QTITab | undefined>): Promise<number> {
    if (instance.value) {
      return instance.value!.getCurrentTabIndex()
    } else {
      return Promise.reject()
    }
  }

  function requestTabFocus(instance: Ref<QTITab | undefined>, tabIndex: number): void {
    instance.value?.requestTabFocus(tabIndex)
  }

  function invokeContentFunction(instance: Ref<QTITab | undefined>, pageIndex: number, functionName: string, param: Array<any>): void {
    instance.value?.invokeContentFunction(pageIndex, functionName, param)
  }

  function invokeContentFunctionDirect(instance: Ref<QTITab | undefined>, functionName: string, param: Array<any>): void {
    instance.value?.invokeContentFunctionDirect(functionName, param)
  }

  function contentScrollToFocus(instance: Ref<QTITab | undefined>, position: number): void {
    instance.value?.contentScrollToFocus(position)
  }

  //2.4
  function getRootNodeViewState(instance: Ref<QTITab | undefined>, page: number, position: number, callback: ESViewStateCallback): void {
    instance.value?.getRootNodeViewState(page, position, callback)
  }

  //2.4
  function getChildNodeViewState(instance: Ref<QTITab | undefined>, page: number, position: number, childIndex: number, name: number, callback: ESViewStateCallback): void {
    instance.value?.getChildNodeViewState(page, position, childIndex, name, callback)
  }

  //2.4
  function dispatchUIFunctionOnChildNode(instance: Ref<QTITab | undefined>, page: number, position: number, childIndex: number,
                                         listViewName: string, functionParams: ESListViewItemFunctionParams): void {
    instance.value?.dispatchUIFunctionOnChildNode(page, position, childIndex, listViewName, functionParams)
  }

  function updateItemMatched(instance: Ref<QTITab | undefined>, key: string, id: any, newData: any): void {
    instance.value?.updateItemMatched(key, id, newData)
  }

  function updateChildNode(instance: Ref<QTITab | undefined>, page: number, position: number, childIndex: number, data: any): void {
    instance.value?.updateChildNode(page, position, childIndex, data)
  }

  function updateRootNode(instance: Ref<QTITab | undefined>, page: number, position: number, data: any): void {
    instance.value?.updateRootNode(page, position, data)
  }

  function translationLeft(instance: Ref<QTITab | undefined>): void {
    instance.value?.translationLeft()
  }

  function translationRight(instance: Ref<QTITab | undefined>): void {
    instance.value?.translationRight()
  }

  function destroy(instance: Ref<QTITab | undefined>): void {
    instance.value?.destroy()
  }

  function cancelAll(instance: Ref<QTITab | undefined>): void {
    instance.value?.cancelAll()
  }

  function getDataManager(instance: Ref<QTITab | undefined>): QTTabDataManager | undefined {
    return instance.value?.getDataManager()

  }


  return {
    ...viewAPI,
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
    getCurrentPageIndex,
    getCurrentTabIndex,
    insertPageData,
    getDataManager
  }
}
