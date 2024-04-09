//

import {QTWaterfallSection} from "./QTWaterfallSection";
import {QTWaterfall} from "./QTWaterfall";
import {QTWaterfallItem} from "./QTWaterfallItem";
import {QTIView} from "../../view/QTIView";

export interface QTIWaterfall extends QTIView {

  init(waterfall: QTWaterfall)

  //---------------------------------------------------------------------
  getSectionList(): Array<QTWaterfallSection>

  setSectionList(sections: Array<QTWaterfallSection>): void

  addSectionList(sections: Array<QTWaterfallSection>): void

  deleteSection(sectionIndex: number, count: number): void

  updateSection(sectionIndex: number, section: QTWaterfallSection): void

  updateSectionList(sectionIndex: number, count: number, sectionList: Array<QTWaterfallSection>): void

  getSection(sectionIndex: number): QTWaterfallSection | undefined

  //---------------------------------------------------------------------
  addItemList(sectionIndex: number, itemList: Array<QTWaterfallItem>): void

  deleteItem(sectionIndex: number, itemIndex: number, count: number): void

  updateItem(sectionIndex: number, itemIndex: number, item: QTWaterfallItem): void

  updateItemList(sectionIndex: number, itemIndex: number, count: number, itemList: Array<QTWaterfallItem>): void

  getItem(sectionIndex: number, itemIndex: number): QTWaterfallItem | undefined

  //---------------------------------------------------------------------
  clearPostTask(): void

  pausePostTask(): void

  resumePostTask(): void

  //---------------------------------------------------------------------
  destroy(): void

  //---------------------------------------------------------------------
  scrollToTop(): void

  setListData(): void
}
