<template>
  <qt-view class="series-container" :clipChildren="false">
    <!-- 分集列表 -->
    <qt-list-view-pro
      class="series-list"
      :enableFirstFocusAtStart="true"
      :blockFocusDirections="['left', 'right']"
      :name="seriesListName"
      :nextFocusName="{
        down: groupListName,
        up: seriesListUpName,
      }"
      ref="listViewRef"
      :size="{ width: 1920, height: seriesListHeight }"
      backgroundColor="transparent"
      :value="seriesList"
      :horizontal="true"
      @item-click="onItemClick"
      @item-focused="onItemFocused"
      @focus-lost="onFocusLost"
      :clipChildren="false"
    >
      <series-item-number v-if="props.seriesStyle === SeriesStyleType.NUMBER_ONLY" :type="1" />
      <series-item-text v-else-if="props.seriesStyle === SeriesStyleType.TEXT_ONLY" :type="1" />
      <series-item-image-left
        v-else-if="props.seriesStyle === SeriesStyleType.IMAGE_LEFT_TEXT_RIGHT"
        :type="1"
      />
      <series-item-image-top
        v-else-if="props.seriesStyle === SeriesStyleType.IMAGE_TOP_TEXT_BOTTOM"
        :type="1"
      />
      <slot name="custom" v-else-if="props.seriesStyle === SeriesStyleType.CUSTOM" />
    </qt-list-view-pro>
    <!-- 分组组件 -->
    <qt-list-view-pro
      v-if="showGroupList"
      class="group-list"
      :name="groupListName"
      :nextFocusName="{
        up: seriesListName,
        down: groupListDownName,
      }"
      :enableFirstFocusAtStart="true"
      :blockFocusDirections="['left', 'right']"
      ref="groupListViewRef"
      :size="{ width: 1920, height: 80 }"
      backgroundColor="transparent"
      :value="groupList"
      :horizontal="true"
      @item-click="onGroupItemClick"
      @item-focused="onGroupItemFocused"
      @focus-lost="onGroupFocusLost"
    >
      <qt-view
        type="1"
        :style="{
          width: GROUP_ITEM_WIDTH,
          height: GROUP_ITEM_HEIGHT,
          backgroundColor: 'transparent',
          borderRadius: 8,
          focusBorderRadius: 8,
          focusBackgroundColor: '#FFFFFF',
        }"
        class="flex justify-center items-center"
        :focusable="true"
        eventFocus
        eventClick
        focusBackgroundColor="#FFFFFF"
      >
        <qt-text
          text="${text}"
          fontSize="30"
          :style="{
            height: 30,
            color: 'white',
            focusColor: '#13161B',
          }"
          autoWidth
          duplicateParentState
          typeface="bold"
          gravity="center"
        />
        <!-- 选中状态指示器 - 白色横线 -->
        <qt-view
          showIf="${isSelected}"
          duplicateParentState
          showOnState="selected"
          :style="{
            position: 'absolute',
            width: 60,
            height: 3,
            backgroundColor: '#FFFFFF',
            borderRadius: 2,
            bottom: 1,
          }"
        ></qt-view>
      </qt-view>
    </qt-list-view-pro>
  </qt-view>
</template>

<script lang="ts" setup>
import { ref, computed, watch, onMounted } from 'vue'
import QtListViewPro from './qt-list-view-pro.vue'
import SeriesItemNumber from './style/series-item-number.vue'
import SeriesItemText from './style/series-item-text.vue'
import seriesItemImageLeft from './style/series-item-image-left.vue'
import seriesItemImageTop from './style/series-item-image-top.vue'
import { SeriesStyleType, SeriesItem, SeriesItemLoad } from './types/Series'
defineOptions({
  name: 'qt-media-series-pro',
})
interface Props {
  totalEpisodes: number // 总集数
  currentIndex?: number
  groupSize?: number // 分组大小，默认3
  showGroup?: boolean // 是否显示分组，默认true
  seriesStyle?: SeriesStyleType // 分集样式类型
  pageSize?: number // 分页大小，默认10
  itemWidth?: number // 每个item宽度，默认0
  itemHeight?: number // 每个item高度，默认0
  seriesListName?: string
  groupListName?: string
  seriesListUpName?: string
  groupListDownName?: string
  onLoadPageData?: (pageIndex: number, pageSize: number) => Promise<SeriesItemLoad[]> // 分页数据加载回调
}

