<template>
  <es-video-player ref="videoPlayer" @onPlayerInitialized="onPlayerInitialized" />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, useSlots } from 'vue'
// import Source from "./source.vue";
import { ESIPlayer, ESMediaSourceList } from '@extscreen/es3-player'
import { ESVideoPlayer } from '@extscreen/es3-video-player'

const TAG = 'WebVideo'

export default defineComponent({
  name: '测试',
  emits: [],
  components: {
    'es-video-player': ESVideoPlayer,
  },
  setup(props, context) {
    const videoPlayer = ref<ESIPlayer>()
    // const slots = useSlots();

    // const sources = computed(() => {
    //   const nodes = slots.default?.() ?? [];
    //   return nodes
    //       .filter(node => node?.type === Source)
    //       .map(node => ({
    //         src: node.props?.src ?? '',
    //         type: node.props?.type ?? ''
    //       }));
    // });

    onMounted(() => {
      videoPlayer.value?.initialize()
    })

    const onPlayerInitialized = (playerType) => {
      // const sourceList = sources.value.map(source => ({
      //   uri: source.src,
      //   type: source.type
      // }));
      // let mediaSourceList: ESMediaSourceList = {
      //   index: 0,
      //   list: sourceList
      // }
      // videoPlayer.value?.playMediaSourceList(mediaSourceList)
      // videoPlayer.value?.start(0)
    }

    return {
      videoPlayer,
      onPlayerInitialized,
    }
  },
})
</script>
