<template>
  <tv-list
    ref="waterfallRef"
    class="qt-waterfall-root-css"
    keyName="_id"
    :list="'${' + tvItemListName + '}'"
    :clipChildren="false"
    :clipPadding="false"
    :listenBoundEvent="true"
    negativeKeyTime="30"
    postContentDelay="500"
    @scroll="onScroll"
    @item-click="onItemClick"
    @item-focused="onItemFocused"
    @item-bind="onSectionBind"
    @item-attached="onSectionAttached"
    @item-detached="onSectionDetached"
    :focusMemory="false"
    :cachePool="cachePool"
    :preload="1"
    :checkScrollOffsetOnStateChanged="true"
    :makeChildVisibleType="visibleType"
    :scrollThresholdVertical="50"
    :scrollEventThrottle="16"
    :enableSelectOnFocus="false"
    advancedFocusSearchSpan="1"
    :scrollYLesserReferenceValue="scrollYLesserReferenceValue"
    :scrollYGreaterReferenceValue="scrollYGreaterReferenceValue"
    @scrollYGreaterReference="onScrollYGreaterReference"
    @scrollYLesserReference="onScrollYLesserReference"
    shakePreCheckNumber="4"
    @onPluginLoadSuccess="onPluginLoadSuccess"
    @onPluginLoadError="onPluginLoadError"
    :blockFocusDirections="blockFocusDirections"
    @scrollStateChanged="onScrollStateChanged"
  >
    <!-- 普通版块-->
    <flex-section
      v-if="qtTabSectionEnable.flexSectionEnable"
      :cache-pool="itemsPool"
      :enablePlaceholder="enablePlaceholder"
      :flex-section="qtTabSectionEnable.flexSection"
      @focus="onItemFocused"
    >
      <slot name="item" />
    </flex-section>

    <item-store v-if="qtTabSectionEnable.itemStoreEnable">
      <slot name="shared-item" />
    </item-store>

    <!--一行滚动 多级tab-->
    <list-section
      v-if="qtTabSectionEnable.listSectionEnable"
      :cache-pool="itemsPool"
      @focus="onItemFocused"
      :list-section="qtTabSectionEnable.listSection"
      :enablePlaceholder="enablePlaceholder"
    >
      <slot name="list-item" />
    </list-section>

    <!-- loading-->
    <loading-section v-if="qtTabSectionEnable.loadingSectionEnable" />

    <!-- end -->
    <end-section v-if="qtTabSectionEnable.endSectionEnable" />

    <!-- blank -->
    <blank-section v-if="qtTabSectionEnable.blankSectionEnable" />

    <!-- card -->
    <card-section v-if="qtTabSectionEnable.cardSectionEnable" @focus="onItemFocused" />

    <!-- plugin -->
    <plugin-section v-if="qtTabSectionEnable.pluginSectionEnable" />

    <!-- vue -->
    <vue-section
      v-if="qtTabSectionEnable.vueSectionEnable"
      :block-focus-directions="vueSectionBlockFocusDirections"
    >
      <slot name="vue-section" />
    </vue-section>

    <slot name="section" />
  </tv-list>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { qtWatchAll, qtFilterChangeMap } from '../qtListen/index'

import flex_section from './section/flex-section.vue'
import list_section from './section/list-section.vue'
import loading_section from './section/loading-section.vue'
import end_section from './section/end-section.vue'
import section_title from './section/section-title.vue'
import blank_section from './section/blank-section.vue'
import card_section from './section/card-section.vue'
import vue_section from './section/vue-section.vue'
import plugin_section from './section/plugin-section.vue'

import { QTWaterfall } from './core/QTWaterfall'
import { ref, onBeforeUnmount, onMounted, toRaw } from 'vue'
import { generateSectionList, generateSection } from './core/QTWaterfallDataAdapter'
import { QTWaterfallSection } from './core/QTWaterfallSection'
import { ESIListView } from '@extscreen/es3-component'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { QTWaterfallItem } from './core/QTWaterfallItem'
import { createQTWaterfallDataManager, QTWaterfallDataManager } from './core/QTWaterfallDataManager'
import { QTWaterfallIndex } from './core/QTWaterfallIndex'
import { QTWaterfallEvent } from './core/QTWaterfallEvent'
import { QTWaterfallVisibleType } from './core/QTWaterfallVisibleType'
import useBaseView from '../base/useBaseView'
import { QTPluginViewEvent } from '../plugin/QTIPluginView'

const TAG = 'qt-waterfall'

