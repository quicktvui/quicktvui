<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-ul-root-page">
      <qt-column class="qt-ul-scroll-class">
        <qt-button size="large" class="text-button-class" text="scrollToIndex:40" @click="scrollToIndex"></qt-button>
        <qt-button size="large" class="text-button-class" text="scrollToPosition:10"
                   @click="scrollToPosition"></qt-button>
        <qt-button size="large" class="text-button-class" text="setInitPosition:30"
                   @click="setInitPosition"></qt-button>
        <qt-button size="large" class="text-button-class" text="scrollToFocused:30"
                   @click="scrollToFocus"></qt-button>
        <qt-button size="large" class="text-button-class" text="scrollToTop" @click="scrollToTop"></qt-button>
        <qt-button size="large" class="text-button-class" text="getScrollOffset" @click="getScrollOffset"></qt-button>
      </qt-column>

      <qt-ul
          class="qt-ul-class" ref="ulRef" name="ul"
          :items="itemList"
          :spanCount="1"
          :enablePlaceholder="false">
        <template #item="{item}">
          <qt-ul-item-text
              :text="item.text"
              gravity="left|centerVertical"
              :backgroundColor="item.backgroundColor"
              v-if="item.type == 3"
              :focusable="true"
              :enableFocusBorder="true"/>
        </template>
      </qt-ul>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {buildIndexTextItemList} from "./__mocks__/list";
import qt_ul_item_text from './item/text/qt-ul-item-text.vue'
import {QTIUL, QTListViewItem} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '滚动',
  emits: [],
  components: {
    'qt-ul-item-text': qt_ul_item_text
  },
  setup(props, context) {
    let itemList = ref<Array<QTListViewItem>>([])
    const ulRef = ref<QTIUL>()

    function onESCreate() {
      const list = buildIndexTextItemList(100)
      console.log('------buildTextItemList-------->>>', list)
      itemList.value = list
    }

    function scrollToIndex() {
      ulRef.value?.scrollToIndex(0, 40, true, 100, 0)
    }

    function scrollToPosition() {
      ulRef.value?.scrollToPosition(10)
    }

    function setInitPosition() {
      // ulRef.value?.setInitPosition(30)
    }

    function scrollToFocus() {
      ulRef.value?.scrollToFocus(30, 0, 0, '')
    }

    function scrollToTop() {
      ulRef.value?.scrollToTop(10)
    }

    function getScrollOffset() {
      ulRef.value?.getScrollOffset((value) => {
        console.log('-------getScrollOffset------->>>>', value)
      })
    }

    return {
      ulRef,
      itemList,
      onESCreate,
      scrollToIndex,
      scrollToPosition,
      setInitPosition,
      scrollToFocus,
      scrollToTop,
      getScrollOffset
    }
  }
});

</script>

<style scoped>
.qt-ul-root-page {
  width: 1920px;
  height: 1080px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.qt-ul-scroll-class {
  width: 400px;
  height: 1080px;
  margin-right: 40px;
}

.qt-ul-class {
  width: 800px;
  height: 1080px;
}

.text-button-class {
  margin: 20px;
}


</style>
