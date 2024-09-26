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

export interface QtTabAPI extends QtViewAPI {

  initTab(instance: string | Ref<QTITab | undefined>, tab: QTTab): void

  initPage(instance: string | Ref<QTITab | undefined>, waterfall: QTTabPage): void

  setPageState(instance: string | Ref<QTITab | undefined>, pageIndex: number, state: QTTabPageState): void

  getCurrentPageIndex(instance: string | Ref<QTITab | undefined>): number

  //------------------------SECTION-----------------------------
  //add
  setPageData(instance: string | Ref<QTITab | undefined>, pageIndex: number, tabPage: QTTabPageData): void

  addPageData(instance: string | Ref<QTITab | undefined>, pageIndex: number, tabPageData: QTTabPageData, deleteCount: number): void

  insertPageData(instance: string | Ref<QTITab | undefined>, tabPageIndex: number, sectionIndex: number, data: any[]): void

  //update
  updatePageData(instance: string | Ref<QTITab | undefined>, pageIndex: number, tabPageData: QTTabPageData): void

  //update
  updatePageSection(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, section: QTWaterfallSection): void

  //delete
  deletePageSection(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, count: number): void

  //get
  getPageSection(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number): QTWaterfallSection | undefined

  getPageSectionList(instance: string | Ref<QTITab | undefined>, pageIndex: number): Array<QTWaterfallSection>

  //----------------------ITEM-------------------------------
  getPageItem(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number): QTWaterfallItem | undefined

  updatePageItem(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number, item: QTWaterfallItem): void

  addPageItemList(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemList: Array<QTWaterfallItem>): void

  deletePageItem(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number, count: number): void

  //----------------------FOCUS-------------------------------
  blockRootFocus(instance: string | Ref<QTITab | undefined>): void

  unBlockRootFocus(instance: string | Ref<QTITab | undefined>): void

  focusBackToTop(instance: string | Ref<QTITab | undefined>): void

  requestNodeFocus(instance: string | Ref<QTITab | undefined>, id: string): void

  reloadAll(instance: string | Ref<QTITab | undefined>, updateCurrent: boolean): void

  reloadPage(instance: string | Ref<QTITab | undefined>, pageIndex: number): void

  setCurrentPage(instance: string | Ref<QTITab | undefined>, pageIndex: number): void

  getCurrentTabIndex(instance: string | Ref<QTITab | undefined>): Promise<number>

  requestTabFocus(instance: string | Ref<QTITab | undefined>, tabIndex: number): void

  invokeContentFunction(instance: string | Ref<QTITab | undefined>, pageIndex: number, functionName: string, param: Array<any>): void

  invokeContentFunctionDirect(instance: string | Ref<QTITab | undefined>, functionName: string, param: Array<any>): void

  contentScrollToFocus(instance: string | Ref<QTITab | undefined>, position: number): void

  //2.4
  getRootNodeViewState(instance: string | Ref<QTITab | undefined>, page: number, position: number, callback: ESViewStateCallback): void

  //2.4
  getChildNodeViewState(instance: string | Ref<QTITab | undefined>, page: number, position: number, childIndex: number, name: number, callback: ESViewStateCallback): void

  //2.4
  dispatchUIFunctionOnChildNode(instance: string | Ref<QTITab | undefined>, page: number, position: number, childIndex: number,
                                listViewName: string, functionParams: ESListViewItemFunctionParams): void

  updateItemMatched(instance: string | Ref<QTITab | undefined>, key: string, id: any, newData: any): void

  updateChildNode(instance: string | Ref<QTITab | undefined>, page: number, position: number, childIndex: number, data: any): void

  updateRootNode(instance: string | Ref<QTITab | undefined>, page: number, position: number, data: any): void

  //20231219 add by xuxiaodong
  translationLeft(instance: string | Ref<QTITab | undefined>): void

  translationRight(instance: string | Ref<QTITab | undefined>): void

  destroy(instance: string | Ref<QTITab | undefined>): void

  cancelAll(instance: string | Ref<QTITab | undefined>): void

  getDataManager(instance: string | Ref<QTITab | undefined>): QTTabDataManager

}

