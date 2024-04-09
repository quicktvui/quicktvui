<template>
  <div class="text-item-container" :focusable="true" :focusScale="1">
    <div class="text-item-container-css"
         style="position:absolute;align-items: center;background-color:transparent"
         :duplicateParentState="true">

      <div
        style="position:absolute;flex-direction: row;justify-content: center; align-items: center;width: 490px;height: 100px;background-color: transparent"
        showOnState="selected" :duplicateParentState="true">
        <play-mark
          :duplicateParentState="true"
          flexStyle="${normalMarkStyle}"
          style="width: 24px;height: 25px;position: absolute;left: 20px;margin-right: 10px"
          :markColor="'#FF4E46'"/>
        <play-mark
          :duplicateParentState="true"
          flexStyle="${vipMarkStyle}"
          style="width: 24px;height: 25px;position: absolute;left: 20px;margin-right: 10px"
          :markColor="'#FFD97C'"/>
      </div>

      <text-view :duplicateParentState="true" :maxLines=1 :ellipsizeMode="2"
                 flexStyle="${normalTitleStyle}"
                 :fontSize="30" class="text-item-text" gravity="centerVertical"
                 text="${title}"/>

      <text-view :duplicateParentState="true" :maxLines=1 :ellipsizeMode="2"
                 flexStyle="${vipTitleStyle}"
                 :fontSize="30" class="text-item-text-vip" gravity="centerVertical"
                 text="${title}"/>
    </div>

    <div class="media-series-text-item-vip-root"
         showIf="${vip.enable}"
         :gradientBackground="{ colors: ['#FFB67827', '#FFDBAF5C'], cornerRadius: 4, orientation: 6,}">
      <text-view :duplicateParentState="true"
                 class="media-series-text-item-vip-text"
                 :fontSize="20" gravity="center"
                 text="${vip.text}"/>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "media-series-text-item",
  props: {
    isVip: {
      type: Boolean,
      default: false
    }
  },
});
</script>

<style scoped>
.text-item-container {
  width: 490px;
  height: 100px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, .1);
  focus-background-color: white;
  flex-direction: row;
}

.text-item-container-css {
  width: 490px;
  height: 100px;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, .1);
  focus-background-color: white;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


.text-item-text {
  font-weight: 400;
  height: 100px;
  width: 373px;
  color: rgba(255, 255, 255, .50);
  focus-color: rgba(0, 0, 0, 1);
  select-color: rgba(255, 255, 255, .50);
}

.text-item-text-vip {
  font-weight: 400;
  height: 100px;
  width: 373px;
  color: #FFD97C;
  focus-color: #B67827;
  select-color: #B67827;
}


.media-series-text-item-vip-root {
  position: absolute;
  width: 42px;
  height: 28px;
  left: 448px;
  border-radius: 4px;
  background-color: transparent;
}

.media-series-text-item-vip-text {
  width: 42px;
  height: 28px;
  color: white;
  font-weight: 400;
}

</style>
