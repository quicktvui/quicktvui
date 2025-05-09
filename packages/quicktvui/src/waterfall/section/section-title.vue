<template>
  <div
    class="section-title-css"
    :blockFocusDirections="['left', 'right']"
    :clipChildren="false"
    :clipPadding="false"
    :type="type"
    keyName="_id"
    :focusable="false"
    :bringFocusChildToFront="true"
    :useAdvancedFocusSearch="true"
  >
    <text-view
      class="section-title-text-css"
      :postDelay="300"
      :style="{ marginLeft: plateTitleLeftMargin + 'px' }"
      typeface="${titleTypeface}"
      :focusable="false"
      textSize="${titleStyle.fontSize}"
      text="${title}"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { QTWaterfallSectionType } from '../core/QTWaterfallSectionType'

export default defineComponent({
  props: {
    plateTitleLeftMargin: {
      type: Number,
      default: 0,
    },
    type: {
      type: Number,
      default: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_TITLE,
    },
  },
  setup(props, context) {
    return {}
  },
})
</script>

<style scoped>
.section-title-css {
  width: 1920px;
  height: 60px;
  display: flex;
  flex-direction: column;
  background-color: transparent;
}

.section-title-text-css {
  position: absolute;
  width: 1920px;
  height: 60px;
  margin-left: 90px;
  color: #ffffff;
}
</style>
