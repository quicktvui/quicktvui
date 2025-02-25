import {QTListViewItem} from "@quicktvui/quicktvui3";
import {buildRandomPosterItem, buildRandomPosterItemList} from "./poster";
import {getRandomInt} from "./random";
import {
    buildRandomImageItemList,
    buildRandomListItemList,
    buildRandomLongImageItem,
    buildRandomMediumImageItemList,
    buildRandomTextItemList
} from "./list";

export function buildRandomWaterfallItemList(page: number, count: number): Array<QTListViewItem> {

    let data: Array<QTListViewItem> = []
    for (let i = 0; i < count; i++) {
        const index = getRandomInt(0, count)
        const ret = index % 6;
        if (ret == 0) {
            data.push(...buildRandomPosterItemList(page, 6))
        } else if (ret == 1) {
            data.push(buildRandomLongImageItem(i))
        } else if (ret == 2) {
            data.push(...buildRandomMediumImageItemList(2))
        } else if (ret == 3) {
            data.push(...buildRandomPosterItemList(page, 6))
        } else if (ret == 4) {
            data.push(...buildRandomTextItemList(2))
        } else if (ret == 5) {
            data.push(...buildRandomImageItemList(6))
        } else {
            data.push(...buildRandomPosterItemList(page, 6))
        }
    }
    return data;
}


export function buildWaterfallHorizontalListItemList(): Array<QTListViewItem> {
    const itemList = []
    //1.添加两个文本类型
    itemList.push(...buildRandomTextItemList(2))
    //2.添加两个横向列表类型
    itemList.push(...buildRandomListItemList(1))
    //3.添加两个图片类型
    itemList.push(...buildRandomImageItemList(6))
    return itemList;
}