const props = withDefaults(defineProps<Props>(), {
  totalEpisodes: 0,
  currentIndex: 0,
  groupSize: 3,
  showGroup: true,
  seriesStyle: SeriesStyleType.NUMBER_ONLY,
  pageSize: 10,
  itemWidth: 160,
  itemHeight: 240,
  seriesListName: 'seriesListView',
  groupListName: 'groupListView',
})

const TAG = 'qt-media-series-pro'
const innerTotalEpisodes = ref(props.totalEpisodes)
const innerCurrentIndex = ref(props.currentIndex ?? 0)

// 分页数据缓存
const pageDataCache = ref<Map<number, SeriesItemLoad[]>>(new Map())
// 当前加载的页数范围
const loadedPageRange = ref<{ start: number; end: number }>({ start: -1, end: -1 })

const seriesList = ref<SeriesItem[]>([])
const listViewRef = ref<any>(null)
const groupListViewRef = ref<any>(null)
// 维护当前选中的焦点索引
const currentFocusIndex = ref<number>(-1)
const currentGroupFocusIndex = ref<number>(-1)
// 维护当前选中的分组索引
const currentGroupIndex = ref<number>(-1)
// 如果使用qt-waterfall组件，需要主动触发更新，watch方法无效
// 监听currentIndex变化，触发分页数据加载
watch(
  () => props.currentIndex,
  async (newIndex, oldIndex) => {
    if (newIndex !== undefined && innerTotalEpisodes.value > 0) {
      console.log(TAG, `currentIndex变化: ${oldIndex} -> ${newIndex}`)
      innerCurrentIndex.value = newIndex
      loadDataBySelectIndex(newIndex)
    }
  },
  { immediate: true }
)
async function loadDataBySelectIndex(index: number) {
  console.log(TAG, `loadDataBySelectIndex: ${index}`)
  if (index !== undefined && innerTotalEpisodes.value > 0) {
    // 计算当前索引所在的页数
    const currentPage = Math.floor(index / props.pageSize)

    // 检查是否需要加载新页面的数据
    await checkAndLoadPageData(currentPage)
    console.log(TAG, `第${currentPage}页数据加载完成`)
    // 设置选中索引
    setSelectedIndex(index)
  }
}
// 检查并加载分页数据
async function checkAndLoadPageData(targetPage: number) {
  if (!props.onLoadPageData) {
    console.log(TAG, '未提供分页数据加载回调，使用默认数据')
    return
  }
  console.log(TAG, `检查并加载第${targetPage}页数据`)

  // 计算需要加载的页面范围（当前页及前后各一页）
  const startPage = Math.max(0, targetPage - 1)
  const endPage = Math.min(Math.ceil(innerTotalEpisodes.value / props.pageSize) - 1, targetPage + 1)

  // 检查是否需要加载新页面
  if (
    loadedPageRange.value.start === -1 ||
    startPage < loadedPageRange.value.start ||
    endPage > loadedPageRange.value.end
  ) {
    console.log(TAG, `需要加载页面范围: ${startPage}-${endPage}`)

    // 加载新页面数据
    for (let page = startPage; page <= endPage; page++) {
      if (!pageDataCache.value.has(page)) {
        try {
          console.log(TAG, `加载第${page}页数据`)
          const pageData = await props.onLoadPageData(page, props.pageSize)
          console.log(TAG, `pageData`, pageData)
          pageDataCache.value.set(page, pageData)
          // 更新 seriesList
          updateSeriesListWithPageData(page, pageData)
          console.log(TAG, `第${page}页数据加载完成，共${pageData.length}条`)
        } catch (error) {
          console.error(TAG, `加载第${page}页数据失败:`, error)
        }
      }
    }

    // 更新已加载的页面范围
    loadedPageRange.value = { start: startPage, end: endPage }
    console.log(TAG, `已加载页面范围更新为: ${startPage}-${endPage}`)
  }
}

