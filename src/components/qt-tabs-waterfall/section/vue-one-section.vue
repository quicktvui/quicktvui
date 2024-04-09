<template>
  <qt-column class="error-root-view-css">
    <span class="error-text-css" ref="errorText">vue-one-section</span>
  </qt-column>
</template>

<script lang="ts">

import {defineComponent,} from '@vue/runtime-core';

export default defineComponent({
  name: 'vue-one-section',
  setup() {
    return {};
  },
});
</script>

<style scoped>

.error-root-view-css {
  width: 1920px;
  height: 1080px;
  background-color: darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.error-text-css {
  font-size: 40px;
}

</style>
