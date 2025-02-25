import {QTULImageItem} from "../item/image/QTULImageItem";
import {buildIndexImage, buildRandomImage} from "./image";
import {QTULTextItem} from "../item/text/QTULTextItem";
import {buildIndexText, buildRandomText} from "./text";
import {buildRandomColor} from "./colors";
import {getRandomInt} from "./random";
import {QTListViewItem} from "@quicktvui/quicktvui3";
import {
    QT_UL_ITEM_TYPE_IMAGE,
    QT_UL_ITEM_TYPE_LIST,
    QT_UL_ITEM_TYPE_LONG_IMAGE,
    QT_UL_ITEM_TYPE_MEDIUM_IMAGE,
    QT_UL_ITEM_TYPE_PLAYER,
    QT_UL_ITEM_TYPE_TEXT,
    QT_UL_ITEM_TYPE_VIEW
} from "../item/type";
import {QTULViewItem} from "../item/div/QTULViewItem";

//--------------------------------随机生成Item---------------------------------------
export function buildRandomLongImageItem(index: number, span?: number): QTULImageItem {
    if (span && span != -1) {
        return {
            position: index,
            itemSize: 1920,
            span: span,
            id: index + '',
            type: QT_UL_ITEM_TYPE_LONG_IMAGE,
            url: buildRandomImage()
        }
    } else if (span == -1) {
        return {
            position: index,
            itemSize: 1920,
            id: index + '',
            type: QT_UL_ITEM_TYPE_LONG_IMAGE,
            url: buildRandomImage()
        }
    } else {
        return {
            position: index,
            itemSize: 1920,
            span: 1920,
            id: index + '',
            type: QT_UL_ITEM_TYPE_LONG_IMAGE,
            url: buildRandomImage()
        }
    }
}

export function buildRandomMediumImageItem(index: number, span?: number): QTULImageItem {
    if (span && span != -1) {
        return {
            position: index,
            itemSize: 960,
            span: span,
            id: index + '',
            type: QT_UL_ITEM_TYPE_MEDIUM_IMAGE,
            url: buildRandomImage()
        }
    } else if (span == -1) {
        return {
            position: index,
            itemSize: 960,
            id: index + '',
            type: QT_UL_ITEM_TYPE_MEDIUM_IMAGE,
            url: buildRandomImage()
        }
    } else {
        return {
            position: index,
            itemSize: 960,
            span: 960,
            id: index + '',
            type: QT_UL_ITEM_TYPE_MEDIUM_IMAGE,
            url: buildRandomImage()
        }
    }
}

export function buildRandomImageItem(index: number, span?: number): QTULImageItem {
    if (span && span != -1) {
        return {
            position: index,
            itemSize: 260,
            span: span,
            id: index + '',
            type: QT_UL_ITEM_TYPE_IMAGE,
            url: buildRandomImage()
        }
    } else if (span == -1) {
        return {
            position: index,
            itemSize: 260,
            id: index + '',
            type: QT_UL_ITEM_TYPE_IMAGE,
            url: buildRandomImage()
        }
    } else {
        return {
            position: index,
            itemSize: 260,
            span: 260,
            id: index + '',
            type: QT_UL_ITEM_TYPE_IMAGE,
            url: buildRandomImage()
        }
    }
}


export function buildRandomTextItem(index: number, span?: number): QTULTextItem {
    if (span && span != -1) {
        return {
            position: index,
            itemSize: 800,
            span: span,
            id: index + '',
            type: QT_UL_ITEM_TYPE_TEXT,
            text: index + '、' + buildRandomText(),
            backgroundColor: buildRandomColor(),
            decoration: {
                top: 20,
                bottom: 20,
            },
        }
    } else if (span == -1) {
        return {
            position: index,
            itemSize: 800,
            id: index + '',
            type: QT_UL_ITEM_TYPE_TEXT,
            text: index + '、' + buildRandomText(),
            backgroundColor: buildRandomColor(),
            decoration: {
                top: 20,
                bottom: 20,
            },
        }
    } else {
        return {
            position: index,
            itemSize: 800,
            span: 800,
            id: index + '',
            type: QT_UL_ITEM_TYPE_TEXT,
            text: index + '、' + buildRandomText(),
            backgroundColor: buildRandomColor(),
            decoration: {
                top: 20,
                bottom: 20,
            },
        }
    }
}

//--------------------------------固定生成Item---------------------------------------
export function buildFixedImageItem(index: number, span?: number): QTULImageItem {
    if (span && span != -1) {
        return {
            position: index,
            itemSize: 260,
            span: span,
            id: index + '',
            type: QT_UL_ITEM_TYPE_IMAGE,
            url: buildIndexImage(index)
        }
    } else if (span == -1) {
        return {
            position: index,
            itemSize: 260,
            id: index + '',
            type: QT_UL_ITEM_TYPE_IMAGE,
            url: buildIndexImage(index)
        }
    } else {
        return {
            position: index,
            itemSize: 260,
            span: 260,
            id: index + '',
            type: QT_UL_ITEM_TYPE_IMAGE,
            url: buildIndexImage(index)
        }
    }
}


