<template>
  <qt-view class="es-sdk-root-css">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="quick-list-view">
      <qt-list-view class="list_view" ref="listViewRef" :clipChildren="false" :clipPadding="false"
                    @item-click="onItemClick"
                    @item-bind="onItemBind" horizontal :padding="'0,0,30,0'" :defaultFocus="defaultFocus"
                    :blockFocusDirections="['left','right']"
                    :scrollToPosition="scrollToPosition" :selectionPosition="selectionPosition"
                    :focusPosition="focusPosition" :autoFocusId="autoFocusId" :offset="offset">
        <!-- item -->
        <qt-poster/>
      </qt-list-view>
      <qt-list-view style="width: 1920px;height: 76px;background-color: transparent;" ref="cmdListViewRef" horizontal
                    @item-click="onCMDCLick">
        <qt-button :enable-flex-style="true" text="text" type="1" size="mini" autoWidth
                   style="padding-left: 20px;padding-right: 20px;background-color: green;"></qt-button>
      </qt-list-view>
    </qt-view>
  </qt-view>
</template>

<script lang="ts">

import {defineComponent, nextTick} from "@vue/runtime-core";
import {ref, reactive, watch, watchEffect} from "vue";
import {QTIListView, QTListViewItem, QTPoster} from "@quicktvui/quicktvui3";
import {useESToast} from "@extscreen/es3-core";

export default defineComponent({
  name: '属性测试',
  setup(props, context) {
    const listViewRef = ref<QTIListView>()
    const cmdListViewRef = ref<QTIListView>()
    const toast = useESToast()
    let defaultFocus = ref(0)
    let listDataRec: Array<QTListViewItem> = [];
    let scrollToPosition = ref<any>(-1)
    let selectionPosition = ref<any>(-1)
    let focusPosition = ref<any>(-1)
    let autoFocusId = ref<any>(-1)
    let offset = ref<any>(0)
    const onESCreate = (params) => {
      let arr: Array<QTListViewItem> = []
      for (let i = 0; i < 24; i++) {
        let imgSrc = 'https://img1.baidu.com/it/u=2666955302,2339578501&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
        const poster: QTPoster = {
          type: 10001,
          focus: {
            enable: true,
            scale: 1.1,
            border: false
          },
          decoration: {
            top: 20,
            left: 20,
            right: 20,
            bottom: 20
          },
          title: {
            text: '主标题' + i,
            enable: true,
            style: {
              width: 260,
            }
          },
          subTitle: {
            text: '副标题' + i,
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
            src: imgSrc,
            enable: true,
            style: {
              width: 260,
              height: 320
            }
          },
          corner: {
            text: '角标' + i,
            enable: true,
            style: {
              width: 260,
              height: 30
            },
            background: {
              colors: ['#A06419', '#CDA048'],
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
        arr.push(poster)
      }
      listDataRec = listViewRef.value!.init(arr)
      initBtnList()
    }
    const initBtnList = () => {
      let cmdData: Array<QTListViewItem> = [
        {
          text: 'demo0', type: 1, desc: 'scrollToPosition 0 offset 0',
          scrollToPosition: 0, selectionPosition: -1, focusPosition: -1, autoFocusId: null, offset: 0,
        },
        {
          text: 'demo1', type: 1, desc: 'scrollToPosition 0 autoFocusId 2 offset 0',
          scrollToPosition: 0, selectionPosition: -1, focusPosition: -1, autoFocusId: 2, offset: 0,
        },
        {
          text: 'demo2',
          type: 1,
          desc: 'scrollToPosition 0 selectionPosition 3 focusPosition 1 autoFocusId 0_0 offset 0',
          scrollToPosition: 0,
          selectionPosition: 3,
          focusPosition: 1,
          autoFocusId: '0_0',
          offset: 0,
        },
        {
          text: 'demo3', type: 1, desc: 'scrollToPosition 2 offset 0',
          scrollToPosition: 2, selectionPosition: -1, focusPosition: -1, autoFocusId: null, offset: 0,
        },
        {
          text: 'demo4', type: 1, desc: 'scrollToPosition 2 autoFocusId 2 offset 0',
          scrollToPosition: 2, selectionPosition: -1, focusPosition: -1, autoFocusId: 2, offset: 0,
        },
        {
          text: 'demo5',
          type: 1,
          desc: 'scrollToPosition 0 selectionPosition 3 focusPosition 1 autoFocusId null offset 0',
          scrollToPosition: 0,
          selectionPosition: 3,
          focusPosition: 1,
          autoFocusId: null,
          offset: 0,
        },
        {
          text: 'demo6', type: 1, desc: 'scrollToPosition 2 offset 100',
          scrollToPosition: 2, selectionPosition: -1, focusPosition: -1, autoFocusId: null, offset: 100,
        },
        {
          text: 'demo7', type: 1, desc: 'scrollToPosition 5 offset 0',
          scrollToPosition: 5, selectionPosition: -1, focusPosition: -1, autoFocusId: null, offset: 0,
        },
      ]
      cmdData.forEach((el) => {
        el.decoration = {right: 40, top: 6, bottom: 6}
      })
      cmdListViewRef.value?.init(cmdData)
    }
    const onCMDCLick = (e: any) => {
      let {position, item} = e
      toast.showToast(item.desc)
      // scrollToPosition,selectionPosition,focusPosition,autoFocusId,offset
      scrollToPosition.value = item.scrollToPosition
      selectionPosition.value = item.selectionPosition
      focusPosition.value = item.focusPosition
      autoFocusId.value = item.autoFocusId
      offset.value = item.offset
    }
    const onItemClick = () => {
    }
    const onItemBind = () => {
    }
    return {
      listViewRef, scrollToPosition, selectionPosition, focusPosition, autoFocusId, offset,
      cmdListViewRef,
      listDataRec,
      defaultFocus,
      initBtnList,
      onESCreate,
      onCMDCLick,
      onItemBind,
      onItemClick,
    }
  },
});

</script>

<style scoped>
.quick-list-view {
  width: 1920px;
  height: 1000px;
  background-color: transparent;
  padding-top: 20px;
  flex-direction: column;
}

.quick-list-view .list_view {
  width: 1800px;
  height: 800px;
  margin-left: 60px;
}
</style>