const emit = defineEmits<{
  'item-click': [index: number]
  'item-focused': [index: number]
  'group-click': [groupIndex: number, startIndex: number, endIndex: number]
  'group-focused': [groupIndex: number, startIndex: number, endIndex: number]
}>()

// 分组item的宽度和间距配置
const GROUP_ITEM_WIDTH = 120 // 分组item宽度
const GROUP_ITEM_HEIGHT = 40 // 分组item高度
const GROUP_ITEM_SPACING = 16 // 分组item间距
// 分集item的宽度和间距配置
const SERIES_ITEM_SPACING = 16 // 分集item间距
const SCREEN_WIDTH = 1920 // 屏幕宽度

const seriesItemWidth = computed(() => {
  switch (props.seriesStyle) {
    case SeriesStyleType.TEXT_ONLY:
      return 490
    case SeriesStyleType.IMAGE_LEFT_TEXT_RIGHT:
      return 560
    case SeriesStyleType.IMAGE_TOP_TEXT_BOTTOM:
      return 200
    default:
      return props.itemWidth
  }
})

const seriesListHeight = computed(() => {
  switch (props.seriesStyle) {
    case SeriesStyleType.IMAGE_TOP_TEXT_BOTTOM:
    case SeriesStyleType.IMAGE_LEFT_TEXT_RIGHT:
      return 160
    case SeriesStyleType.CUSTOM:
      return props.itemHeight
    case SeriesStyleType.TEXT_ONLY:
      return 100
    default:
      return 80
  }
})

// 计算一屏幕能容纳的分组item数量
const getVisibleGroupCount = () => {
  const availableWidth = SCREEN_WIDTH - 80 // 减去左边距
  const itemTotalWidth = GROUP_ITEM_WIDTH + GROUP_ITEM_SPACING
  const visibleCount = Math.floor(availableWidth / itemTotalWidth)
  return Math.max(1, visibleCount) // 至少显示1个
}

// 计算一屏幕能容纳的分集item数量
const getVisibleSeriesCount = () => {
  const availableWidth = SCREEN_WIDTH - 80 // 减去左边距
  const itemTotalWidth = seriesItemWidth.value + SERIES_ITEM_SPACING
  const visibleCount = Math.floor(availableWidth / itemTotalWidth)
  return Math.max(1, visibleCount) // 至少显示1个
}
// 判断分组是否被选中
const isGroupSelected = (groupIndex: number) => {
  const selectedGroupIndex = Math.floor(currentFocusIndex.value / props.groupSize)
  return selectedGroupIndex === groupIndex
}

// 计算是否显示分组列表
const showGroupList = computed(() => {
  return props.showGroup && innerTotalEpisodes.value > props.groupSize
})

// 计算分组列表
const groupList = computed(() => {
  const groupCount = Math.ceil(innerTotalEpisodes.value / props.groupSize)
  const selectedGroupIndex = Math.floor(currentFocusIndex.value / props.groupSize)

  return Array.from({ length: groupCount }, (_, index) => {
    const startIndex = index * props.groupSize + 1
    const endIndex = Math.min((index + 1) * props.groupSize, innerTotalEpisodes.value)
    const isSelected = selectedGroupIndex === index

    return {
      type: 1,
      text: `${startIndex}-${endIndex}`,
      isSelected,
      decoration: {
        left: index === 0 ? 80 : 0,
        right: index === groupCount - 1 ? 80 : 16,
      },
    }
  })
})
// 初始化数据
watch(
  () => [props.totalEpisodes, props.seriesStyle],
  () => {
    innerTotalEpisodes.value = props.totalEpisodes
    initSeriesList()
  },
  { immediate: true }
)
function updateTotalEpisodes(totalEpisodes: number, index?: number) {
  innerTotalEpisodes.value = totalEpisodes
  if (index !== undefined) {
    innerCurrentIndex.value = index
  }
  initSeriesList()
  loadDataBySelectIndex(index ?? innerCurrentIndex.value)
}