export function buildFixedTextItem(index: number, span?: number): QTULTextItem {
    if (span && span != -1) {
        return {
            position: index,
            itemSize: 800,
            span: span,
            id: index + '',
            type: QT_UL_ITEM_TYPE_TEXT,
            text: index + '、' + buildIndexText(index),
            backgroundColor: buildRandomColor(),
            decoration: {
                top: 20,
                bottom: 20,
            },
        }
    } else if (span == -1) {
        return {
            position: index,
            itemSize: 800,
            id: index + '',
            type: QT_UL_ITEM_TYPE_TEXT,
            text: index + '、' + buildIndexText(index),
            backgroundColor: buildRandomColor(),
            decoration: {
                top: 20,
                bottom: 20,
            },
        }
    } else {
        return {
            position: index,
            itemSize: 800,
            span: 800,
            id: index + '',
            type: QT_UL_ITEM_TYPE_TEXT,
            text: index + '、' + buildIndexText(index),
            backgroundColor: buildRandomColor(),
            decoration: {
                top: 20,
                bottom: 20,
            },
        }
    }
}

export function buildRandomViewItem(index: number, span?: number): QTULViewItem {
    if (span && span != -1) {
        return {
            position: index,
            itemSize: 800,
            span: span,
            id: index + '',
            type: QT_UL_ITEM_TYPE_VIEW,
            backgroundColor: buildRandomColor(),
            width: getRandomInt(0, 200),
            height: getRandomInt(0, 200),
            decoration: {
                top: 20,
                bottom: 20,
            },
        }
    } else if (span == -1) {
        return {
            position: index,
            itemSize: 800,
            id: index + '',
            type: QT_UL_ITEM_TYPE_VIEW,
            backgroundColor: buildRandomColor(),
            width: getRandomInt(0, 200),
            height: getRandomInt(0, 200),
            decoration: {
                top: 20,
                bottom: 20,
            },
        }
    } else {
        return {
            position: index,
            itemSize: 800,
            span: 800,
            id: index + '',
            type: QT_UL_ITEM_TYPE_VIEW,
            backgroundColor: buildRandomColor(),
            width: getRandomInt(0, 200),
            height: getRandomInt(0, 200),
            decoration: {
                top: 20,
                bottom: 20,
            },
        }
    }
}

//-------------------------------------------------------------------------------------
export function buildFixedListItemList(count: number): Array<QTULImageItem> {
    const list = []
    for (let i = 0; i < count; i++) {
        list.push({
            position: i,
            itemSize: 1920,
            span: 1920,
            id: i + '',
            type: QT_UL_ITEM_TYPE_LIST,
            itemList: buildFixedTextItemList(30)
        })
    }
    return list;
}

export function buildRandomListItemList(count: number): Array<QTULImageItem> {
    const list = []
    for (let i = 0; i < count; i++) {
        list.push({
            position: i,
            itemSize: 1920,
            span: 1920,
            id: i + '',
            type: QT_UL_ITEM_TYPE_LIST,
            itemList: buildRandomTextItemList(30)
        })
    }
    return list;
}

export function buildFixedImageItemList(count: number, span?: number): Array<QTULImageItem> {
    const imageList = []
    for (let i = 0; i < count; i++) {
        imageList.push(buildFixedImageItem(i, span))
    }
    return imageList;
}


export function buildFixedTextItemList(count: number, span?: number): Array<QTULTextItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push(buildFixedTextItem(i, span))
    }
    return textList;
}


export function buildRandomImageItemList(count: number, span?: number): Array<QTULImageItem> {
    const imageList = []
    for (let i = 0; i < count; i++) {
        imageList.push(buildRandomImageItem(i, span))
    }
    return imageList;
}

export function buildRandomLongImageItemList(count: number, span?: number): Array<QTULImageItem> {
    const imageList = []
    for (let i = 0; i < count; i++) {
        imageList.push(buildRandomLongImageItem(i, span))
    }
    return imageList;
}

export function buildRandomMediumImageItemList(count: number, span?: number): Array<QTULImageItem> {
    const imageList = []
    for (let i = 0; i < count; i++) {
        imageList.push(buildRandomMediumImageItem(i, span))
    }
    return imageList;
}


export function buildRandomTextItemList(count: number, span?: number): Array<QTULTextItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push(buildRandomTextItem(i, span))
    }
    return textList;
}

export function buildRandomViewItemList(count: number, span?: number): Array<QTULViewItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push(buildRandomViewItem(i, span))
    }
    return textList;
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

    return dataList;
}

//---------------------------------------------------------------------------------------
export function buildRandomPlayerItemList(count: number, span?: number): Array<QTULTextItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push(buildRandomPlayerItem(i, span))
    }
    return textList;
}

export function buildRandomPlayerItem(index: number, span?: number): QTULTextItem {
    if (span && span != -1) {
        return {
            position: index,
            itemSize: 800,
            span: span,
            id: index + '',
            type: QT_UL_ITEM_TYPE_PLAYER,
            text: index + '、' + buildRandomText(),
            backgroundColor: buildRandomColor(),
        }
    } else if (span == -1) {
        return {
            position: index,
            itemSize: 800,
            id: index + '',
            type: QT_UL_ITEM_TYPE_PLAYER,
            text: index + '、' + buildRandomText(),
            backgroundColor: buildRandomColor(),
        }
    } else {
        return {
            position: index,
            itemSize: 800,
            span: 800,
            id: index + '',
            type: QT_UL_ITEM_TYPE_PLAYER,
            text: index + '、' + buildRandomText(),
            backgroundColor: buildRandomColor(),
        }
    }
}
