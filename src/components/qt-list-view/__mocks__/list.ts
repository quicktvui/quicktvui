import { QTListViewImageItem } from '../item/image/QTListViewImageItem'
import { buildIndexImage, buildRandomImage } from './image'
import { QTListViewTextItem } from '../item/text/QTListViewTextItem'
import { buildIndexText, buildRandomText } from './text'
import { buildRandomColor } from './colors'
import { getRandomInt } from './random'
import { QTListViewItem } from '@quicktvui/quicktvui3'
import {
  QT_LIST_VIEW_ITEM_TYPE_IMAGE,
  QT_LIST_VIEW_ITEM_TYPE_LIST,
  QT_LIST_VIEW_ITEM_TYPE_LONG_IMAGE,
  QT_LIST_VIEW_ITEM_TYPE_MEDIUM_IMAGE,
  QT_LIST_VIEW_ITEM_TYPE_PLAYER,
  QT_LIST_VIEW_ITEM_TYPE_TEXT,
  QT_LIST_VIEW_ITEM_TYPE_VIEW,
} from '../item/type'
import { QTListViewViewItem } from '../item/div/QTListViewViewItem'
import { QTListViewListItem } from '../item/list/QTListViewListItem'

//--------------------------------随机生成Item---------------------------------------
export function buildRandomLongImageItem(index: number, span?: number): QTListViewImageItem {
  if (span && span != -1) {
    return {
      position: index,
      itemSize: 300,
      span: span,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_LONG_IMAGE,
      url: buildRandomImage(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  } else if (span == -1) {
    return {
      position: index,
      itemSize: 300,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_LONG_IMAGE,
      backgroundColor: buildRandomColor(),
      url: buildRandomImage(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  } else {
    return {
      position: index,
      itemSize: 300,
      span: 1920,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_LONG_IMAGE,
      backgroundColor: buildRandomColor(),
      url: buildRandomImage(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  }
}

export function buildRandomMediumImageItem(index: number, span?: number): QTListViewImageItem {
  if (span && span != -1) {
    return {
      position: index,
      itemSize: 400,
      span: span,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_MEDIUM_IMAGE,
      url: buildRandomImage(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  } else if (span == -1) {
    return {
      position: index,
      itemSize: 400,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_MEDIUM_IMAGE,
      url: buildRandomImage(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  } else {
    return {
      position: index,
      itemSize: 400,
      span: 960,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_MEDIUM_IMAGE,
      url: buildRandomImage(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  }
}

export function buildRandomImageItem(index: number, span?: number): QTListViewImageItem {
  if (span && span != -1) {
    return {
      position: index,
      itemSize: 320,
      span: span,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_IMAGE,
      url: buildRandomImage(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  } else if (span == -1) {
    return {
      position: index,
      itemSize: 320,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_IMAGE,
      url: buildRandomImage(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  } else {
    return {
      position: index,
      itemSize: 320,
      span: 320,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_IMAGE,
      url: buildRandomImage(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  }
}

export function buildRandomTextItem(index: number, span?: number): QTListViewTextItem {
  if (span && span != -1) {
    return {
      position: index,
      itemSize: 200,
      span: span,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_TEXT,
      text: index + '、' + buildIndexText(index),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
      style: {
        width: 800,
        height: 200,
      },
    }
  } else if (span == -1) {
    return {
      position: index,
      itemSize: 200,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_TEXT,
      text: index + '、' + buildIndexText(index),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
      style: {
        width: 800,
        height: 200,
      },
    }
  } else {
    return {
      position: index,
      span: 960,
      itemSize: 200,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_TEXT,
      text: index + '、' + buildIndexText(index),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
      style: {
        width: 800,
        height: 200,
      },
    }
  }
}

//--------------------------------固定生成Item---------------------------------------
export function buildFixedImageItem(index: number, span?: number): QTListViewImageItem {
  if (span && span != -1) {
    return {
      position: index,
      itemSize: 320,
      span: span,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_IMAGE,
      url: buildIndexImage(index),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  } else if (span == -1) {
    return {
      position: index,
      itemSize: 320,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_IMAGE,
      url: buildIndexImage(index),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  } else {
    return {
      position: index,
      itemSize: 320,
      span: 320,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_IMAGE,
      url: buildIndexImage(index),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  }
}

export function buildFixedTextItem(index: number, span?: number): QTListViewTextItem {
  if (span && span != -1) {
    return {
      position: index,
      itemSize: 200,
      span: span,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_TEXT,
      text: index + '、' + buildIndexText(index),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
    }
  } else if (span == -1) {
    return {
      position: index,
      itemSize: 200,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_TEXT,
      text: index + '、' + buildIndexText(index),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
    }
  } else {
    return {
      position: index,
      itemSize: 200,
      span: 960,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_TEXT,
      text: index + '、' + buildIndexText(index),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
    }
  }
}

export function buildRandomViewItem(index: number, span?: number): QTListViewViewItem {
  if (span && span != -1) {
    return {
      position: index,
      itemSize: 200,
      span: span,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_VIEW,
      backgroundColor: buildRandomColor(),
      width: getRandomInt(0, 200),
      height: getRandomInt(0, 200),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
    }
  } else if (span == -1) {
    return {
      position: index,
      itemSize: 200,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_VIEW,
      backgroundColor: buildRandomColor(),
      width: getRandomInt(0, 200),
      height: getRandomInt(0, 200),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
    }
  } else {
    return {
      position: index,
      itemSize: 200,
      span: 960,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_VIEW,
      backgroundColor: buildRandomColor(),
      width: getRandomInt(0, 200),
      height: getRandomInt(0, 200),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
    }
  }
}

//-------------------------------------------------------------------------------------
export function buildFixedListItemList(count: number): Array<QTListViewListItem> {
  const list = []
  for (let i = 0; i < count; i++) {
    list.push({
      position: i,
      itemSize: 200,
      span: 1920,
      id: i + '',
      type: QT_LIST_VIEW_ITEM_TYPE_LIST,
      itemList: buildFixedTextItemList(30),
      decoration: {
        top: 80,
      },
    })
  }
  return list
}

export function buildRandomListItemList(count: number): Array<QTListViewListItem> {
  const list = []
  for (let i = 0; i < count; i++) {
    list.push({
      position: i,
      itemSize: 200,
      span: 1920,
      id: i + '',
      type: QT_LIST_VIEW_ITEM_TYPE_LIST,
      itemList: buildRandomTextItemList(30),
      decoration: {
        top: 80,
      },
    })
  }
  return list
}

export function buildFixedImageItemList(count: number, span?: number): Array<QTListViewImageItem> {
  const imageList = []
  for (let i = 0; i < count; i++) {
    imageList.push(buildFixedImageItem(i, span))
  }
  return imageList
}

export function buildFixedTextItemList(count: number, span?: number): Array<QTListViewTextItem> {
  const textList = []
  for (let i = 0; i < count; i++) {
    textList.push(buildFixedTextItem(i, span))
  }
  return textList
}

export function buildRandomImageItemList(count: number, span?: number): Array<QTListViewImageItem> {
  const imageList = []
  for (let i = 0; i < count; i++) {
    imageList.push(buildRandomImageItem(i, span))
  }
  return imageList
}

export function buildRandomLongImageItemList(
  count: number,
  span?: number
): Array<QTListViewImageItem> {
  const imageList = []
  for (let i = 0; i < count; i++) {
    imageList.push(buildRandomLongImageItem(i, span))
  }
  return imageList
}

export function buildRandomMediumImageItemList(
  count: number,
  span?: number
): Array<QTListViewImageItem> {
  const imageList = []
  for (let i = 0; i < count; i++) {
    imageList.push(buildRandomMediumImageItem(i, span))
  }
  return imageList
}

export function buildRandomTextItemList(count: number, span?: number): Array<QTListViewTextItem> {
  const textList = []
  for (let i = 0; i < count; i++) {
    textList.push(buildRandomTextItem(i, span))
  }
  return textList
}

export function buildRandomViewItemList(count: number, span?: number): Array<QTListViewViewItem> {
  const textList = []
  for (let i = 0; i < count; i++) {
    textList.push(buildRandomViewItem(i, span))
  }
  return textList
}

export function buildRandomImageTextItemList(count: number, span?: number): Array<QTListViewItem> {
  const dataList = []

  for (let i = 0; i < count; i++) {
    const index = getRandomInt(0, count)
    if (index % 2) {
      dataList.push(buildRandomImageItem(i, span))
    } else {
      dataList.push(buildRandomTextItem(i, span))
    }
  }

  return dataList
}

//---------------------------------------------------------------------------------------
export function buildRandomPlayerItemList(count: number, span?: number): Array<QTListViewTextItem> {
  const textList = []
  for (let i = 0; i < count; i++) {
    textList.push(buildRandomPlayerItem(i, span))
  }
  return textList
}

export function buildRandomPlayerItem(index: number, span?: number): QTListViewTextItem {
  if (span && span != -1) {
    return {
      position: index,
      itemSize: 270,
      span: span,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_PLAYER,
      text: index + '、' + buildRandomText(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  } else if (span == -1) {
    return {
      position: index,
      itemSize: 270,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_PLAYER,
      text: index + '、' + buildRandomText(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  } else {
    return {
      position: index,
      itemSize: 270,
      span: 540,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_PLAYER,
      text: index + '、' + buildRandomText(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 30,
        left: 30,
        right: 30,
      },
    }
  }
}

//------------------------------------------------------------------------------------
export function buildHorizontalRandomTextItemList(
  count: number,
  span?: number
): Array<QTListViewTextItem> {
  const textList = []
  for (let i = 0; i < count; i++) {
    textList.push(buildHorizontalRandomTextItem(i, span))
  }
  return textList
}

export function buildHorizontalRandomTextItem(index: number, span?: number): QTListViewTextItem {
  if (span && span != -1) {
    return {
      position: index,
      itemSize: 800,
      span: span,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_TEXT,
      text: index + '、' + buildRandomText(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
    }
  } else if (span == -1) {
    return {
      position: index,
      itemSize: 800,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_TEXT,
      text: index + '、' + buildRandomText(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
    }
  } else {
    return {
      position: index,
      span: 960,
      itemSize: 800,
      id: index + '',
      type: QT_LIST_VIEW_ITEM_TYPE_TEXT,
      text: index + '、' + buildRandomText(),
      backgroundColor: buildRandomColor(),
      decoration: {
        top: 80,
        left: 80,
        right: 80,
      },
    }
  }
}
