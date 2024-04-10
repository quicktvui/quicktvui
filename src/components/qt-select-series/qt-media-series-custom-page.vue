<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" style="justify-content:center;flex: 1;"
         :clipChildren="false">
      <div>
        <select-text text="全自定义选集样式"/>
        <select-series
            ref="quick_select_series2"
            :clipChildren="false"
            :scrollParam="scrollParams"
            :groupParam="groupParams"
            :commonParam="commonParams"
            :display="true"
            @load-data="onLoadData2"
            @item-click="onItemClick"
            :style="{width: 1920, height: 130}">
          <div class="item-container">
            <text-view style="width: 160px;height: 60px;color: white;"
                       :fontSize="28" gravity="center" :showOnState="['normal','focused']"
                       text="${title}"/>
            <text-view style="width: 160px;height: 60px;color: red;position: absolute"
                       :fontSize="28" gravity="center" showOnSelected
                       text="${title}"/>
          </div>
        </select-series>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {useESToast} from "@extscreen/es3-core";
import {onLoadNumberData} from "./utils";
import SelectText from "./components/select-text.vue";
import {ref} from "@vue/runtime-core";
import {defineComponent} from "vue";
import {ESIMediaSeries} from "@extscreen/es3-component";

/**
 * 要求数据格式
 * {
 *   flagText: VIP标, // 特殊处理---> showVip
 * }
 */
export default defineComponent({
  name: "自定义样式",
  components: {SelectText},
  setup(props, context) {
    let quick_select_series2 = ref<ESIMediaSeries>();

    let pageSize: number = 10;
    let totalCount: number = 100;

    const toast = useESToast();

    const commonParams = ref()
    const scrollParams = ref()
    const groupParams = ref()

    function onESCreate(params) {
      commonParams.value = {
        contentWidth: 1740,
        itemGap: 15.6,
        // contentHeight: 80
      }
      scrollParams.value = {
        scrollType: 1,
        pageDisplayCount: 10,
        paddingForPageLeft: 0,
        paddingForPageRight: 0,
      }
      groupParams.value = {
        groupSize: 10,
        groupUp: true,
        groupMarginLeft: 200,
        textColor: {
          normal:"#FFFFFF",
          focused:"#FFFFFF",
          selected:"#40b883",
        },
        focusBackground: {
          color: ['#40b883', '#40b883'],
          //   orientation: 'LEFT_RIGHT',
          //   cornerRadius: [40, 40, 40, 40],
          //   padding: [34, 6]
        },
        mark: {
          //   // color: '#40b883'
          color: '#00FFFFFF'
        }
      }

      quick_select_series2.value?.setInitData(30, 10);
    }

    const onLoadData2 = (event) => {
      onLoadNumberData(event, quick_select_series2.value, pageSize, totalCount);
    }

    const onItemClick = (event) => {
      toast.showToast(event.position);
    }

    return {
      onESCreate,
      quick_select_series2,
      onLoadData2,
      onItemClick,
      commonParams,
      scrollParams,
      groupParams
    }
  },
});
</script>

<style scoped>
.item-container {
  width: 160px;
  height: 60px;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, .1);
  focus-background-color: #40b883;
  border-radius: 50px
}
</style>
