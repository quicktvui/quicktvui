<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row>
      <qt-column>
        <s-text-button text="更新Item by sid" @onButtonClicked="updateBySid"/>
      </qt-column>
      <qt-tabs ref="tabRef" @onTabPageLoadData="onTabPageLoadData" class="qt-tabs-css">
        <template v-slot:waterfall-item>
          <ItemTvlist :type="1"/>
        </template>
      </qt-tabs>
    </qt-row>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTITab, QTTabPageData, QTWaterfall, QTWaterfallSection, QTTabItem, QTTab,
  QTWaterfallSectionType, QTWaterfallItem
} from "@quicktvui/quicktvui3";
import ItemTvlist from './item/ItemTvlist.vue'
import {Native} from "@extscreen/es3-vue";

const img = 'http://lexueimg.cedock.com/eduImg/upload/img5/20230809143600002.jpg'
const img2 = 'http://lexueimg.cedock.com/eduImg/upload/img5/20230809143700011.jpg'
function generatorAppMeiTuWaterfallItem(sectionId: string, index: number){
  const item: QTWaterfallItem = {
    _id: sectionId + '_' + index,
    type: 1,
    decoration: { left: 10, bottom: 10, },
    appIcon: img, appName: 'item-' + index,
    style: { width: 500, height: 300, },
    listSID: sectionId + '_' + index + '_list',
    list: [
      { txt: '免费', type: 101, decoration: { top: 10 } },
      { txt: 'vip', type: 101, decoration: { top: 10 } },
      { txt: '读博', type: 101, decoration: { top: 10 } },
      { txt: '云影院', type: 101, decoration: { top: 10 } },
      { txt: '纪录片', type: 101, decoration: { top: 10 } }
    ]
  }

  return item
}
function generatorAppWaterfallItemList(sectionId: string, count: number){
  let itemList: Array<QTWaterfallItem> = []
  for (let i = 0; i < count; i++) {
    const item = generatorAppMeiTuWaterfallItem(sectionId, i)
    itemList.push(item)
  }
  return itemList;
}
const generatorAppWaterfallSection = (sectionId: string, title: string)=>{
  let section: QTWaterfallSection = {
    _id: sectionId,
    type: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX,
    title: title,
    titleStyle: {
      width: 1920,
      height: 60,
      marginLeft: 90,
      marginTop: 40,
      marginBottom: 40,
      fontSize: 50
    },
    style: {
      width: 1920,
      height: -1,
    },
    itemList: generatorAppWaterfallItemList(sectionId, 21)
  }
  return section
}
export default defineComponent({
  name: '更新item-bysid',
  components: { ItemTvlist: ItemTvlist},
  setup(props, context) {
    const tabRef = ref<QTITab>()

    function onESCreate() {
      const tabItemList: Array<QTTabItem> = []
      for (let i = 0; i < 15; i++) {
        let tabItem: QTTabItem = {
          _id: '' + i,
          type: 20000,
          text: 'Tab:' + i,
          titleSize: 20,
          decoration: {
            left: 40,
            right: 20,
          }
        }
        tabItemList.push(tabItem)
      }
      const tab: QTTab = {
        defaultFocusIndex: 0,
        defaultIndex: 0,
        itemList: tabItemList
      }
      tabRef.value?.initTab(tab)

      let waterfallData: QTWaterfall = {
        width: 1700,
        height: 500
      }
      tabRef.value?.initPage(waterfallData)


    }

    let pageIndexLast = -1

    //-----------------------------------------------------
    function onTabPageLoadData(pageIndex: number, pageNo: number, useDiff: boolean): void {
      if (pageIndexLast === pageIndex) {
        return
      }
      pageIndexLast = pageIndex

      let section: QTWaterfallSection = generatorAppWaterfallSection('0', "应用")

      let sectionList: Array<QTWaterfallSection> = [
        section,generatorAppWaterfallSection('2', "应用2"),
        generatorAppWaterfallSection('3', "应用3"),
        generatorAppWaterfallSection('4', "应用4")
      ]

      const tabPage: QTTabPageData = {
        useDiff: useDiff,
        data: sectionList
      }
      tabRef.value?.setPageData(pageIndex, tabPage)
    }

    return {
      tabRef,
      onESCreate,
      onTabPageLoadData,
      updateBySid(){
        const item = tabRef.value?.getPageItem(0, 0, 2)
        if (item) {
          item.appName = 'sid'
          item.appIcon = img2


          //tabRef.value?.updatePageItem(0, 0, 2, item)
          // Native.callNative('ExtendModule','callUIFunction',
          //     item._id,'setBackGroundColor',['#ff0000'])
          // 0_2_list
          Native.callNative('ExtendModule','callUIFunction',
              '0_2_list','requestChildFocus',[0])
        }
      }
    }
  },
});

</script>

<style>
.qt-tabs-css {
  width: 1700px;
  height: 800px;
  background-color: pink;
}
</style>
