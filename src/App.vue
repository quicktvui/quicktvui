<template>
  <div id="root">
    <es-router-view/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from '@vue/runtime-core';
import {ESLogLevel, useESLog, ESAppParams, useESRuntime, useESDevice} from "@extscreen/es3-core";
import {ESApp} from "@extscreen/es3-vue";
import {ESPlayerConfiguration, ESPlayerDisplay, useESPlayer} from "@extscreen/es3-player";

export default defineComponent({
  name: 'App',
  emits: [],
  setup() {
    const log = useESLog()
    const playerManager = useESPlayer()
    const runtime = useESRuntime()
    const device = useESDevice()

    function onESCreate(app: ESApp, params: ESAppParams) {
      log.setMinimumLoggingLevel(ESLogLevel.DEBUG)
      return Promise.resolve()
          .then(() => {
            const playerDisplay: ESPlayerDisplay = {
              screenWidth: device.getScreenWidth(),
              screenHeight: device.getScreenHeight(),
            }
            const config: ESPlayerConfiguration = {
              debug: true,
              display: playerDisplay,
              device: {
                deviceType: runtime.getRuntimeDeviceType() ?? ''
              }
            }
            return playerManager.init(config)
          })
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
