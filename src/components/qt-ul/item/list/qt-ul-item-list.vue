<template>
  <div class="qt-ul-item-list-root"
       :focusable="true"
       :enableFocusBorder="true">
    <qt-ul
        class="qt-ul-class"
        :items="itemList"
        horizontal
        :enablePlaceholder="false">
      <template #item="{item}">
        <qt-ul-item-text
            :text="item.text"
            :backgroundColor="item.backgroundColor"
            v-if="item.type == 3"
            :focusable="true"
            :enableFocusBorder="true"/>
      </template>
    </qt-ul>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import qt_ul_item_text from "../text/qt-ul-item-text.vue";

export default defineComponent({
  name: 'qt-ul-item-list',
  components: {
    'qt-ul-item-text': qt_ul_item_text
  },
  emits: [],
  props: {
    itemList: {
      type: Array,
      default: []
    },
  },
});

</script>

<style scoped>
.qt-ul-item-list-root {
  width: 1920px;
  height: 200px;
  background-color: transparent;
}

.qt-ul-class {
  width: 1920px;
  height: 200px;
}

</style>
