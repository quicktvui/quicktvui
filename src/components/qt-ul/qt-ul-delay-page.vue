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
        :spanCount="6"
        :enablePlaceholder="false"
      >
        <template #item="{ item }">
          <qt-ul-item-delay
            v-if="item.type == 5"
            :style="item.style"
            :focus="item.focus"
            :image="item.image"
            :shadow="item.shadow"
            :shimmer="item.shimmer"
            :title="item.title"
            :focusTitle="item.focusTitle"
            :subTitle="item.subTitle"
            :floatTitle="item.floatTitle"
            :ripple="item.ripple"
            :corner="item.corner"
            :score="item.score"
            :titleStyle="item.titleStyle"
            :titleFocusStyle="item.titleFocusStyle"
            :placeholderImg="item.placeholderImg"
          />
        </template>
      </qt-ul>
    </qt-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ref } from 'vue'
import qt_ul_item_delay from './item/delay/qt-ul-item-delay.vue'
import { buildPosterItemList } from './__mocks__/poster'
import { QTListViewItem } from '@quicktvui/quicktvui3'

export default defineComponent({
  name: 'Delay',
  emits: [],
  components: {
    'qt-ul-item-delay': qt_ul_item_delay,
  },
  setup(props, context) {
    const itemList = ref<Array<QTListViewItem>>([])

    function onESCreate() {
      const posterList = buildPosterItemList(100)
      console.log('------buildPosterItemList-------->>>', posterList)
      itemList.value = posterList
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
