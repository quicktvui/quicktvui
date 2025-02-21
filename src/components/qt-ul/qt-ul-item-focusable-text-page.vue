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
          <qt-ul-item-focusable-text
              :text="item.text"
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
import {buildTextItemList} from "./__mocks__/list";
import {QT_UL_ITEM_TYPE_TEXT} from "./item/type";
import qt_ul_item_focusable_text from "./item/text/qt-ul-item-focusable-text.vue";
import {QTListViewItem} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '文字焦点框',
  emits: [],
  components: {
    'qt-ul-item-focusable-text': qt_ul_item_focusable_text
  },
  setup(props, context) {
    let itemList = ref<Array<QTListViewItem>>([])

    function onESCreate() {
      const list = buildTextItemList(QT_UL_ITEM_TYPE_TEXT, 100)
      console.log('------buildTextItemList-------->>>', list)
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
  background-color: #0D71FF;
}

</style>
