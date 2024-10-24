<template>
  <div class="es-sdk-root-css">
    <qt-row>
      <div class="menus">
        <qt-button @click="initFn" size="mini" text="初始化" class="menus_btn"></qt-button>
        <qt-button @click="addFn" size="mini" text="新增板块" class="menus_btn"></qt-button>
        <qt-button @click="addMoreFn" size="mini" text="新增多个板块" class="menus_btn"></qt-button>
        <qt-button @click="addItemFn" size="mini" text="新增海报" class="menus_btn"></qt-button>
        <qt-button @click="resetItemAllFn" size="mini" text="重置子列表" class="menus_btn"></qt-button>
        <qt-button @click="updateFn" size="mini" text="更新单个板块" class="menus_btn"></qt-button>
        <qt-button @click="updateItemFn" size="mini" text="更新海报" class="menus_btn"></qt-button>
        <qt-button @click="updateAllFn" size="mini" text="更新所有板块" class="menus_btn"></qt-button>
        <qt-button @click="updateAllItemFn" size="mini" text="更新子列表" class="menus_btn"></qt-button>
        <qt-button @click="deleteFn" size="mini" text="删除单个板块" class="menus_btn"></qt-button>
        <qt-button @click="deleteItemFn" size="mini" text="删除海报" class="menus_btn"></qt-button>
        <qt-button @click="insertFn" size="mini" text="插入板块" class="menus_btn"></qt-button>
        <qt-button @click="insertItemFn" size="mini" text="插入海报" class="menus_btn"></qt-button>
        <qt-button @click="clearFn" size="mini" text="清空" class="menus_btn"></qt-button>
      </div>
      <qt-waterfall ref="waterfall" :list-data="waterfallDatas" class="qt-waterfall-css" />
    </qt-row>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  // QTIWaterfall,
  QTWaterfall,
  QTPoster,
  QTWaterfallSection,
  QTWaterfallSectionType
} from "@quicktvui/quicktvui3";
import { qtRef, QTIWaterfall, QTWaterfallItem } from '@quicktvui/quicktvui3';

const waterfall = ref<QTIWaterfall>()
const waterfallDatas = qtRef<QTWaterfallSection[]>()

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
const initFn = () => {
  waterfallDatas.value = getList('initFn')
}
const addFn = () => {
  const item = getList('addFn')[0]
  waterfallDatas.value.push(item)
}
const addMoreFn = () => {
  waterfallDatas.value = waterfallDatas.value.concat(getList('addMoreFn', 2))
}
const addItemFn = () => {
  const item = buildPosterItemList('addItemFn'+Math.random(), 1)[0]
  waterfallDatas.value[0].itemList.push(item)
}
const updateFn = () => {
  waterfallDatas.value[0].title = Math.random() + '-update'
}
const updateItemFn = () => {
  waterfallDatas.value[0].itemList[0].title.text = Math.random() + 'updateItemFn'
}
const updateAllFn = () => {
  waterfallDatas.value.forEach(item => {
    item.title = Math.random() + '-updateAllFn'
    // item.titleStyle!.fontSize = Math.random()
  })
}
const updateAllItemFn = () => {
  waterfallDatas.value[0].itemList.forEach(item => {
    item.title.text = Math.random() + '-updateAllItemFn'
  })
}
const resetItemAllFn = () => {
  waterfallDatas.value[0].itemList = buildPosterItemList('resetItemAllFn', 5)
}
const deleteFn = () => {
  waterfallDatas.value.splice(1, 1)
}
const deleteItemFn = () => {
  waterfallDatas.value[0].itemList.splice(0, 1)
}
const insertFn = () => {
  waterfallDatas.value.splice(0, 0, getList('insertFn')[0])
}
const insertItemFn = () => {
  const item = buildPosterItemList('addItemFn', 1)[0]
  waterfallDatas.value[0].itemList.splice(0, 0, item)
}
const clearFn = () => {
  waterfallDatas.value = []
}
defineExpose({
  onESCreate() {
    //1.init
    let waterfallData: QTWaterfall = {
      width: 1920,
      height: 1080
    }
    waterfall.value?.init(waterfallData)

    //2.setSectionList
    // waterfall.value?.setSectionList(getList())

    // waterfallDatas.value = getList()
  }
})
</script>

<style>
.menus {
  width: 200px;
  height: 1080px;
  background-color: rgba(0, 0, 0, 0.5);
  border-right: solid 2px #cccccc;
}

.qt-waterfall-css {
  width: 1620px;
  height: 1080px;
  background-color: transparent;
}

.menus_btn {
  margin-bottom: 10px;
}
</style>
