<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <qt-row>
      <qt-column class="qwub_btn_box">
        <s-text-button text="更新bySid" @onButtonClicked="onUpdateButtonClicked"/>
      </qt-column>
      <qt-waterfall ref="waterfall" class="qt-waterfall-op-css">
        <template v-slot:item>
          <ItemTvlist :type="1"/>
        </template>
      </qt-waterfall>
    </qt-row>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {
  QTIWaterfall,
  QTWaterfall,
  QTWaterfallSection,QTWaterfallItem, QTWaterfallSectionType
} from "@quicktvui/quicktvui3";
import ItemTvlist from '../qt-tabs-waterfall/item/ItemTvlist.vue'

const img = 'http://lexueimg.cedock.com/eduImg/upload/img5/20230809143600002.jpg'
function generatorAppMeiTuWaterfallItem(sectionId: string, index: number){
  const item: QTWaterfallItem = {
    _id: sectionId + '_' + index,
    type: 1,
    decoration: { left: 10, bottom: 10, },
    appIcon: img, appName: 'item-' + index,
    style: { width: 500, height: 300, },
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
  name: 'UpdateWaterfallItemBysid',
  components: { ItemTvlist: ItemTvlist },
  setup(props, context) {
    const waterfall = ref<QTIWaterfall>()

    function onUpdateButtonClicked() {
      const newItem = waterfall.value?.getItem(0,0)
      // waterfall.value?.updateItemBsid(0, 0, item)
    }
    
    //-------------------------------------------------------------
    function onESCreate() {
      let waterfallData: QTWaterfall = {
        width: 1920,
        height: 800
      }
      waterfall.value?.init(waterfallData)
      //
      let sectionList: Array<QTWaterfallSection> = [
        generatorAppWaterfallSection('0', '应用：1'),
        generatorAppWaterfallSection('1', '应用：2'),
        generatorAppWaterfallSection('2', '应用：3'),
      ]
      waterfall.value?.addSectionList(sectionList)
    }

    return {
      waterfall,
      onESCreate,
      onUpdateButtonClicked
    }
  },
});

</script>

<style>
.qt-waterfall-op-css {
  width: 1700px;
  height: 800px;
}
.qwub_btn_box{

}
</style>
