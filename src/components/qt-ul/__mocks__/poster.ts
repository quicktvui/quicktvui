//
import {
    QTPoster,
    QTWaterfallItem,
} from "@quicktvui/quicktvui3";
import {buildRandomImage} from "./image";
import {buildRandomColor} from "./colors";
import {buildRandomText} from "./text";
import {getRandomFloat, getRandomInt} from "./random";

export function buildPosterItemList(count: number): Array<QTWaterfallItem> {

    let data: Array<QTWaterfallItem> = []
    let imgURL = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
    for (let i = 0; i < count; i++) {
        const poster: QTPoster = {
            _id: '_' + i,
            position: i,
            focus: {
                enable: true,
                scale: 1,
                border: false
            },
            type: 5,
            decoration: {
                left: 25,
                bottom: 90,
            },
            title: {
                text: '主标题',
                enable: true,
                style: {
                    width: 260,
                    height: 60,
                }
            },
            subTitle: {
                text: '副标题',
                enable: true,
                style: {
                    width: 260,
                }
            },
            floatTitle: {
                text: '浮动标题',
                enable: true,
                style: {
                    width: 260,
                    height: 64
                },
                background: {colors: ['#e5000000', '#00000000'], orientation: 4}
            },
            focusTitle: {
                text: '焦点主标题',
                enable: true,
                style: {
                    width: 260,
                    height: 64
                }
            },
            shimmer: {
                enable: true,
            },
            ripple: {
                enable: true,
                style: {
                    right: 0,
                    bottom: 0,
                    marginRight: -12,
                }
            },
            image: {
                src: imgURL,
                enable: true,
                style: {
                    width: 260,
                    height: 320
                }
            },
            score: {
                text: '评分',
                enable: true,
                style: {
                    width: 260,
                    height: 30
                },
            },
            corner: {
                text: '角标',
                enable: true,
                style: {
                    width: 100,
                    height: 30
                },
                background: {
                    colors: ['#FE3824', '#F0051E'],
                    cornerRadii4: [0, 8, 0, 8],
                    orientation: 2
                }
            },
            style: {
                width: 260,
                height: 400,
            },
            itemSize: 260,
            titleStyle: {
                width: 260,
                height: 120,
                marginTop: 320 - 60,
            },
            titleFocusStyle: {width: 260, marginTop: 320 - 50},
        }
        data.push(poster)
    }
    return data;
}


export function buildRandomPosterItemList(page: number, count: number, span: number): Array<QTWaterfallItem> {

    let data: Array<QTWaterfallItem> = []
    for (let i = 0; i < count; i++) {
        const poster: QTPoster = {
            _id: '_' + i,
            itemSize: 260,
            position: i,
            focus: {
                enable: true,
                scale: 1,
                border: false
            },
            type: 5,
            decoration: {
                left: 25,
                bottom: 90,
            },
            title: {
                text: buildRandomText(),
                enable: true,
                style: {
                    width: 260,
                    height: 60,
                }
            },
            subTitle: {
                text: buildRandomText(),
                enable: true,
                style: {
                    width: 260,
                }
            },
            floatTitle: {
                text: '第 ' + page + ' 页 第 ' + i + ' 个',
                enable: true,
                style: {
                    width: 260,
                    height: 64
                },
                background: {colors: ['#e5000000', '#00000000'], orientation: 4}
            },
            focusTitle: {
                text: buildRandomText(),
                enable: true,
                style: {
                    width: 260,
                    height: 64
                }
            },
            shimmer: {
                enable: true,
            },
            ripple: {
                enable: true,
                style: {
                    right: 0,
                    bottom: 0,
                    marginRight: -12,
                }
            },
            image: {
                src: buildRandomImage(),
                enable: true,
                style: {
                    width: 260,
                    height: 320
                }
            },
            score: {
                text: getRandomFloat() + '',
                enable: true,
                style: {
                    width: 50,
                    height: 40
                },
                background: {
                    colors: [buildRandomColor(), buildRandomColor()],
                    cornerRadii4: [8, 8, 8, 8],
                    orientation: 2
                }
            },
            corner: {
                text: buildRandomCornerText(),
                enable: true,
                style: {
                    width: 100,
                    height: 30
                },
                background: {
                    colors: [buildRandomColor(), buildRandomColor()],
                    cornerRadii4: [0, 8, 0, 8],
                    orientation: 2
                }
            },
            style: {
                width: 260,
                height: 400,
            },
            titleStyle: {
                width: 260,
                height: 120,
                marginTop: 320 - 60,
            },
            titleFocusStyle: {width: 260, marginTop: 320 - 50},
        }
        data.push(poster)
    }
    return data;
}


export function buildPosterTitleItemList(title: string): Array<QTWaterfallItem> {
    let data: Array<QTWaterfallItem> = []
    let imgURL = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
    for (let i = 0; i < 15; i++) {
        const poster: QTPoster = {
            _id: i + '',
            focus: {
                enable: true,
                scale: 1.1,
                border: false
            },
            type: 5,
            decoration: {
                left: 90,
                bottom: 90
            },
            title: {
                text: title + ' Item:' + i,
                enable: true,
                style: {
                    width: 260,
                }
            },
            subTitle: {
                text: '副标题',
                enable: true,
                style: {
                    width: 260,
                }
            },
            floatTitle: {
                text: '浮动标题',
                enable: true,
                style: {
                    width: 260,
                },
                background: {colors: ['#e5000000', '#00000000'], orientation: 4}
            },
            shimmer: {
                enable: true,
            },
            ripple: {
                enable: true,
                style: {
                    right: 0,
                    bottom: 0,
                    marginRight: -12,
                }
            },
            image: {
                src: imgURL,
                enable: true,
                style: {
                    width: 260,
                    height: 320
                }
            },
            corner: {
                text: '角标',
                enable: true,
                style: {
                    width: 260,
                    height: 30
                },
                background: {
                    colors: ['#FE3824', '#F0051E'],
                    cornerRadii4: [0, 8, 0, 8],
                    orientation: 2
                }
            },
            style: {
                width: 260,
                height: 400,
            },
            titleStyle: {
                width: 260,
                height: 120,
                marginTop: 320 - 60,
            },
            titleFocusStyle: {width: 260, marginTop: 320 - 100},
        }
        data.push(poster)
    }
    return data;
}

const cornerText = [
    'VIP',
    'SVIP',
]

export function buildRandomCornerText(): String {
    const index = getRandomInt(0, cornerText.length - 1)
    return cornerText[index];
}
