<template>
  <qt-waterfall 
    sid="waterfall-ref-sid-1028" 
    :list-data="waterfallDatas" 
    class="qt-waterfall-css-ref-sid"
    @item-click="onItemClickFn"
  >
    <template v-slot:item>
      <div :type="1" flexStyle="${style}" layout="${layout}" disablePlaceholderFocus :focusable="false" class="qt-waterfall-css-ref-sid-item">
        <img src="${imgURL}" flexStyle="${style}" :focusable="false" />
        <text-view class="qt-waterfall-css-ref-sid-item-title" :focusable="false" text="${title}" />
        <div flexStyle="${style}" :focusable="false" class="qt-waterfall-css-ref-sid-item-bg">
          <text-view name="del" :focusable="true" text="删除" gravity="center" class="qt-waterfall-css-ref-sid-item-btn" typeface="bold"/>
          <text-view name="update" :focusable="true" text="更新" gravity="center" class="qt-waterfall-css-ref-sid-item-btn" typeface="bold"/>
        </div>
      </div>
      <div :type="3" flexStyle="${style}" name="add" layout="${layout}" :focusable="true" class="qt-waterfall-css-ref-sid-item-add" eventClick>
        <text-view text="+" gravity="center" class="qt-waterfall-css-ref-sid-item-btn-add" typeface="bold" :focusable="false" duplicateParentState/>
      </div>
    </template>
    <template v-slot:list-item>
      <div :type="1" flexStyle="${style}" layout="${layout}" disablePlaceholderFocus :focusable="false" class="qt-waterfall-css-ref-sid-item">
        <tv-list
          flexStyle="${listStyle}" list="${list}" sid="${listSid}"
          :clipChildren="false" :focusable="false" :endHintEnabled="false">
          <div type="101" :focusable="true" class="itl_box_list_item">
            <text-view class="itl_box_list_item_txt" :focusable="false" text="${txt}" duplicateParentState gravity="center" :ellipsizeMode="2" :lines="1"/>
          </div>
        </tv-list>
        <div :focusable="false" class="qt-waterfall-css-ref-sid-list-btn">
          <text-view name="add-list" :focusable="true" text="增加" gravity="center" class="qt-waterfall-css-ref-sid-list-btn-txt" />
          <text-view name="update-list" :focusable="true" text="更新" gravity="center" class="qt-waterfall-css-ref-sid-list-btn-txt" />
          <text-view name="del-list" :focusable="true" text="删除" gravity="center" class="qt-waterfall-css-ref-sid-list-btn-txt" />
        </div>
      </div>
      <div :type="3" flexStyle="${style}" name="add" layout="${layout}" :focusable="true" class="qt-waterfall-css-ref-sid-item-add" eventClick>
        <text-view text="+" gravity="center" class="qt-waterfall-css-ref-sid-item-btn-add" typeface="bold" :focusable="false" duplicateParentState/>
      </div>
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
// 更新
const updateBySid = (sid, newData) => {
  Native.callNativeWithPromise('ExtendModule', 'updateVirtualNode', sid, newData, (res)=>{
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
function buildPosterItemList(size = 15): Array<QTWaterfallItem> {
  let data: Array<QTWaterfallItem> = []
  for (let i = 0; i < size; i++) {
    data.push(opCellData())
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
    itemList: buildPosterItemList(3),
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
.qt-waterfall-css-ref-sid-item{
  background-color: rgba(0,0,0,0.8);
  position: relative;
}
.qt-waterfall-css-ref-sid-item-title{
  position: absolute;
  font-size: 30px;
  width: 260px;
  height: 50px;
  background-color: #ffffff;
  color: #000000;
  z-index: 1;
}
.qt-waterfall-css-ref-sid-item-bg{
  position: absolute;
  z-index: 2;
  background-color: transparent;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.qt-waterfall-css-ref-sid-item-btn{
  width: 100px;
  height: 50px;
  color: #000000;
  background-color: #ffffff;
  focus-color: red;
}
.qt-waterfall-css-ref-sid-item-add{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #cccccc;
}
.qt-waterfall-css-ref-sid-item-btn-add{
  width: 200px;
  height: 200px;
  color: #999999;
  font-size: 100px;
  background-color: transparent;
  focus-color: red;
}
.qt-waterfall-css-ref-sid-list-btn{
  width: 260px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: transparent;
}
.qt-waterfall-css-ref-sid-list-btn-txt{
  width: 80px;
  height: 30px;
  font-size: 26px;
  color: #000000;
  background-color: #ffffff;
  focus-color: red;
}
.itl_box_list_item{
  width: 260px;
  height: 50px;
  background-color: #ffffff;
  focus-background-color: #000000;
}
.itl_box_list_item_txt{
  height: 50px;
  font-size: 30px;
  color: #000000;
  focus-color: #ffffff;
  background-color: transparent;
}
</style>
