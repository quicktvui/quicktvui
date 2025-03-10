<template>
  <div
    ref="viewRef"
    :focusScale="focusScale"
    :style="{ width: styleWidth, height: styleHeight }"
    :focusable="true"
    :clipChildren="false"
    :enableFocusBorder="true"
    name="poster"
    class="qt-ui-poster-item-root-css"
  >
    <!--封面-->
    <img
      class="qt-ui-media-item-img-css"
      :duplicateParentState="true"
      :postDelay="300"
      enableFade
      :focusable="false"
      :enableFocusBorder="focusBorder"
      :style="{
        width: imageStyleWidth,
        height: imageStyleHeight,
        borderRadius: `${borderRadius}px`,
      }"
      :src="imageSrc"
    />

    <!-- 评分 -->
    <qt-text
      class="qt-ui-poster-score-css"
      :duplicateParentState="true"
      :focusable="false"
      :style="{ width: scoreStyleWidth, height: scoreStyleHeight }"
      :textSize="scoreStyleFontSize"
      :ellipsizeMode="2"
      :lines="1"
      gravity="center"
      :postDelay="350"
      autoWidth
      :gradientBackground="scoreBackground"
      :text="scoreText"
    />

    <!--   焦点选中时的标题 -->
    <qt-media-focus-title
      :focusable="false"
      :border-radius="borderRadius"
      showOnState="focused"
      :titleFocusStyleWidth="titleFocusStyleWidth"
      :titleFocusStyleHeight="titleFocusStyleHeight"
      :titleFocusStyleMarginTop="titleFocusStyleMarginTop"
      :floatTitleBackground="floatTitleBackground"
      :floatTitleWidth="floatTitleWidth"
      :floatTitleText="floatTitleText"
      :floatTitleEnable="floatTitleEnable"
      :focusTitleEnable="focusTitleEnable"
      :focusTitleStyleWidth="focusTitleStyleWidth"
      :focusTitleStyleHeight="focusTitleStyleHeight"
      :focusTitleText="focusTitleText"
      :subTitleStyleWidth="subTitleStyleWidth"
      :subTitleStyleHeight="subTitleStyleHeight"
      :subTitleText="subTitleText"
      :bgColor="focusBgColor"
      :titleColor="focusTitleColor"
      :subTitleColor="focusSubTitleColor"
    />

    <!--  $titleStyleMarginTop  -->
    <div
      style="flex-direction: column; background-color: transparent; z-index: 999"
      :duplicateParentState="true"
      :focusable="false"
      :style="{ width: titleStyleWidth, height: titleStyleHeight, marginTop: titleStyleMarginTop }"
      :showOnState="mainTextShowOnState"
    >
      <!--  浮动标题 -->
      <!--  $floatTitleEnable floatTitleBgColor borderRadius -->
      <div
        class="qt-ui-poster-title-css"
        :gradientBackground="{
          colors: floatTitleBgColor,
          cornerRadii4: [0, 0, borderRadius, borderRadius],
          orientation: 4,
        }"
        :duplicateParentState="true"
        :focusable="false"
        :style="{ width: floatTitleStyleWidth, height: floatTitleStyleHeight }"
        v-if="floatTitleEnable"
      >
        <!--  $ -->
        <qt-text
          :duplicateParentState="true"
          :focusable="false"
          :textSize="26"
          :ellipsizeMode="2"
          enablePostTask
          :postDelay="200"
          :lines="1"
          gravity="left"
          :style="{ width: floatTitleStyleWidth, height: floatTitleStyleHeight, zIndex: 999 }"
          :text="floatTitleText"
        />
      </div>

      <!--  $titleBackground 主标题-->
      <qt-text
        :duplicateParentState="true"
        :focusable="false"
        :textSize="30"
        :ellipsizeMode="2"
        :lines="1"
        :postDelay="200"
        gravity="left"
        :paddingRect="[16, 8, 0, 0]"
        :gradientBackground="titleBackground"
        :style="{ width: titleStyleWidth, height: titleStyleHeight, zIndex: 999 }"
        :text="titleText"
        v-if="titleEnable"
      />
    </div>

    <!-- 水波纹 -->
    <div
      :style="{ width: rippleStyleWidth, height: rippleStyleHeight }"
      class="qt-ui-media-ripple-view-root-css"
      showOnState="focused"
      :focusable="false"
      :clipChildren="false"
    >
      <ripple-view
        class="qt-ui-ripple-view-css"
        :delayLoad="800"
        :focusable="false"
        :duplicateParentState="true"
        :color="rippleColor"
        :isShowRipple="rippleEnable"
        rippleVisible="invisible"
      />

      <img
        :src="rippleSrc"
        class="qt-ui-ripple-img-css"
        :focusable="false"
        :duplicateParentState="true"
        v-if="rippleEnable"
        :delayLoad="800"
      />
    </div>

    <!-- $cornerEnable cornerBackground -->
    <qt-media-corner-title
      v-if="cornerEnable"
      :cornerBackground="cornerBackground"
      :cornerText="cornerText"
      :cornerEnable="cornerEnable"
      :cornerEnableImg="cornerEnableImg"
      :cornerSrc="cornerSrc"
      :focusable="false"
      :style="{ width: cornerStyleWidth, height: cornerStyleHeight }"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import QTMediaFocusTitle from './qt-media-focus-title.vue'
