<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-ul-root-page">
      <qt-ul
          class="qt-ul-class" ref="ulRef" name="ul"
          :items="itemList"
          :spanCount="2"
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

        </template>
      </qt-ul>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {buildImageItemList, buildTextItemList} from "./__mocks__/list";
import qt_ul_item_text from './item/text/qt-ul-item-text.vue'
import qt_ul_item_image from "./item/image/qt-ul-item-image.vue";
import {getRandomInt} from "./__mocks__/random";
import {QTListViewItem} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '类型',
  emits: [],
  components: {
    'qt-ul-item-text': qt_ul_item_text,
    'qt-ul-item-image': qt_ul_item_image
  },
  setup(props, context) {
    let itemList = ref<Array<QTListViewItem>>([])

    function onESCreate() {
      const textList = buildTextItemList(100)
      const imageList = buildImageItemList(100)

      const dataList = []

      for (let i = 0; i < 100; i++) {
        const index = getRandomInt(0, 100)
        dataList.push(index % 2 ? textList[i] : imageList[i])
      }

      console.log('------buildTextItemList-------->>>', dataList)
      itemList.value = dataList
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
