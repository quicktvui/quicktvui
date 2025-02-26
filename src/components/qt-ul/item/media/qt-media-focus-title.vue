<template>
  <div class="qt-ui-poster-item-focus-title-css"
       :style="{width: titleFocusStyleWidth, height: titleFocusStyleHeight,
       marginTop: titleFocusStyleMarginTop}"
       autoHeight
       :focusable="false">
    <!-- 浮动标题-->
    <qt-text
        :duplicateParentState="true"
        :focusable="false"
        :fontSize="26"
        :ellipsizeMode="2"
        :lines="1"
        :paddingRect="[16,18,0,0]"
        :gradientBackground="floatTitleBackground"
        :style="{width: floatTitleWidth, height: '64px', color: '#ffffff'}"
        :text="floatTitleText"
        v-if="floatTitleEnable"
        gravity="left"
        :postDelay="250"/>
    <div class="absoluteFocusMainBgRoot"
         :style="{borderBottomLeftRadius: `${borderRadius}px`,borderBottomRightRadius:`${borderRadius}px`}"
         :duplicateParentState="true"
         :focusable="false"
         :gradientBackground="bgColor"
         v-if="focusTitleEnable">
      <!-- 主标题 -->
      <qt-text
          :duplicateParentState="true"
          :focusable="false"
          :fontSize="30"
          :ellipsizeMode="3"
          autoHeight
          :maxLines="1"
          gravity="left"
          :paddingRect="[16,8,12,8]"
          :style="{width: focusTitleStyleWidth, height: focusTitleStyleHeight,
          backgroundColor: 'transparent',color: `${titleColor}`}"
          :text="focusTitleText"/>
      <!-- 副标题 -->
      <qt-text
          :duplicateParentState="true"
          :focusable="false"
          :fontSize="24"
          :ellipsizeMode="2"
          :lines="1"
          autoHeight
          gravity="left|top"
          :paddingRect="[16,0,0,16]"
          :style="{
            width: subTitleStyleWidth, height: subTitleStyleHeight,
            color: `${subTitleColor}`,backgroundColor: 'transparent'}"
          :text="subTitleText"
          v-if="subTitleText"/>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "@vue/runtime-core";

export default defineComponent({
  name: 'qt-media-focus-title',
  props: {
    fontSize: {
      type: Number,
      default: 20
    },
    borderRadius: {
      type: Number,
      default: 8
    },
    bgColor: {
      type: Object,
      default() {
        return {colors: ['#ffffff', '#ffffff'], cornerRadii4: [0, 0, 8, 8]}
      }
    },
    titleColor: {
      type: String,
      default: '#000000'
    },
    subTitleColor: {
      type: String,
      default: 'rgba(0,0,0,.4)'
    },
    //------------------------------------------
    titleFocusStyleWidth: {
      type: Number,
    },
    titleFocusStyleHeight: {
      type: Number,
    },
    titleFocusStyleMarginTop: {
      type: Number,
    },
//------------------------------------------
    floatTitleBackground: {
      type: Object,
    },
    floatTitleWidth: {
      type: Number,
    },
    floatTitleText: {
      type: String,
    },
    floatTitleEnable: {
      type: Boolean,
    },
    //------------------------------------------
    focusTitleEnable: {
      type: Boolean,
    },
    focusTitleStyleWidth: {
      type: Number,
    },
    focusTitleStyleHeight: {
      type: Number,
    },
    focusTitleText: {
      type: String,
    },
    //------------------------------------------
    subTitleStyleWidth: {
      type: Number,
    },
    subTitleStyleHeight: {
      type: Number,
    },
    subTitleText: {
      type: String,
    },
  },
  setup(props, context) {
  },
});
</script>

<style scoped>
.qt-ui-poster-item-focus-title-css {
  z-index: 999;
  background-color: transparent;
  position: absolute;
}

.absoluteFocusMainBgRoot {
  background-color: transparent;
  margin-left: -1px;
  margin-right: -1px;
}
</style>