import QTMediaCornerTitle from './qt-media-corner-title.vue'

import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'

/**
 * 注意：
 * style上的属性，不支持变量进行变更
 * 1、styleWidth, styleHeight
 * 2、imageStyleWidth、imageStyleHeight
 *
 *
 *
 */
export default defineComponent({
  name: 'qt-ul-item-media',
  emits: [],
  components: {
    'qt-media-corner-title': QTMediaCornerTitle,
    'qt-media-focus-title': QTMediaFocusTitle,
  },
  props: {
    requestFirstFocus: {
      type: Boolean,
      default: false,
    },
    loadDelay: {
      type: Number,
      default: 500,
    },
    templateKeyMap: {
      type: Object,
      default: () => null,
    },
    borderRadius: {
      type: Number,
      default: 8,
    },
    rippleColor: {
      type: String,
      default: '#FF4E46',
    },
    focusBgColor: {
      type: Object,
      required: false,
    },
    focusTitleColor: {
      type: String,
      required: false,
    },
    focusSubTitleColor: {
      type: String,
      required: false,
    },
    floatTitleBgColor: {
      type: Array,
      default: () => {
        return ['#e5000000', '#00000000']
      },
    },
    //---------------------------------------------------
    styleWidth: {
      type: Number,
      default: 260,
    },
    styleHeight: {
      type: Number,
      default: 400,
    },
    focusBorder: {
      type: String,
    },
    focusScale: {
      type: String,
    },
    //---------------------------------------------
    imageStyleWidth: {
      type: Number,
      default: 260,
    },
    imageStyleHeight: {
      type: Number,
      default: 320,
    },
    imageSrc: {
      type: String,
    },
    //---------------------------------------------
    scoreStyleWidth: {
      type: Number,
      default: 50,
    },
    scoreStyleHeight: {
      type: Number,
      default: 40,
    },
    scoreStyleFontSize: {
      type: String,
      default: 30,
    },
    scoreBackground: {
      type: Object,
    },
    scoreText: {
      type: String,
    },
    //---------------------------------------------
    titleStyleWidth: {
      type: Number,
      default: 260,
    },
    titleStyleHeight: {
      type: Number,
      default: 60,
    },
    titleStyleMarginTop: {
      type: Number,
    },
    titleBackground: {
      type: Object,
    },
    titleText: {
      type: String,
    },
    titleEnable: {
      type: Boolean,
      default: true,
    },
    titleFocusStyleWidth: {
      type: Number,
    },
    titleFocusStyleHeight: {
      type: Number,
    },
    titleFocusStyleMarginTop: {
      type: Number,
    },
    //---------------------------------------------
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
    //---------------------------------------------
    subTitleText: {
      type: String,
    },
    subTitleStyleWidth: {
      type: Number,
    },
    subTitleStyleHeight: {
      type: Number,
    },
    //---------------------------------------------
    floatTitleStyleWidth: {
      type: Number,
      default: 260,
    },
    floatTitleStyleHeight: {
      type: Number,
      default: 64,
    },
    floatTitleEnable: {
      type: Boolean,
      default: true,
    },
    floatTitleText: {
      type: String,
    },
    floatTitleBackground: {
      type: Object,
    },
    floatTitleWidth: {
      type: Number,
    },
    //---------------------------------------------
    rippleStyleWidth: {
      type: Number,
      default: 100,
    },
    rippleStyleHeight: {
      type: Number,
      default: 100,
    },
    rippleEnable: {
      type: Boolean,
      default: true,
    },
    rippleSrc: {
      type: String,
    },
    //---------------------------------------------
    cornerEnable: {
      type: Boolean,
      default: true,
    },
    cornerStyleWidth: {
      type: Number,
      default: 100,
    },
    cornerStyleHeight: {
      type: Number,
      default: 30,
    },
    cornerBackground: {
      type: Object,
    },
    cornerText: {
      type: String,
    },
    cornerEnableImg: {
      type: Boolean,
    },
    cornerSrc: {
      type: String,
    },
  },
  setup(props, context) {
    let mainTextShowOnState = ['normal', 'selected']
    const viewRef = ref()

    return {
      mainTextShowOnState,
      viewRef,
    }
  },
})
</script>

<style scoped>
.qt-ui-poster-item-root-css {
  background-color: transparent;
  display: flex;
  width: 260px;
  height: 400px;
}

.qt-ui-media-item-img-css {
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;
  position: absolute;
}

.qt-ui-poster-score-css {
  z-index: 2;
  position: absolute;
  color: #fc5e1b;
  background-color: transparent;
}

.qt-ui-poster-title-css {
  padding-left: 16px;
  padding-top: 15px;
  background-color: transparent;
}

.qt-ui-ripple-img-css {
  width: 60px;
  height: 60px;
  background-color: transparent;
  position: absolute;
  z-index: 1001;
  right: 20px;
  bottom: 20px;
}

.qt-ui-ripple-view-css {
  width: 100px;
  height: 100px;
  z-index: 1000;
  background-color: transparent;
  position: absolute;
}

.qt-ui-media-ripple-view-root-css {
  width: 100px;
  height: 100px;
  right: 0;
  bottom: 0;
  margin-right: -12px;
  z-index: 1000;
  background-color: transparent;
  position: absolute;
}
</style>
