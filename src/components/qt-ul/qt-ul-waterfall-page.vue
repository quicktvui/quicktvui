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

          <qt-ul-item-poster
              :text="item.text"
              v-if="item.type == 5"
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
import qt_ul_item_poster from './item/poster/qt-ul-item-poster.vue'
import {QTULTextItem} from "./item/text/QTULItemTextItem";
import {buildPosterItemList} from "./__mocks__/poster";

export default defineComponent({
  name: '瀑布流',
  emits: [],
  components: {
    'qt-ul-item-poster': qt_ul_item_poster,
  },
  setup(props, context) {
    let itemList = ref<Array<QTULTextItem>>([])

    function onESCreate() {
      const posterList = buildPosterItemList()
      console.log('------buildPosterItemList-------->>>', posterList)
      itemList.value = posterList
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
