<template>
  <div :focusable="false" :clipChildren="false" ref="viewRef">
    <qt-list-view :class="className" ref="content_list_view" :clipChildren="false" :clipPadding="false"
                  @item-click="onSItemClick" horizontal :blockFocusDirections="['left','right']"
                  :descendantFocusability="descendantFocusability" name="content_list_view"
                  @item-focused="onSItemFocused">
      <div :type="10001" name="clv_item" class="clv_item" :focusable="true" :enableFocusBorder="true"
           :clipChildren="false" eventClick eventFocus :focusScale="focusScale">
        <img class="coverV" src="${coverV}" :focusable="false" :postDelay="300"/>
        <div  class="titMask" :focusable="false" showIf="${isPlaying}"
          :gradientBackground = "{colors:['#00000000', '#FF000000'], cornerRadii4: [0, 0, 8, 8]}"/>
        <div :focusable="false" class="clv_item_text_box" showIf="${isPlaying}">
          <div class="playMark" :focusable="false">
            <play-mark :style="{width:'28px',height:'20px'}" :markColor="'#ffffff'" :gap="-1" style="margin-left: 16px;"
                       :focusable="false"/>
          </div>
          <text-view :focusable="false" :ellipsizeMode="2" :fontSize="30" gravity="centerVertical" :lines="1"
                     :maxLines="1"
                     class="clv_item_text" text="${assetTitle}" :paddingRect="[6,0,0,0]"/>
        </div>
      </div>
      <slot name="item"></slot>
    </qt-list-view>
    <!-- listview  first nav -->
    <qt-list-view :class="classNavName" ref="nav_list_view" :clipChildren="false" :clipPadding="false"
                  @item-click="onFItemClick" :nextFocusName="{up:'content_list_view'}"
                  horizontal :blockFocusDirections="['left','right']" @item-focused="onFItemFocused">
      <div :type="navType" name="nav_item" class="nav_item" :focusable="true" :enableFocusBorder="false"
           focusScale="1" eventClick eventFocus :clipChildren="false">
        <div class="line" :focusable="false" showOnState="selected" :duplicateParentState="true"></div>
        <div :duplicateParentState="true" class="nav_item_text_focused" showOnState="focused" :focusable="false"
             :gradientBackground="{ colors: ['#FF2F7CEB', '#FF1163D8'], cornerRadius: 40 }">
        </div>
        <div class="nav_item_text" :focusable="false" :duplicateParentState="true">
          <text-view :focusable="false" :ellipsizeMode="2" :duplicateParentState="true" :fontSize="44" gravity="center"
                     :lines="1"
                     class="text_selected" text="${categoryname}" :showOnState="['selected']"/>
          <text-view :focusable="false" :ellipsizeMode="2" :duplicateParentState="true" :fontSize="44" gravity="center"
                     :lines="1" :maxLines="1"
                     class="text" text="${categoryname}" showOnState="focused"/>
          <text-view :focusable="false" :ellipsizeMode="2" :duplicateParentState="true" :fontSize="44" gravity="center"
                     :lines="1"
                     class="text" text="${categoryname}" :showOnState="['normal']"/>
        </div>
      </div>
      <slot name="navItem"></slot>
    </qt-list-view>
  </div>
</template>

<script lang="ts">

import {defineComponent, nextTick} from "@vue/runtime-core";
import {ref} from "vue";
import {QTClassifiedListViewItem} from "./core/QTClassifiedListViewItem";
import {QTIListView} from "../list-view/core/QTIListView";
import useBaseView from "../base/useBaseView";

