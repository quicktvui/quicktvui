import qt_web_view_page from './qt-x5web-view-page'
import qt_web_view_js_2_vue_page from './qt-x5web-view-js-2-vue-page'
import qt_web_view_vue_2_js_page from './qt-x5web-view-vue-2-js-page'
import qt_web_view_cast_page from './qt-x5web-view-cast-page'

const QTX5WebViewComponentList = {
  qt_web_view_page: {
    name: '使用初探',
    component: qt_web_view_page,
  },
  qt_web_view_js_2_vue_page: {
    name: 'Js2Vue',
    component: qt_web_view_js_2_vue_page,
  },
  qt_web_view_vue_2_js_page: {
    name: 'Vue2Js',
    component: qt_web_view_vue_2_js_page,
  },
  qt_web_view_cast_page: {
    name: '网页投屏',
    component: qt_web_view_cast_page,
  },
}
export default QTX5WebViewComponentList
