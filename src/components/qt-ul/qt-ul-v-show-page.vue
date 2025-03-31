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
        :spanCount="1920"
        :enablePlaceholder="false"
      >
        <template #item="{ item }">
          <qt-ul-item-text-v-show
            :text="item.text"
            :title="item.title"
            :showTitle="item.showTitle"
            :background-color="item.raw.backgroundColor"
            v-if="item.type == 3"
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
import { buildRandomTitleTextItemList } from './__mocks__/list'
import qt_ul_item_text_v_show from './item/text/qt-ul-item-text-v-show.vue'
import { QTListViewItem } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'v-show',
  emits: [],
  components: {
    'qt-ul-item-text-v-show': qt_ul_item_text_v_show,
  },
  setup(props, context) {
    const itemList = ref<Array<QTListViewItem>>([])

    function onESCreate() {
      const list = buildRandomTitleTextItemList(100)
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
}

.qt-ul-class {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
}
</style>
