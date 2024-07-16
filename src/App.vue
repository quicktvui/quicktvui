<template>
  <div id="root">
    <es-router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/runtime-core';
import {ESLogLevel, useESLog, ESAppParams} from "@extscreen/es3-core";
import {ESApp} from "@extscreen/es3-vue";

export default defineComponent({
  name: 'App',
  setup() {
    const log = useESLog()

    function onESCreate(app: ESApp, params: ESAppParams) {
      log.setMinimumLoggingLevel(ESLogLevel.DEBUG)
    }

    return {
      onESCreate
    };
  },
});

</script>

<style scoped>
#root {
  width: 1920px;
  height: 1080px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

</style>
