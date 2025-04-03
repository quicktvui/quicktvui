<template>
  <qt-waterfall 
    :list-data="waterfallDatas" 
    class="qt-waterfall-css-ref-sid"
    @item-click="onItemClickFn"
  >
    <template v-slot:item>
      <SidItem1 />
      <SidItem3 />
    </template>
    <template v-slot:list-item>
      <SidItem2 />
      <SidItem3 />
    </template>
  </qt-waterfall>
</template>

<script lang="ts" setup>
import { ref, onMounted, toRaw } from "vue";
import {
  QTWaterfall,
  QTPoster,
  QTWaterfallSection,
  QTWaterfallSectionType
} from "@quicktvui/quicktvui3";
import { qtRef, QTIWaterfall, QTWaterfallItem, VirtualView } from '@quicktvui/quicktvui3';
import { useESToast } from "@extscreen/es3-core";
import { Native } from "@extscreen/es3-vue";
import SidItem1 from './item/sid-item1.vue'
import SidItem2 from './item/sid-item2.vue'
import SidItem3 from './item/sid-item3.vue'

const waterfallDatas = qtRef<QTWaterfallSection[]>()
const toast = useESToast()

const onItemClickFn = (e) => {
  // console.log(e, '-lsj-e')
  let sid = e.item._id//获取自己sid
  if(e.name == 'add'){
    sid = waterfallDatas.value[e.parentPosition]._id//获取父级sid
    addBySid(sid, [opCellData()])
  } else if(e.name == 'del'){
    deleteBySid(sid)
  } else if(e.name == 'update'){
    updateBySid(sid, {
      text: 'updateCell'+Math.random(),
      // enable: true, style: { width: 260, }
    })
  } else if (e.name === 'add-list'){
    sid = e.item.listSid//获取listSid
    addBySid(sid, [{ txt: '新闻'+Math.random(), type: 101, decoration: { top: 10 } }])
  } else if (e.name === 'update-list'){
    sid = e.item.listSid//获取listSid
    updateBySid(sid, [
      { txt: '更新'+Math.random(), type: 101, decoration: { top: 10 } },
      { txt: '更新'+Math.random(), type: 101, decoration: { top: 10 } },
      { txt: '更新'+Math.random(), type: 101, decoration: { top: 10 } },
    ])
  } else if (e.name === 'del-list'){
    deleteBySid(sid)
  }
}

// 新增
const addBySid = (sid, newList) => {
  toast.showShortToast(sid)
}
// 删除
const deleteBySid = (sid) => {
  toast.showShortToast(sid)
}
// 更新 ExtendModule
const updateBySid = (sid, newData) => {
  Native.callNativeWithPromise('FastListModule', 'updateVirtualNode', sid, newData, (res)=>{
    if(res && res.result){
      toast.showShortToast('成功')
    } else {
      toast.showShortToast('无效的sid ' + sid)
    }
  })
}
onMounted(()=>{
  waterfallDatas.value = getList('initFn')
  console.log(waterfallDatas.value,'-lsj-waterfallDatas.value')
})

const opCellData = (type=1) => {
  return {
    _id: qt.uid.createUid('poster'),
    focus: { enable: true, scale: 1.1, border: false },
    type: type,
    decoration: { left: 30, right:30, bottom: 20 },
    title: '标题'+Math.random(),
    imgURL: 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750',
    style: { width: 260, height: 350 },
    listStyle: { width: 260, height: 280 },
    listSid: qt.uid.createUid('listSid'),
    list: [
      { txt: '凝心聚力推动改革行稳致远', type: 101, decoration: { top: 10 } },
      { txt: '神十九发射任务圆满成功', type: 101, decoration: { top: 10 } },
      { txt: '曝各大厂商正在筹备7000mAh电池新机', type: 101, decoration: { top: 10 } },
      // { txt: '曝各大厂商正在筹备7000mAh电池新机', type: 101, decoration: { top: 10 } },
      // { txt: '曝各大厂商正在筹备7000mAh电池新机', type: 101, decoration: { top: 10 } },
      // { txt: '曝各大厂商正在筹备7000mAh电池新机', type: 101, decoration: { top: 10 } },
      // { txt: '曝各大厂商正在筹备7000mAh电池新机', type: 101, decoration: { top: 10 } }
    ]
  }
}
function buildPosterItemList(size = 15, type=1): Array<QTWaterfallItem> {
  let data: Array<QTWaterfallItem> = []
  for (let i = 0; i < size; i++) {
    data.push(opCellData(type))
  }
  data.push(opCellData(3))
  return data;
}
const getFlexSection = (flag = ''):QTWaterfallSection => {
  return {
    _id: qt.uid.createUid('section'),
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    title: 'flex:' + flag,
    titleStyle: {
      width: 1000,
      height: 50,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 50
    },
    itemList: buildPosterItemList(5),
    style: {
      width: 1920,
      // height: -1,
    }
  }
}
const getListSection = (flag = ''):QTWaterfallSection => {
  return {
    _id: qt.uid.createUid('section'),
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_LIST,
    title: '一行滚动:' + flag,
    titleStyle: {
      width: 1000,
      height: 50,
      marginTop: 10,
      marginBottom: 10,
      fontSize: 50
    },
    itemList: buildPosterItemList(3, 2),
    style: {
      width: 1920,
      // height: -1,
    }
  }
}
const getList = (flag = '') => {
  return [getFlexSection(flag),getListSection(flag)]
}
</script>

<style>
.qt-waterfall-css-ref-sid {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
}
</style>