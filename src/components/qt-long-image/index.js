import qt_long_image_start_page from './qt-long-image-start-page'
import qt_long_image_horizontal_scroll_page from './qt-long-image-horizontal-scroll-page'
import qt_long_image_vertical_scroll_page from './qt-long-image-vertical-scroll-page'
import qt_long_image_zoom_page from './qt-long-image-zoom-page'
import qt_long_image_event_page from './qt-long-image-event-page'

import qt_long_image_scroll_to_page from './qt-long-image-scroll-to-page'

const QTLongImagePageList = {
  qt_long_image_start_page: {
    name: '使用初探',
    component: qt_long_image_start_page,
  },
  qt_long_image_horizontal_scroll_page: {
    name: '横向滚动',
    component: qt_long_image_horizontal_scroll_page,
  },
  qt_long_image_vertical_scroll_page: {
    name: '竖向滚动',
    component: qt_long_image_vertical_scroll_page,
  },
  qt_long_image_scroll_to_page: {
    name: '滚动到指定位置',
    component: qt_long_image_scroll_to_page,
  },
  qt_long_image_zoom_page: {
    name: '放大缩小',
    component: qt_long_image_zoom_page,
  },
  qt_long_image_event_page: {
    name: '事件',
    component: qt_long_image_event_page,
  },
}
export default QTLongImagePageList
