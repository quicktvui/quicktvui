<template>
  <es-video-player
    ref="videoPlayer"
    :player-width="width"
    :player-height="height"
    @onPlayerInitialized="onPlayerInitialized"
  />
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  ref,
  useSlots,
} from 'vue'
import { videoProps } from './video'
import Source from '../../source/src/source.vue'
import {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerPlayMode,
} from '@extscreen/es3-player'
import { ESVideoPlayer } from '@extscreen/es3-video-player'

const TAG = 'WebVideo'

export default defineComponent({
  name: 'Video',
  props: videoProps,
  emits: [],
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup(props, context) {
    const videoPlayer = ref<ESIPlayer>()
    const slots = useSlots()

    const sources = computed(() => {
      const nodes = slots.default?.() ?? []
      return nodes
        .filter((node) => node?.type === Source)
        .map((node) => ({
          src: node.props?.src ?? '',
          type: node.props?.type ?? '',
        }))
    })

    onMounted(() => {
      if (props.autoplay) {
        videoPlayer.value?.initialize()
      }
    })

    onBeforeUnmount(() => {
      videoPlayer.value?.stop()
      videoPlayer.value?.release()
    })

    const onPlayerInitialized = (playerType) => {
      let sourceList: Array<ESMediaSource> = []
      if (props.src) {
        let mediaSource: ESMediaSource = {
          uri: props.src,
        }
        sourceList = [mediaSource]
      } else {
        sourceList = sources.value.map((source) => ({
          uri: source.src,
          type: source.type,
        }))
      }
      let mediaSourceList: ESMediaSourceList = {
        index: 0,
        list: sourceList,
      }
      //loop
      if (props.loop) {
        videoPlayer.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_REPEAT)
      } else {
        videoPlayer.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_ONCE)
      }
      //muted
      if (props.muted) {
        videoPlayer.value?.setVolume(0)
      } else {
        videoPlayer.value?.setVolume(1)
      }
      //start
      videoPlayer.value?.playMediaSourceList(mediaSourceList)
      videoPlayer.value?.start(0)
    }

    //开始播放
    const play = () => {
      videoPlayer.value?.initialize()
    }
    //暂停播放
    const pause = () => {
      videoPlayer.value?.pause()
    }
    const stop = () => {
      videoPlayer.value?.stop()
      videoPlayer.value?.release()
    }
    //重新加载媒体
    const load = () => {
      videoPlayer.value?.initialize()
    }
    return {
      videoPlayer,
      sources,
      onPlayerInitialized,
      play,
      pause,
      load,
      stop,
    }
  },
})
</script>
