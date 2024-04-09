<template>
  <div class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-row-css">
      <s-text-button text="收缩" @onButtonClicked="onCollapseButtonClicked"/>
      <s-text-button text="展开" @onButtonClicked="onExpandButtonClicked"/>
      <s-text-button text="展开第一个" @onButtonClicked="onOneButtonClicked"/>
      <s-text-button text="展开第二个" @onButtonClicked="onTwoButtonClicked"/>
      <s-text-button text="展开第三个" @onButtonClicked="onThreeButtonClicked"/>
      <s-text-button text="展开第四个" @onButtonClicked="onFourButtonClicked"/>
      <s-text-button text="调用第一个Item的方法" @onButtonClicked="onCallButtonClicked"/>
    </div>
    <qt-collapse
      ref="collapseRef"
      @onCollapseItemExpand="onCollapseItemExpand"
      class="qt-collapse-css">
      <qt-collapse-item-green @onCollapseItemGreenExpand="onCollapseItemGreenExpand"/>
      <qt-collapse-item-purple/>
      <qt-collapse-item-red/>
      <qt-collapse-item-yellow/>
    </qt-collapse>
  </div>
</template>

<script lang="ts">

import {ref} from "vue";
import {defineComponent} from "@vue/runtime-core";
import QTCollapseItemGreen from './item/qt-collapse-item-green.vue'
import QTCollapseItemPurple from './item/qt-collapse-item-purple.vue'
import QTCollapseItemRed from './item/qt-collapse-item-red.vue'
import QTCollapseItemYellow from './item/qt-collapse-item-yellow.vue'
import {QTGreenCollapseItem} from "./item/QTGreenCollapseItem";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {QTCollapse, QTCollapseItem, QTICollapse} from "@quicktvui/quicktvui3";

const TAG = 'QTCollapsePage'

export default defineComponent({
  name: '使用初探',
  components: {
    'qt-collapse-item-green': QTCollapseItemGreen,
    'qt-collapse-item-purple': QTCollapseItemPurple,
    'qt-collapse-item-red': QTCollapseItemRed,
    'qt-collapse-item-yellow': QTCollapseItemYellow,
  },
  setup(props, context) {
    const collapseRef = ref<QTICollapse>()
    const log = useESLog()

    function onESCreate() {
      const collapse: QTCollapse = {
        width: 1920,
        height: 1000,
        defaultIndex: 2,//默认0
        expandDuration: 200,//默认200
        itemList: [
          {
            height: 200,
            collapseHeight: 150
          },
          {
            height: 300,
            collapseHeight: 250
          },
          {
            height: 200,
            collapseHeight: 150
          },
          {
            height: 100,
            collapseHeight: 50
          },
        ]
      }
      collapseRef.value?.init(collapse)
    }

    function onCollapseItemExpand(index: number, item: QTCollapseItem) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onCollapseItemExpand------->>>>', item, index)
      }
    }

    function onCollapseItemGreenExpand(value) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------onCollapseItemGreenExpand------>>>>', value)
      }
    }

    function onCollapseButtonClicked() {
      collapseRef.value?.collapse()
    }

    function onExpandButtonClicked() {
      collapseRef.value?.expand()
    }

    function onOneButtonClicked() {
      collapseRef.value?.expandItem(0)
    }

    function onTwoButtonClicked() {
      collapseRef.value?.expandItem(1)
    }

    function onThreeButtonClicked() {
      collapseRef.value?.expandItem(2)
    }

    function onFourButtonClicked() {
      collapseRef.value?.expandItem(3)
    }

    function onCallButtonClicked() {
      const item = collapseRef.value?.getItem(0) as QTGreenCollapseItem
      item.showText("Hello world!")
    }

    return {
      collapseRef,
      onESCreate,
      onOneButtonClicked,
      onTwoButtonClicked,
      onThreeButtonClicked,
      onFourButtonClicked,
      onCollapseItemExpand,
      onCollapseItemGreenExpand,
      onCallButtonClicked,
      onCollapseButtonClicked,
      onExpandButtonClicked
    }
  },
});

</script>

<style>
.qt-collapse-css {
  width: 1920px;
  height: 800px;
  position: absolute;
  bottom: 0;
  background-color: palevioletred;
}
</style>
