<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" style="justify-content: space-around;flex: 1;" :clipChildren="false">

      <div>
        <select-text text="无快速选集样式"/>
        <qt-media-series
          ref="quick_select_series1"
          @load-data="onLoadData1"
        />
      </div>

      <div>
        <select-text text="有快速选集样式"/>
        <qt-media-series
          ref="quick_select_series2"
          @load-data="onLoadData2"
        />
      </div>

      <div>
        <select-text text="付费影片样式"/>
        <qt-media-series
          ref="quick_select_series3"
          @load-data="onLoadData3"
        />
      </div>

    </div>
  </div>
</template>

<script lang="ts">
import {onLoadLRData} from "./utils";
import SelectText from "./components/select-text.vue";
import {defineComponent} from "vue";
import {ref} from "@vue/runtime-core";
import {
  QTIMediaSeries,
  QTMediaSeriesData,
  QTMediaSeriesGroup,
  QTMediaSeriesStyleType,
  QTMediaSeriesType
} from "@quicktvui/quicktvui3";

/**
 * 要求数据格式
 * {
 *   title: 标题, // 必须
 *   flagText: VIP标, // 特殊处理---> showVip
 * }
 */
export default defineComponent({
  name: "纯文本(2.2版本可用)",
  components: {SelectText},
  setup(props, context) {
    let quick_select_series1 = ref<QTIMediaSeries>();
    let quick_select_series2 = ref<QTIMediaSeries>();
    let quick_select_series3 = ref<QTIMediaSeries>();

    let pageSize: number = 10;
    let totalCount: number = 30;

    function onESCreate(params) {
      const type: QTMediaSeriesType =
        QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TEXT
      const group: QTMediaSeriesGroup = {
        enable: true,
        size: 20
      }
      const noneGroup: QTMediaSeriesGroup = {
        enable: false,
        size: 20
      }
      const styleType: QTMediaSeriesStyleType =
        QTMediaSeriesStyleType.QT_MEDIA_SERIES_STYLE_TYPE_DEFAULT

      const data: QTMediaSeriesData = {
        pageSize: pageSize,
        totalCount: totalCount
      }

      quick_select_series1.value?.setInitData(type, noneGroup, styleType, data);
      quick_select_series2.value?.setInitData(type, group, styleType, data);
      quick_select_series3.value?.setInitData(type, group,
        QTMediaSeriesStyleType.QT_MEDIA_SERIES_STYLE_TYPE_VIP,
        data);
    }

    const onLoadData1 = (event) => {
      onLoadLRData(event, quick_select_series1.value, pageSize, totalCount);
    }
    const onLoadData2 = (event) => {
      onLoadLRData(event, quick_select_series2.value, pageSize, totalCount);
    }
    const onLoadData3 = (event) => {
      onLoadLRData(event, quick_select_series3.value, pageSize, totalCount);
    }
    // const onItemClick = (event) => {
    //   toast.showToast(event.position);
    //   // setTimeout(()=>{
    //   //   this.$refs.quick_select_series1.setSelectChildPosition(event.position + 2);
    //   // }, 500);
    // }

    return {
      onESCreate,
      quick_select_series1,
      quick_select_series2,
      quick_select_series3,
      onLoadData1,
      onLoadData2,
      onLoadData3,
    }
  },
});
</script>

<style scoped>

</style>
