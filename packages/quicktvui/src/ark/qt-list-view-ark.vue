<template>
  <qt-list-view
    :horizontal="horizontal"
    ref="listViewRef"
    :style="{
      width: size.width,
      height: size.height,
      backgroundColor,
    }"
    :clipChildren="false"
    @item-click="onItemClick"
    @item-focused="onItemFocused"
    :useDiff="true"
    :focusable="false"
  >
    <slot></slot>
  </qt-list-view>
</template>
<script setup lang="ts">
import { PropType, ref, toRaw, watch } from 'vue'
import { Size } from './types/ArkTypes'
import { QTListViewItem } from 'src/list-view/core/QTListViewItem'
import { QTIListView } from 'src/list-view/core/QTIListView'
defineOptions({
  name: 'qt-list-view-ark',
})
const emit = defineEmits(['item-click', 'item-focused', 'focus-lost'])
const props = defineProps({
  size: {
    type: Object as () => Size,
    default: () => ({
      width: 1920,
      height: 1080,
    }),
  },
  horizontal: {
    type: Boolean,
    default: false,
  },
  value: {
    type: Array as PropType<QTListViewItem[]>,
    default: () => [],
  },
  backgroundColor: {
    type: String,
    default: 'transparent',
  },
})
function onItemClick(e: any) {
  emit('item-click', e)
}
function onItemFocused(e: any) {
  emit('item-focused', e)
}
const listViewRef = ref<QTIListView>()
watch(
  () => [props.value, listViewRef.value],
  ([newVal, listViewRefVal]) => {
    if (newVal && listViewRefVal) {
      const rawVal = toRaw(newVal as any[])
      const safeItems = Array.isArray(rawVal)
        ? rawVal.map((item) => JSON.parse(JSON.stringify(item)))
        : []
      listViewRef.value?.setListData(safeItems as QTListViewItem[])
    }
  },
  { immediate: true }
)
function scrollToIndex(x: number, y: number, animated: boolean, duration: number, offset: number) {
  listViewRef.value?.scrollToIndex(x, y, animated, duration, offset)
}
function scrollToPositionWithOffset(position: number, offset: number, animated: boolean) {
  listViewRef.value?.scrollToPositionWithOffset(position, offset, animated)
}
/**
 * 滚动到指定位置
 * @param position 目标位置索引
 */
function scrollToPosition(position: number) {
  listViewRef.value?.scrollToPosition(position)
}
function requestChildFocus(position: number) {
  listViewRef.value?.requestChildFocus(position)
}
/**
 * 设置选中索引
 * @param position 目标索引
 */
function setItemSelected(position: number, requestFocus: boolean = false) {
  listViewRef.value?.setItemSelected(position, requestFocus)
}
defineExpose({
  scrollToIndex,
  scrollToPositionWithOffset,
  scrollToPosition,
  requestChildFocus,
  setItemSelected,
})
</script>
<style scoped></style>
