<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
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
              :backgroundColor="item.backgroundColor"
              v-if="item.type == 3"
              :focusable="true"
              :enableFocusBorder="true"/>

          <qt-ul-item-list
              :itemList="item.itemList"
              v-if="item.type == 6"/>

          <qt-ul-item-image
              :src="item.url"
              v-if="item.type == 2"/>

        </template>
      </qt-ul>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {buildRandomWaterfallItemList} from "./__mocks__/list";
import qt_ul_item_text from './item/text/qt-ul-item-text.vue'
import qt_ul_item_list from './item/list/qt-ul-item-list.vue'
import {QTListViewItem} from "@quicktvui/quicktvui3";
import qt_ul_item_image from "./item/image/qt-ul-item-image.vue";

export default defineComponent({
  name: '一行滚动',
  emits: [],
  components: {
    'qt-ul-item-text': qt_ul_item_text,
    'qt-ul-item-list': qt_ul_item_list,
    'qt-ul-item-image': qt_ul_item_image
  },
  setup(props, context) {
    const itemList = ref<Array<QTListViewItem>>([])

    function onESCreate() {
      const list = buildRandomWaterfallItemList()
      console.log('---------buildWaterfallItemList--------->>>>', list)
      itemList.value = list
    }

    return {
      itemList,
      onESCreate,
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

</style>
