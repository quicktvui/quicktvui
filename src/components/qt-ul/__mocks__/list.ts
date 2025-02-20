import {QTULImageItem} from "../item/image/QTULImageItem";
import {buildRandomImage} from "./image";

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
