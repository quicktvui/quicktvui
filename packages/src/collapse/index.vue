<template>
  <div
    class="qt-collapse-root-css"
    ref="viewRef"
    :clipChildren="false"
    :clipPadding="false"
    :style="{ width: collapseWidth, height: collapseHeight }"
  >
    <qt-animation
      v-for="(item, index) in collapseItemComponentList"
      :ref="(el) => initAnimComponentRef(el, item, index)"
      class="qt-collapse-item-css"
    >
      <component
        :is="item"
        :key="item.name"
        class="qt-collapse-item-css"
        :ref="(el) => initComponentRef(el, item, index)"
      />
    </qt-animation>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog } from '@extscreen/es3-core'
import { QTICollapseItem } from './core/QTICollapseItem'
import { QTCollapseItem } from './core/QTCollapseItem'
import { QTCollapse } from './core/QTCollapse'
import { nextTick, ref } from 'vue'
import { QTIAnimation } from '../animation/QTIAnimation'
import {
  QTAnimationInterpolatorType,
  QTAnimationPropertyName,
  QTAnimationValueType,
} from '../animation/types'
import useBaseView from '../base/useBaseView'

const TAG = 'QTCollapse'

export default defineComponent({
  name: 'qt-collapse',
  emits: ['onCollapseItemExpand'],
  setup(props, context) {
    const log = useESLog()
    const viewRef = ref()

    let collapseItemComponentList = ref()

    let collapseItemList: Array<QTCollapseItem>
    let collapseItemIndex: number
    const collapseWidth = ref<number>(0)
    const collapseHeight = ref<number>(0)
    let expandDuration: number = 200

    const componentRefs: Record<string, QTICollapseItem> = {}

    function initComponentRef(el: QTICollapseItem, item: { name: string }, index: number) {
      if (el) {
        componentRefs[`${index}`] = el
      }
    }

    const animComponentRefs: Record<string, QTIAnimation> = {}

    function initAnimComponentRef(el: QTIAnimation, item: { name: string }, index: number) {
      if (el) {
        animComponentRefs[`${index}`] = el
      }
    }

    function getAnimItem(index: number): QTIAnimation {
      return animComponentRefs[`${index}`]
    }

    function init(collapse: QTCollapse): void {
      collapseItemComponentList.value = context.slots.default && context.slots.default()

      collapseItemIndex = collapse.defaultIndex ?? 0
      collapseItemList = collapse.itemList
      collapseWidth.value = collapse.width
      collapseHeight.value = collapse.height
      expandDuration = collapse.expandDuration ?? 200

      if (collapseItemIndex < 0) {
        collapseItemIndex = 0
      }

      if (collapseItemIndex >= collapseItemList.length) {
        collapseItemIndex = collapseItemList.length - 1
      }

      initCollapseItem()
      nextTick(() => {
        expandItemDelay(collapseItemIndex, 0, true)
      })
    }

    function initCollapseItem() {
      if (!collapseItemList || collapseItemList.length <= 0) {
        return
      }
      const length = collapseItemList.length
      let itemY: number = 0
      for (let i = length - 1; i >= 0; i--) {
        const item = collapseItemList[i]
        itemY = itemY + item.height
        item.__y = collapseHeight.value - itemY
        item.__translationY = 0
      }

      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----initCollapseItem---->>>>', collapseItemList)
      }
    }

    function expandItem(index: number) {
      expandItemDelay(index, expandDuration)
    }

    function expand() {
      const length = collapseItemList.length
      for (let i = length - 1; i >= 0; i--) {
        const item = collapseItemList[i]
        try {
          const itemRef: QTICollapseItem | undefined = getItem(i)
          if (itemRef) {
            itemRef.onCollapseItemExpand(true, false)
          }
        } catch (e) {}
        const animItemRef: QTIAnimation = getAnimItem(i)
        if (animItemRef) {
          translationItem(i + '', item, animItemRef, item.__translationY, 0, 0)
        }
      }
    }

    function collapse() {
      const length = collapseItemList.length
      const item = collapseItemList[length - 1]
      const itemY = item.__y
      const translationY = collapseHeight.value - item.height - itemY
      let itemTotalY: number = 0

      for (let i = length - 1; i >= 0; i--) {
        const item = collapseItemList[i]
        const itemCollapseHeight = item.collapseHeight
        itemTotalY = itemTotalY + itemCollapseHeight
        try {
          const itemRef: QTICollapseItem | undefined = getItem(i)
          if (itemRef) {
            itemRef.onCollapseItemExpand(false, false)
          }
        } catch (e) {}

        const animItemRef: QTIAnimation = getAnimItem(i)
        if (animItemRef) {
          translationItem(
            i + '',
            item,
            animItemRef,
            item.__translationY,
            translationY + itemTotalY,
            0
          )
        }
      }
    }

    function expandItemDelay(index: number, delay: number, init: boolean = false) {
      const item = collapseItemList[index]
      const itemY = item.__y
      const translationY = collapseHeight.value - item.height - itemY
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '-------expandItem------->>>>', index, translationY, itemY)
      }
      //
      let itemTotalY: number = 0
      const length = collapseItemList.length

      for (let i = length - 1; i >= 0; i--) {
        const item = collapseItemList[i]
        const itemHeight = item.height
        const itemCollapseHeight = item.collapseHeight

        if (i < index) {
          itemTotalY = itemTotalY + itemCollapseHeight
        }

        try {
          const itemRef: QTICollapseItem | undefined = getItem(i)
          if (itemRef) {
            itemRef.onCollapseItemExpand(i == index, init)
          }
        } catch (e) {}

        const animItemRef: QTIAnimation = getAnimItem(i)
        if (animItemRef) {
          if (log.isLoggable(ESLogLevel.DEBUG)) {
            log.d(
              TAG,
              '-------expandItem----translationY--->>>>',
              item,
              i,
              item.__translationY,
              translationY + itemTotalY
            )
          }
          translationItem(
            i + '',
            item,
            animItemRef,
            item.__translationY,
            translationY + itemTotalY,
            delay
          )
        }
      }

      try {
        context.emit('onCollapseItemExpand', index, item, init)
      } catch (e) {}
    }

    function translationItem(
      id: string,
      item: QTCollapseItem,
      animItemRef: QTIAnimation,
      fromY: number,
      toY: number,
      duration: number
    ) {
      animItemRef.objectAnimator2(
        id,
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_TRANSLATION_Y,
        fromY,
        toY,
        duration,
        -1,
        0,
        false,
        false,
        {
          type: QTAnimationInterpolatorType.QT_ACCELERATE_INTERPOLATOR,
          params: [2],
        }
      )
      animItemRef.startAnimator(id)
      item.__translationY = toY
    }

    function getItem(index: number): QTICollapseItem | undefined {
      return componentRefs[`${index}`]
    }

    return {
      collapseItemComponentList,
      initComponentRef,
      initAnimComponentRef,
      init,
      getItem,
      expandItem,
      collapse,
      expand,
      collapseWidth,
      collapseHeight,
      viewRef,
      ...useBaseView(viewRef),
    }
  },
})
</script>

<style scoped>
.qt-collapse-root-css {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
}

.qt-collapse-item-css {
}
</style>