export function createQtTabAPI(viewAPI: QtViewAPI): QtTabAPI {

  function initTab(instance: string | Ref<QTITab | undefined>, tab: QTTab): void {
  }

  function initPage(instance: string | Ref<QTITab | undefined>, waterfall: QTTabPage): void {
  }

  function setPageState(instance: string | Ref<QTITab | undefined>, pageIndex: number, state: QTTabPageState): void {
  }

  function getCurrentPageIndex(instance: string | Ref<QTITab | undefined>): number {
  }

  //------------------------SECTION-----------------------------
  //add
  function setPageData(instance: string | Ref<QTITab | undefined>, pageIndex: number, tabPage: QTTabPageData): void {
  }

  function addPageData(instance: string | Ref<QTITab | undefined>, pageIndex: number, tabPageData: QTTabPageData, deleteCount: number): void {
  }

  function insertPageData(instance: string | Ref<QTITab | undefined>, tabPageIndex: number, sectionIndex: number, data: any[]): void {
  }

  //update
  function updatePageData(instance: string | Ref<QTITab | undefined>, pageIndex: number, tabPageData: QTTabPageData): void {
  }

  //update
  function updatePageSection(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, section: QTWaterfallSection): void {
  }

  //delete
  function deletePageSection(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, count: number): void {
  }

  //get
  function getPageSection(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number): QTWaterfallSection | undefined {
  }

  function getPageSectionList(instance: string | Ref<QTITab | undefined>, pageIndex: number): Array<QTWaterfallSection> {
  }

  //----------------------ITEM-------------------------------
  function getPageItem(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number): QTWaterfallItem | undefined {
  }

  function updatePageItem(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number, item: QTWaterfallItem): void {
  }

  function addPageItemList(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemList: Array<QTWaterfallItem>): void {
  }

  function deletePageItem(instance: string | Ref<QTITab | undefined>, pageIndex: number, sectionIndex: number, itemIndex: number, count: number): void {
  }

  //----------------------FOCUS-------------------------------
  function blockRootFocus(instance: string | Ref<QTITab | undefined>): void {
  }

  function unBlockRootFocus(instance: string | Ref<QTITab | undefined>): void {
  }

  function focusBackToTop(instance: string | Ref<QTITab | undefined>): void {
  }

  function requestNodeFocus(instance: string | Ref<QTITab | undefined>, id: string): void {
  }

  function reloadAll(instance: string | Ref<QTITab | undefined>, updateCurrent: boolean): void {
  }

  function reloadPage(instance: string | Ref<QTITab | undefined>, pageIndex: number): void {
  }

  function setCurrentPage(instance: string | Ref<QTITab | undefined>, pageIndex: number): void {
  }

  function getCurrentTabIndex(instance: string | Ref<QTITab | undefined>): Promise<number> {
  }

  function requestTabFocus(instance: string | Ref<QTITab | undefined>, tabIndex: number): void {
  }

  function invokeContentFunction(instance: string | Ref<QTITab | undefined>, pageIndex: number, functionName: string, param: Array<any>): void {
  }

  function invokeContentFunctionDirect(instance: string | Ref<QTITab | undefined>, functionName: string, param: Array<any>): void {
  }

  function contentScrollToFocus(instance: string | Ref<QTITab | undefined>, position: number): void {
  }

  //2.4
  function getRootNodeViewState(instance: string | Ref<QTITab | undefined>, page: number, position: number, callback: ESViewStateCallback): void {
  }

  //2.4
  function getChildNodeViewState(instance: string | Ref<QTITab | undefined>, page: number, position: number, childIndex: number, name: number, callback: ESViewStateCallback): void {
  }

  //2.4
  function dispatchUIFunctionOnChildNode(instance: string | Ref<QTITab | undefined>, page: number, position: number, childIndex: number,
                                         listViewName: string, functionParams: ESListViewItemFunctionParams): void {
  }

  function updateItemMatched(instance: string | Ref<QTITab | undefined>, key: string, id: any, newData: any): void {
  }

  function updateChildNode(instance: string | Ref<QTITab | undefined>, page: number, position: number, childIndex: number, data: any): void {
  }

  function updateRootNode(instance: string | Ref<QTITab | undefined>, page: number, position: number, data: any): void {
  }

  //20231219 add by xuxiaodong
  function translationLeft(instance: string | Ref<QTITab | undefined>): void {
  }

  function translationRight(instance: string | Ref<QTITab | undefined>): void {
  }

  function destroy(instance: string | Ref<QTITab | undefined>): void {
  }

  function cancelAll(instance: string | Ref<QTITab | undefined>): void {
  }

  function getDataManager(instance: string | Ref<QTITab | undefined>): QTTabDataManager {
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
