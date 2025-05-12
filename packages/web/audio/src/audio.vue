<template>
  <es-audio-player
    ref="audioPlayer"
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
import { audioProps } from './audio'
import Source from '../../source/src/source.vue'
import {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerPlayMode,
} from '@extscreen/es3-player'
import { ESAudioPlayer } from '@extscreen/es3-audio-player'

const TAG = 'WebAudio'

export default defineComponent({
  name: 'Audio',
  props: audioProps,
  emits: [],
  components: {
    'es-audio-player': ESAudioPlayer,
  },
  setup(props, context) {
    const audioPlayer = ref<ESIPlayer>()
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
        audioPlayer.value?.initialize()
      }
    })

    onBeforeUnmount(() => {
      audioPlayer.value?.stop()
      audioPlayer.value?.release()
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
        audioPlayer.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_REPEAT)
      } else {
        audioPlayer.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_ONCE)
      }
      //muted
      if (props.muted) {
        audioPlayer.value?.setVolume(0)
      } else {
        audioPlayer.value?.setVolume(1)
      }
      //start
      audioPlayer.value?.playMediaSourceList(mediaSourceList)
      audioPlayer.value?.start(0)
    }

    //开始播放
    const play = () => {
      audioPlayer.value?.initialize()
    }
    //暂停播放
    const pause = () => {
      audioPlayer.value?.pause()
    }
    //重新加载媒体
    const load = () => {
      audioPlayer.value?.initialize()
    }
    const stop = () => {
      audioPlayer.value?.stop()
      audioPlayer.value?.release()
    }
    return {
      audioPlayer,
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
