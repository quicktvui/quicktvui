import {buildRandomColor} from "./colors";
import {buildRandomText} from "./text";
import {getRandomFloat, getRandomInt} from "./random";
import {QT_UL_ITEM_TYPE_MOVIE} from "../item/type";
import {QTListViewItem} from "@quicktvui/quicktvui3";
import {buildRandomImage} from "./image";

const cornerText = [
    'VIP',
    'SVIP',
]

export function buildRandomCornerText(): String {
    const index = getRandomInt(0, cornerText.length - 1)
    return cornerText[index];
}


export function buildRandomMovieItemList(page: number, count: number, span?: number): Array<QTListViewItem> {

    let data: Array<QTListViewItem> = []
    for (let i = 0; i < count; i++) {
        data.push(buildRandomMovieItem(page, i, span))
    }
    return data;
}


export function buildRandomMovieItem(page: number, index: number, span?: number): QTListViewItem {
    if (span == -1) {
        return {
            _id: '_' + index,
            itemSize: 400,
            position: index,
            focus: {
                enable: true,
                scale: 1,
                border: false
            },
            type: QT_UL_ITEM_TYPE_MOVIE,
            decoration: {
                top: 30,
                left: 30,
                right: 30
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
                text: '第 ' + page + ' 页 第 ' + index + ' 个',
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
    } else {
        if (span) {
            return {
                _id: '_' + index,
                itemSize: 400,
                span: span,
                position: index,
                focus: {
                    enable: true,
                    scale: 1,
                    border: false
                },
                type: QT_UL_ITEM_TYPE_MOVIE,
                decoration: {
                    top: 30,
                    left: 30,
                    right: 30
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
                    text: '第 ' + page + ' 页 第 ' + index + ' 个',
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
        } else {
            return {
                _id: '_' + index,
                itemSize: 400,
                span: 320,
                position: index,
                focus: {
                    enable: true,
                    scale: 1,
                    border: false
                },
                type: QT_UL_ITEM_TYPE_MOVIE,
                decoration: {
                    top: 30,
                    left: 30,
                    right: 30
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
                    text: '第 ' + page + ' 页 第 ' + index + ' 个',
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
        }
    }
}

