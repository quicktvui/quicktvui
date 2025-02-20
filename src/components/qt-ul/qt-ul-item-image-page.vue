<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <qt-view class="es-sdk-content-divider-css"/>
    <qt-view class="qt-ul-root-page">
      <qt-ul
          class="qt-ul-class" ref="ulRef" name="ul"
          :items="itemList"
          :spanCount="6"
          :enablePlaceholder="false"
          :stableItemSize="250">
        <template #item="{item}">
          <qt-ul-item-image
              :src="item.url"
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
import {QTULImageItem} from "./item/image/QTULImageItem";
import {buildImageItemList} from "./__mocks__/list";
import {QT_UL_ITEM_TYPE_IMAGE} from "./item/type";
import qt_ul_item_image from './item/image/qt-ul-item-image.vue'

export default defineComponent({
  name: '图片',
  emits: [],
  components: {
    'qt-ul-item-image': qt_ul_item_image
  },
  setup(props, context) {
    let itemList = ref<Array<QTULImageItem>>([])

    function onESCreate() {
      const list = buildImageItemList(QT_UL_ITEM_TYPE_IMAGE, 100)
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
