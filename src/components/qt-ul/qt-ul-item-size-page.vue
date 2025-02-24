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
          <qt-ul-item-view
              :width="item.width"
              :height="item.height"
              :backgroundColor="item.backgroundColor"
              v-if="item.type == 4"
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
import {buildRandomViewItemList} from "./__mocks__/list";
import qt_ul_item_view from './item/div/qt-ul-item-view.vue'
import {QTListViewItem} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: '尺寸',
  emits: [],
  components: {
    'qt-ul-item-view': qt_ul_item_view
  },
  setup(props, context) {
    const itemList = ref<Array<QTListViewItem>>([])

    function onESCreate() {
      const list = buildRandomViewItemList(100, -1)
      console.log('------buildViewItemList-------->>>', list)
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
