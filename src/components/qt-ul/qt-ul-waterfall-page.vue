<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <qt-row class="qt-ul-control-button-class">

      <qt-button size="small"
                 class="text-button-class"
                 text="100个文本"
                 :requestFocus="true"
                 @click="onButtonTextClick"/>

      <qt-button size="small"
                 class="text-button-class"
                 text="100个Movie"
                 :requestFocus="true"
                 @click="onButtonNegativeClick"/>

      <qt-button size="small"
                 class="text-button-class"
                 text="100个Media"
                 :requestFocus="true"
                 @click="onButtonZeroClick"/>

      <qt-button size="small"
                 class="text-button-class"
                 text="100个海报"
                 :requestFocus="true"
                 @click="onButtonOneClick"/>

      <qt-button size="small"
                 class="text-button-class"
                 text="100个图片"
                 :requestFocus="true"
                 @click="onButtonImageClick"/>

      <qt-button size="small"
                 class="text-button-class"
                 text="50个长图"
                 @click="onButtonTwoClick"/>

      <qt-button size="small"
                 class="text-button-class"
                 text="20个中图"
                 @click="onButtonThreeClick"/>

      <qt-button size="small"
                 class="text-button-class"
                 text="100个混合"
                 @click="onButtonFourClick"/>

    </qt-row>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-ul-root-page">
      <qt-ul
          class="qt-ul-class" ref="ulRef" name="ul"
          :items="itemList"
          :spanCount="1920"
          :enablePlaceholder="false">
        <template #item="{item}">

          <qt-ul-item-text
              :text="item.text"
              :rootStyle="item.style"
              v-if="item.type == 3"
              :backgroundColor="item.backgroundColor"
              :focusable="true"
              :enableFocusBorder="true"/>

          <qt-ul-item-image
              :src="item.url"
              :backgroundColor="item.backgroundColor"
              v-if="item.type == 2"
              :focusable="true"
              :enableFocusBorder="true"/>

          <qt-ul-item-movie
              v-if="item.type == 11"
              :item="item"
          />

          <qt-ul-item-poster
              v-if="item.type == 5"
              :rootStyle="item.style"
              :focus="item.focus"
              :image="item.image"
              :shadow="item.shadow"
              :shimmer="item.shimmer"
              :title="item.title"
              :focusTitle="item.focusTitle"
              :subTitle="item.subTitle"
              :floatTitle="item.floatTitle"
              :ripple="item.ripple"
              :corner="item.corner"
              :score="item.score"
              :titleStyle="item.titleStyle"
              :titleFocusStyle="item.titleFocusStyle"
              :placeholderImg="item.placeholderImg"
          />

          <qt-ul-item-media
              v-if="item.type == 10"
              :styleWidth="item.styleWidth"
              :styleHeight="item.styleHeight"
              :focusBorder="item.focusBorder"
              :imageStyleWidth="item.imageStyleWidth"
              :imageStyleHeight="item.imageStyleHeight"
              :imageSrc="item.imageSrc"
              :scoreStyleWidth="item.scoreStyleWidth"
              :scoreStyleHeight="item.scoreStyleHeight"
              :scoreStyleFontSize="item.scoreStyleFontSize"
              :scoreBackground="item.scoreBackground"
              :scoreText="item.scoreText"
              :titleStyleWidth="item.titleStyleWidth"
              :titleStyleHeight="item.titleStyleHeight"
              :titleStyleMarginTop="item.titleStyleMarginTop"
              :titleBackground="item.titleBackground"
              :titleText="item.titleText"
              :titleEnable="item.titleEnable"
              :titleFocusStyleWidth="item.titleFocusStyleWidth"
              :titleFocusStyleHeight="item.titleFocusStyleHeight"
              :titleFocusStyleMarginTop="item.titleFocusStyleMarginTop"
              :focusScale="item.focusScale"
              :focusTitleEnable="item.focusTitleEnable"
              :focusTitleStyleWidth="item.focusTitleStyleWidth"
              :focusTitleStyleHeight="item.focusTitleStyleHeight"
              :focusTitleText="item.focusTitleText"
              :subTitleText="item.subTitleText"
              :subTitleStyleWidth="item.subTitleStyleWidth"
              :subTitleStyleHeight="item.subTitleStyleHeight"
              :floatTitleStyleWidth="item.floatTitleStyleWidth"
              :floatTitleStyleHeight="item.floatTitleStyleHeight"
              :floatTitleEnable="item.floatTitleEnable"
              :floatTitleText="item.floatTitleText"
              :floatTitleBackground="item.floatTitleBackground"
              :floatTitleWidth="item.floatTitleWidth"
              :rippleStyleWidth="item.rippleStyleWidth"
              :rippleStyleHeight="item.rippleStyleHeight"
              :rippleEnable="item.rippleEnable"
              :rippleSrc="item.rippleSrc"
              :cornerEnable="item.cornerEnable"
              :cornerStyleWidth="item.cornerStyleWidth"
              :cornerStyleHeight="item.cornerStyleHeight"
              :cornerBackground="item.cornerBackground"
              :cornerText="item.cornerText"
              :cornerEnableImg="item.cornerEnableImg"
              :cornerSrc="item.cornerSrc"
          />

          <qt-ul-item-long-image
              :src="item.url"
              v-if="item.type == 7"
          />

          <qt-ul-item-medium-image
              :src="item.url"
              v-if="item.type == 8"
          />
        </template>
      </qt-ul>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import qt_ul_item_text from './item/text/qt-ul-item-text.vue'
