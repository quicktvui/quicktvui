<template>
  <div class="text-item-container" :focusable="true" :focusScale="1" :style="{width:`${itemWidth}px`,height:`${itemHeight}px`}"
       :gradientBackground="gradientBackground">
    <div class="text-item-container-bg-focus" :style="{width:`${itemWidth}px`,height:`${itemHeight}px`}"
         :duplicateParentState="true" showOnState="focused"
         :focusable="false"
         :gradientBackground="gradientFocusBackground"/>
    <div class="text-item-container-css" :style="{width:`${itemWidth}px`,height:`${itemHeight}px`}"
         style="position:absolute;align-items: center;background-color:transparent"
         :duplicateParentState="true">

      <div
        :style="{position:'absolute',flexDirection: 'row',justifyContent: 'center', alignItems: 'center',
        width:`${itemWidth}px`,height:`${itemHeight}px`,backgroundColor: 'transparent'}"
        showOnState="selected" :duplicateParentState="true">
        <play-mark
          :duplicateParentState="true"
          flexStyle="${normalMarkStyle}"
          style="width: 24px;height: 25px;position: absolute;left: 20px;margin-right: 10px"
          :markColor="markColor"/>
        <play-mark
          :duplicateParentState="true"
          flexStyle="${vipMarkStyle}"
          style="width: 24px;height: 25px;position: absolute;left: 20px;margin-right: 10px"
          :markColor="markVipColor"/>
      </div>

      <text-view :duplicateParentState="true" :maxLines=1 :ellipsizeMode="2"
                 flexStyle="${normalTitleStyle}"
                 :fontSize="30" class="text-item-text" gravity="centerVertical"
                 :style="{color:textColors.color,focusColor:textColors.focusColor,selectColor:textColors.selectColor}"
                 text="${title}"/>

      <text-view :duplicateParentState="true" :maxLines=1 :ellipsizeMode="2"
                 flexStyle="${vipTitleStyle}"
                 :fontSize="30" class="text-item-text-vip" gravity="centerVertical"
                 :style="{color:textVipColors.color,focusColor:textVipColors.focusColor,selectColor:textVipColors.selectColor}"
                 text="${title}"/>
    </div>

    <div class="media-series-text-item-vip-root"
         showIf="${vip.enable==true}"
         :gradientBackground="iconGradientBackground">
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
    },
    itemWidth:{
      type:Number,
      default:490
    },
    itemHeight:{
      type:Number,
      default:100
    }
  },
});
</script>

<style scoped>
.text-item-container {
  border-radius: 8px;
  background-color: transparent;
}
.text-item-container-bg-focus{
  position: absolute;
  background-color: transparent;
}

.text-item-container-css {
  border-radius: 8px;
  background-color: rgba(255, 255, 255, .1);
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


.text-item-text {
  font-weight: 400;
  height: 100px;
}

.text-item-text-vip {
  font-weight: 400;
  height: 100px;
}


.media-series-text-item-vip-root {
  position: absolute;
  width: 45px;
  height: 28px;
  right: 0.01px;
  top: 0.01px;
  border-radius: 4px;
  background-color: transparent;
}

.media-series-text-item-vip-text {
  width: 45px;
  height: 28px;
  color: white;
  font-weight: 400;
}

</style>