export default defineComponent({
  name: 'qt-waterfall',
  emits: [
    'onScroll',
    'onScrollStateChanged',
    'onItemClick',
    'onItemFocused',
    'onSectionBind',
    'onSectionAttached',
    'onSectionDetached',
    'onScrollYGreaterReference',
    'onScrollYLesserReference',
    'onPluginLoadSuccess',
    'onPluginLoadError',
  ],
  props: {
    enablePlaceholder: {
      type: Boolean,
      default: true,
    },
    blockFocusDirections: {
      type: Array,
      default: () => ['down'],
    },
    vueSectionBlockFocusDirections: {
      type: Array,
      default: () => ['left', 'right'],
    },
    customPool: {
      type: Object,
      default: () => {},
    },
    customItemPool: {
      type: Object,
      default: () => {},
    },
    scrollYLesserReferenceValue: {
      type: Number,
      default: 0,
    },
    scrollYGreaterReferenceValue: {
      type: Number,
      default: 0,
    },
    listData: {
      type: Array,
      required: false,
    },
    pStype: { type: Object, default: () => ({}) },
    qtTabSectionEnable: {
      type: Object,
      default: () => {
        return {
          flexSectionEnable: true,
          flexSection: {
            qtPosterEnable: true,
            qtPluginItemEnable: true,
            cardItemEnable: true,
          },
          listSectionEnable: true,
          listSection: {
            qtPosterEnable: true,
            cardItemEnable: true,
          },
          loadingSectionEnable: true,
          endSectionEnable: true,
          blankSectionEnable: true,
          cardSectionEnable: true,
          pluginSectionEnable: true,
          vueSectionEnable: true,
          itemStoreEnable: false,
        }
      },
    },
    tvItemListName: {
      type: String,
      required: false,
    },
  },
  setup(props, context) {
    const log = useESLog()
    let defaultPool = {
      name: 'Waterfall' + Date.now(),
      size: {
        20008: 10,
      },
    }
    const cachePool = { ...defaultPool, ...props.customPool }
    // log.e("WaterfallVue","waterfall cachePool :"+JSON.stringify(cachePool))
    const defaultItemsPool = {
      name: 'waterfallItems' + Date.now(),
      size: {
        1: 30,
      },
    }
    const itemsPool = { ...defaultItemsPool, ...props.customItemPool }
    // log.e("WaterfallVue","itemsPool  :"+JSON.stringify(itemsPool))
    //------------------------------------------------------
    const visibleType = ref<QTWaterfallVisibleType>(
      QTWaterfallVisibleType.QT_WATERFALL_VISIBLE_TYPE_CENTER
    )
    const waterfallRef = ref<ESIListView>()
    let waterfall: QTWaterfall

    const dataManager: QTWaterfallDataManager = createQTWaterfallDataManager()

    //---------------------------------初始化操作------------------------------------
    function init(data: QTWaterfall) {
      waterfall = data
      //
      if (data.visibleType) {
        visibleType.value = data.visibleType
      }
    }

    function getSectionList(): Array<QTWaterfallSection> {
      return dataManager.getSectionList()
    }

    //---------------------------------板块操作------------------------------------
    function setSectionList(sectionList: Array<QTWaterfallSection>) {
      if (!waterfall) {
        return
      }
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------1---setSectionList-------------->>>')
      }
      //
      dataManager.destroy()

      const index: QTWaterfallIndex = dataManager.addSectionList(sectionList)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------2---setSectionList-------------->>>', index)
      }
      const itemList = generateSectionList(waterfall, sectionList)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------setSectionList-----最终数据--------->>>', itemList)
      }
      waterfallRef.value?.setListData(itemList)
    }

    function addSectionList(sectionList: Array<QTWaterfallSection>) {
      if (!waterfall) {
        return
      }
      const index: QTWaterfallIndex = dataManager.addSectionList(sectionList)
      const itemList = generateSectionList(waterfall, sectionList)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------addSectionList-----最终数据--------->>>', itemList)
      }
      waterfallRef.value?.addListData(itemList)
    }

    function deleteSection(position: number, count: number): void {
      const index: QTWaterfallIndex = dataManager.deleteSection(position, count)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------deleteSection-----最终数据--------->>>', index)
      }
      waterfallRef.value?.deleteItem(position, count)
    }

    function updateSection(sectionIndex: number, section: QTWaterfallSection): void {
      const index: QTWaterfallIndex = dataManager.updateSection(sectionIndex, section)
      const updateSection = generateSection(waterfall, section)
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          '----------updateSection-----最终数据--------->>>' + 'sectionIndex:',
          sectionIndex,
          'updateSection:',
          updateSection
        )
      }
      waterfallRef.value?.updateItem(sectionIndex, updateSection)
    }

    function updateSectionList(
      sectionIndex: number,
      count: number,
      sectionList: Array<QTWaterfallSection>
    ): void {
      const sectionUpdateList: Array<QTWaterfallSection> = []
      for (let i = 0; i < sectionList.length; i++) {
        const section = sectionList[i]
        const index: QTWaterfallIndex = dataManager.updateSection(sectionIndex + i, section)
        const sectionUpdate = generateSection(waterfall, section)
        if (sectionUpdate) {
          sectionUpdateList.push(sectionUpdate)
        }
      }
      waterfallRef.value?.updateItemList(sectionIndex, count, sectionUpdateList)
    }

    function getSection(sectionIndex: number): QTWaterfallSection | undefined {
      return dataManager.getSection(sectionIndex)
    }

    //--------------------------------ITEM操作-------------------------------------
    function addItemList(sectionIndex: number, itemList: Array<QTWaterfallItem>): void {
      const index: QTWaterfallIndex = dataManager.addItemList(sectionIndex, itemList)
      const section = dataManager.getSection(sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        waterfallRef.value?.updateItem(sectionIndex, updateSection)
      }
    }

    function deleteItem(sectionIndex: number, position: number, count: number): void {
      const index: QTWaterfallIndex = dataManager.deleteItem(sectionIndex, position, count)
      const section = dataManager.getSection(sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        waterfallRef.value?.updateItem(sectionIndex, updateSection)
      }
    }

    function updateItem(sectionIndex: number, itemIndex: number, item: QTWaterfallItem): void {
      const index: QTWaterfallIndex = dataManager.updateItem(sectionIndex, itemIndex, item)
      const section = dataManager.getSection(sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        waterfallRef.value?.updateItem(sectionIndex, updateSection)
      }
    }

    function updateItemList(
      sectionIndex: number,
      itemIndex: number,
      count: number,
      itemList: Array<QTWaterfallItem>
    ): void {
      const index: QTWaterfallIndex = dataManager.updateItemList(
        sectionIndex,
        itemIndex,
        count,
        itemList
      )
      const section = dataManager.getSection(sectionIndex)
      if (section) {
        const updateSection = generateSection(waterfall, section)
        waterfallRef.value?.updateItem(sectionIndex, updateSection)
      }
    }

    function getItem(sectionIndex: number, itemIndex: number): QTWaterfallItem | undefined {
      return dataManager.getItem(sectionIndex, itemIndex)
    }

    //-------------------------------------------------------------------
    function destroy() {
      waterfallRef.value?.destroy()
    }

    function clearPostTask() {
      waterfallRef.value?.clearPostTask()
    }

    function pausePostTask() {
      waterfallRef.value?.pausePostTask()
    }

    function resumePostTask() {
      waterfallRef.value?.pausePostTask()
    }

    function scrollToTop() {
      waterfallRef.value?.scrollToTop()
    }

    function scrollToIndex(
      x: number,
      y: number,
      animated?: boolean,
      duration?: number,
      offset?: number
    ): void {
      waterfallRef.value?.scrollToIndex(x, y, animated, duration, offset)
    }

    function scrollToPosition(position: number, offset?: number): void {
      waterfallRef.value?.scrollToPosition(position, offset)
    }

    function scrollToPositionWithOffset(position: number, offset: number, animated: boolean): void {
      waterfallRef.value?.scrollToPositionWithOffset(position, offset, animated)
    }
    //-------------------------------------------------------------------
    function onScroll(e) {
      e.stopPropagation()
      let scrollX = e.offsetX
      let scrollY = e.offsetY
      context.emit('onScroll', scrollX, scrollY)
    }

    function onItemClick(e: QTWaterfallEvent) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          '----------onItemClick-------------->>>',
          e,
          'sectionIndex:' + e.parentPosition + '  ' + 'position:' + e.position + '  '
        )
      }
      context.emit('onItemClick', e.parentPosition, e.position, e.item, e)
    }

    function onItemFocused(e: QTWaterfallEvent) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(
          TAG,
          '----------onItemFocused-------------->>>',
          e,
          'sectionIndex:' +
            e.parentPosition +
            '  ' +
            'position:' +
            e.position +
            '  ' +
            'isFocused:' +
            e.isFocused +
            '  '
        )
      }
      context.emit('onItemFocused', e.parentPosition, e.position, e.isFocused, e.item, e)
    }

    function onSectionBind(e) {
      if (e) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onSectionBind-------------->>>', e)
        }
        let pageIndex = e.pageIndex ?? -1
        context.emit('onSectionBind', pageIndex, e.position)
      }
    }

    function onSectionAttached(e) {
      if (e) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onSectionAttached-------------->>>', e)
        }
        let pageIndex = e.pageIndex ?? 0
        context.emit('onSectionAttached', pageIndex, e.position)
      }
    }

    function onSectionDetached(e) {
      if (e) {
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----------onSectionDetached-------------->>>', e)
        }
        let pageIndex = e.pageIndex ?? 0
        context.emit('onSectionDetached', pageIndex, e.position)
      }
    }

    function onScrollStateChanged(e) {
      let scrollY = e.offsetY
      let offsetX = e.offsetX
      let newState = e.newState
      let oldState = e.oldState
      context.emit('onScrollStateChanged', offsetX, scrollY, newState, oldState)
    }

    function onScrollYGreaterReference() {
      context.emit('onScrollYGreaterReference')
    }

    function onScrollYLesserReference() {
      context.emit('onScrollYLesserReference')
    }
    //-------------------------------------------------------------------------
    function setListData(data: any) {
      waterfallRef.value?.setListData(data)
    }

    const watchRes = qtWatchAll(props.listData, {
      resetValue(newData) {
        init(props.pStype as any)
      },
      init(datas) {
        const itemList = generateSectionList(waterfall, datas, true)
        waterfallRef.value?.setListData(itemList)
      },
      add(datas) {
        const itemList = generateSectionList(waterfall, datas, true)
        waterfallRef.value?.addListData(itemList)
      },
      update(position, dataMaps) {
        const datas = qtFilterChangeMap(1, dataMaps.datas)
        // console.log('lsj-update---', position, datas, dataMaps.names)
        // if(dataMaps.deth === 1 && dataMaps.names.size){
        //   const updateSection = generateSection(waterfall, _propsListData[0], true)
        //   waterfallRef.value?.updateItemProps(0, 'title', oldSection)
        // } else {
        const sectionUpdateList = generateSectionList(waterfall, Array.from(datas.values()), true)
        waterfallRef.value?.updateItemList(position, datas.size, sectionUpdateList)
        // waterfallRef.value?.updateItem(position, sectionUpdateList[0]) //updateItem无法更新板块的layout高度
        // }
      },
      insert(position, datas) {
        const sectionList = generateSectionList(waterfall, datas, true)
        waterfallRef.value?.addItem(position, sectionList)
      },
      delete(position, count) {
        waterfallRef.value?.deleteItem(position, count)
      },
      clear() {
        waterfallRef.value?.setListData([])
      },
    })
    onMounted(() => {
      if (props.listData && props.listData.length) {
        const itemList = generateSectionList(waterfall, toRaw(props.listData) as any, true)
        waterfallRef.value?.setListData(itemList)
      }
    })
    onBeforeUnmount(() => {
      watchRes?.stop()
    })
    //-------------------------------------------------------------------------

    function onPluginLoadSuccess(event: QTPluginViewEvent) {
      context.emit('onPluginLoadSuccess', event)
    }

    function onPluginLoadError(event: QTPluginViewEvent) {
      context.emit('onPluginLoadError', event)
    }
    return {
      waterfallRef,
      visibleType,
      init,
      getSectionList,
      setSectionList,
      addSectionList,
      deleteSection,
      updateSection,
      updateSectionList,
      getSection,
      addItemList,
      deleteItem,
      updateItem,
      updateItemList,
      getItem,
      cachePool,
      itemsPool,
      onScroll,
      onItemClick,
      onItemFocused,
      onSectionBind,
      onSectionAttached,
      onSectionDetached,
      onScrollStateChanged,
      resumePostTask,
      pausePostTask,
      clearPostTask,
      destroy,
      scrollToTop,
      setListData,
      onScrollYGreaterReference,
      onScrollYLesserReference,
      onPluginLoadSuccess,
      onPluginLoadError,
      scrollToIndex,
      scrollToPosition,
      scrollToPositionWithOffset,
      ...useBaseView(waterfallRef),
    }
  },

  components: {
    'flex-section': flex_section,
    'list-section': list_section,
    'section-title': section_title,
    'loading-section': loading_section,
    'end-section': end_section,
    'blank-section': blank_section,
    'card-section': card_section,
    'vue-section': vue_section,
    'plugin-section': plugin_section,
  },
})
</script>

<style>
.qt-waterfall-root-css {
}
</style>
