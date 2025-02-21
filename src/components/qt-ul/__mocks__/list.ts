import {QTULImageItem} from "../item/image/QTULImageItem";
import {buildRandomImage} from "./image";
import {QTULTextItem} from "../item/text/QTULItemTextItem";
import {buildIndexText, buildRandomText} from "./text";
import {buildRandomColor} from "./colors";
import {getRandomInt} from "./random";
import {QTListViewItem} from "@quicktvui/quicktvui3";
import {QT_UL_ITEM_TYPE_IMAGE, QT_UL_ITEM_TYPE_LIST, QT_UL_ITEM_TYPE_TEXT, QT_UL_ITEM_TYPE_VIEW} from "../item/type";


export function buildImageItem(index: number): QTULImageItem {
    return {
        itemSize: 260,
        id: index + '',
        type: QT_UL_ITEM_TYPE_IMAGE,
        url: buildRandomImage()
    }
}


export function buildTextItem(index: number): QTULTextItem {
    return {
        itemSize: 800,
        id: index + '',
        type: QT_UL_ITEM_TYPE_TEXT,
        text: buildRandomText(),
        backgroundColor: buildRandomColor(),
        decoration: {
            top: 20,
            bottom: 20,
        },
    }
}

//-------------------------------------------------------------------------------------

export function buildListItemList(count: number): Array<QTULImageItem> {

    const list = []
    for (let i = 0; i < count; i++) {
        list.push({
            itemSize: 1920,
            id: i + '',
            type: QT_UL_ITEM_TYPE_LIST,
            itemList: buildTextItemList(30)
        })
    }
    return list;
}


export function buildImageItemList(count: number): Array<QTULImageItem> {

    const imageList = []
    for (let i = 0; i < count; i++) {
        imageList.push({
            itemSize: 260,
            id: i + '',
            type: QT_UL_ITEM_TYPE_IMAGE,
            url: buildRandomImage()
        })
    }
    return imageList;
}


export function buildTextItemList(count: number): Array<QTULTextItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push({
            itemSize: 800,
            id: i + '',
            type: QT_UL_ITEM_TYPE_TEXT,
            text: buildRandomText(),
            backgroundColor: buildRandomColor(),
            decoration: {
                top: 20,
                bottom: 20,
            },
        })
    }
    return textList;
}

export function buildIndexTextItemList(count: number): Array<QTULTextItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push({
            itemSize: 800,
            id: i + '',
            type: QT_UL_ITEM_TYPE_TEXT,
            text: i + '、' + buildIndexText(i),
            backgroundColor: buildRandomColor(),
            decoration: {
                top: 10,
                bottom: 10,
            },
        })
    }
    return textList;
}

export function buildHorizontalTextItemList(count: number): Array<QTULTextItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push({
            itemSize: 200,
            id: i + '',
            type: QT_UL_ITEM_TYPE_TEXT,
            text: buildRandomText(),
            backgroundColor: buildRandomColor(),
            decoration: {
                top: 20,
                bottom: 20,
            },
        })
    }
    return textList;
}

export function buildViewItemList(count: number): Array<QTULTextItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push({
            itemSize: 800,
            id: i + '',
            type: QT_UL_ITEM_TYPE_VIEW,
            backgroundColor: buildRandomColor(),
            width: getRandomInt(0, 200),
            height: getRandomInt(0, 200),
            decoration: {
                top: 20,
                bottom: 20,
            },
        })
    }
    return textList;
}


export function buildWaterfallItemList(): Array<QTListViewItem> {
    const itemList = []
    //1.添加两个文本类型
    itemList.push(...buildSpanCountTextItemList(2))
    //2.添加两个横向列表类型
    itemList.push(...buildSpanCountListItemList(2))
    //3.添加两个图片类型
    itemList.push(...buildSpanCountImageItemList(2))
    return itemList;
}

export function buildSpanCountListItemList(count: number): Array<QTULImageItem> {

    const list = []
    for (let i = 0; i < count; i++) {
        list.push({
            itemSize: 1920,
            span: 1920,
            id: i + '',
            type: QT_UL_ITEM_TYPE_LIST,
            itemList: buildTextItemList(30)
        })
    }
    return list;
}


export function buildSpanCountImageItemList(count: number): Array<QTULImageItem> {

    const imageList = []
    for (let i = 0; i < count; i++) {
        imageList.push({
            itemSize: 260,
            span: 260,
            id: i + '',
            type: QT_UL_ITEM_TYPE_IMAGE,
            url: buildRandomImage()
        })
    }
    return imageList;
}


export function buildSpanCountTextItemList(count: number): Array<QTULTextItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push({
            itemSize: 800,
            span: 800,
            id: i + '',
            type: QT_UL_ITEM_TYPE_TEXT,
            text: buildRandomText(),
            backgroundColor: buildRandomColor(),
            decoration: {
                top: 20,
                bottom: 20,
            },
        })
    }
    return textList;
}