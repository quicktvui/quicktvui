<template>
  <div class="number-item-container" :focusable="true" :focusScale="1">

    <!-- 文字-->
    <div class="number-item-text-root-css"
         :duplicateParentState="true">
      <div
        style="position:absolute;flex-direction: row;justify-content: center; align-items: center;width: 160px;height: 80px;background-color: transparent"
        showOnState="selected" :duplicateParentState="true">
        <play-mark
          :duplicateParentState="true"
          flexStyle="${normalMarkStyle}"
          style="width: 24px;height: 25px;position: absolute;left: 20px"
          :markColor="'#FF4E46'"/>
        <play-mark
          :duplicateParentState="true"
          flexStyle="${vipMarkStyle}"
          style="width: 24px;height: 25px;position: absolute;left: 20px"
          :markColor="'#FFD97C'"/>
      </div>
      <text-view
        :duplicateParentState="true"
        :fontSize="36" gravity="center"
        autoWidth
        :lines="1"
        flexStyle="${normalTitleStyle}"
        class="number-item-text-css"
        text="${title}"/>
      <text-view
        :duplicateParentState="true"
        :fontSize="36" gravity="center"
        flexStyle="${vipTitleStyle}"
        autoWidth
        class="number-item-text-vip-css"
        :lines="1"
        text="${title}"/>
    </div>

    <!-- vip角标 -->
    <div class="media-series-number-item-vip-root"
         showIf="${vip.enable}"
         :gradientBackground="{ colors: ['#FFB67827', '#FFDBAF5C'], cornerRadius: 4, orientation: 6,}">
      <text-view :duplicateParentState="true"
                 class="media-series-number-item-vip-text"
                 :fontSize="20" gravity="center"
                 text="${vip.text}"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "media-series-number-item",
  props: {
    isVip: {
      type: Boolean,
      default: false
    }
  },
});
</script>

<style scoped>
.number-item-container {
  width: 160px;
  height: 80px;
  background-color: rgba(255, 255, 255, .1);
  focus-background-color: white;
  border-radius: 8px
}

.media-series-number-item-vip-root {
  position: absolute;
  width: 42px;
  height: 28px;
  left: 118px;
  border-radius: 4px;
  background-color: transparent;
}

.media-series-number-item-vip-text {
  width: 42px;
  height: 28px;
  color: white;
  font-weight: 400;
}

.number-item-text-root-css {
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 80px;
  background-color: transparent;
}

.number-item-text-css {
  height: 80px;
  width: 160px;
  color: rgba(255, 255, 255, .50);
  focus-color: rgba(0, 0, 0, 1);
  select-color: rgba(255, 255, 255, .50);
}

.number-item-text-vip-css {
  height: 80px;
  width: 160px;
  color: #FFD97C;
  focus-color: #B67827;
  select-color: #B67827;
}

</style>