function updateCurrentIndex(index: number) {
  innerCurrentIndex.value = index
  loadDataBySelectIndex(index)
  setSelectedIndex(index)
}
function initSeriesList() {
  const defaultData = generateDefaultData(innerTotalEpisodes.value, 0)
  // 如果已经有缓存数据，合并缓存数据
  if (pageDataCache.value.size > 0) {
    for (const [page, data] of pageDataCache.value.entries()) {
      const startIndex = page * props.pageSize
      if (startIndex < innerTotalEpisodes.value) {
        for (let i = 0; i < data.length; i++) {
          const index = startIndex + i
          if (index < innerTotalEpisodes.value) {
            // 合并数据，保留默认属性
            const isPlaying = index === innerCurrentIndex.value
            defaultData[index] = { ...defaultData[index], ...data[i], isPlaying }
          }
        }
      }
    }
  }
  seriesList.value = defaultData
}

// 更新指定页的数据到 seriesList
function updateSeriesListWithPageData(page: number, data: SeriesItemLoad[]) {
  console.log(TAG, `更新第${page}页数据到 seriesList，共${data.length}条`)
  const startIndex = page * props.pageSize
  if (startIndex >= innerTotalEpisodes.value) return

  // 创建新数组以触发引用更新，确保 QtListViewPro 能监听到变化
  const newList = [...seriesList.value]
  let hasChange = false

  for (let i = 0; i < data.length; i++) {
    const index = startIndex + i
    if (index < innerTotalEpisodes.value) {
      // 合并数据，保留默认属性
      const isPlaying = index === innerCurrentIndex.value
      newList[index] = { ...newList[index], ...data[i], isPlaying }
      hasChange = true
    }
  }

  if (hasChange) {
    seriesList.value = newList
  }
  console.log(TAG, `seriesList`, seriesList.value)
}

// 生成默认数据
function generateDefaultData(count: number, startIndex: number = 0): SeriesItem[] {
  return Array.from({ length: count }, (_, index) => {
    const globalIndex = startIndex + index
    const isPlaying = globalIndex === innerCurrentIndex.value
    const baseItem: SeriesItem = {
      type: 1,
      episode: globalIndex + 1,
      title: `第${globalIndex + 1}集`,
      subtitle: `时长: ${Math.floor(Math.random() * 60) + 30}分钟`,
      imageUrl: '',
      isPlaying,
      decoration: {
        left: globalIndex === 0 ? 80 : 0,
        right: globalIndex === innerTotalEpisodes.value - 1 ? 80 : 16,
      },
    }

    // 根据样式类型返回不同的数据字段
    switch (props.seriesStyle) {
      case SeriesStyleType.NUMBER_ONLY:
        return { ...baseItem, episode: globalIndex + 1 }
      case SeriesStyleType.TEXT_ONLY:
        return { ...baseItem, title: `第${globalIndex + 1}集 标题内容` }
      case SeriesStyleType.IMAGE_LEFT_TEXT_RIGHT:
        return {
          ...baseItem,
          title: `第${globalIndex + 1}集`,
          subtitle: `时长: ${Math.floor(Math.random() * 60) + 30}分钟`,
        }
      case SeriesStyleType.IMAGE_TOP_TEXT_BOTTOM:
        return { ...baseItem, title: `第${globalIndex + 1}集` }
      default:
        return baseItem
    }
  })
}

