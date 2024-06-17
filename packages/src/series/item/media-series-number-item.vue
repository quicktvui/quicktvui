<template>
  <div class="number-item-container" :focusable="true" :focusScale="1"
       :gradientBackground="gradientBackground">
    <div class="number-item-container-bg-focus"
         :duplicateParentState="true" showOnState="focused"
         :focusable="false"
         :gradientBackground="gradientFocusBackground"/>
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
          :markColor="markColor"/>
        <play-mark
          :duplicateParentState="true"
          flexStyle="${vipMarkStyle}"
          style="width: 24px;height: 25px;position: absolute;left: 20px"
          :markColor="markVipColor"/>
      </div>
      <text-view
        :duplicateParentState="true"
        :fontSize="36" gravity="center"
        autoWidth
        :lines="1"
        flexStyle="${normalTitleStyle}"
        class="number-item-text-css"
        :style="{color:textColors.color,focusColor:textColors.focusColor,selectColor:textColors.selectColor}"
        text="${title}"/>
      <text-view
        :duplicateParentState="true"
        :fontSize="36" gravity="center"
        flexStyle="${vipTitleStyle}"
        autoWidth
        class="number-item-text-vip-css"
        :style="{color:textVipColors.color,focusColor:textVipColors.focusColor,selectColor:textVipColors.selectColor}"
        :lines="1"
        text="${title}"/>
    </div>

    <!-- vip角标 -->
    <div class="media-series-number-item-vip-root"
         showIf="${vip.enable==true}"
         :gradientBackground="iconGradientBackground">
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
    },
    gradientBackground:{
      type:Object,
      default: () => {
        return {colors: ['#1AFFFFFF', '#1AFFFFFF'], orientation: 6, cornerRadius: 8}
      }
    },
    gradientFocusBackground:{
      type:Object,
      default: () => {
        return {colors: ['#FFFFFF', '#FFFFFF'], orientation: 6, cornerRadius: 8}
      }
    },
    iconGradientBackground:{
      type:Object,
      default:()=>{
        return { colors: ['#FFB67827', '#FFDBAF5C'], cornerRadius: 4, orientation: 6,}
      }
    },
    markColor:{
      type:String,
      default:"#FF4E46"
    },
    markVipColor:{
      type:String,
      default:"#FFD97C"
    },
    textColors:{
      type:Object,
      default:()=> {
        return {
          color: 'rgba(255, 255, 255, .50)',
          focusColor: 'rgba(0, 0, 0, 1)',
          selectColor: 'rgba(255, 255, 255, .50)'
        }
      }
    },
    textVipColors:{
      type:Object,
      default:()=> {
        return {
          color: '#FFD97C',
          focusColor: '#B67827',
          selectColor: '#B67827'
        }
      }
    }
  },
});
</script>

<style scoped>
.number-item-container {
  width: 160px;
  height: 80px;
  background-color: transparent;
  border-radius: 8px
}
.number-item-container-bg-focus{
  position: absolute;
  background-color: transparent;
  width: 160px;
  height: 80px;
}
.media-series-number-item-vip-root {
  position: absolute;
  width: 45px;
  height: 28px;
  left: 118px;
  border-radius: 4px;
  background-color: transparent;
}

.media-series-number-item-vip-text {
  width: 45px;
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
}

.number-item-text-vip-css {
  height: 80px;
  width: 160px;
}

</style>
