<template>
  <div class="app-list-item-root-css"
       layout="${layout}"
       :focusable="true"
       :enableFocusBorder="true"
       :focusScale="1.1"
       eventClick
       eventFocus>
    <img class="app-list-item-img-css"
         :duplicateParentState="true"
         :focusable="false"
         :postDelay="300"
         :enableFocusBorder="true"
         src="${appIcon}"/>

    <text-view
      :duplicateParentState="true"
      :focusable="false"
      :textSize="30"
      :ellipsizeMode="2"
      enablePostTask
      :postDelay="200"
      :lines="1"
      gravity="left"
      style="z-index: 999;height: 30px;"
      text="${appName}"/>
  </div>

</template>

<script lang="ts">

import {defineComponent,} from '@vue/runtime-core';

export default defineComponent({
  name: 'waterfall-item',
  setup() {
    return {};
  },
});
</script>

<style scoped>
.app-list-item-root-css {
  width: 170px;
  height: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #7415B1;
}

.app-list-item-img-css {
  width: 170px;
  height: 170px;
  background-color: palevioletred;
}
</style>