function onGroupItemFocused(event: any) {
  const index = event.position
  const isFocused = event.isFocused
  if (isFocused) {
    // 更新当前选中的分组索引
    currentFocusIndex.value = -1
    const lastGroupFocusIndex = currentGroupFocusIndex.value
    currentGroupIndex.value = index
    currentGroupFocusIndex.value = index
    const startIndex = index * props.groupSize
    const endIndex = Math.min((index + 1) * props.groupSize - 1, innerTotalEpisodes.value - 1)
    emit('group-focused', index, startIndex, endIndex)

    // 分组列表焦点移动时，联动分集列表滚动到该分组的第一个集数
    if (lastGroupFocusIndex != -1) {
      scrollSeriesListToGroup(index)
    }

    // 检查并加载数据
    const pageIndex = Math.floor(startIndex / props.pageSize)
    checkAndLoadPageData(pageIndex)
  }
}
function onGroupFocusLost() {
  currentGroupFocusIndex.value = -1
}
function onGroupItemClick(event: any) {
  const index = event.position
  if (index !== undefined) {
    const startIndex = index * props.groupSize
    const endIndex = Math.min((index + 1) * props.groupSize - 1, innerTotalEpisodes.value - 1)
    emit('group-click', index, startIndex, endIndex)

    // 点击分组后，跳转到该分组的第一个集数
    setSelectedIndex(startIndex)

    // 检查并加载数据
    const pageIndex = Math.floor(startIndex / props.pageSize)
    checkAndLoadPageData(pageIndex)
  }
}

async function onItemFocused(event: any) {
  console.log(TAG, 'onItemFocused:', event)
  const index = event.position
  const isFocused = event.isFocused

  if (isFocused) {
    currentGroupFocusIndex.value = -1
    console.log(TAG, 'onItemFocused:' + index)
    if (index !== undefined) {
      // 更新当前选中的焦点索引
      currentFocusIndex.value = index
      emit('item-focused', index)
      // 计算当前索引所在的页数
      const newIndex = index
      const currentPage = Math.floor(newIndex / props.pageSize)

      // 检查是否需要加载新页面的数据
      await checkAndLoadPageData(currentPage)
    }
  }
}
watch(
  () => [currentFocusIndex.value, currentGroupFocusIndex.value],
  ([newVal, newGroupVal], [oldVal, oldGroupVal]) => {
    //分集列表有焦点，分组没有焦点
    if (newVal != -1 && newGroupVal == -1) {
      // 更新当前分组索引
      const groupIndex = Math.floor(newVal / props.groupSize)
      currentGroupIndex.value = groupIndex
      // 设置分组列表选中项
      setGroupIndex(groupIndex)

      // 分组列表跟随分集焦点联动滚动
      if (oldVal != -1) {
        scrollGroupListToIndex(groupIndex)
      }
    } else {
      //分集列表无焦点分组有焦点或者两者都无焦点
      if ((newVal == -1 && currentGroupIndex.value != -1) || (newVal == -1 && newGroupVal == -1)) {
        clearGroupSelection()
      }
    }
  }
)
function onFocusLost() {
  currentFocusIndex.value = -1
}

function onItemClick(event: any) {
  const index = event.position
  if (index !== undefined) {
    emit('item-click', index)
  }
}

function setSelectedIndex(index: number) {
  if (listViewRef.value && index >= 0 && index < innerTotalEpisodes.value) {
    listViewRef.value.setItemSelected(index, true)
    console.log(TAG, `setSelectedIndex index=${index}`)

    // Update isPlaying state in data
    const newList = [...seriesList.value]
    let hasChange = false
    newList.forEach((item, i) => {
      const isPlaying = i === innerCurrentIndex.value
      if (item.isPlaying !== isPlaying) {
        newList[i] = { ...item, isPlaying }
        hasChange = true
      }
    })

    if (hasChange) {
      seriesList.value = newList
    }
  }
}
function requestChildFocus(index: number) {
  console.log(TAG, `requestChildFocus index=${index}`)
  if (listViewRef.value && index >= 0 && index < innerTotalEpisodes.value) {
    listViewRef.value.requestChildFocus(index)
    currentFocusIndex.value = index
  }
}
function requestFocus() {
  // 如果有当前选中的焦点，则选中当前焦点
  // 如果没有当前选中，则选中第一个
  console.log(TAG, `requestFocus`)
  const targetIndex = currentFocusIndex.value >= 0 ? currentFocusIndex.value : 0
  if (listViewRef.value && targetIndex >= 0 && targetIndex < innerTotalEpisodes.value) {
    listViewRef.value.requestChildFocus(targetIndex)
  }
}

