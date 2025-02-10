<template>
  <div class="tab-list-item-root-css"
       :type="1"
       layout="${layout}"
       :focusable="true"
       :enableFocusBorder="true"
       :focusScale="1.1"
       eventClick
       eventFocus>
    <text-view
      class="tab-list-item-text-css"
      :duplicateParentState="true"
      :focusable="false"
      :textSize="20"
      :ellipsizeMode="2"
      enablePostTask
      :postDelay="200"
      :lines="1"
      gravity="left"
      style="z-index: 999;height: 30px;"
      text="${text}"/>
  </div>

</template>

<script lang="ts">

import {defineComponent,} from '@vue/runtime-core';

export default defineComponent({
  name: 'tab-item',
  setup() {
    return {};
  },
});
</script>

<style scoped>
.tab-list-item-root-css {
  width: 150px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: palevioletred;
}

.tab-list-item-text-css {
  width: 150px;
  height: 50px;
}
</style>
