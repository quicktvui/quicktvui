import {QTULImageItem} from "../item/image/QTULImageItem";
import {buildRandomImage} from "./image";
import {QTULTextItem} from "../item/text/QTULItemTextItem";
import {buildRandomText} from "./text";
import {buildRandomColor} from "./colors";
import {getRandomInt} from "./random";

export function buildImageItemList(itemType: number, count: number): Array<QTULImageItem> {

    const imageList = []
    for (let i = 0; i < count; i++) {
        imageList.push({
            itemSize: 260,
            id: i + '',
            type: itemType,
            url: buildRandomImage()
        })
    }
    return imageList;
}


export function buildTextItemList(itemType: number, count: number): Array<QTULTextItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push({
            itemSize: 800,
            id: i + '',
            type: itemType,
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

export function buildHorizontalTextItemList(itemType: number, count: number): Array<QTULTextItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push({
            itemSize: 200,
            id: i + '',
            type: itemType,
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

export function buildViewItemList(itemType: number, count: number): Array<QTULTextItem> {
    const textList = []
    for (let i = 0; i < count; i++) {
        textList.push({
            itemSize: 800,
            id: i + '',
            type: itemType,
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
