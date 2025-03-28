<template>
  <select-series
    v-if="customItem"
    ref="selectSeries"
    :clipChildren="false"
    :scrollParam="scrollParam"
    :groupParam="groupParam"
    :commonParam="commonParam"
    :initFocusPosition="initFocusPosition"
    :display="display"
    @load-data="onLoadData"
    @item-click="onItemClick"
    @item-focused="onItemFocused"
    @group-item-focused="onGroupItemFocused"
    :style="{ width: 1920, height: height }"
  >
    <slot />
  </select-series>
  <large-list
    v-else-if="showOld"
    ref="selectSeries"
    :clipChildren="false"
    :display="display"
    :initParam="initParam"
    :initFocusPosition="initFocusPosition"
    @load-data="onLoadData"
    @item-click="onItemClick"
    @item-focused="onItemFocused"
    @group-item-focused="onGroupItemFocused"
    :style="{ width: 1920, height: height }"
  />
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { nextTick } from '@vue/runtime-core'
import { ESIMediaSeries } from '@extscreen/es3-component'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'

const TAG = 'media-series'

export default defineComponent({
  name: 'media-series',
  props: {
    customItem: {
      type: Boolean,
      default: false,
    },
    initParam: {
      type: Object,
      default: () => {
        return {}
      },
    },
    height: {
      type: Number,
      default: 230,
    },
    scrollParam: {
      type: Object,
      default: () => {
        return {}
      },
    },
    groupParam: {
      type: Object,
      default: () => {
        return {}
      },
    },
    commonParam: {
      type: Object,
      default: () => {
        return {}
      },
    },
    initFocusPosition: {
      type: Number,
      default: -1,
    },
    display: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['load-data', 'item-click', 'item-focused', 'group-item-focused'],
  setup(props, context) {
    const selectSeries = ref<ESIMediaSeries>()
    let showOld = ref(false)
    const log = useESLog()

    onMounted(() => {
      showOld.value = !props.customItem
    })
    //-----------------------------------------------------------
    const onLoadData = (event) => {
      context.emit('load-data', event)
    }
    const onItemClick = (event) => {
      context.emit('item-click', event)
    }
    const onItemFocused = (event) => {
      context.emit('item-focused', event)
    }
    const onGroupItemFocused = (event) => {
      context.emit('group-item-focused', event)
    }
    //-----------------------------------------------------------
    const setInitData = (totalCount, pageSize) => {
      if (selectSeries.value) {
        selectSeries.value?.setInitData(totalCount, pageSize)
      } else {
        nextTick(() => {
          if (selectSeries.value) {
            selectSeries.value?.setInitData(totalCount, pageSize)
          }
        })
      }
    }
    const setPageData = (page, data) => {
      selectSeries.value?.setPageData(page, data)
    }
    const scrollTo = (pos) => {
      selectSeries.value?.scrollTo(pos)
    }
    const scrollToWithOffset = (pos, offset, anim) => {
      selectSeries.value?.scrollToWithOffset(pos, offset, anim)
    }
    const requestFocus = (position) => {
      selectSeries.value?.requestFocus(position)
    }
    const setSelected = (position) => {
      nextTick(() => {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '--------setSelected------->>>>', position)
        }
        selectSeries.value?.setSelected(position)
      })
    }
    const setup = () => {
      selectSeries.value?.setup()
    }
    const setGroupSelected = (position) => {
      selectSeries.value?.setGroupSelected(position)
    }
    const release = () => {
      selectSeries.value?.release()
    }
    return {
      selectSeries,
      showOld,
      onLoadData,
      setPageData,
      setInitData,
      onItemClick,
      onItemFocused,
      onGroupItemFocused,
      scrollTo,
      scrollToWithOffset,
      requestFocus,
      setSelected,
      setup,
      setGroupSelected,
      release,
    }
  },
})
</script>

<style scoped></style>
