<template>
  <div class="app-list-item-root-css"
       layout="${layout}"
       :focusable="true"
       :enableFocusBorder="false"
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
        class="app-list-item-text-css"
        :duplicateParentState="true"
        :focusable="false"
        :textSize="26"
        :ellipsizeMode="2"
        enablePostTask
        :postDelay="200"
        :lines="1"
        gravity="center"
        style="z-index: 999;height: 30px;"
        text="${appName}"/>
  </div>

</template>

<script lang="ts">

import {defineComponent,} from '@vue/runtime-core';

export default defineComponent({
  name: 'app-list-item',
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
  border-radius: 8px;
}

.app-list-item-img-css {
  width: 170px;
  height: 170px;
  border-radius: 8px;
}

.app-list-item-text-css {
  margin-top: 13px;
  width: 170px;
  height: 30px;
  background-color: transparent;
  color: rgba(255, 255, 255, 0.5);
  focus-color: white;
  select-color: white;
  align-self: center;
}
</style>
