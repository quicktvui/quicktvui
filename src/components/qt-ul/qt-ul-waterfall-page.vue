<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css"/>
    <qt-row class="qt-ul-control-button-class">
      <qt-button size="medium"
                 class="text-button-class"
                 text="随机Poster"
                 @click="setRandomPosterData"/>

    </qt-row>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-ul-root-page">
      <qt-ul
          class="qt-ul-class" ref="ulRef" name="ul"
          :items="itemList"
          :spanCount="6"
          :enablePlaceholder="false">
        <template #item="{item}">

          <qt-ul-item-text
              :text="item.text"
              v-if="item.type == 3"
              :focusable="true"
              :enableFocusBorder="true"/>

          <qt-ul-item-image
              :src="item.url"
              :backgroundColor="item.backgroundColor"
              v-if="item.type == 2"
              :focusable="true"
              :enableFocusBorder="true"/>

          <qt-ul-item-poster
              v-if="item.type == 5"
              :style="item.style"
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
import {QTIUL, QTListViewItem} from "@quicktvui/quicktvui3";
import {useESRouter} from "@extscreen/es3-router";
import {useESToast} from "@extscreen/es3-core";
import {buildRandomPosterItemList} from "./__mocks__/poster";

export default defineComponent({
  name: '瀑布流',
  emits: [],
  components: {
    'qt-ul-item-text': qt_ul_item_text,
    'qt-ul-item-image': qt_ul_item_image,
    'qt-ul-item-poster': qt_ul_item_poster,
  },
  setup(props, context) {
    const ulRef = ref<QTIUL>()
    const itemList = ref<Array<QTListViewItem>>([])
    const router = useESRouter()
    const toast = useESToast()
    let isQuickBackPressed = false

    function onESCreate() {

      const posterList = buildRandomPosterItemList(100, -1)
      console.log('------buildRandomPosterItemList-------->>>', posterList)
      itemList.value = posterList
    }

    function setRandomPosterData() {
      const posterList = buildRandomPosterItemList(100, -1)
      itemList.value = posterList
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
      setRandomPosterData,
      onBackPressed,
    }
  }
});

</script>

<style scoped>
.qt-ul-root-page {
  width: 1920px;
  height: 1080px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.qt-ul-class {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
}

.qt-ul-control-button-class {
  width: 1920px;
  height: 200px;
  position: absolute;
  z-index: 1000;
  left: 0;
  top: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
}

</style>
