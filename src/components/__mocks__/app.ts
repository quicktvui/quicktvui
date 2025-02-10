import {QTWaterfallItem, QTWaterfallSection, QTWaterfallSectionType} from "@quicktvui/quicktvui3";


//--------------------------------------美团分页--------------------------------------------
export function generatorPageAppWaterfallItemList(tab: string, pageNo: string, sectionId: string, count: number): Array<QTWaterfallItem> {
  let itemList: Array<QTWaterfallItem> = []
  for (let i = 0; i < count; i++) {
    const item = generatorPageAppMeiTuWaterfallItem(tab, pageNo, sectionId, i)
    itemList.push(item)
  }
  return itemList;
}

export function generatorPageAppMeiTuWaterfallItem(tab: string, pageNo: string, sectionId: string, index: number): QTWaterfallItem {
  const item: QTWaterfallItem = {
    _id: sectionId + '_' + index,
    type: 1,
    decoration: {
      left: 90,
      bottom: 40,
    },
    appIcon: 'http://qcloudimg.a311.ottcn.com/data_center/files/2022/08/02/56c9ff53-0117-44cf-b5c3-e732bd3c7ef8.jpg',
    appName: 'T:' + tab + ' P:' + pageNo + ' I:' + index,
    style: {
      width: 170,
      height: 220,
    }
  }

  return item
}


//--------------------------------------美团--------------------------------------------
export function generatorAppWaterfallItemList(sectionId: string, count: number): Array<QTWaterfallItem> {
  let itemList: Array<QTWaterfallItem> = []
  for (let i = 0; i < count; i++) {
    const item = generatorAppMeiTuWaterfallItem(sectionId, i)
    itemList.push(item)
  }
  return itemList;
}

export function generatorAppMeiTuWaterfallItem(sectionId: string, index: number): QTWaterfallItem {
  const item: QTWaterfallItem = {
    _id: sectionId + '_' + index,
    type: 1,
    decoration: {
      left: 90,
      bottom: 40,
    },
    appIcon: 'http://qcloudimg.a311.ottcn.com/data_center/files/2022/08/02/56c9ff53-0117-44cf-b5c3-e732bd3c7ef8.jpg',
    appName: '应用' + index,
    style: {
      width: 170,
      height: 220,
    }
  }

  return item
}

//--------------------------------------恐龙--------------------------------------------
export function generatorAppChildrenWaterfallItemList(sectionId: string, count: number): Array<QTWaterfallItem> {
  let itemList: Array<QTWaterfallItem> = []
  for (let i = 0; i < count; i++) {
    const item = generatorAppChildrenWaterfallItem(sectionId, i)
    itemList.push(item)
  }
  return itemList;
}


export function generatorAppChildrenWaterfallItem(sectionId: string, index: number): QTWaterfallItem {
  const item: QTWaterfallItem = {
    _id: sectionId + '_' + index,
    type: 1,
    decoration: {
      left: 90,
      bottom: 40,
    },
    appIcon: 'http://qcloudimg.a311.ottcn.com/data_center/files/2022/11/07/854f47b2-fdbe-4543-a2c3-1f8754dcb13e.jpg',
    appName: '小恐龙' + index,
    style: {
      width: 170,
      height: 220,
    }
  }

  return item
}


//--------------------------------------为什么--------------------------------------------
export function generatorAppQuestionWaterfallItemList(sectionId: string, count: number): Array<QTWaterfallItem> {
  let itemList: Array<QTWaterfallItem> = []
  for (let i = 0; i < count; i++) {
    const item = generatorAppQuestionWaterfallItem(sectionId, i)
    itemList.push(item)
  }
  return itemList;
}


export function generatorAppQuestionWaterfallItem(sectionId: string, index: number): QTWaterfallItem {
  const item: QTWaterfallItem = {
    _id: sectionId + '_' + index,
    type: 1,
    decoration: {
      left: 90,
      bottom: 40,
    },
    appIcon: 'http://qcloudimg.a311.ottcn.com/data_center/files/2022/11/30/fd4e25cc-88da-4b5e-a784-df4c0730d050.jpg',
    appName: '麦奇' + index,
    style: {
      width: 170,
      height: 220,
    }
  }

  return item
}

//----------------------------------------------------------------------------------

export function generatorPageAppWaterfallSection(tab: string, pageNo: string, sectionId: string, title: string): QTWaterfallSection {
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
    itemList: generatorPageAppWaterfallItemList(tab, pageNo, sectionId, 21)
  }
  return section
}

export function generatorAppWaterfallSection(sectionId: string, title: string,size=42): QTWaterfallSection {
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
    itemList: generatorAppWaterfallItemList(sectionId, size)
  }
  return section
}


export function generatorWaterfallSection(sectionId: string, title: string, itemList: Array<QTWaterfallItem>): QTWaterfallSection {
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
    itemList: itemList
  }
  return section
}
