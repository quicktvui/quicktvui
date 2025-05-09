import { QtBaseListViewAPI } from '../list/QtBaseListViewAPI'
import { QTWaterfall } from './core/QTWaterfall'
import { QTWaterfallSection } from './core/QTWaterfallSection'
import { QTWaterfallItem } from './core/QTWaterfallItem'
import { Ref } from '@vue/reactivity'
import { QTIWaterfall } from './core/QTIWaterfall'
import { QtBaseViewAPI } from '../base/QtBaseViewAPI'

export interface QtWaterfallAPI extends QtBaseViewAPI, QtBaseListViewAPI {
  init(instance: Ref<QTIWaterfall | undefined>, waterfall: QTWaterfall)

  //---------------------------------------------------------------------
  getSectionList(instance: Ref<QTIWaterfall | undefined>): Array<QTWaterfallSection>

  setSectionList(instance: Ref<QTIWaterfall | undefined>, sections: Array<QTWaterfallSection>): void

  addSectionList(instance: Ref<QTIWaterfall | undefined>, sections: Array<QTWaterfallSection>): void

  deleteSection(instance: Ref<QTIWaterfall | undefined>, sectionIndex: number, count: number): void

  updateSection(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    section: QTWaterfallSection
  ): void

  updateSectionList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    count: number,
    sectionList: Array<QTWaterfallSection>
  ): void

  getSection(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number
  ): QTWaterfallSection | undefined

  //---------------------------------------------------------------------
  addItemList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemList: Array<QTWaterfallItem>
  ): void

  deleteItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    count: number
  ): void

  updateItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    item: QTWaterfallItem
  ): void

  updateItemList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    count: number,
    itemList: Array<QTWaterfallItem>
  ): void

  getItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number
  ): QTWaterfallItem | undefined
}

export function createQtWaterfallAPI(
  viewAPI: QtBaseViewAPI,
  listViewAPI: QtBaseListViewAPI
): QtWaterfallAPI {
  function init(instance: Ref<QTIWaterfall | undefined>, waterfall: QTWaterfall) {
    instance.value?.init(waterfall)
  }

  //---------------------------------------------------------------------
  function getSectionList(instance: Ref<QTIWaterfall | undefined>): Array<QTWaterfallSection> {
    if (instance.value) {
      return instance.value!.getSectionList()
    }
    return []
  }

  function setSectionList(
    instance: Ref<QTIWaterfall | undefined>,
    sections: Array<QTWaterfallSection>
  ): void {
    instance.value?.setSectionList(sections)
  }

  function addSectionList(
    instance: Ref<QTIWaterfall | undefined>,
    sections: Array<QTWaterfallSection>
  ): void {
    instance.value?.addSectionList(sections)
  }

  function deleteSection(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    count: number
  ): void {
    instance.value?.deleteSection(sectionIndex, count)
  }

  function updateSection(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    section: QTWaterfallSection
  ): void {
    instance.value?.updateSection(sectionIndex, section)
  }

  function updateSectionList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    count: number,
    sectionList: Array<QTWaterfallSection>
  ): void {
    instance.value?.updateSectionList(sectionIndex, count, sectionList)
  }

  function getSection(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number
  ): QTWaterfallSection | undefined {
    return instance.value?.getSection(sectionIndex)
  }

  //---------------------------------------------------------------------
  function addItemList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemList: Array<QTWaterfallItem>
  ): void {
    instance.value?.addItemList(sectionIndex, itemList)
  }

  function deleteItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    count: number
  ): void {
    instance.value?.deleteItem(sectionIndex, itemIndex, count)
  }

  function updateItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    item: QTWaterfallItem
  ): void {
    instance.value?.updateItem(sectionIndex, itemIndex, item)
  }

  function updateItemList(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number,
    count: number,
    itemList: Array<QTWaterfallItem>
  ): void {
    instance.value?.updateItemList(sectionIndex, itemIndex, count, itemList)
  }

  function getItem(
    instance: Ref<QTIWaterfall | undefined>,
    sectionIndex: number,
    itemIndex: number
  ): QTWaterfallItem | undefined {
    if (instance.value) {
      return instance.value?.getItem(sectionIndex, itemIndex)
    }
    return undefined
  }

  return {
    ...viewAPI,
    ...listViewAPI,
    init,
    getSectionList,
    setSectionList,
    addSectionList,
    deleteSection,
    updateSection,
    updateSectionList,
    getSection,
    addItemList,
    deleteItem,
    updateItem,
    updateItemList,
    getItem,
  }
}