function requestGroupFocus() {
  console.log(TAG, `requestGroupFocus`)
  // 如果有当前选中的分组，则选中当前分组
  // 如果没有当前选中，则选中第一个分组
  const targetIndex = currentGroupIndex.value >= 0 ? currentGroupIndex.value : 0
  const groupCount = Math.ceil(innerTotalEpisodes.value / props.groupSize)
  if (groupListViewRef.value && targetIndex >= 0 && targetIndex < groupCount) {
    groupListViewRef.value.requestChildFocus(targetIndex)
  }
}

function setGroupIndex(index: number) {
  const groupCount = Math.ceil(innerTotalEpisodes.value / props.groupSize)
  if (groupListViewRef.value && index >= 0 && index < groupCount) {
    groupListViewRef.value.setItemSelected(index, true)
    currentGroupIndex.value = index
  }
}

function scrollGroupListToIndex(groupIndex: number) {
  const groupCount = Math.ceil(innerTotalEpisodes.value / props.groupSize)
  if (groupListViewRef.value && groupIndex >= 0 && groupIndex < groupCount) {
    // 计算一屏幕可见的分组数量
    const visibleCount = getVisibleGroupCount()
    console.log(TAG, `visibleCount=${visibleCount}`)
    // 智能滚动策略：确保目标分组在可见区域内
    let scrollPosition = groupIndex

    // 如果目标分组不在当前可见区域内，调整滚动位置
    scrollPosition = Math.max(0, groupIndex - Math.floor(visibleCount / 2) - 1)

    // 滚动分组列表到指定位置
    groupListViewRef.value.scrollToPosition(scrollPosition)

    // 设置分组选中状态
    currentGroupIndex.value = groupIndex

    console.log(
      TAG,
      `滚动分组列表: 目标索引=${groupIndex}, 可见数量=${visibleCount}, 滚动位置=${scrollPosition}`
    )
  }
}

function scrollSeriesListToGroup(groupIndex: number) {
  const groupCount = Math.ceil(innerTotalEpisodes.value / props.groupSize)
  if (listViewRef.value && groupIndex >= 0 && groupIndex < groupCount) {
    // 计算该分组的起始集数索引
    const startIndex = groupIndex * props.groupSize

    // 使用新方法获取一屏幕可见的分集数量
    const visibleSeriesCount = getVisibleSeriesCount()

    // 如果目标集数不在当前可见区域内，调整滚动位置
    const scrollPosition = Math.max(0, startIndex - Math.floor(visibleSeriesCount / 2))
    console.log(TAG, `scrollPosition=${scrollPosition}`)
    // 滚动分集列表到指定位置
    listViewRef.value.scrollToPosition(scrollPosition)

    // 设置分集选中状态
    setSelectedIndex(startIndex)

    console.log(
      TAG,
      `滚动分集列表: 分组索引=${groupIndex}, 起始集数=${startIndex}, 可见数量=${visibleSeriesCount}, 滚动位置=${scrollPosition}`
    )
  }
}
function clearGroupSelection() {
  if (groupListViewRef.value) {
    //清除选中
    groupListViewRef.value.setItemSelected(-1, false)
    // 重置当前分组索引
    currentGroupIndex.value = -1
    console.log(TAG, '清除分组列表选中状态')
  }
}

defineExpose({
  setSelectedIndex,
  requestFocus,
  requestChildFocus,
  requestGroupFocus,
  setGroupIndex,
  scrollGroupListToIndex,
  scrollSeriesListToGroup,
  updateTotalEpisodes,
  updateCurrentIndex,
})
</script>

<style scoped>
.series-container {
  display: flex;
  flex-direction: column;
}

.series-list {
  margin-bottom: 10px; /* 分集列表和分组列表之间的间距 */
}

.group-list {
  margin-top: 10px; /* 分组列表和分集列表之间的间距 */
}
.flex {
  display: flex;
}
.flex-row {
  flex-direction: row;
}
.items-center {
  align-items: center;
}
.flex-col {
  flex-direction: column;
}
.justify-center {
  justify-content: center;
}
</style>
