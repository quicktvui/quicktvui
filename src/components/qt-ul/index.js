import qt_ul_basic_page from './qt-ul-basic-page';
import qt_ul_item_image_page from './qt-ul-item-image-page';
import qt_ul_item_text_page from './qt-ul-item-text-page';
import qt_ul_item_focusable_text_page from './qt-ul-item-focusable-text-page';
import qt_ul_item_type_page from './qt-ul-item-type-page';
import qt_ul_item_size_page from './qt-ul-item-size-page';
import qt_ul_horizontal_page from './qt-ul-horizontal-page';
import qt_ul_scroll_page from './qt-ul-scroll-page';
import qt_ul_auto_scroll_page from './qt-ul-auto-scroll-page';
import qt_ul_auto_focus_page from './qt-ul-auto-focus-page';
import qt_ul_auto_focus_position_page from './qt-ul-auto-focus-position-page';
import qt_ul_focus_page from './qt-ul-focus-page';

const QTULPageList = {
    qt_ul_basic_page: {
        name: '使用初探',
        component: qt_ul_basic_page,
    },
    qt_ul_item_image_page: {
        name: '图片',
        component: qt_ul_item_image_page,
    },
    qt_ul_item_text_page: {
        name: '文字',
        component: qt_ul_item_text_page,
    },
    qt_ul_item_focusable_text_page: {
        name: '文字焦点框',
        component: qt_ul_item_focusable_text_page,
    },
    qt_ul_item_type_page: {
        name: '类型',
        component: qt_ul_item_type_page,
    },
    qt_ul_item_size_page: {
        name: '尺寸',
        component: qt_ul_item_size_page,
    },
    qt_ul_horizontal_page: {
        name: '横向',
        component: qt_ul_horizontal_page,
    },
    qt_ul_scroll_page: {
        name: '滚动',
        component: qt_ul_scroll_page,
    },
    qt_ul_auto_scroll_page: {
        name: 'autoscroll',
        component: qt_ul_auto_scroll_page,
    },
    qt_ul_auto_focus_page: {
        name: 'autofocus',
        component: qt_ul_auto_focus_page,
    },
    qt_ul_auto_focus_position_page: {
        name: 'autofocusPosition',
        component: qt_ul_auto_focus_position_page,
    },
    qt_ul_focus_page: {
        name: '焦点',
        component: qt_ul_focus_page,
    },
};
export default QTULPageList;
