<template>
  <div class="qt-ul-item-text-root"
       :focusable="true"
       :enableFocusBorder="true">
    <es-player-manager
        ref="playerManager"
        :smallWindowWidth='480'
        :smallWindowHeight='270'
        :initPlayerWindowType="1"
        :playerList="playerListRef"
        class="es-video-player-manager-page-css"/>
  </div>

</template>

<script lang="ts">
import {defineComponent} from "@vue/runtime-core";
import {
  ESIPlayerManager,
  ESMediaItem,
  ESMediaItemList,
  ESPlayerManager
} from "@extscreen/es3-player-manager";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import {markRaw, onMounted, onUnmounted, ref, toRaw} from "vue";
import {ESVideoPlayer} from "@extscreen/es3-video-player";
import {ESMediaSource, ESMediaSourceList} from "@extscreen/es3-player";

const TAG = 'ESPlayerManagerItem'

export default defineComponent({
  name: 'qt-ul-item-player',
  components: {
    'es-player-manager': ESPlayerManager,
  },
  emits: [],
  props: {
    text: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: 'white'
    },
    gravity: {
      type: String,
      default: 'center'
    },
  },

  setup: function (props, context) {
    const log = useESLog()
    const playerManager = ref<ESIPlayerManager>()

    const playerList = [markRaw(ESVideoPlayer)]
    const playerListRef = ref(playerList)

    let isPaused = false

    onMounted(() => {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.e(TAG, "-------onESCreate---------->>>>>")
      }
      isPaused = false
      let mediaSource: ESMediaSource = {
        uri: 'http://extcdn.hsrc.tv/channelzero/2024/02/05/d477660a-3eb6-4c7f-b82b-0b61c035505c.mp4'
      }
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: [mediaSource]
      }
      let mediaItem: ESMediaItem = {
        mediaSourceList: mediaSourceList,
      }
      let playList: ESMediaItemList = {
        index: 0,
        list: [mediaItem]
      }
      playerManager.value?.initialize()
      playerManager.value?.playMediaList(playList)
    })
    onUnmounted(() => {
      playerManager.value?.stop()
      playerManager.value?.release()
    })

    return {
      playerListRef,
      playerManager,
    }
  },
});

</script>

<style scoped>
.qt-ul-item-text-root {
  width: 480px;
  height: 270px;
  background-color: transparent;
}

.es-video-player-manager-page-css {
  position: absolute;
}

</style>
