<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name" />
    <qt-view class="es-sdk-content-divider-css" />
    <qt-view class="qt-ul-root-page">
      <qt-ul
        class="qt-ul-class"
        ref="ulRef"
        name="ul"
        :items="itemList"
        horizontal
        :enablePlaceholder="false"
      >
        <template #item="{ item }">
          <qt-ul-item-text-focus-scale
            :text="item.text"
            v-if="item.type == 12"
            :focusable="true"
            :enableFocusBorder="true"
          />
        </template>
      </qt-ul>
    </qt-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import { buildHorizontalRandomTextNoItemSizeItemList } from './__mocks__/list'
import qt_ul_item_text_focus_scale from './item/text/qt-ul-item-text-focus-scale.vue'
import { QTListViewItem } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'FocusScale(Horizontal)',
  emits: [],
  components: {
    'qt-ul-item-text-focus-scale': qt_ul_item_text_focus_scale,
  },
  setup(props, context) {
    const itemList = ref<Array<QTListViewItem>>([])

    function onESCreate() {
      const list = buildHorizontalRandomTextNoItemSizeItemList(100)
      console.log('------buildTextItemList-------->>>', list)
      itemList.value = list
    }

    return {
      itemList,
      onESCreate,
    }
  },
})
</script>

<style scoped>
.qt-ul-root-page {
  width: 1920px;
  height: 1080px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: palevioletred;
}

.qt-ul-class {
  width: 1920px;
  height: 400px;
  background-color: darkgray;
}
</style>
