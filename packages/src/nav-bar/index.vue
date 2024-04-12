<template>
  <qt-list-view v-if="horizontal"
                ref="navList"
                :clipChildren="false"
                :clipPadding="false"
                :horizontalFadingEdgeEnabled="horizontalFadingEdgeEnabled"
                :fadingEdgeLength="fadingEdgeLength"
                horizontal
                :class="tabNavBarClass"
                @item-click="onTabClick"
                @item-focused="onTabChange">
    <div class="qt-ui-nav-bar-item-css"
         :type="20000"
         autoWidth
         :focusable="true"
         eventFocus
         flexStyle="${style}"
         :clipChildren="false"
         :style="{focusBackgroundColor:focusColor}"
         :stateTextColor="textColor"
         :sateBackgroundPadding="bgPadding">
      <text-view autoWidth
                 gravity="center"
                 :lines="1"
                 :fontSize="44"
                 class="qt-ui-nav-bar-item-text-css"
                 :duplicateParentState="true"
                 text="${text}"/>
    </div>
    <slot/>
  </qt-list-view>
  <qt-list-view v-else
                ref="navList"
                :clipChildren="false"
                :clipPadding="false"
                :class="tabNavBarClass"
                :verticalFadingEdgeEnabled="verticalFadingEdgeEnabled"
                :fadingEdgeLength="fadingEdgeLength"
                @item-click="onTabClick"
                @item-focused="onTabChange">
    <div class="qt-ui-nav-bar-item-css"
         :type="20000"
         flexStyle="${style}"
         eventFocus
         autoWidth
         :focusable="true"
         :stateTextColor="textColor"
         :style="{focusBackgroundColor:focusColor}"
         :sateBackgroundPadding="bgPadding"
         :clipChildren="false">
      <text-view autoWidth
                 gravity="center"
                 :lines="1"
                 :fontSize="44"
                 class="qt-ui-nav-bar-item-text-css"
                 :duplicateParentState="true"
                 text="${text}"/>
    </div>
    <slot/>
  </qt-list-view>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, watch} from "vue";
import {QTIListView} from "../list-view/core/QTIListView";
import {QTNavBarItem} from "./QTNavBarItem";
import {QTNavBar} from "./QTNavBar";
import useBaseView from "../base/useBaseView";

export default defineComponent({
  name: "qt-nav-bar",
  props: {
    textKey: {
      type: String,
      default: 'text'
    },
    itemGap: {
      type: Number,
      default: 0
    },
    horizontal: {
      type: Boolean,
      default: true
    },
    initSelect: {
      type: Number,
      default: 0
    },
    size: {
      type: String,
      default: 'medium'
    },
    navs: {
      type: Array,
      default: () => []
    },
    tabNavBarClass: {
      type: String,
      default: ''
    },
    horizontalFadingEdgeEnabled:{
      type: Boolean,
      default: false
    },
    verticalFadingEdgeEnabled:{
      type: Boolean,
      default: false
    },
    fadingEdgeLength:{
      type:Number,
      default:0
    }
  },
  setup(props, context) {
    const navList = ref<QTIListView>()
    let focusColor = ref('#f5f5f5')
    let textColor = reactive({
      normal: '#80ffffff',
      focused: '#000000',
      selected: '#F5F5F5'
    })
    let bgPadding = [10, 10]

    let selectTimer: any = -1
    let initSelectTimer: any = -1

    watch(() => props.navs, (newVal: Array<any>) => {
      if (newVal.length > 0) {
        initNavBarItem(newVal)
      }
    });

    const scrollToPosition = (index) => {
      navList.value?.scrollToPosition(index)
    }
    const scrollToTop = () => {
      navList.value?.scrollToTop()
    }

    const init = (navBar: QTNavBar): void => {
      initNavBarItem(navBar.data)
    }

    const initNavBarItem = (list: Array<QTNavBarItem>) => {
      if (!list) list = []
      list.forEach((item, index) => {
        if (props.itemGap !== 0) {
          if (props.horizontal) {
            item.decoration = {
              right: props.itemGap
            }
          } else {
            item.decoration = {
              bottom: props.itemGap
            }
          }
        }
        if (!item.type) {
          item.type = 20000
        }
      })
      navList.value?.setListData(list)
      clearTimeout(initSelectTimer)
      let initIndex = props.initSelect
      if (initIndex > -1) {
        navList.value?.scrollToPosition(initIndex)
        initSelectTimer = setTimeout(() => {
          navList.value?.setItemSelected(initIndex, true)
          onTabSelect(initIndex)
        }, 300)
      }
    }
    const onTabClick = (e) => {
      context.emit('tab-click', e.item)
    }
    const onTabChange = (e) => {
      if (e.hasFocus === true) {
        context.emit('tab-focus', e)
        onTabSelect(e.position)
      }
    }
    const onTabSelect = (index) => {
      clearTimeout(selectTimer)
      selectTimer = setTimeout(() => {
        context.emit('tab-select', {position: index})
      }, 300)
    }
    return {
      navList,
      focusColor,
      textColor,
      bgPadding,
      onTabChange,
      onTabClick,
      scrollToPosition,
      scrollToTop,
      init,
      ...useBaseView(navList)
    }
  },
});
</script>
<style>
.qt-ui-nav-bar-root-horizontal {
  height: 72px;
  background-color: transparent;
}

.qt-ui-nav-bar-root-vertical {
  background-color: transparent;
}

.qt-ui-nav-bar-item-css {
  padding-left: 40px;
  padding-right: 40px;
  height: 70px;
  justify-content: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  border-radius: 35px;
  background-color: transparent;
}

.qt-ui-nav-bar-item-text-css {
  height: 60px;
  color: rgba(255, 255, 255, 0.5);
  focus-color: black;
  background-color: transparent;
  select-color: white;
  align-self: center;
}

</style>

