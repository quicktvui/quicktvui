import {QTTab} from "./QTTab";
import {QTTabPageData} from "./QTTabPageData";
import {ESListViewItemFunctionParams, ESViewStateCallback} from "@extscreen/es3-component";
import {QTTabPageState} from "./QTTabPageState";
import {QTWaterfallSection} from "../waterfall/core/QTWaterfallSection";
import {QTWaterfallItem} from "../waterfall/core/QTWaterfallItem";
import {QTTabPage} from "./QTTabPage";
import {QTIView} from "../view/QTIView";

export interface QTITab extends QTIView {
//------------------------TAB-----------------------------
  initTab(tab: QTTab): void

  initPage(waterfall: QTTabPage): void

  setPageState(pageIndex: number, state: QTTabPageState): void

  getCurrentPageIndex(): number

  //------------------------SECTION-----------------------------
  //add
  setPageData(pageIndex: number, tabPage: QTTabPageData): void

  addPageData(pageIndex: number, tabPageData: QTTabPageData, deleteCount: number): void
  insertPageData(tabPageIndex: number, sectionIndex: number, data: any[]): void
  //update
  updatePageData(pageIndex: number, tabPageData: QTTabPageData): void

  //update
  updatePageSection(pageIndex: number, sectionIndex: number, section: QTWaterfallSection): void

  //delete
  deletePageSection(pageIndex: number, sectionIndex: number, count: number): void

  //get
  getPageSection(pageIndex: number, sectionIndex: number): QTWaterfallSection | undefined

  getPageSectionList(pageIndex: number): Array<QTWaterfallSection>

  //----------------------ITEM-------------------------------
  getPageItem(pageIndex: number, sectionIndex: number, itemIndex: number): QTWaterfallItem | undefined

  updatePageItem(pageIndex: number, sectionIndex: number, itemIndex: number, item: QTWaterfallItem): void

  addPageItemList(pageIndex: number, sectionIndex: number, itemList: Array<QTWaterfallItem>): void

  deletePageItem(pageIndex: number, sectionIndex: number, itemIndex: number, count: number): void

  //----------------------FOCUS-------------------------------
  blockRootFocus(): void

  unBlockRootFocus(): void

  focusBackToTop(): void

  requestNodeFocus(id: string): void

  reloadAll(updateCurrent: boolean): void

  reloadPage(pageIndex: number): void

  setCurrentPage(pageIndex: number): void

  getCurrentTabIndex(): Promise<number>

  requestTabFocus(tabIndex: number): void

  invokeContentFunction(pageIndex: number, functionName: string, param: Array<any>): void

  invokeContentFunctionDirect(functionName: string, param: Array<any>): void

  contentScrollToFocus(position: number): void

  //2.4
  getRootNodeViewState(page: number, position: number, callback: ESViewStateCallback): void

  //2.4
  getChildNodeViewState(page: number, position: number, childIndex: number, name: number, callback: ESViewStateCallback): void

  //2.4
  dispatchUIFunctionOnChildNode(page: number, position: number, childIndex: number,
                                listViewName: string, functionParams: ESListViewItemFunctionParams): void

  updateItemMatched(key: string, id: any, newData: any): void

  updateChildNode(page: number, position: number, childIndex: number, data: any): void

  updateRootNode(page: number, position: number, data: any): void

  //20231219 add by xuxiaodong
  translationLeft(): void

  translationRight(): void

  destroy(): void

  cancelAll():void
}
