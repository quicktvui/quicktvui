<template>
  <div class="es-sdk-root-css" :clipChildren="false">
    <s-title-view class="es-sdk-content-title-css" :text="this.$options.name"/>
    <div class="es-sdk-content-divider-css"/>
    <div class="es-sdk-content-column-css" style="justify-content: space-around;flex: 1;" :clipChildren="false">
      <div class="quick-ui-content-row-css">
        <qt-button
          v-for="item in methodList" :key="item.id"
          :text="item.displayName"
          @click="onButtonClicked(item.name,item.prams)"/>
      </div>

      <qt-media-series
        ref="quick_series"
        :clipChildren="false"
        @load-data="onLoadData2"/>
    </div>
  </div>
</template>

<script lang="ts">
import {onLoadData} from "./utils";
import {defineComponent, ref} from "vue";
import {
  QTIMediaSeries,
  QTMediaSeriesData,
  QTMediaSeriesGroup,
  QTMediaSeriesStyleType,
  QTMediaSeriesType
} from "@quicktvui/quicktvui3";

export default defineComponent({
  name: "method-demo-page",
  setup(props, context) {
    let quick_series = ref<QTIMediaSeries>();
    let pageSize = 10;
    let totalCount = 10;
    let methodList = [
      {
        id: 1,
        name: 'scrollTo',
        prams: [6],
        displayName: '滚动到指定位置6'
      },
      {
        id: 2,
        name: 'scrollToWithOffset',
        prams: [6, 2],
        displayName: '滚动到指定位置6\n(可添加偏移量2)'
      },
      {
        id: 3,
        name: 'requestFocus',
        prams: [2],
        displayName: '指定item获取焦点2'
      },
      {
        id: 4,
        name: 'setSelected',
        prams: [3],
        displayName: '设置选中的item3'
      }
    ];

    function onESCreate(params) {
      const type: QTMediaSeriesType =
        QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_LEFT_RIGHT
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
      quick_series.value?.setInitData(type, noneGroup, styleType, data);
    }

    const onLoadData2 = (event) => {
      onLoadData(event, quick_series.value, pageSize, totalCount);
    }

    const onButtonClicked = (name, prams) => {
      if (quick_series.value) {
        quick_series.value![name](...prams);
      }
    }

    return {
      onESCreate,
      quick_series,
      methodList,
      onLoadData2,
      onButtonClicked
    }
  },
});
</script>

<style scoped>

</style>
