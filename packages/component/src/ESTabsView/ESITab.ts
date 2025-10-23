//
import { ESTab } from './ESTab'
import { ESPageData } from '../ESViewPager/ESPageData'
import { ESViewStateCallback } from '../ESView/ESViewStateCallback'
import { ESListViewItemFunctionParams } from '../ESTVListView/ESListViewItemFunctionParams'
import { ESIView } from '../ESView/ESIView'

export interface ESITab extends ESIView {
  blockRootFocus(): void

  unBlockRootFocus(): void

  setTabsData(tabs: ESTab): void

  setPageData(pageIndex: number, data: ESPageData): void

  updatePageData(pageIndex: number, data: ESPageData): void

  focusBackToTop(): void

  requestNodeFocus(id: string): void

  addPageData(pageIndex: number, data: ESPageData, deleteCount: number): void

  insertPageData(tabPageIndex: number, sectionIndex: number, data: any[]): void

  reloadAll(updateCurrent: boolean): void

  reloadPage(pageIndex: number): void

  setCurrentPage(pageIndex: number): void

  getCurrentPage(): Promise<number>

  requestTabFocus(tabIndex: number): void

  invokeContentFunction(pageIndex: number, functionName: string, param: Array<any>): void

  invokeContentFunctionDirect(functionName: string, param: Array<any>): void

  contentScrollToFocus(position: number): void

  //2.4
  getRootNodeViewState(page: number, position: number, callback: ESViewStateCallback): void

  //2.4
  getChildNodeViewState(
    page: number,
    position: number,
    childIndex: number,
    name: number,
    callback: ESViewStateCallback
  ): void

  //2.4
  dispatchUIFunctionOnChildNode(
    page: number,
    position: number,
    childIndex: number,
    listViewName: string,
    functionParams: ESListViewItemFunctionParams
  ): void

  updateItemMatched(key: string, id: any, newData: any): void

  updateChildNode(page: number, position: number, childIndex: number, data: any): void

  updateRootNode(page: number, position: number, data: any): void

  translationLeft(): void

  translationRight(): void

  destroy(): void

  cancelAll(): void
}
