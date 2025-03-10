<template>
  <div
    ref="viewRef"
    :focusScale="focus.scale"
    :style="{ width: rootStyle.width, height: rootStyle.height }"
    :focusable="true"
    :clipChildren="false"
    :enableFocusBorder="true"
    name="poster"
    class="qt-ui-poster-item-root-css"
  >
    <!--封面-->
    <img
      class="qt-ui-poster-item-img-css"
      :duplicateParentState="true"
      :postDelay="300"
      enableFade
      :focusable="false"
      :enableFocusBorder="focus.border"
      :style="{
        width: image.style.width,
        height: image.style.height,
        borderRadius: `${borderRadius}px`,
      }"
      :src="image.src"
    />

    <!-- 评分 -->
    <qt-text
      class="qt-ui-poster-score-css"
      :duplicateParentState="true"
      :focusable="false"
      :style="{ width: score.style.width, height: score.style.height }"
      :textSize="score.style.fontSize"
      :ellipsizeMode="2"
      :lines="1"
      gravity="center"
      :postDelay="350"
      autoWidth
      :gradientBackground="score.background"
      :text="score.text"
    />

    <!--   焦点选中时的标题 -->
    <qt-delay-focus-title
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

    <div
      style="flex-direction: column; background-color: transparent; z-index: 999"
      :duplicateParentState="true"
      :focusable="false"
      :style="{
        width: titleStyle.width,
        height: titleStyle.height,
        marginTop: titleStyle.marginTop,
      }"
      :showOnState="mainTextShowOnState"
    >
      <!--  浮动标题 -->
      <div
        class="qt-ui-poster-title-css"
        :gradientBackground="{
          colors: floatTitleBgColor,
          cornerRadii4: [0, 0, borderRadius, borderRadius],
          orientation: 4,
        }"
        :duplicateParentState="true"
        :focusable="false"
        :style="{ width: floatTitle.style.width, height: floatTitle.style.height }"
        v-if="floatTitle.enable"
      >
        <qt-text
          :duplicateParentState="true"
          :focusable="false"
          :textSize="26"
          :ellipsizeMode="2"
          enablePostTask
          :postDelay="200"
          :lines="1"
          gravity="left"
          :style="{ width: floatTitle.style.width, height: floatTitle.style.height, zIndex: 999 }"
          :text="floatTitle.text"
        />
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
        :paddingRect="[16, 8, 0, 0]"
        :gradientBackground="title.background"
        :style="{ width: title.style.width, height: title.style.height, zIndex: 999 }"
        :text="title.text"
        v-if="title.enable"
      />
    </div>

    <!-- 水波纹 -->
    <div
      :style="{ width: ripple.style.width, height: ripple.style.height }"
      class="qt-ui-poster-ripple-view-root-css"
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
        :isShowRipple="ripple.enable"
        rippleVisible="invisible"
      />

      <img
        :src="ripple.src"
        class="qt-ui-ripple-img-css"
        :focusable="false"
        :duplicateParentState="true"
        v-if="ripple.enable"
        :delayLoad="800"
      />
    </div>

    <qt-delay-corner-title
      v-if="corner.enable"
      :corner="corner"
      :focusable="false"
      :style="{ width: corner.style.width, height: corner.style.height }"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import QTDelayFocusTitle from './qt-delay-focus-title.vue'
import QTDelayCornerTitle from './qt-delay-corner-title.vue'

import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { buildRandomImage } from '../../__mocks__/image'
import { getRandomFloat } from '../../__mocks__/random'
import { buildRandomColor } from '../../__mocks__/colors'

export default defineComponent({
  name: 'qt-ul-item-delay',
  emits: [],
  components: {
    'qt-delay-corner-title': QTDelayCornerTitle,
    'qt-delay-focus-title': QTDelayFocusTitle,
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
    rootStyle: {
      type: Object,
      default: () => ({
        width: 260,
        height: 400,
      }),
    },
    focus: {
      type: Object,
      default: () => ({
        enable: true,
        scale: 1,
        border: false,
      }),
    },
    image: {
      type: Object,
      default: () => ({
        src: buildRandomImage(),
        enable: true,
        style: {
          width: 260,
          height: 320,
        },
      }),
    },
    shadow: {
      type: Object,
      default: () => ({}),
    },
    shimmer: {
      type: Object,
      default: () => ({
        enable: true,
      }),
    },
    title: {
      type: Object,
      default: () => ({
        text: '主标题',
        enable: true,
        style: {
          width: 260,
          height: 60,
        },
      }),
    },
    focusTitle: {
      type: Object,
      default: () => ({
        text: '浮动标题',
        enable: true,
        style: {
          width: 260,
          height: 64,
        },
        background: { colors: ['#e5000000', '#00000000'], orientation: 4 },
      }),
    },
    subTitle: {
      type: Object,
      default: () => ({
        text: '副标题',
        enable: true,
        style: {
          width: 260,
        },
      }),
    },
    floatTitle: {
      type: Object,
      default: () => ({
        text: '浮动标题',
        enable: true,
        style: {
          width: 260,
          height: 64,
        },
        background: { colors: ['#e5000000', '#00000000'], orientation: 4 },
      }),
    },
    ripple: {
      type: Object,
      default: () => ({
        enable: true,
        style: {
          right: 0,
          bottom: 0,
          marginRight: -12,
        },
      }),
    },
    corner: {
      type: Object,
      default: () => ({
        text: '角标',
        enable: true,
        style: {
          width: 100,
          height: 30,
        },
        background: {
          colors: ['#FE3824', '#F0051E'],
          cornerRadii4: [0, 8, 0, 8],
          orientation: 2,
        },
      }),
    },
    score: {
      type: Object,
      default: () => ({
        text: getRandomFloat() + '',
        enable: true,
        style: {
          width: 50,
          height: 40,
        },
        background: {
          colors: [buildRandomColor(), buildRandomColor()],
          cornerRadii4: [8, 8, 8, 8],
          orientation: 2,
        },
      }),
    },
    titleStyle: {
      type: Object,
      default: () => ({
        width: 260,
        height: 120,
        marginTop: 320 - 60,
      }),
    },
    titleFocusStyle: {
      type: Object,
      default: () => ({
        width: 260,
        marginTop: 320 - 50,
      }),
    },
    placeholderImg: {
      type: Object,
      default: () => ({}),
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
