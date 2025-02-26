import {
    QTPoster,
    QTWaterfallItem,
} from "@quicktvui/quicktvui3";
import {buildRandomImage} from "./image";
import {buildRandomColor} from "./colors";
import {buildRandomText} from "./text";
import {getRandomFloat, getRandomInt} from "./random";
import {QT_UL_ITEM_TYPE_MEDIA} from "../item/type";
import {QTListViewItem} from "../../../../packages/src";

const cornerText = [
    'VIP',
    'SVIP',
]

export function buildRandomCornerText(): String {
    const index = getRandomInt(0, cornerText.length - 1)
    return cornerText[index];
}

export function buildRandomMediaItemList(page: number, count: number, span?: number): Array<QTListViewItem> {

    let data: Array<QTListViewItem> = []
    for (let i = 0; i < count; i++) {
        data.push(buildRandomMediaItem(page, i, span))
    }
    return data;
}


export function buildRandomMediaItem(page: number, index: number, span?: number): QTListViewItem {
    if (span == -1) {
        return {
            _id: '_' + index,
            itemSize: 400,
            position: index,
            focusEnable: true,
            focusScale: 1,
            focusBorder: false,
            type: QT_UL_ITEM_TYPE_MEDIA,
            decoration: {
                top: 30,
                left: 30,
                right: 30
            },
            titleText: buildRandomText(),
            titleEnable: true,
            titleStyleWidth: 260,
            titleStyleHeight: 60,

            subTitleText: buildRandomText(),
            subTitleEnable: true,
            subTitleStyleWidth: 260,

            floatTitleText: '第 ' + page + ' 页 第 ' + index + ' 个',
            floatTitleEnable: true,
            floatTitleStyleWidth: 260,
            floatTitleStyleHeight: 64,
            floatTitleBackground: {colors: ['#e5000000', '#00000000'], orientation: 4},

            focusTitleText: buildRandomText(),
            focusTitleEnable: true,
            focusTitleStyleWidth: 260,
            focusTitleStyleHeight: 64,

            shimmerEnable: true,

            rippleEnable: true,
            rippleStyleRight: 0,
            rippleStyleBottom: 0,
            rippleStyleMarginRight: -12,

            imageSrc: buildRandomImage(),
            imageEnable: true,
            imageStyleWidth: 260,
            imageStyleHeight: 320,

            scoreText: getRandomFloat() + '',
            scoreEnable: true,
            scoreStyleWidth: 50,
            scoreStyleHeight: 40,
            scoreBackground: {
                colors: [buildRandomColor(), buildRandomColor()],
                cornerRadii4: [8, 8, 8, 8],
                orientation: 2
            },

            cornerText: buildRandomCornerText(),
            cornerEnable: true,
            cornerStyleWidth: 100,
            cornerStyleHeight: 30,
            cornerBackground: {
                colors: [buildRandomColor(), buildRandomColor()],
                cornerRadii4: [0, 8, 0, 8],
                orientation: 2
            },

            styleWidth: 260,
            styleHeight: 400,

            titleNormalStyleWidth: 260,
            titleNormalStyleHeight: 120,
            titleNormalStyleMarginTop: 320 - 60,


            titleFocusStyleWidth: 260,
            titleFocusStyleMarginTop: 320 - 50,

        }
    } else {
        if (span) {
            return {
                _id: '_' + index,
                itemSize: 400,
                span: span,
                position: index,
                focusEnable: true,
                focusScale: 1,
                focusBorder: false,
                type: QT_UL_ITEM_TYPE_MEDIA,
                decoration: {
                    top: 30,
                    left: 30,
                    right: 30
                },
                titleText: buildRandomText(),
                titleEnable: true,
                titleStyleWidth: 260,
                titleStyleHeight: 60,

                subTitleText: buildRandomText(),
                subTitleEnable: true,
                subTitleStyleWidth: 260,

                floatTitleText: '第 ' + page + ' 页 第 ' + index + ' 个',
                floatTitleEnable: true,
                floatTitleStyleWidth: 260,
                floatTitleStyleHeight: 64,
                floatTitleBackground: {colors: ['#e5000000', '#00000000'], orientation: 4},

                focusTitleText: buildRandomText(),
                focusTitleEnable: true,
                focusTitleStyleWidth: 260,
                focusTitleStyleHeight: 64,

                shimmerEnable: true,

                rippleEnable: true,
                rippleStyleRight: 0,
                rippleStyleBottom: 0,
                rippleStyleMarginRight: -12,

                imageSrc: buildRandomImage(),
                imageEnable: true,
                imageStyleWidth: 260,
                imageStyleHeight: 320,

                scoreText: getRandomFloat() + '',
                scoreEnable: true,
                scoreStyleWidth: 50,
                scoreStyleHeight: 40,
                scoreBackground: {
                    colors: [buildRandomColor(), buildRandomColor()],
                    cornerRadii4: [8, 8, 8, 8],
                    orientation: 2
                },

                cornerText: buildRandomCornerText(),
                cornerEnable: true,
                cornerStyleWidth: 100,
                cornerStyleHeight: 30,
                cornerBackground: {
                    colors: [buildRandomColor(), buildRandomColor()],
                    cornerRadii4: [0, 8, 0, 8],
                    orientation: 2
                },

                styleWidth: 260,
                styleHeight: 400,

                titleNormalStyleWidth: 260,
                titleNormalStyleHeight: 120,
                titleNormalStyleMarginTop: 320 - 60,


                titleFocusStyleWidth: 260,
                titleFocusStyleMarginTop: 320 - 50,

            }
        } else {
            return {
                _id: '_' + index,
                itemSize: 400,
                span: 320,
                position: index,
                focusEnable: true,
                focusScale: 1,
                focusBorder: false,
                type: QT_UL_ITEM_TYPE_MEDIA,
                decoration: {
                    top: 30,
                    left: 30,
                    right: 30
                },
                titleText: buildRandomText(),
                titleEnable: true,
                titleStyleWidth: 260,
                titleStyleHeight: 60,

                subTitleText: buildRandomText(),
                subTitleEnable: true,
                subTitleStyleWidth: 260,

                floatTitleText: '第 ' + page + ' 页 第 ' + index + ' 个',
                floatTitleEnable: true,
                floatTitleStyleWidth: 260,
                floatTitleStyleHeight: 64,
                floatTitleBackground: {colors: ['#e5000000', '#00000000'], orientation: 4},

                focusTitleText: buildRandomText(),
                focusTitleEnable: true,
                focusTitleStyleWidth: 260,
                focusTitleStyleHeight: 64,

                shimmerEnable: true,

                rippleEnable: true,
                rippleStyleRight: 0,
                rippleStyleBottom: 0,
                rippleStyleMarginRight: -12,

                imageSrc: buildRandomImage(),
                imageEnable: true,
                imageStyleWidth: 260,
                imageStyleHeight: 320,

                scoreText: getRandomFloat() + '',
                scoreEnable: true,
                scoreStyleWidth: 50,
                scoreStyleHeight: 40,
                scoreBackground: {
                    colors: [buildRandomColor(), buildRandomColor()],
                    cornerRadii4: [8, 8, 8, 8],
                    orientation: 2
                },

                cornerText: buildRandomCornerText(),
                cornerEnable: true,
                cornerStyleWidth: 100,
                cornerStyleHeight: 30,
                cornerBackground: {
                    colors: [buildRandomColor(), buildRandomColor()],
                    cornerRadii4: [0, 8, 0, 8],
                    orientation: 2
                },

                styleWidth: 260,
                styleHeight: 400,

                titleNormalStyleWidth: 260,
                titleNormalStyleHeight: 120,
                titleNormalStyleMarginTop: 320 - 60,


                titleFocusStyleWidth: 260,
                titleFocusStyleMarginTop: 320 - 50,

            }
        }
    }
}

