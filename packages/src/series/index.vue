<template>
  <media-series
    v-if="show"
    ref="mediaSeriesRef"
    :clipChildren="false"
    :init-param="params"
    :height="height"
    :custom-item="seriesType !== 'leftRight'"
    :scroll-param="scrollParams"
    :group-param="groupParams"
    :common-param="commonParams"
    :initFocusPosition="initFocusPosition"
    :display="display"
    @load-data="onLoadData"
    @item-click="onItemClick"
    @item-focused="onItemFocused"
    @group-item-focused="onGroupItemFocused">
    <media-series-number-item v-if="seriesType === 'number'" :is-vip="isVip"
                              :gradient-background="gradientBackground"
                              :gradient-focus-background="gradientFocusBackground"
                              :mark-color="markColor" :mark-vip-color="markVipColor"
                              :icon-gradient-background="iconGradientBackground"
                              :text-colors="textColors" :text-vip-colors="textVipColors"
    />
    <media-series-text-item v-else-if="seriesType === 'text'" :is-vip="isVip"
                            :gradient-background="gradientBackground"
                            :gradient-focus-background="gradientFocusBackground"
                            :mark-color="markColor" :mark-vip-color="markVipColor"
                            :icon-gradient-background="iconGradientBackground"
                            :item-height="itemDivHeight"
                            :item-width="itemDivWidth"
                            :text-colors="textColors" :text-vip-colors="textVipColors"/>
    <slot v-else-if="seriesType === 'custom'"/>
  </media-series>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import media_series_number_item from "./item/media-series-number-item.vue";
import media_series_text_item from "./item/media-series-text-item.vue";
import media_series from "./component/media-series.vue";
import {nextTick} from "@vue/runtime-core";
import {Native} from "@extscreen/es3-vue";
import {QTMediaSeriesType} from "./QTMediaSeriesType";
import {QTMediaSeriesData} from "./QTMediaSeriesData";
import {QTMediaSeriesStyleType} from "./QTMediaSeriesStyleType";
import {QTMediaSeriesGroup} from "./QTMediaSeriesGroup";
import {
  buildCommonParams,
  buildGroupParams,
  buildLeftRightParams,
  buildMediaSeriesHeight,
  buildScrollParams,
  buildSeriesLeftRightData,
  buildSeriesLeftRightHeight,
  buildSeriesNumberData,
  buildSeriesTextData,
  buildSeriesTopDownData
} from "./DataAdapter";
import {QTMediaSeries} from "./QTMediaSeries";
import {ESIMediaSeries} from "@extscreen/es3-component";
import {ESLogLevel, useESLog} from "@extscreen/es3-core";
import useBaseView from "../base/useBaseView";

const TAG = 'MediaSeries'

