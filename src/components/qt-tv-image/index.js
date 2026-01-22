import qt_tv_image_start_page from './qt-tv-image-start-page'
import qt_tv_image_gif_page from './qt-tv-image-gif-page'
import qt_tv_image_tint_color_page from './qt-tv-image-tint-color-page'
import qt_tv_image_center_page from './qt-tv-image-center-page'
import qt_tv_image_cover_page from './qt-tv-image-cover-page'
import qt_tv_image_contain_page from './qt-tv-image-contain-page'
import qt_tv_image_cap_insets_page from './qt-tv-image-cap-insets-page'

const QTTVImagePageList = {
  qt_tv_image_start_page: {
    name: '使用初探',
    component: qt_tv_image_start_page,
  },
  qt_tv_image_gif_page: {
    name: 'Gif',
    component: qt_tv_image_gif_page,
  },
  qt_tv_image_tint_color_page: {
    name: 'TintColor',
    component: qt_tv_image_tint_color_page,
  },
  qt_tv_image_center_page: {
    name: 'Center',
    component: qt_tv_image_center_page,
  },
  qt_tv_image_cover_page: {
    name: 'Cover',
    component: qt_tv_image_cover_page,
  },
  qt_tv_image_contain_page: {
    name: 'Contain',
    component: qt_tv_image_contain_page,
  },
  qt_tv_image_cap_insets_page: {
    name: 'CapInsets',
    component: qt_tv_image_cap_insets_page,
  },
}
export default QTTVImagePageList
