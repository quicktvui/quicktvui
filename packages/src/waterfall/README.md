## waterfall 新语法使用示例
- 安装测试版本的quicktvui3
```sh
npm i @quicktvui/quicktvui3@beta
```
### 数据操作
- 请参考 packages/src/grid-view/README.md 文档
### 综合案例
- 更多复杂操作请参考 src/components/qt-waterfall/qt-waterfall-qtRef.vue 文件代码
```vue
<template>
<div class="page">
  <qt-waterfall ref="waterfall" :list-data="waterfallDatas" class="qt-waterfall-css" />
</div>
</template>
<script lang='ts' setup>
import { qtRef, QTIWaterfall, QTWaterfallItem } from '@quicktvui/quicktvui3';

const waterfall = ref()
const waterfallDatas = qtRef<QTListViewItem[]>()

defineExpose({
  onESCreate() {
    waterfallDatas.value = getList()
  }
})

function buildPosterItemList(sectionId: string, size = 15): Array<QTWaterfallItem> {
  let data: Array<QTWaterfallItem> = []
  let imgURL = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
  for (let i = 0; i < size; i++) {
    const poster: QTPoster = {
      _id: sectionId + '_' + i,
      focus: {
        enable: true,
        scale: 1.1,
        border: false
      },
      type: 10001,
      decoration: {
        left: 60,
        bottom: 20
      },
      title: {
        text: '主标题'+i,
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
        background: { colors: ['#e5000000', '#00000000'], orientation: 4 }
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
      titleFocusStyle: { width: 260, marginTop: 320 - 100 },
    }
    data.push(poster)
  }
  return data;
}
const getList = (flag = '', num = 1) => {
  let sectionList: Array<QTWaterfallSection> = []
  for (let i = 0; i < num; i++) {
    let section: QTWaterfallSection = {
      _id: '' + i,
      type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
      title: 'qtRef:' + i + flag,
      titleStyle: {
        width: 1000,
        height: 50,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 50
      },
      itemList: buildPosterItemList(i + flag, 5),
      style: {
        width: 1620,
        // height: -1,
      },
      decoration: {
        left: 1,
        right: 1,
        top: 10
      }
    }
    sectionList.push(section)
  }
  return sectionList
}
</script>
```