<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" style="flex: 1;"
         :clipChildren="false">
      <div>
        <select-text text="无快速选集样式"/>
        <qt-media-series
          :item-height="180"
          ref="quick_select_series1"
          @load-data="onLoadData1"
          @item-click="onItemClick">
          <div style="background-color: #7415B1;width: 350px;height: 180px;focus-background-color: white;justify-content: center;align-items: center">
            <text-view style="width: 160px;height: 80px;color: #40b883;select-color: #FF00FF;focus-color: #0000FF"
                       :fontSize="36" gravity="center"
                       text="${title}"/>
          </div>
        </qt-media-series>
      </div>
      <div>
        <select-text text="有快速选集样式"/>
        <qt-media-series
          ref="quick_select_series2"
          @load-data="onLoadData2"
          @item-click="onItemClick"/>
      </div>
      <div>
        <select-text text="付费影片样式"/>
        <qt-media-series
          ref="quick_select_series3"
          @load-data="onLoadData3"
          @item-click="onItemClick"/>
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
import {
  QTIMediaSeries, QTMediaSeriesData,
  QTMediaSeriesGroup,
  QTMediaSeriesStyleType,
  QTMediaSeriesType
} from "@quicktvui/quicktvui3";

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
    let quick_select_series1 = ref<QTIMediaSeries>();
    let quick_select_series2 = ref<QTIMediaSeries>();
    let quick_select_series3 = ref<QTIMediaSeries>();

    let pageSize: number = 10;
    let totalCount: number = 100;

    const toast = useESToast();

    function onESCreate(params) {
      const type: QTMediaSeriesType = QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_NUMBER
      const group: QTMediaSeriesGroup = {
        enable: true,
        size: 10
      }
      const noneGroup: QTMediaSeriesGroup = {
        enable: false,
        size: 3
      }
      const styleType: QTMediaSeriesStyleType =
        QTMediaSeriesStyleType.QT_MEDIA_SERIES_STYLE_TYPE_DEFAULT

      const data: QTMediaSeriesData = {
        pageSize: pageSize,
        totalCount: totalCount,
        initPosition: 20
      }

      quick_select_series1.value?.setInitData(QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_CUSTOM, noneGroup, styleType, data);
      quick_select_series2.value?.setInitData(type, group, styleType, data);
      quick_select_series3.value?.setInitData(type, group,
        QTMediaSeriesStyleType.QT_MEDIA_SERIES_STYLE_TYPE_VIP,
        data);
    }

    const onLoadData1 = (event) => {
      onLoadNumberData(event, quick_select_series1.value, pageSize, totalCount);
    }
    const onLoadData2 = (event) => {
      onLoadNumberData(event, quick_select_series2.value, pageSize, totalCount);
    }
    const onLoadData3 = (event) => {
      onLoadNumberData(event, quick_select_series3.value, pageSize, totalCount);
    }
    const onItemClick = (event) => {
      toast.showToast(event.position);
    }

    return {
      onESCreate,
      quick_select_series1,
      quick_select_series2,
      quick_select_series3,
      onLoadData1,
      onLoadData2,
      onLoadData3,
      onItemClick
    }
  },
});
</script>

<style scoped>

</style>
