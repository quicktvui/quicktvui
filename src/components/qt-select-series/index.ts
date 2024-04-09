import qt_media_series_number_page from "./qt-media-series-number-page.vue"
import qt_media_series_text_page from "./qt-media-series-text-page.vue"
import qt_media_series_method_page from "./qt-media-series-method-page.vue"
import qt_media_series_event_page from "./qt-media-series-event-page.vue"
import qt_media_series_image_text_page from "./qt-media-series-image-text-page.vue";
import qt_media_series_custom_page from "./qt-media-series-custom-page.vue";

const QTMediaSeriesPageList = {
  qt_media_series_image_text_page: {
    name: "图文样式",
    component: qt_media_series_image_text_page,
  },
  qt_media_series_number_page: {
    name: '数字样式',
    component: qt_media_series_number_page,
  },
  qt_media_series_text_page: {
    name: '文本样式',
    component: qt_media_series_text_page,
  },
  qt_media_series_custom_page: {
    name: '自定义样式',
    component: qt_media_series_custom_page,
  },
  qt_media_series_method_page: {
    name: '调用方法',
    component: qt_media_series_method_page,
  },
  qt_media_series_event_page: {
    name: '事件回调',
    component: qt_media_series_event_page,
  }
};
export default QTMediaSeriesPageList;
