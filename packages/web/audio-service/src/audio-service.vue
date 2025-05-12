<template>
  <es-audio-service-player
    ref="audioPlayerService"
    :player-width="width"
    :player-height="height"
    @onPlayerInitialized="onPlayerInitialized"
  />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, useSlots } from 'vue'
import { audioServiceProps } from './audio-service'
import Source from '../../source/src/source.vue'
import {
  ESIPlayer,
  ESMediaSource,
  ESMediaSourceList,
  ESPlayerPlayMode,
} from '@extscreen/es3-player'
import { ESAudioServicePlayer } from '@extscreen/es3-audio-service-player'
const TAG = 'WebAudioService'

export default defineComponent({
  name: 'AudioService',
  props: audioServiceProps,
  emits: [],
  components: {
    'es-audio-service-player': ESAudioServicePlayer,
  },
  setup(props, context) {
    const audioPlayerService = ref<ESIPlayer>()
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
        audioPlayerService.value?.initialize()
      }
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
        audioPlayerService.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_REPEAT)
      } else {
        audioPlayerService.value?.setPlayMode(ESPlayerPlayMode.ES_PLAYER_PLAY_MODE_ONCE)
      }
      //muted
      if (props.muted) {
        audioPlayerService.value?.setVolume(0)
      } else {
        audioPlayerService.value?.setVolume(1)
      }
      //start
      audioPlayerService.value?.playMediaSourceList(mediaSourceList)
      audioPlayerService.value?.start(0)
    }

    //开始播放
    const play = () => {
      audioPlayerService.value?.initialize()
    }
    //暂停播放
    const pause = () => {
      audioPlayerService.value?.pause()
    }
    //重新加载媒体
    const load = () => {
      audioPlayerService.value?.initialize()
    }
    const stop = () => {
      audioPlayerService.value?.stop()
      audioPlayerService.value?.release()
    }
    return {
      audioPlayerService,
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