export default defineComponent({
  name: 'qt-classified-list-view',
  props: {
    className: {
      type: String,
      default: 'content_list_view'
    },
    classNavName: {
      type: String,
      default: 'nav_list_view'
    },
    currentFocusIndex: {
      type: Number,
      default: 0
    },
    focusScale: {
      type: Number,
      default: 1.15
    },
    navType: {
      type: Number,
      default: 10001
    },
    yOffest: {
      type: Number,
      default: 802
    }
  },
  emits: [
    'item-click',
    'item-focused'
  ],
  setup(props, context) {
    const viewRef = ref()
    let descendantFocusability = ref(1)
    const content_list_view = ref<QTIListView>()
    const nav_list_view = ref<QTIListView>()
    let navList: Array<QTClassifiedListViewItem> = []
    let recordCurrentIndex: number = -1
    let recordCurrentNavIndex: number = -1
    let recordList: Array<QTClassifiedListViewItem> = []
    const init = (itemList: Array<QTClassifiedListViewItem>) => {
      itemList.forEach((el, index) => {
        el.isPlaying = false
        if (props.currentFocusIndex == index) el.isPlaying = true
        let flag = false
        for (let i = 0; i < navList.length; i++) {
          const item = navList[i];
          if (el.categoryname == item.categoryname) {
            el.navIndex = i
            flag = true
          }
        }
        if (!flag) {
          if (!el.navIndex) el.navIndex = navList.length
          navList.push({
            type: el.type,
            decoration: {left: 50},
            categoryname: el.categoryname,
            startIndex: index,
            isNeedFocus: true
          })
        }
        recordList = itemList
      });
      nextTick(() => {
        navList[navList.length - 1].decoration!.right = 50
        content_list_view.value?.setListData(itemList)
        nav_list_view.value?.setListData(navList)
        setTimeout(() => {
          recordCurrentIndex = props.currentFocusIndex
          recordCurrentNavIndex = itemList[props.currentFocusIndex].navIndex
          content_list_view.value?.scrollToFocused(recordCurrentIndex)
          nav_list_view.value?.scrollToSelected(recordCurrentNavIndex, true)
        }, 300)
      })
    }
    let sItemFocusedTimer: any = -1
    const onSItemFocused = (e) => {
      clearTimeout(sItemFocusedTimer)
      sItemFocusedTimer = setTimeout(() => {
        if (!e.hasFocus) {
          recordCurrentNavIndex = e.item.navIndex
          // nav_list_view.value?.scrollToFocused(e.item.navIndex)
        } else {
          if (recordCurrentIndex != e.position) {
            if (recordCurrentIndex > -1) {
              let updateItem = recordList[recordCurrentIndex]
              updateItem.isPlaying = false
              content_list_view.value?.updateItemTraverse(recordCurrentIndex, updateItem)
            }
            let updateItem = recordList[e.position]
            updateItem.isPlaying = true
            content_list_view.value?.updateItemTraverse(e.position, updateItem)
          }
          recordCurrentIndex = e.position
          if (recordCurrentNavIndex != e.item.navIndex) {
            recordCurrentNavIndex = e.item.navIndex
            nav_list_view.value?.scrollToSelected(e.item.navIndex, true)
          }
          context.emit('item-focused', e);
        }
      }, 300)
    }
    let fItemFocusedTimer: any = -1
    let fItemSelectedTimer: any = -1
    const onFItemFocused = (e) => {
      if(e.position == '0') content_list_view.value?.setItemSelected(1, true)
      clearTimeout(fItemFocusedTimer)
      clearTimeout(fItemSelectedTimer)
      if (e.hasFocus) {
        if (recordCurrentNavIndex != e.position) {
          descendantFocusability.value = 2
          recordCurrentNavIndex = e.position
          if (recordList[e.item.startIndex].isNeedFocus) {
            content_list_view.value?.scrollToIndex(-1, e.item.startIndex, false, -1, props.yOffest)
            fItemSelectedTimer = setTimeout(() => {
              content_list_view.value?.setItemSelected(e.item.startIndex, true)
              fItemFocusedTimer = setTimeout(() => {
                descendantFocusability.value = 1
              }, 200)
            }, 400)
          } else {
            content_list_view.value?.scrollToIndex(-1, e.item.startIndex + 1, false, -1, props.yOffest)
            fItemSelectedTimer = setTimeout(() => {
              content_list_view.value?.setItemSelected(e.item.startIndex + 1, true)
              fItemFocusedTimer = setTimeout(() => {
                descendantFocusability.value = 1
              }, 200)
            }, 400)
          }
        }
      }
    }
    const scrollToIndex = (index: number, anim: boolean = true, offset: number = 802) => {
      content_list_view.value?.scrollToIndex(-1, index, anim, -1,  offset)
    }
    const scrollToFocused = (index: number) => {
      descendantFocusability.value = 1
      setTimeout(() => {
        content_list_view.value?.scrollToFocused(index)
      }, 300)
    }
    const setItemFocused = (index: number) => {
      setTimeout(() => {
        descendantFocusability.value = 1
      }, 300)
      content_list_view.value?.setItemFocused(index)
    }
    const scrollToSelected = (index: number, b: boolean = true) => {
      content_list_view.value?.scrollToSelected(index, b)
    }
    const setItemSelected = (index: number, b: boolean = true) => {
      content_list_view.value?.setItemSelected(index, true)
    }
    const updateItem = (position: number, data: QTClassifiedListViewItem) => {
      recordList[position] = data
      recordList.forEach((el, index) => {

        for (let i = 0; i < navList.length; i++) {
          const item = navList[i];
          if (el.categoryname == item.categoryname) {
            el.navIndex = i
          }
        }
      });
      content_list_view.value?.updateItemTraverse(position, recordList[position])
    }
    const onSItemClick = (e) => {
      context.emit('item-click', e);
    }
    const onFItemClick = (e) => {
      context.emit('item-click', e);
    }
    const onItemBind = () => {
    }
    return {
      descendantFocusability,
      content_list_view,
      nav_list_view,
      init,
      onItemBind,
      onSItemClick,
      onFItemClick,
      scrollToIndex,
      scrollToFocused,
      setItemFocused,
      scrollToSelected,
      setItemSelected,
      onSItemFocused,
      onFItemFocused,
      updateItem,
      viewRef,
      ...useBaseView(viewRef)
    }
  },
});