import qt_ul_item_image from "./item/image/qt-ul-item-image.vue";
import qt_ul_item_poster from "./item/poster/qt-ul-item-poster.vue";
import qt_ul_item_media from "./item/media/qt-ul-item-media.vue";
import qt_ul_item_movie from "./item/movie/qt-ul-item-movie.vue";
import qt_ul_item_long_image from "./item/image/qt-ul-item-long-image.vue";
import qt_ul_item_medium_image from "./item/image/qt-ul-item-medium-image.vue";

import {QTIUL, QTListViewItem} from "@quicktvui/quicktvui3";
import {useESRouter} from "@extscreen/es3-router";
import {useESToast} from "@extscreen/es3-core";
import {buildRandomPosterItemList} from "./__mocks__/poster";
import {
  buildRandomImageItemList,
  buildRandomLongImageItemList,
  buildRandomMediumImageItemList,
  buildRandomTextItemList
} from "./__mocks__/list";
import {buildRandomWaterfallItemList} from "./__mocks__/waterfall";
import {buildRandomMediaItemList} from "./__mocks__/media";
import {buildRandomMovieItemList} from "./__mocks__/movie";

export default defineComponent({
  name: '瀑布流',
  emits: [],
  components: {
    'qt-ul-item-text': qt_ul_item_text,
    'qt-ul-item-image': qt_ul_item_image,
    'qt-ul-item-poster': qt_ul_item_poster,
    'qt-ul-item-long-image': qt_ul_item_long_image,
    'qt-ul-item-medium-image': qt_ul_item_medium_image,
    'qt-ul-item-media': qt_ul_item_media,
    'qt-ul-item-movie': qt_ul_item_movie,
  },
  setup(props, context) {
    const ulRef = ref<QTIUL>()
    const itemList = ref<Array<QTListViewItem>>([])
    const router = useESRouter()
    const toast = useESToast()
    let isQuickBackPressed = false

    function onESCreate() {
    }

    function onButtonNegativeClick() {
      const list = buildRandomMovieItemList(0, 100)
      console.log('----------buildRandomMovieItemList--------->>>>', list)
      itemList.value = list
    }

    function onButtonZeroClick() {
      const list = buildRandomMediaItemList(0, 100)
      console.log('----------buildRandomMediaItemList--------->>>>', list)
      itemList.value = list
    }

    function onButtonOneClick() {
      const list = buildRandomPosterItemList(0, 100)
      console.log('----------buildRandomPosterItemList--------->>>>', list)
      itemList.value = list
    }

    function onButtonTwoClick() {
      const list = buildRandomLongImageItemList(50)
      console.log('----------buildRandomLongImageItemList--------->>>>', list)
      itemList.value = list
    }

    function onButtonThreeClick() {
      const list = buildRandomMediumImageItemList(20)
      console.log('----------buildRandomMediumImageItemList--------->>>>', list)
      itemList.value = list
    }

    function onButtonFourClick() {
      const list = buildRandomWaterfallItemList(0, 100)
      console.log('----------buildRandomWaterfallItemList--------->>>>', list)
      itemList.value = list
    }

    function onButtonTextClick() {
      const list = buildRandomTextItemList(100)
      console.log('----------buildRandomWaterfallItemList--------->>>>', list)
      itemList.value = list
    }

    function onButtonImageClick() {
      const list = buildRandomImageItemList(100)
      console.log('----------buildRandomWaterfallItemList--------->>>>', list)
      itemList.value = list
    }

    function onBackPressed() {
      if (!isQuickBackPressed) {
        isQuickBackPressed = true;
        ulRef.value?.scrollToTop()
        toast.showToast('再按一次返回退出');
        setTimeout(() => {
          isQuickBackPressed = false;
        }, 2000);
      } else {
        router.back()
      }
    }

    return {
      ulRef,
      itemList,
      onESCreate,
      onBackPressed,
      onButtonNegativeClick,
      onButtonZeroClick,
      onButtonOneClick,
      onButtonTwoClick,
      onButtonThreeClick,
      onButtonFourClick,
      onButtonTextClick,
      onButtonImageClick
    }
  }
});

</script>

<style scoped>
.qt-ul-root-page {
  width: 1920px;
  height: 880px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qt-ul-class {
  width: 1920px;
  height: 880px;
  background-color: darkgray;
}

.qt-ul-control-button-class {
  width: 1920px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}

</style>
