<template>
  <qt-grid-view
    ref="gridViewRef"
    :style="{
      width: size.width,
      height: size.height,
    }"
    :spanCount="spanCount"
    :clipChildren="false"
    @item-click="onItemClick"
    :useDiff="true"
    :focusable="false"
  >
    <slot :itemStyle="itemStyle"></slot>
  </qt-grid-view>
</template>
<script setup lang="ts">
import { ref, toRaw, watch } from 'vue'
import { Size } from './types/ArkTypes'

defineOptions({
  name: 'qt-grid-view-ark',
})

const emit = defineEmits(['item-click'])

const props = defineProps({
  size: {
    type: Object as () => Size,
    default: () => ({
      width: 1920,
      height: 1080,
    }),
  },
  itemStyle: {
    type: Object,
    default: () => ({
      width: 100,
      height: 100,
      backgroundColor: 'transparent',
    }),
  },
  spanCount: {
    type: Number,
    default: 12,
  },
  value: {
    type: Array,
    default: () => [],
  },
})
const gridViewRef = ref<any>()
watch(
  () => [props.value, gridViewRef.value],
  ([newVal, gridViewRefVal]) => {
    if (newVal && gridViewRefVal) {
      const rawVal = toRaw(newVal as any[])
      const safeItems = Array.isArray(rawVal)
        ? rawVal.map((item) => JSON.parse(JSON.stringify(item)))
        : []
      gridViewRef.value?.setListData(safeItems)
    }
  },
  { immediate: true }
)
function onItemClick(e: any) {
  emit('item-click', e)
}
function setItemFocused(index: number) {
  gridViewRef.value.setItemFocused(index)
}
defineExpose({
  setItemFocused,
})
</script>
