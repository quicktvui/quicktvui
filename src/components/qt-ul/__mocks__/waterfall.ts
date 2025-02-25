import {QTListViewItem} from "@quicktvui/quicktvui3";
import {buildRandomPosterItem} from "./poster";
import {getRandomInt} from "./random";
import {
    buildRandomImageItemList,
    buildRandomListItemList,
    buildRandomLongImageItem,
    buildRandomMediumImageItem,
    buildRandomTextItemList
} from "./list";

export function buildRandomWaterfallItemList(page: number, count: number): Array<QTListViewItem> {

    let data: Array<QTListViewItem> = []
    for (let i = 0; i < count; i++) {
        const index = getRandomInt(0, count)
        const ret = index % 3;
        if (ret == 0) {
            data.push(buildRandomPosterItem(page, i))
        } else if (ret == 1) {
            data.push(buildRandomLongImageItem(i))
        } else if (ret == 2) {
            data.push(buildRandomMediumImageItem(i))
        } else if (ret == 3) {
            data.push(buildRandomPosterItem(page, i))
        }
    }
    return data;
}


export function buildWaterfallHorizontalListItemList(): Array<QTListViewItem> {
    const itemList = []
    //1.添加两个文本类型
    itemList.push(...buildRandomTextItemList(2))
    //2.添加两个横向列表类型
    itemList.push(...buildRandomListItemList(2))
    //3.添加两个图片类型
    itemList.push(...buildRandomImageItemList(2))
    return itemList;
}