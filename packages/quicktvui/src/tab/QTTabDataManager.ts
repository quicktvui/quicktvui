//

import { QTWaterfallSection } from '../waterfall/core/QTWaterfallSection'
import { QTWaterfallItem } from '../waterfall/core/QTWaterfallItem'
import { QTTabIndex } from './QTTabIndex'
import { QTTabPageDataState } from './QTTabPageDataState'
import { QTTabPageState } from './QTTabPageState'
import { QTTab } from './QTTab'
import { QTListViewItemState } from '../list-view/core/QTListViewItemState'
import { ESLog, ESLogLevel } from '@extscreen/es3-core'

export interface QTTabDataManager {
  initTab(tab: QTTab): void

  initTabPageData(pageIndex: number): void

  setPageDataState(pageIndex: number, page: QTTabPageDataState): void

  getTabPageDataState(pageIndex: number): QTTabPageDataState | undefined

  //-------------------------------------------------------------------------------------
  getSectionList(pageIndex: number): Array<QTWaterfallSection>

  insertSectionList(
    pageIndex: number,
    sectionIndex: number,
    sections: Array<QTWaterfallSection>
  ): QTTabIndex

  addSectionList(
    pageIndex: number,
    sections: Array<QTWaterfallSection>,
    deleteCount: number
  ): QTTabIndex

  deleteSection(pageIndex: number, sectionIndex: number, count: number): QTTabIndex

  updateSectionList(pageIndex: number, sectionList: Array<QTWaterfallSection>): QTTabIndex

  updateSection(pageIndex: number, sectionIndex: number, section: QTWaterfallSection): QTTabIndex

  getSection(pageIndex: number, sectionIndex: number): QTWaterfallSection | undefined

  //-------------------------------------------------------------------------------------

  setSectionState(pageIndex: number, sectionIndex: number, state: QTListViewItemState): void

  getSectionListByState(pageIndex: number, state: QTListViewItemState): Array<QTWaterfallSection>

  //-------------------------------------------------------------------------------------
  addItemList(
    pageIndex: number,
    sectionIndex: number,
    itemList: Array<QTWaterfallItem>,
    insertIndex?: number,
    deleteCount?: number
  ): QTTabIndex

  deleteItem(pageIndex: number, sectionIndex: number, itemIndex: number, count: number): QTTabIndex

  updateItem(
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number,
    item: QTWaterfallItem
  ): QTTabIndex

  updateItemList(
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number,
    count: number,
    itemList: Array<QTWaterfallItem>
  ): QTTabIndex

  getItem(pageIndex: number, sectionIndex: number, itemIndex: number): QTWaterfallItem | undefined

  //-------------------------------------------------------------------------------------
  destroy()
}

