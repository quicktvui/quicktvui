//
import {QTWaterfallItemType, QTWaterfallItem, QTWaterfallSection, QTWaterfallSectionType} from "@quicktvui/quicktvui3";
import {QTWaterfallPluginItem} from "@quicktvui/quicktvui3";

export function buildPluginSection(sectionId: string, title: string, pluginKey: string, height: number): QTWaterfallSection {
  let section: QTWaterfallSection = {
    _id: sectionId,
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_PLUGIN,
    title: title,
    titleStyle: {
      width: 1920,
      height: 60,
      marginLeft: 90,
      marginTop: 40,
      marginBottom: 40,
      fontSize: 50
    },
    pluginKey: pluginKey,
    style: {
      width: 1920,
      height: height,
    },
    itemList: []
  }
  return section
}


export function buildPluginFlexSection(sectionId: string, title: string): QTWaterfallSection {
  let section: QTWaterfallSection = {
    _id: sectionId,
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    title: title,
    titleStyle: {
      width: 1920,
      height: 60,
      marginLeft: 90,
      marginTop: 40,
      marginBottom: 40,
      fontSize: 50
    },
    style: {
      width: 1920,
      height: -1,
    },
    itemList: buildPluginItemList(sectionId, 21)
  }
  return section
}


export function buildPluginItemList(sectionId: string, count: number): Array<QTWaterfallItem> {
  let itemList: Array<QTWaterfallItem> = []
  for (let i = 0; i < count; i++) {
    const item = buildPluginItem(sectionId, i)
    itemList.push(item)
  }
  return itemList;
}

export function buildPluginItem(sectionId: string, index: number): QTWaterfallItem {
  let pluginKey = 'plugin-lottie/LottieView'
  if (index % 2 == 0) {
    pluginKey = 'plugin-textview/HuanTextView'
  }

  const item: QTWaterfallPluginItem = {
    _id: sectionId + '_' + index,
    type: QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_PLUGIN,
    pluginKey: pluginKey,
    decoration: {
      left: 90,
      bottom: 40,
    },
    style: {
      width: 170,
      height: 220,
    },
  }
  return item
}