</script>

<style>
.content_list_view {
  width: 1920px;
  height: 210px;
  background-color: transparent;
}

.clv_item {
  width: 316px;
  height: 178px;
  background-color: transparent;
  border-radius: 8px;
}

.coverV {
  width: 316px;
  height: 178px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.titMask {
  position: absolute;
  width: 316px;
  height: 60px;
  top: 118px;
  left: 0;
  background-color: transparent;
}

.clv_item_text_box {
  width: 316px;
  height: 60px;
  background-color: transparent;
  position: absolute;
  left: 0;
  top: 118px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.playMark {
  width: 45px;
  height: 30px;
  background-color: transparent;
  position: absolute;
  top: 21px;
}

.selectedIcon {
  width: 45px;
  height: 30px;
  background-color: transparent;
  position: absolute;
  top: 15px;
}

.selectedIcon img {
  width: 28px;
  height: 30px;
  margin-left: 12px;
}

.clv_item_text {
  width: 265px;
  height: 60px;
  position: absolute;
  left: 45px;
  color: #fff;
  background-color: transparent;
}

.clv_item_text_box1 {
  width: 316px;
  height: 60px;
  background-color: transparent;
  position: absolute;
  left: 0;
  top: 118px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.clv_item_selected_text {
  width: 316px;
  height: 60px;
  background-color: transparent;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  color: #fff;
}


.nav_list_view {
  width: 1920px;
  height: 80px;
  background-color: transparent;
}

.nav_item {
  width: 168px;
  height: 80px;
  background-color: transparent;
  border-radius: 40px;
}

.nav_item_text_focused {
  width: 168px;
  height: 80px;
  position: absolute;
  background-color: transparent;
  border-radius: 40px;
}

.nav_item_text {
  width: 168px;
  height: 80px;
  position: absolute;
  border-radius: 40px;
  background-color: transparent;
}

.text {
  width: 168px;
  height: 80px;
  color: #fff;
  position: absolute;
}

.text_selected {
  width: 168px;
  height: 80px;
  color: #0D71FF;
  position: absolute;
}

.line {
  background-color: #0D71FF;
  width: 34px;
  height: 6px;
  position: absolute;
  left: 67px;
  top: 74px;
}
</style>