export function createQTTabDataManager(log: ESLog): QTTabDataManager {
  const TAG = 'qt-tabs'

  const pageMap = new Map<number, QTTabPageDataState>()
  const pageDataMap = new Map<number, Array<QTWaterfallSection>>()

  function initTab(tab: QTTab) {
    const tabItemList = tab.itemList
    for (let i = 0; i < tabItemList.length; i++) {
      initTabPageData(i)
    }
  }

  //--------------------------------------------------------------------
  function initTabPageData(pageIndex: number): void {
    const pageData: QTTabPageDataState = {
      index: pageIndex,
      state: QTTabPageState.QT_TAB_PAGE_STATE_INIT,
      sectionBindIndex: -1,
    }
    pageMap.set(pageIndex, pageData)
    pageDataMap.set(pageIndex, [])
  }

  function setPageDataState(pageIndex: number, pageData: QTTabPageDataState): void {
    if (log.isLoggable(ESLogLevel.DEBUG)) {
      log.d(
        TAG,
        '---QTTabDataManager----setPageStateReset----->>' +
          ' pageIndex:' +
          pageIndex +
          ' pageData:',
        pageData
      )
    }
    pageMap.set(pageIndex, pageData)
  }

  function getTabPageDataState(pageIndex: number): QTTabPageDataState | undefined {
    return pageMap.get(pageIndex)
  }

  //--------------------------------------------------------------------
  function getSectionList(pageIndex: number): Array<QTWaterfallSection> {
    const sectionList = pageDataMap.get(pageIndex) ?? []
    if (log.isLoggable(ESLogLevel.DEBUG)) {
      log.d(
        TAG,
        '-----QTTabDataManager---dumpTabWaterfallData---###getSectionList---->>' +
          ' pageIndex:' +
          pageIndex +
          ' sectionList: ',
        sectionList
      )
    }
    return sectionList
  }

  function addSectionList(
    pageIndex: number,
    sections: Array<QTWaterfallSection>,
    deleteCount: number = 0
  ): QTTabIndex {
    let sectionList = pageDataMap.get(pageIndex) ?? []
    if (deleteCount > 0) {
      sectionList = sectionList.slice(0, sectionList.length - deleteCount)
      pageDataMap.set(pageIndex, sectionList)
    }
    const sectionListLength = sectionList.length
    const previousItemCount = getRangeSectionListItemCount(sectionList, 0, sectionListLength)
    const itemCount = getSectionListItemCount(sections)

    sectionList.push(...sections)

    const page = pageMap.get(pageIndex)
    if (page) {
      if (page.state != QTTabPageState.QT_TAB_PAGE_STATE_COMPLETE) {
        page.state = QTTabPageState.QT_TAB_PAGE_STATE_IDLE
      }
    }

    if (log.isLoggable(ESLogLevel.DEBUG)) {
      log.d(
        TAG,
        '-----QTTabDataManager---dumpTabWaterfallData---###addSectionList---->>' +
          ' pageIndex:' +
          pageIndex +
          ' 需要增加的sections: ',
        sections,
        ' 增加以后的sectionList: ',
        sectionList
      )
    }
    dumpWaterfallData('addSectionList: ' + pageIndex)

    return {
      pageIndex: pageIndex,
      sectionIndex: sectionListLength,
      sectionCount: sections.length,
      itemIndex: previousItemCount,
      itemCount: itemCount,
    }
  }

  function insertSectionList(
    pageIndex: number,
    sectionIndex: number,
    sections: Array<QTWaterfallSection>
  ): QTTabIndex {
    const sectionList = pageDataMap.get(pageIndex) ?? []
    const sectionListLength = sectionList.length
    const previousItemCount = getRangeSectionListItemCount(sectionList, 0, sectionListLength)
    const itemCount = getSectionListItemCount(sections)

    sectionList.splice(sectionIndex, 0, ...sections)

    const page = pageMap.get(pageIndex)
    if (page) {
      if (page.state != QTTabPageState.QT_TAB_PAGE_STATE_COMPLETE) {
        page.state = QTTabPageState.QT_TAB_PAGE_STATE_IDLE
      }
    }

    if (log.isLoggable(ESLogLevel.DEBUG)) {
      log.d(
        TAG,
        '----QTTabDataManager----dumpTabWaterfallData---###insertSectionList---->>' +
          ' pageIndex:' +
          pageIndex +
          ' sectionIndex: ',
        sectionIndex,
        ' sections: ',
        sections
      )
    }
    dumpWaterfallData('insertSectionList: ' + pageIndex)

    return {
      pageIndex: pageIndex,
      sectionIndex: sectionListLength,
      sectionCount: sections.length,
      itemIndex: previousItemCount,
      itemCount: itemCount,
    }
  }

  function deleteSection(pageIndex: number, sectionIndex: number, count: number): QTTabIndex {
    const sectionList = pageDataMap.get(pageIndex) ?? []
    const previousItemCount = getRangeSectionListItemCount(sectionList, 0, sectionIndex - 1)
    const deleteItemCount = getRangeSectionListItemCount(sectionList, sectionIndex, count)
    sectionList.splice(sectionIndex, count)

    if (log.isLoggable(ESLogLevel.DEBUG)) {
      log.d(
        TAG,
        '----QTTabDataManager----dumpTabWaterfallData---###deleteSection---->>' +
          ' pageIndex:' +
          pageIndex +
          ' sectionIndex: ',
        sectionIndex + ' count: ',
        count
      )
    }
    dumpWaterfallData('deleteSection: ' + pageIndex)

    return {
      pageIndex: pageIndex,
      sectionIndex: sectionIndex,
      sectionCount: count,
      itemIndex: previousItemCount,
      itemCount: deleteItemCount,
    }
  }

  function updateSection(
    pageIndex: number,
    sectionIndex: number,
    section: QTWaterfallSection
  ): QTTabIndex {
    const sectionList = pageDataMap.get(pageIndex) ?? []
    const previousItemCount = getRangeSectionListItemCount(sectionList, 0, sectionIndex - 1)
    const itemCount = getSectionItemCount(section)
    sectionList.splice(sectionIndex, 1, section)

    if (log.isLoggable(ESLogLevel.DEBUG)) {
      log.d(
        TAG,
        '-----QTTabDataManager---dumpTabWaterfallData---###updateSection---->>' +
          ' pageIndex:' +
          pageIndex +
          ' sectionIndex: ',
        sectionIndex + ' section: ',
        section
      )
    }
    dumpWaterfallData('updateSection: ' + pageIndex)

    return {
      pageIndex: pageIndex,
      sectionIndex: sectionIndex,
      sectionCount: 1,
      itemIndex: previousItemCount,
      itemCount: itemCount,
    }
  }

  function updateSectionList(
    pageIndex: number,
    sectionList: Array<QTWaterfallSection>
  ): QTTabIndex {
    pageDataMap.set(pageIndex, sectionList)
    if (log.isLoggable(ESLogLevel.DEBUG)) {
      log.d(
        TAG,
        '----QTTabDataManager----dumpTabWaterfallData---###updateSectionList---->>' +
          ' pageIndex:' +
          pageIndex +
          ' sectionIndex: ',
        sectionList
      )
    }
    dumpWaterfallData('updateSectionList: ' + pageIndex)

    return {
      pageIndex: pageIndex,
      sectionIndex: 0,
      sectionCount: sectionList.length,
      itemIndex: -1,
      itemCount: -1,
    }
  }

  function getSection(pageIndex: number, sectionIndex: number): QTWaterfallSection | undefined {
    const sectionList = pageDataMap.get(pageIndex) ?? []
    if (sectionIndex < 0 || sectionIndex >= sectionList.length || sectionList.length == 0) {
      return undefined
    }
    return sectionList[sectionIndex]
  }

  function setSectionState(
    pageIndex: number,
    sectionIndex: number,
    state: QTListViewItemState
  ): void {
    const section = getSection(pageIndex, sectionIndex)
    if (section) {
      section.state = state
      section.sectionIndex = sectionIndex
    }
  }

  function getSectionListByState(
    pageIndex: number,
    state: QTListViewItemState
  ): Array<QTWaterfallSection> {
    const sectionList = pageDataMap.get(pageIndex) ?? []
    return sectionList.filter((section) => section.state == state)
  }

  //-------------------------------------------------------------------------------
  function addItemList(
    pageIndex: number,
    sectionIndex: number,
    itemList: Array<QTWaterfallItem>,
    insertIndex?: number,
    deleteCount?: number
  ): QTTabIndex {
    const sectionList = pageDataMap.get(pageIndex) ?? []
    const sectionLength = sectionList.length
    if (sectionIndex < 0 || sectionIndex >= sectionLength || itemList.length <= 0) {
      return {
        pageIndex: pageIndex,
        sectionIndex: -1,
        sectionCount: 0,
        itemIndex: -1,
        itemCount: 0,
      }
    }
    const section = sectionList[sectionIndex]
    const previousItemCount = section.itemList.length
    //
    if (insertIndex !== undefined) {
      section.itemList.splice(insertIndex, deleteCount || 0, ...itemList)
    } else {
      section.itemList.push(...itemList)
    }
    dumpWaterfallData('addItemList: ' + pageIndex)

    return {
      pageIndex: pageIndex,
      sectionIndex: sectionIndex,
      sectionCount: 1,
      itemIndex: previousItemCount,
      itemCount: itemList.length,
    }
  }

  function deleteItem(
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number,
    count: number
  ): QTTabIndex {
    const sectionList = pageDataMap.get(pageIndex) ?? []
    const section = sectionList[sectionIndex]
    section.itemList.splice(itemIndex, count)

    dumpWaterfallData('deleteItem: ' + pageIndex)

    return {
      pageIndex: pageIndex,
      sectionIndex: sectionIndex,
      sectionCount: 1,
      itemIndex: itemIndex,
      itemCount: count,
    }
  }

  function updateItem(
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number,
    data: QTWaterfallItem
  ): QTTabIndex {
    const sectionList = pageDataMap.get(pageIndex) ?? []
    const section = sectionList[sectionIndex]
    section.itemList.splice(itemIndex, 1, data)

    dumpWaterfallData('updateItem: ' + pageIndex)

    return {
      pageIndex: pageIndex,
      sectionIndex: sectionIndex,
      sectionCount: 1,
      itemIndex: itemIndex,
      itemCount: 1,
    }
  }

  function updateItemList(
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number,
    count: number,
    itemList: Array<QTWaterfallItem>
  ): QTTabIndex {
    const sectionList = pageDataMap.get(pageIndex) ?? []
    const section = sectionList[sectionIndex]
    section.itemList.splice(itemIndex, count, ...itemList)

    dumpWaterfallData('updateItemList: ' + pageIndex)

    return {
      pageIndex: pageIndex,
      sectionIndex: sectionIndex,
      sectionCount: 1,
      itemIndex: itemIndex,
      itemCount: count,
    }
  }

  function getItem(
    pageIndex: number,
    sectionIndex: number,
    itemIndex: number
  ): QTWaterfallItem | undefined {
    const sectionList = pageDataMap.get(pageIndex) ?? []
    const section = sectionList[sectionIndex]
    if (
      section &&
      section.itemList.length > 0 &&
      itemIndex >= 0 &&
      itemIndex < section.itemList.length
    ) {
      const item = section.itemList[itemIndex]
      return item
    }
    return undefined
  }

  //-------------------------------------------------------------------------------

  function getSectionItemCount(section: QTWaterfallSection): number {
    return section.itemList.length
  }

  function getSectionListItemCount(sections: Array<QTWaterfallSection>): number {
    let itemTotal = 0
    try {
      if (sections.length <= 0) {
        return 0
      }

      for (let i = 0; i < sections.length; i++) {
        const s = sections[i]
        itemTotal += getSectionItemCount(s)
      }
    } catch (e) {}
    return itemTotal
  }

  function getRangeSectionListItemCount(
    sectionList: Array<QTWaterfallSection>,
    startPosition: number,
    count: number
  ): number {
    let itemTotal = 0
    try {
      const sectionCount = sectionList.length
      if (startPosition < 0 || startPosition >= sectionCount) {
        return 0
      }
      let endPosition = startPosition + count
      if (startPosition + count > sectionCount) {
        endPosition = sectionCount
      }

      for (let i = startPosition; i < endPosition; i++) {
        const section = sectionList[i]
        itemTotal += getSectionItemCount(section)
      }
    } catch (e) {}
    return itemTotal
  }

  function destroy() {
    if (log.isLoggable(ESLogLevel.DEBUG)) {
      log.d(TAG, '----QTTabDataManager---destroy----->>')
    }
    pageDataMap.clear()
  }

  function dumpWaterfallData(tag: string) {
    if (log.isLoggable(ESLogLevel.DEBUG)) {
      log.d(
        TAG,
        '-----QTTabDataManager---dumpTabWaterfallData---- ' + tag + ' :----->>>>',
        pageDataMap
      )
    }
  }

  return {
    initTab,
    initTabPageData,
    getTabPageDataState,
    setPageDataState,
    setSectionState,
    getSectionListByState,
    getSectionList,
    addSectionList,
    insertSectionList,
    deleteSection,
    updateSection,
    updateSectionList,
    getSection,
    addItemList,
    deleteItem,
    updateItem,
    updateItemList,
    getItem,
    destroy,
  }
}
