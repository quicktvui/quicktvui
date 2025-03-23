<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-ul-root-page">
      <qt-ul
          class="qt-ul-class" ref="ulRef" name="ul"
          @onItemFocus="onItemFocus"
          :items="itemList"
          :spanCount="6"
          :enablePlaceholder="false">
        <template #item="{item}">
          <qt-ul-item-image
              :src="item.url"
              v-if="item.type == 2"
          />
        </template>
      </qt-ul>
    </qt-view>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {ref} from "vue";
import {buildRandomImageItemList} from "./__mocks__/list";
import qt_ul_item_image from './item/image/qt-ul-item-image.vue'
import {QTListViewItem} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '焦点事件',
  emits: [],
  components: {
    'qt-ul-item-image': qt_ul_item_image
  },
  setup(props, context) {
    const itemList = ref<Array<QTListViewItem>>([])

    function onESCreate() {
      const list = buildRandomImageItemList(100, -1)
      itemList.value = list
    }

    function focus(evt) {
      console.log('---------template--qt-ul-item-image---------focus----->>>>', evt)
    }

    function onItemFocus(evt) {
      console.log('----qt-ul----onItemFocus------------->>>>', evt)
    }

    return {
      itemList,
      onESCreate,
      focus,
      onItemFocus,
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
