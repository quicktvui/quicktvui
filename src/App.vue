<template>
  <div id="root">
    <es-router-view/>
  </div>
</template>

<script>
import {defineComponent} from '@vue/runtime-core';
import {ESLogLevel, useESLog} from "@extscreen/es3-core";

export default defineComponent({
  name: 'App',
  setup() {
    const log = useESLog()

    function onESCreate(app, params) {
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
