<template>
  <div class="standard-section-css"
       :blockFocusDirections="['left','right']"
       :clipChildren="false"
       :clipPadding="false"
       :type="sectionType"
       :focusable="false"
       focusScrollTarget="${isFocusScrollTarget==true}"
       keyName="_id"
       flexStyle="${style}"
       scrollOverride="${scrollOverride}"
       gradientBackground="${style.gradientBackground}"
       :bringFocusChildToFront="true"
       :useAdvancedFocusSearch="true">

    <text-view
      class="standard-section-title-text-css"
      :postDelay="300"
      autoWidth autoHeight typeface="${titleTypeface}"
      :lines="1"
      flexStyle="${titleStyle}"
      :focusable="false" textSize="${titleStyle.fontSize}" text="${title}"
    />
    <img :postDelay="300" flexStyle="${imgTitleStyle}" :focusable="false" src="${imgTitle}"/>
    <tv-flex
      class="standard-section-css"
      name="QUICKTVUI_WARTERFALL_LIST"
      :blockFocusDirections="['left','right']"
      :clipChildren="false"
      :clipPadding="false"
      :bringFocusChildToFront="true"
      :cachePool="cachePool"
      :useDiff='useDiff'
      keyName="_id"
      sid="${listSID}"
      :enablePlaceholder="enablePlaceholder"
      focusScrollTarget="${isFocusScrollTarget==true}"
      enableFirstFocusAtStart="${enableFirstFocusAtStart}"
      firstFocusChild="${firstFocusChild}"
      list="${itemList}">

      <!-- poster -->
      <qt-poster :load-delay="500" :type="standItemType" v-if="flexSection.qtPosterEnable"/>

      <!-- plugin -->
      <qt-plugin-item v-if="flexSection.qtPluginItemEnable"/>

      <!-- card -->
      <card-item v-if="flexSection.cardItemEnable"
        @focus="onFocus"/>

      <slot/>

    </tv-flex>
  </div>
</template>

<script lang="ts">

import {defineComponent} from "@vue/runtime-core";
import {QTWaterfallSectionType} from "../core/QTWaterfallSectionType";
import {QTWaterfallItemType} from "../core/QTWaterfallItemType";
import card_item from '../item/card-item.vue'
import plugin_item from '../item/plugin-item.vue'
import {ESLogLevel, useESLog} from "@extscreen/es3-core";

const TAG = 'QTFlexSection'

export default defineComponent({
  name: 'standard-section',
  emits: [
    'focus'
  ],
  components: {
    'card-item': card_item,
    'qt-plugin-item': plugin_item
  },
  props: {
    enablePlaceholder: {
      type: Boolean,
      default: true
    },
    plateData: {
      type: String,
      default: ''
    },
    useDiff: {
      type: Boolean,
      default: true
    },
    cachePool: {
      type: Object,
      default: {}
    },
    sectionType: {
      type: Number,
      default: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_FLEX
    },
    standItemType: {
      type: Number,
      default: QTWaterfallItemType.QT_WATERFALL_ITEM_TYPE_POSTER
    },
    currentPageIndex: {
      type: Number,
      default: -1
    },
    itemFocusScale:{
      type:Number,
      default:1.1
    },
    flexSection:{
      type:Object,
      default:()=>{
        return {
          qtPosterEnable:true,
          qtPluginItemEnable:true,
          cardItemEnable:true,
        }
      }
    }
  },
  setup(props, context) {
    const log = useESLog()

    function onFocus(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '------onFocus--------->>>>', e)
      }
      context.emit('focus', e)
    }

    return {
      onFocus,
    };
  },
});

</script>

<style scoped>

.standard-section-css {
  display: flex;
  background-color: transparent;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.standard-section-title-text-css {
  /*width: 1920px;*/
  /*height: 60px;*/
  color: #ffffff;
  background-color: transparent;
}
</style>
