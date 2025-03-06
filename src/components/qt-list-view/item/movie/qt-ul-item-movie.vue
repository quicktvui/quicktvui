<template>
  <div ref="viewRef"
       :focusScale="item.focus.scale"
       :style="{width: item.style.width, height: item.style.height}"
       :focusable="true"
       :clipChildren="false"
       :enableFocusBorder="true"
       name="poster"
       class="qt-ui-poster-item-root-css">

    <!--封面-->
    <img class="qt-ui-poster-item-img-css"
         :duplicateParentState="true"
         :postDelay="300"
         enableFade
         :focusable="false"
         :enableFocusBorder="item.focus.border"
         :style="{width: item.image.style.width, height: item.image.style.height, borderRadius: `${borderRadius}px`}"
         :src="item.image.src"/>

    <!-- 评分 -->
    <qt-text
        class="qt-ui-poster-score-css"
        :duplicateParentState="true"
        :focusable="false"
        :style="{width: item.score.style.width, height: item.score.style.height}"
        :textSize="item.score.style.fontSize"
        :ellipsizeMode="2"
        :lines="1"
        gravity="center"
        :postDelay="350"
        autoWidth
        :gradientBackground="item.score.background"
        :text="item.score.text"/>

    <!--   焦点选中时的标题 -->
    <qt-movie-focus-title
        :focusable="false"
        :border-radius="borderRadius"
        :floatTitle="item.floatTitle"
        :focusTitle="item.focusTitle"
        :subTitle="item.subTitle"
        showOnState="focused"
        :bgColor="focusBgColor"
        :titleColor="focusTitleColor"
        :subTitleColor="focusSubTitleColor"
        :titleFocusStyle="item.titleFocusStyle"
    />

    <div style="flex-direction: column; background-color: transparent;z-index: 999;"
         :duplicateParentState="true"
         :focusable="false"
         :style="{width: item.titleStyle.width, height: item.titleStyle.height, marginTop : item.titleStyle.marginTop}"
         :showOnState=mainTextShowOnState>
      <!--  浮动标题 -->
      <div class="qt-ui-poster-title-css"
           :gradientBackground="{colors:floatTitleBgColor, cornerRadii4: [0, 0, borderRadius, borderRadius],orientation:4}"
           :duplicateParentState="true"
           :focusable="false"
           :style="{width: item.floatTitle.style.width, height: item.floatTitle.style.height}"
           v-if="item.floatTitle.enable">
        <qt-text
            :duplicateParentState="true"
            :focusable="false"
            :textSize="26"
            :ellipsizeMode="2"
            enablePostTask
            :postDelay="200"
            :lines="1"
            gravity="left"
            :style="{width: item.floatTitle.style.width, height: item.floatTitle.style.height, zIndex: 999}"
            :text="item.floatTitle.text"/>
      </div>

      <!--  主标题-->
      <qt-text
          :duplicateParentState="true"
          :focusable="false"
          :textSize="30"
          :ellipsizeMode="2"
          :lines="1"
          :postDelay="200"
          gravity="left"
          :paddingRect="[16,8,0,0]"
          :gradientBackground="item.title.background"
          :style="{width: item.title.style.width, height: item.title.style.height, zIndex: 999}"
          :text="item.title.text"
          v-if="item.title.enable"/>
    </div>

    <!-- 水波纹 -->
    <div
        :style="{width: item.ripple.style.width, height: item.ripple.style.height}"
        class="qt-ui-poster-ripple-view-root-css"
        showOnState="focused"
        :focusable="false"
        :clipChildren="false">

      <ripple-view
          class="qt-ui-ripple-view-css"
          :delayLoad="800"
          :focusable="false"
          :duplicateParentState="true"
          :color="rippleColor"
          :isShowRipple="item.ripple.enable"
          rippleVisible="invisible"/>

      <img :src="item.ripple.src"
           class="qt-ui-ripple-img-css"
           :focusable="false"
           :duplicateParentState="true"
           v-if="item.ripple.enable"
           :delayLoad="800"/>
    </div>

    <qt-movie-corner-title
        v-if="item.corner.enable"
        :corner="item.corner"
        :focusable="false"
        :style="{width: item.corner.style.width, height: item.corner.style.height}"
    />
    <slot/>
  </div>
</template>

<script lang="ts">

import QTMovieFocusTitle from "./qt-movie-focus-title.vue";
import QTMovieCornerTitle from "./qt-movie-corner-title.vue";

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: "qt-ul-item-movie",
  emits: [],
  components: {
    'qt-movie-corner-title': QTMovieCornerTitle,
    'qt-movie-focus-title': QTMovieFocusTitle,
  },
  props: {
    requestFirstFocus: {
      type: Boolean,
      default: false
    },
    loadDelay: {
      type: Number,
      default: 500
    },
    templateKeyMap: {
      type: Object,
      default: () => null
    },
    borderRadius: {
      type: Number,
      default: 8
    },
    rippleColor: {
      type: String,
      default: "#FF4E46"
    },
    focusBgColor: {
      type: Object,
      required: false
    },
    focusTitleColor: {
      type: String,
      required: false
    },
    focusSubTitleColor: {
      type: String,
      required: false
    },
    floatTitleBgColor: {
      type: Array,
      default: () => {
        return ['#e5000000', '#00000000']
      }
    },
    item: {
      type: Object
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
});

</script>

<style scoped>
.qt-ui-poster-item-root-css {
  background-color: transparent;
  display: flex;
}

.qt-ui-poster-item-img-css {
  background-color: rgba(255, 255, 255, 0.1);
  z-index: 1;
  position: absolute;
  /* focus-border-color: white;
  focus-border-style: solid; */
}

.qt-ui-poster-score-css {
  z-index: 2;
  position: absolute;
  color: #FC5E1B;
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

.qt-ui-poster-ripple-view-root-css {
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
