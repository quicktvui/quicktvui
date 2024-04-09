//
import {QTPoster, QTWaterfallItem} from "@quicktvui/quicktvui3";

export function buildCustomWaterfallItemList(sectionId: string): Array<QTWaterfallItem> {

  let data: Array<QTWaterfallItem> = []
  let imgURL = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
  for (let i = 0; i < 15; i++) {
    const item: QTWaterfallItem = {
      _id: sectionId + '_' + i,
      type: 1,
      decoration: {
        left: 30,
        right: 30,
        top: 30,
        bottom: 30,
      },
      title: {
        text: '主标题',
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
        height: 320,
      },
      titleStyle: {
        width: 260,
        height: 120,
        marginTop: 320 - 60,
      },
      titleFocusStyle: {width: 260, marginTop: 320 - 100},
    }
    data.push(item)
  }
  return data;
}

export function buildWaterfallItemList(sectionId: string): Array<QTWaterfallItem> {

  let data: Array<QTWaterfallItem> = []
  let imgURL = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
  for (let i = 0; i < 5; i++) {
    const poster: QTPoster = {
      _id: sectionId + '_' + i,
      type: 10001,
      focus: {
        enable: true,
        scale: 1.1,
        border: false
      },
      decoration: {
        left: 30,
        right: 30
      },
      image: {
        src: imgURL,
        enable: true,
        style: {
          width: 260,
          height: 320
        }
      },
      style: {
        width: 260,
        height: 320,
      },
    }
    data.push(poster)
  }
  return data;
}
