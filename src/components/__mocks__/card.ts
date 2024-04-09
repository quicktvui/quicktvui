//
import {QTWaterfallItemType, QTWaterfallCardItem, QTWaterfallItem} from "@quicktvui/quicktvui3";


export function buildCardItemList(): Array<QTWaterfallItem> {

  let data: Array<QTWaterfallCardItem> = []
  for (let i = 0; i < 3; i++) {
    const item: QTWaterfallCardItem = {
      _id: i + '',
      type: QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_CARD,
      cardId: '1717748409857474561',
      decoration: {
        left: 90,
        top: 40,
        bottom: 40
      },
      style: {
        width: 850,
        height: 400,
      },
    }
    data.push(item)
  }
  return data;
}

export function buildCardItemPlaceHolderList(): Array<QTWaterfallItem> {

  let data: Array<QTWaterfallCardItem> = []
  for (let i = 0; i < 3; i++) {
    const item: QTWaterfallCardItem = {
      _id: i + '',
      type: QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_CARD,
      cardId: '1717748409857474561',
      cardPlaceHolder: {
        enable: true,//是否可用
        radius: 100,//圆角
        rect: [100, 0, 100, 0],
        focusable: true,
        focusScale: 1.2
      },
      decoration: {
        left: 90,
        top: 40,
        bottom: 40
      },
      style: {
        width: 850,
        height: 400,
      },
    }
    data.push(item)
  }
  return data;
}
