<template>
  <div ref="viewRef"
       :focusScale="focus.scale"
       :style="{width: style.width, height: style.height}"
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
         :enableFocusBorder="focus.border"
         :style="{width: image.style.width, height: image.style.height, borderRadius: `${borderRadius}px`}"
         :src="image.src"/>

    <!-- 评分 -->
    <qt-text
        class="qt-ui-poster-score-css"
        :duplicateParentState="true"
        :focusable="false"
        :style="{width: score.style.width, height: score.style.height}"
        :textSize="score.style.fontSize"
        :ellipsizeMode="2"
        :lines="1"
        gravity="left"
        :postDelay="350"
        autoWidth
        :text="score.text"/>

    <!--   焦点选中时的标题 -->
    <qt-poster-focus-title
        :focusable="false"
        :border-radius="borderRadius"
        :floatTitle="floatTitle"
        :focusTitle="focusTitle"
        :subTitle="subTitle"
        showOnState="focused"
        :bgColor="focusBgColor"
        :titleColor="focusTitleColor"
        :subTitleColor="focusSubTitleColor"
        :titleFocusStyle="titleFocusStyle"
    />

    <div style="flex-direction: column; background-color: transparent;z-index: 999;"
         :duplicateParentState="true"
         :focusable="false"
         :style="{width: titleStyle.width, height: titleStyle.height, marginTop : titleStyle.marginTop}"
         :showOnState=mainTextShowOnState>
      <!--  浮动标题 -->
      <div class="qt-ui-poster-title-css"
           :gradientBackground="{colors:floatTitleBgColor, cornerRadii4: [0, 0, borderRadius, borderRadius],orientation:4}"
           :duplicateParentState="true"
           :focusable="false"
           :style="{width: floatTitle.style.width, height: floatTitle.style.height}"
           v-if="floatTitle.enable">
        <qt-text
            :duplicateParentState="true"
            :focusable="false"
            :textSize="26"
            :ellipsizeMode="2"
            enablePostTask
            :postDelay="200"
            :lines="1"
            gravity="left"
            :style="{width: floatTitle.style.width, height: floatTitle.style.height, zIndex: 999}"
            :text="floatTitle.text"/>
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
          :gradientBackground="title.background"
          :style="{width: title.style.width, height: title.style.height, zIndex: 999}"
          :text="title.text"
          v-if="title.enable"/>
    </div>

    <!-- 水波纹 -->
    <div
        :style="{width: ripple.style.width, height: ripple.style.height}"
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
          :isShowRipple="ripple.enable"
          rippleVisible="invisible"/>

      <img :src="ripple.src"
           class="qt-ui-ripple-img-css"
           :focusable="false"
           :duplicateParentState="true"
           v-if="ripple.enable"
           :delayLoad="800"/>
    </div>

    <qt-poster-corner-title
        v-if="corner.enable"
        :corner="corner"
        :focusable="false"
        :style="{width: corner.style.width, height: corner.style.height}"
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
    },
    style: {
      type: Object
    },
    focus: {
      type: Object,
      default: () => {
      }
    },
    image: {
      type: Object
    },
    shadow: {
      type: Object,
      default: () => {
      }
    },
    shimmer: {
      type: Object,
      default: () => {
      }
    },
    title: {
      type: Object,
      default: () => {
      }
    },
    focusTitle: {
      type: Object,
      default: () => {
      }
    },
    subTitle: {
      type: Object,
      default: () => {
      }
    },
    floatTitle: {
      type: Object,
      default: () => {
      }
    },
    ripple: {
      type: Object,
      default: () => {
      }
    },
    corner: {
      type: Object,
      default: () => {
      }
    },
    score: {
      type: Object,
      default: () => {
      }
    },
    titleStyle: {
      type: Object,
      default: () => {
      }
    },
    titleFocusStyle: {
      type: Object,
      default: () => {
      }
    },
    placeholderImg: {
      type: Object,
      default: () => {
      }
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
