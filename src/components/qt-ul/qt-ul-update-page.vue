<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <qt-row class="qt-ul-control-button-class">
      <qt-button
        size="small"
        class="text-button-class"
        text="更新第一个"
        :requestFocus="true"
        @click="onButtonOneClick"
      />
    </qt-row>
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
          <qt-ul-item-text
            :text="item.text"
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
import { buildRandomTextItemList } from './__mocks__/list'
import qt_ul_item_text from './item/text/qt-ul-item-text.vue'
import { QTListViewItem } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: '更新',
  emits: [],
  components: {
    'qt-ul-item-text': qt_ul_item_text,
  },
  setup(props, context) {
    const itemList = ref<Array<QTListViewItem>>([])

    function onButtonOneClick() {}

    function onESCreate() {
      const list = buildRandomTextItemList(100)
      console.log('------buildTextItemList-------->>>', list)
      itemList.value = list
    }

    return {
      itemList,
      onESCreate,
      onButtonOneClick,
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
.text-button-class {
  margin: 20px;
}

.qt-ul-control-button-class {
  width: 1920px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
