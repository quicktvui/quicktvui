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
      <SidItem1 />
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
  const itemPosition = e.position||0
  if(e.name == 'add'){
    // e.parentPosition opCellData() e.position
    waterfallDatas.value[e.parentPosition].itemList.push(opCellData())
  } else if(e.name == 'del'){
    waterfallDatas.value[e.parentPosition].itemList.splice(itemPosition,1)
  } else if(e.name == 'update'){
    if(itemPosition == 0){
      const itemList = JSON.parse(JSON.stringify(waterfallDatas.value[e.parentPosition].itemList))
      itemList.sort(()=> Math.random() - 0.5)
      waterfallDatas.value[e.parentPosition].itemList = itemList
    } else if(itemPosition == 1){
      waterfallDatas.value[e.parentPosition].itemList[itemPosition].title = 'updateCell'+Math.random()
      waterfallDatas.value[e.parentPosition].itemList[itemPosition].style.width = 360
    } else {
      const itemList = JSON.parse(JSON.stringify(waterfallDatas.value[e.parentPosition].itemList))
      itemList[itemPosition].title = 'updateCell'+Math.random()
      itemList[itemPosition].style.width = 360
      waterfallDatas.value[e.parentPosition].itemList = itemList
    }
  }
}

onMounted(()=>{
  waterfallDatas.value = getList('initFn')
  console.log(waterfallDatas.value,'-lsj-waterfallDatas.value')
})
const imgs1 = ["http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20210709105200002.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20210708174600015.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20210708174500042.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20201125100100047.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/07/12/b9555d18f12547c48c401e692975bcd0.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/05/27/ab522119fe0a42bf9b68ded436d1701d.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190718165000032.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220908143800047.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211014101900028.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20210709105300019.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190801144300020.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230810153200058.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20230725143100016.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/05/27/16921a53abe74d25ad14862add0d2193.jpg","http://lexueimg.cedock.com/eduImg/upload/img4/20210618110500033.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20210709105400005.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/05/27/fd5069d8346f4c1b9198e73dfd440d3c.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190718165200013.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211102135900000.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/09/29/cad9ef5b816c4a0bb21e573dcbf930e4.贝瓦爱数学.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190802162600043.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220228135800006.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20210802164700002.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211102101400033.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190809140600014.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190725140800007.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20191029163800054.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20190801144400042.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20220222155100054.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img5/20220111160600011.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220302153800048.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20220111160500009.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2021/06/23/9518866226e94a1cbf5acabdabe537a5.png","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20190718165000001.jpg","http://lexueimg.educdn.huan.tv/eduImg/upload/img4/20211102135600034.jpg","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2020/09/18/715caa7be82f4acb9529d1664bb07790.png"]
const imgs2 = ["http://lexueimg.cedock.com/eduImg/upload/img5/20230809143600002.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230809143700011.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230809143700038.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230809143800033.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230809143800056.jpg","http://lexueimg.cedock.com/eduImg/upload/img5/20230815101900016.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/aa66a37874f2407f8b031abba70fe12f.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/679e63358aef4db4a2f033a629e1346f.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/5a70a08f8303459b9b1ad1144839722c.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/51848851ca7f4b59ae3f36ee261cb797.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/2de7d5f92ba943e3861324e4de5e172d.png","http://qcloudimg.moss.huan.tv/project/lexue_education/lexue/2023/08/16/27b0a925e6f44c8496238c3a54b315ed.png"]
const imgs = imgs2.concat(imgs1)

const opCellData = (type=1, index=0) => {
  return {
    _id: qt.uid.createUid('poster'),
    uid: qt.uid.createUid('uid'),
    focus: { enable: true, scale: 1.1, border: false },
    type: type,
    decoration: { left: 30, right:30, bottom: 20 },
    title: '标题'+index,
    imgURL: imgs[index % imgs.length],
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
function buildPosterItemList(size = 15, type=1, isAdd=true): Array<QTWaterfallItem> {
  let data: Array<QTWaterfallItem> = []
  for (let i = 0; i < size; i++) {
    data.push(opCellData(type, i))
  }
  isAdd && data.push(opCellData(3))
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
    enableKeepFocus:true,
    itemList: buildPosterItemList(10, 1, false),
    style: {
      width: 1920,
      height: 400,
    }
  }
}
const getList = (flag = '') => {
  return [getListSection(flag),getFlexSection(flag)]
}
</script>

<style>
.qt-waterfall-css-ref-sid {
  width: 1920px;
  height: 1080px;
  background-color: transparent;
}
</style>
