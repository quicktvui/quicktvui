<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" style="justify-content: space-around;flex: 1;" :clipChildren="false">
      <qt-media-series
        ref="quick_series"
        :clipChildren="false"
        @load-data="onLoadData2"
        @item-click="onItemClick"
        @item-focused="onItemFocused"
        @group-item-focused="onGroupItemFocused"/>

      <div>
      <span
        style="background-color: #40b883;font-size: 30px;margin-left: 90px;color: white;margin-bottom: 5px">{{
          itemClick
        }}</span>
        <span
          style="background-color: #40b883;font-size: 30px;margin-left: 90px;color: white;margin-bottom: 5px">{{
            itemFocus
          }}</span>
        <span
          style="background-color: #40b883;font-size: 30px;margin-left: 90px;color: white">{{
            groupItemFocus
          }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {onLoadData} from "./utils";
import {defineComponent} from "vue";
import {ref} from "@vue/runtime-core";
import {
  QTIMediaSeries,
  QTMediaSeriesData, QTMediaSeriesEvent,
  QTMediaSeriesGroup,
  QTMediaSeriesStyleType,
  QTMediaSeriesType
} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: "event-demo-page",
  setup(props, context) {
    let quick_series = ref<QTIMediaSeries>();

    let pageSize: number = 10;
    let totalCount: number = 30;
    let itemClick = ref('点击事件：初始状态');
    let itemFocus = ref('焦点事件：初始状态');
    let groupItemFocus = ref('group焦点事件：初始状态');

    function onESCreate(params) {
      const type: QTMediaSeriesType =
        QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_LEFT_RIGHT
      const group: QTMediaSeriesGroup = {
        enable: true,
        size: 20
      }
      const styleType: QTMediaSeriesStyleType =
        QTMediaSeriesStyleType.QT_MEDIA_SERIES_STYLE_TYPE_DEFAULT

      const data: QTMediaSeriesData = {
        pageSize: pageSize,
        totalCount: totalCount
      }
      quick_series.value?.setInitData(type, group, styleType, data);
    }

    const onLoadData2 = (event: QTMediaSeriesEvent) => {
      onLoadData(event, quick_series.value, pageSize, totalCount);
    }
    const onItemClick = (event: QTMediaSeriesEvent) => {
      itemClick.value = `点击事件：点击了item，位置：${event.position}`;
    }
    const onItemFocused = (event: QTMediaSeriesEvent) => {
      itemFocus.value = `焦点事件：item获取了焦点，位置：${event.position}`;
    }
    const onGroupItemFocused = (event: QTMediaSeriesEvent) => {
      groupItemFocus.value = `group焦点事件：item获取了焦点，位置：${event.position}`;
    }

    return {
      onESCreate,
      quick_series,
      itemClick,
      itemFocus,
      groupItemFocus,
      onLoadData2,
      onItemClick,
      onItemFocused,
      onGroupItemFocused
    }
  }
});
</script>

<style scoped>

</style>
