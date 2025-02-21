<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-ul-root-page">
      <qt-ul
          class="qt-ul-class" ref="ulRef" name="ul"
          :items="itemList"
          :spanCount="1"
          :autofocusPosition="20"
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
import {buildIndexTextItemList, buildTextItemList} from "./__mocks__/list";
import {QT_UL_ITEM_TYPE_TEXT} from "./item/type";
import qt_ul_item_text from './item/text/qt-ul-item-text.vue'
import {QTULTextItem} from "./item/text/QTULItemTextItem";
import {QTIUL} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: 'autofocusPosition',
  emits: [],
  components: {
    'qt-ul-item-text': qt_ul_item_text
  },
  setup(props, context) {
    let itemList = ref<Array<QTULTextItem>>([])
    const ulRef = ref<QTIUL>()

    function onESCreate() {
      const list = buildIndexTextItemList(100)
      console.log('------buildTextItemList-------->>>', list)
      itemList.value = list
    }

    return {
      ulRef,
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
