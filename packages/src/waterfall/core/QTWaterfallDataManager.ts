//
import {QTWaterfallSection} from "./QTWaterfallSection";
import {QTWaterfallItem} from "./QTWaterfallItem";
import {QTWaterfallIndex} from "./QTWaterfallIndex";

export interface QTWaterfallDataManager {

  init(): void

  getSectionList(): Array<QTWaterfallSection>

  addSectionList(sections: Array<QTWaterfallSection>): QTWaterfallIndex

  deleteSection(sectionIndex: number, count: number): QTWaterfallIndex

  updateSection(sectionIndex: number, section: QTWaterfallSection): QTWaterfallIndex

  getSection(sectionIndex: number): QTWaterfallSection | undefined

  addItemList(sectionIndex: number, itemList: Array<QTWaterfallItem>): QTWaterfallIndex

  deleteItem(sectionIndex: number, itemIndex: number, count: number): QTWaterfallIndex

  updateItem(sectionIndex: number, itemIndex: number, item: QTWaterfallItem): QTWaterfallIndex

  updateItemList(sectionIndex: number, itemIndex: number, count: number, itemList: Array<QTWaterfallItem>): QTWaterfallIndex

  getItem(sectionIndex: number, itemIndex: number): QTWaterfallItem | undefined

  destroy()
}


export function createQTWaterfallDataManager(): QTWaterfallDataManager {

  let sectionList: Array<QTWaterfallSection> = []

  function init() {

  }

  function getSectionList(): Array<QTWaterfallSection> {
    return sectionList
  }

  function addSectionList(sections: Array<QTWaterfallSection>): QTWaterfallIndex {
    //
    const sectionListLength = sectionList.length
    const previousItemCount = getRangeSectionListItemCount(0, sectionListLength)
    const itemCount = getSectionListItemCount(sections)

    sectionList.push(...sections)
    dumpWaterfallData()

    return {
      sectionIndex: sectionListLength,
      sectionCount: sections.length,
      itemIndex: previousItemCount,
      itemCount: itemCount,
    }
  }

  function deleteSection(sectionIndex: number, count: number): QTWaterfallIndex {
    const previousItemCount = getRangeSectionListItemCount(0, sectionIndex - 1)
    const deleteItemCount = getRangeSectionListItemCount(sectionIndex, count)
    sectionList.splice(sectionIndex, count)

    dumpWaterfallData()

    return {
      sectionIndex: sectionIndex,
      sectionCount: count,
      itemIndex: previousItemCount,
      itemCount: deleteItemCount,
    }
  }

  function updateSection(sectionIndex: number, section: QTWaterfallSection): QTWaterfallIndex {
    const previousItemCount = getRangeSectionListItemCount(0, sectionIndex - 1)
    const itemCount = getSectionItemCount(section)
    sectionList.splice(sectionIndex, 1, section)

    dumpWaterfallData()

    return {
      sectionIndex: sectionIndex,
      sectionCount: 1,
      itemIndex: previousItemCount,
      itemCount: itemCount,
    }
  }

  function getSection(sectionIndex: number): QTWaterfallSection | undefined {
    if (sectionIndex < 0 || sectionIndex >= sectionList.length || sectionList.length == 0) {
      return undefined
    }
    return sectionList[sectionIndex]
  }

  //-------------------------------------------------------------------------------
  function addItemList(sectionIndex: number, itemList: Array<QTWaterfallItem>): QTWaterfallIndex {
    const sectionLength = sectionList.length
    if (sectionIndex < 0 || sectionIndex >= sectionLength || itemList.length <= 0) {
      return {
        sectionIndex: -1,
        sectionCount: 0,
        itemIndex: -1,
        itemCount: 0,
      }
    }
    const section = sectionList[sectionIndex]
    const previousItemCount = section.itemList.length
    //
    section.itemList.push(...itemList)

    dumpWaterfallData()

    return {
      sectionIndex: sectionIndex,
      sectionCount: 1,
      itemIndex: previousItemCount,
      itemCount: itemList.length,
    }
  }

  function deleteItem(sectionIndex: number, itemIndex: number, count: number): QTWaterfallIndex {
    const section = sectionList[sectionIndex]
    section.itemList.splice(itemIndex, count)

    dumpWaterfallData()

    return {
      sectionIndex: sectionIndex,
      sectionCount: 1,
      itemIndex: itemIndex,
      itemCount: count,
    }
  }

  function updateItem(sectionIndex: number, itemIndex: number, data: QTWaterfallItem): QTWaterfallIndex {
    const section = sectionList[sectionIndex]
    section.itemList.splice(itemIndex, 1, data)

    dumpWaterfallData()

    return {
      sectionIndex: sectionIndex,
      sectionCount: 1,
      itemIndex: itemIndex,
      itemCount: 1,
    }
  }

  function updateItemList(sectionIndex: number, itemIndex: number, count: number, itemList: Array<QTWaterfallItem>): QTWaterfallIndex {
    const section = sectionList[sectionIndex]
    section.itemList.splice(itemIndex, count, ...itemList)

    dumpWaterfallData()

    return {
      sectionIndex: sectionIndex,
      sectionCount: 1,
      itemIndex: itemIndex,
      itemCount: count,
    }
  }

  function getItem(sectionIndex: number, itemIndex: number): QTWaterfallItem | undefined {
    const section = sectionList[sectionIndex]
    if (section && section.itemList.length > 0 &&
      itemIndex >= 0 && itemIndex < section.itemList.length) {
      const item = section.itemList[itemIndex]
      return item
    }
    return undefined
  }

  //-------------------------------------------------------------------------------

  function getSectionItemCount(section: QTWaterfallSection): number {
    return section.itemList.length;
  }

  function getSectionListItemCount(sections: Array<QTWaterfallSection>): number {
    if (sections.length <= 0) {
      return 0
    }
    let itemTotal = 0
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i]
      itemTotal += getSectionItemCount(s)
    }
    return itemTotal
  }

  function getRangeSectionListItemCount(startPosition: number, count: number): number {
    console.log('----1--------getRangeSectionListItemCount----------------->>>>')
    const sectionCount = sectionList.length;
    if (startPosition < 0 || startPosition >= sectionCount) {
      return 0
    }
    console.log('----2--------getRangeSectionListItemCount----------------->>>>')
    let endPosition = (startPosition + count);
    if (startPosition + count > sectionCount) {
      endPosition = sectionCount
    }
    console.log('----3--------getRangeSectionListItemCount----------------->>>>')
    let itemTotal = 0
    for (let i = startPosition; i < endPosition; i++) {
      const section = sectionList[i]
      itemTotal += getSectionItemCount(section)
    }
    return itemTotal;
  }

  function destroy() {
    sectionList = []
  }

  function dumpWaterfallData() {
    console.log('--------dumpWaterfallData--------->>>>', sectionList)
  }

  return {
    init,
    getSectionList,
    addSectionList,
    deleteSection,
    updateSection,
    getSection,
    addItemList,
    deleteItem,
    updateItem,
    updateItemList,
    getItem,
    destroy
  }
}
