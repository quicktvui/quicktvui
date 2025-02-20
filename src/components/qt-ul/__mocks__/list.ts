import {QTULImageItem} from "../item/image/QTULImageItem";
import {buildRandomImage} from "./image";
import {QTULTextItem} from "../item/text/QTULItemTextItem";
import {buildRandomText} from "./text";

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
            itemSize: 200,
            id: i + '',
            type: itemType,
            text: buildRandomText()
        })
    }
    return textList;
}
