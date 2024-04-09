<template>
  <tv-item
    keyName="_id"
    :type="sectionType"
    :clipPadding="false"
    :clipChildren="false"
    ref="listSection"
    focusScrollTarget="${isFocusScrollTarget==true}"
    class="tab-list-section-root-css"
    scrollOverride="${scrollOverride}"
    @item-click="onItemClick"
    @item-bind="onItemBind"
    @item-unbind="onItemRecycled"
    @item-focused="onItemFocused">

    <div class="qt-ui-section-tab-list-root"
         :focusable="false"
         flexStyle="${style}"
         gradientBackground="${style.gradientBackground}"
         :blockFocusDirections="['right']"
         :clipChildren="false"
         :useAdvancedFocusSearch="true"
         :bringFocusChildToFront="true">

      <text-view class="tab-list-section-title-text-css"
                 :postDelay="300"
                 autoWidth
                 autoHeight
                 flexStyle="${titleStyle}"
                 :focusable="false" textSize="${titleStyle.fontSize}" text="${title}"/>
      <img :postDelay="300" flexStyle="${imgTitleStyle}" :focusable="false" src="${imgTitle}"/>

      <tv-list
        list="${itemList}" horizontal
        :clipChildren="false"
        :focusable="false"
        class="tab-list-section-list-css"
        name="QUICKTVUI_WARTERFALL_LIST"
        :resetOnDetach="true"
        enableKeepFocus="${enableKeepFocus==true}"
        endHintEnabled="${enableEndHit}"
        useDiff="${enableDiff}"
        sid="${listSID}"
        :cachePool="cachePool"
        :onScrollEnable="false"
        :setSelectChildPosition="0"
        :enablePlaceholder="enablePlaceholder"
        :blockFocusDirections="blockDirections">

        <qt-poster :type="standItemType"/>

        <div :type="tabItemType"
             class="qt-ui-section-tab-list-item"
             :clipChildren="false"
             flexStyle="${style}"
             style="padding-left: 24px;padding-right: 23px;justify-content: center;height: 50px"
             autoWidth
             name="QUICKTVUI_TAB_2"
             :focusable="true"
             eventClick
             eventFocus>

          <text-view
            class="qt-ui-section-tab-list-item-text"
            autoWidth
            flexStyle="${textStyle}"
            gravity="center"
            :fontSize="36"
            :lines="1"
            :focusable="false"
            :duplicateParentState="true"
            style="height: 50px"
            text="${text}"/>
        </div>
        <slot/>
      </tv-list>
    </div>
  </tv-item>
</template>

<script>

import {QTWaterfallSectionType} from "../core/QTWaterfallSectionType";
import {defineComponent} from "@vue/runtime-core";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";

const TAG = "list-section"

export default defineComponent({
  name: "list-section",
  props: {
    enablePlaceholder: {
      type: Boolean,
      default: true
    },
    isSwitchBgScroll: {
      type: Boolean,
      default: false
    },
    standItemType: {
      type: Number,
      default: 10001
    },
    tabItemType: {
      type: Number,
      default: 10002
    },
    sectionType: {
      type: Number,
      default: QTWaterfallSectionType.QT_WATERFALL_SECTION_TYPE_LIST
    },
    fetchPendingData: {
      type: Function,
      default: null
    },
    arrangeType: {
      type: String,
      default: 'TB'
      // TB ,LR, RL ,BT
    },
    cachePool: {
      type: Object,
      default: {}
    },
  },
  setup(props, context) {

    const log = useESLog()
    const blockDirections = ['left', 'right']

    function onItemRecycled(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onItemRecycled-------------->>>', e)
      }
    }

    function onItemBind(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onItemBind-------------->>>', e)
      }
    }

    function onItemFocused(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onItemFocused-------------->>>', e)
      }
    }

    function onItemClick(e) {
      if (log.isLoggable(ESLogLevel.DEBUG)) {
        log.d(TAG, '----------onItemClick-------------->>>', e)
      }
    }

    return {
      blockDirections,
      onItemBind,
      onItemClick,
      onItemRecycled,
      onItemFocused
    }
  },
});
</script>

<style scoped>

.qt-ui-section-tab-list-root {
  background-color: transparent;
  margin-left: 0px;
}

.qt-ui-section-tab-list-item-text {
  focusColor: #000000;
  selectColor: #ff0000;
  color: #ffffff80;
}

.qt-ui-section-tab-list-item {
  border-radius: 99px;
  padding-top: 5px;
  padding-bottom: 8px;
  background-color: transparent;
  focus-background-color: #F5F5F5;
}

.tab-list-section-root-css {
}

.tab-list-section-list-css {
}

.tab-list-section-title-text-css {
  /*width: 1920px;*/
  /*height: 60px;*/
  color: #ffffff;
  background-color: transparent;
}

</style>