export default defineComponent({
  name: "qt-media-series",
  components: {
    'media-series-number-item': media_series_number_item,
    'media-series-text-item': media_series_text_item,
    'media-series': media_series
  },
  emits: [
    'load-data',
    'item-click',
    'item-focused',
    'group-item-focused',
  ],
  props: {
    itemHeight: {
      type: Number,
      default: 0
    },
    initFocusPosition: {
      type: Number,
      default: -1
    },
    display: {
      type: Boolean,
      default: true
    }
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
          color: 'rgba(255, 255, 255, .5)',
          focusColor: 'rgba(0, 0, 0, 1)',
          selectColor: 'rgba(255, 255, 255, .5)'
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
    itemDivWidth:{
      type:Number,
      default:490
    },
    itemDivHeight:{
      type:Number,
      default:100
    },
  },
  setup(props, context) {
    const mediaSeriesRef = ref<ESIMediaSeries>();
    const {
      clearFocus,
      requestFocusDirectly,
      setVisibility
    } = useBaseView(mediaSeriesRef);

    const show = ref(false);
    const log = useESLog()

    const params = ref()
    const commonParams = ref()
    const scrollParams = ref()
    const groupParams = ref()
    const height = ref<number>(0)

    const isVip = ref<boolean>(false)

    const seriesType = ref<QTMediaSeriesType>(QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_NUMBER)
    let seriesData: QTMediaSeriesData

    const setInitData = (type: QTMediaSeriesType,
                         group: QTMediaSeriesGroup,
                         styleType: QTMediaSeriesStyleType,
                         data: QTMediaSeriesData) => {
      seriesType.value = type
      seriesData = data

      if (QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_LEFT_RIGHT !== type) {
        commonParams.value = buildCommonParams(type, group, styleType, data)
        scrollParams.value = buildScrollParams(type, group, styleType, data)
        groupParams.value = buildGroupParams(type, group, styleType, data)

        if (QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_CUSTOM == type)
          height.value = props.itemHeight + (group.enable ? 70 : 0);
        else
          height.value = buildMediaSeriesHeight(type, group, styleType, data)
        nextTick(() => {
          if (mediaSeriesRef.value) {
            mediaSeriesRef.value?.setInitData(data.totalCount, data.pageSize);
          }
        })
        if (log.isLoggable(ESLogLevel.DEBUG)) {
          log.d(TAG, '----setInitData---->>>>', height.value)
        }
      } else {
        params.value = buildLeftRightParams(type, group, styleType, data)

        height.value = buildSeriesLeftRightHeight(type, group, styleType, data, params)
        params.value.totalCount = data.totalCount;
        params.value.pageSize = data.pageSize;
      }
      show.value = true;
    }
    //-------------------------------------------------------------
    const setPageData = (page: number, dataArray: Array<QTMediaSeries>) => {
      let arr = dataArray;
      if (seriesType.value == QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_NUMBER) {
        arr = buildSeriesNumberData(page, seriesData.pageSize, dataArray);
      } else if (seriesType.value == QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TEXT) {
        arr = buildSeriesTextData(page, seriesData.pageSize, dataArray);
      } else if (seriesType.value == QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_LEFT_RIGHT) {
        arr = buildSeriesLeftRightData(page, seriesData.pageSize, dataArray);
      } else if (seriesType.value == QTMediaSeriesType.QT_MEDIA_SERIES_TYPE_TOP_DOWN) {
        arr = buildSeriesTopDownData(page, seriesData.pageSize, dataArray);
      }
      mediaSeriesRef.value?.setPageData(page, arr)
    }
    const scrollTo = (pos) => {
      mediaSeriesRef.value?.scrollTo(pos);
    }
    const scrollToWithOffset = (pos, offset) => {
      mediaSeriesRef.value?.scrollToWithOffset(pos, offset, false);
    }
    const requestFocus = (position) => {
      mediaSeriesRef.value?.requestFocus(position);
    }
    const setSelected = (position) => {
      mediaSeriesRef.value?.setSelected(position);
    }
    const setup = () => {
      mediaSeriesRef.value?.setup();
    }
    const setGroupSelected = (position) => {
      mediaSeriesRef.value?.setGroupSelected(position);
    }
    const release = () => {
      mediaSeriesRef.value?.release();
      show.value = false
    }
    const blockRootFocus = () => {
      if (mediaSeriesRef.value) {
        Native.callUIFunction(mediaSeriesRef.value, 'blockRootFocus', []);
      }
    }
    const unBlockRootFocus = () => {
      if (mediaSeriesRef.value) {
        Native.callUIFunction(mediaSeriesRef.value, 'unBlockRootFocus', []);
      }
    }
    //-------------------------------------------------------------
    const onLoadData = (event) => {
      context.emit('load-data', event);
    }
    const onItemClick = (event) => {
      context.emit('item-click', event);
    }
    const onItemFocused = (event) => {
      context.emit('item-focused', event);
    }
    const onGroupItemFocused = (event) => {
      context.emit('group-item-focused', event);
    }
    //-------------------------------------------------------------
    return {
      isVip,
      seriesType,
      params,
      commonParams,
      scrollParams,
      groupParams,
      mediaSeriesRef,
      show,
      height,
      onLoadData,
      setInitData,
      setPageData,
      onItemClick,
      onItemFocused,
      onGroupItemFocused,
      scrollTo,
      scrollToWithOffset,
      requestFocus,
      setSelected,
      setup,
      setGroupSelected,
      release,
      blockRootFocus,
      unBlockRootFocus,
      clearFocus,
      requestFocusDirectly,
      setVisibility
    }
  },
});
</script>

<style scoped>

</style>
