<template>
  <div
      ref="viewRef"
      focusScale="${focus.scale}"
      :focusable="true"
      eventClick
      eventFocus
      name="poster"
      class="qt-ui-poster-root-css"
      itemShowShimmer="${shimmer.enable}"
      hideShadow="${shadow.enable}"
      shimmerSize="${size}">
    <!--封面-->
    <img
        class="qt-ui-poster-img-css"
        :duplicateParentState="true"
        :postDelay="300"
        enableFade
        :focusable="false"
        enableFocusBorder="${focus.border}"
        flexStyle="${image.style}"
        :style="{borderRadius: `${borderRadius}px`}"
        src="${image.src}"/>

    <text-view
        class="qt-ui-poster-score-css"
        :duplicateParentState="true"
        :focusable="false"
        flexStyle="${score.style}"
        textSize="${score.style.fontSize}"
        :ellipsizeMode="2"
        :lines="1"
        gravity="center"
        :postDelay="350"
        autoWidth
        text="${score.text}"/>

    <!--   焦点选中时的标题 -->
    <qt-poster-focus-title
        :focusable="false"
        :border-radius="borderRadius"
        showOnState="focused"
        :bgColor="focusBgColor"
        :titleColor="focusTitleColor"
        :subTitleColor="focusSubTitleColor"
    />

    <div style="flex-direction: column;background-color: transparent;z-index: 999;"
         :duplicateParentState="true"
         :focusable="false"
         flexStyle="${titleStyle}"
         :showOnState=mainTextShowOnState>
      <!--  浮动标题 -->
      <div flexStyle="${floatTitle.style}"
           class="qt-ui-poster-title-css"
           :gradientBackground="{colors:floatTitleBgColor, cornerRadii4: [0, 0, borderRadius, borderRadius],orientation:4}"
           :duplicateParentState="true"
           :focusable="false"
           showIf="${floatTitle.enable}">
        <text-view
            :duplicateParentState="true"
            :focusable="false"
            :textSize="26"
            :ellipsizeMode="2"
            enablePostTask
            :postDelay="200"
            :lines="1"
            gravity="left"
            style="z-index: 999;height: 50px;"
            flexStyle="${floatTitle.style}"
            text="${floatTitle.text}"/>
      </div>

      <!--  主标题-->
      <text-view
          :duplicateParentState="true"
          :focusable="false"
          :textSize="30"
          :ellipsizeMode="2"
          :lines="1"
          :postDelay="200"
          gravity="left"
          :paddingRect="[16,8,0,0]"
          gradientBackground="${title.background}"
          style="z-index: 999;height: 60px"
          flexStyle="${title.style}"
          text="${title.text}"
          showIf="${title.enable}"/>
    </div>
    <div
        flexStyle="${ripple.style}"
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
          isShowRipple="${ripple.enable}"
          rippleVisible="invisible"/>

      <img src="${ripple.src}"
           class="qt-ui-ripple-img-css"
           :focusable="false"
           :duplicateParentState="true"
           showIf="${ripple.enable==true}"
           :delayLoad="800"/>
    </div>

    <qt-poster-corner-title
        showIf="${corner.showCornerRight==true}"
        :focusable="false"
        flexStyle="${corner.style}"
    />
    <qt-poster-corner-title
        showIf="${corner.showCornerLeft==true}"
        :focusable="false"
        flexStyle="${corner.style}" mode="left"
    />
    <slot/>
  </div>
</template>

<script lang="ts">

import QTPosterFocusTitle from "./qt-poster-focus-title.vue";
import QTPosterCornerTitle from "./qt-poster-corner-title.vue";

import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";

export default defineComponent({
  name: "qt-ul-item-poster",
  emits: [],
  components: {
    'qt-poster-corner-title': QTPosterCornerTitle,
    'qt-poster-focus-title': QTPosterFocusTitle,
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
    }
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

<style>
.qt-ui-poster-root-css {
  position: absolute;
  background-color: transparent;
  overflow: hidden;
}

.qt-ui-poster-img-css {
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
