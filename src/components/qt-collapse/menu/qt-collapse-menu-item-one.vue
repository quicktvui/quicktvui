<template>
  <qt-column class="qt-collapse-menu-item-root" :focusable="false">
    <qt-row class="qt-collapse-menu-item-title-root">
      <span class="qt-collapse-menu-item-title" :style="{ opacity: isExpand ? 1 : 0.7 }">剧集</span>
    </qt-row>
    <qt-animation ref="animationRef" class="qt-collapse-menu-animation-view-css">
      <div class="qt-collapse-menu-item-content">
        <qt-button text="第一季" class="qt-collapse-menu-item-button" />
        <qt-button text="第二季" class="qt-collapse-menu-item-button" />
        <qt-button text="第三季" class="qt-collapse-menu-item-button" />
        <qt-button text="第四季" class="qt-collapse-menu-item-button" />
        <qt-button text="第五季" class="qt-collapse-menu-item-button" />
      </div>
    </qt-animation>
  </qt-column>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { ESLogLevel, useESLog, useESToast } from '@extscreen/es3-core'
import { ref } from 'vue'
import { QTAnimationPropertyName, QTAnimationValueType, QTIAnimation } from '@quicktvui/quicktvui3'

const TAG = 'QTCollapseItem'

export default defineComponent({
  name: 'qt-collapse-menu-item-one',
  emits: [],
  setup(props, context) {
    const animationRef = ref<QTIAnimation>()
    const isExpand = ref<boolean>(false)
    let alpha = 1

    function show(delay) {
      if (alpha == 1) {
        return
      }
      animationRef.value?.objectAnimator(
        '1',
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
        [alpha, 1],
        delay,
        -1,
        0,
        false,
        false
      )
      animationRef.value?.startAnimator('1')
      alpha = 1
    }

    function dismiss(delay) {
      if (alpha == 0) {
        return
      }
      animationRef.value?.objectAnimator(
        '2',
        QTAnimationValueType.QT_ANIMATION_VALUE_TYPE_FLOAT,
        QTAnimationPropertyName.QT_ANIMATION_PROPERTY_NAME_ALPHA,
        [alpha, 0],
        delay,
        -1,
        0,
        false,
        false
      )
      animationRef.value?.startAnimator('2')
      alpha = 0
    }

    function onCollapseItemExpand(value: boolean) {
      console.log('---------onCollapseItemExpand------one------>>>', value)
      isExpand.value = value
      if (value) {
        show(500)
      } else {
        dismiss(500)
      }
    }

    return {
      isExpand,
      animationRef,
      onCollapseItemExpand,
    }
  },
})
</script>

<style scoped>
.qt-collapse-menu-item-root {
  width: 1920px;
  height: 200px;
  background-color: transparent;
}

.qt-collapse-menu-item-title-root {
  height: 50px;
  width: 1920px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  background-color: transparent;
  z-index: 1000;
}

.qt-collapse-menu-item-title {
  height: 50px;
  width: 100px;
  font-size: 30px;
  color: white;
  text-align: left;
  margin-left: 90px;
}

.qt-collapse-menu-item-content {
  width: 1920px;
  height: 150px;
  padding-left: 70px;
  padding-right: 70px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}
.qt-collapse-menu-item-button {
  margin: 20px;
}
.qt-collapse-menu-animation-view-css {
}
</style>
