import qt_ul_basic_page from './qt-ul-basic-page';
import qt_ul_item_image_page from './qt-ul-item-image-page';
import qt_ul_item_span_page from './qt-ul-item-span-page';
import qt_ul_item_text_page from './qt-ul-item-text-page';
import qt_ul_item_focusable_text_page from './qt-ul-item-focusable-text-page';
import qt_ul_item_type_page from './qt-ul-item-type-page';
import qt_ul_item_size_page from './qt-ul-item-size-page';
import qt_ul_item_list_page from './qt-ul-item-list-page';
import qt_ul_horizontal_page from './qt-ul-horizontal-page';
import qt_ul_scroll_page from './qt-ul-scroll-page';
import qt_ul_auto_scroll_page from './qt-ul-auto-scroll-page';
import qt_ul_auto_focus_page from './qt-ul-auto-focus-page';
import qt_ul_auto_focus_position_page from './qt-ul-auto-focus-position-page';
import qt_ul_focus_page from './qt-ul-focus-page';
import qt_ul_poster_page from './qt-ul-poster-page';
import qt_ul_data_page from './qt-ul-data-page';
import qt_ul_item_click_page from './qt-ul-item-click-page';
import qt_ul_item_focus_page from './qt-ul-item-focus-page';
import qt_ul_waterfall_page from './qt-ul-waterfall-page';

const QTULPageList = {
    qt_ul_basic_page: {
        name: '使用初探',
        component: qt_ul_basic_page,
    },
    qt_ul_item_image_page: {
        name: '图片',
        component: qt_ul_item_image_page,
    },
    qt_ul_item_span_page: {
        name: 'span',
        component: qt_ul_item_span_page,
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
    qt_ul_poster_page: {
        name: 'Poster',
        component: qt_ul_poster_page,
    },
    qt_ul_item_list_page: {
        name: '一行滚动',
        component: qt_ul_item_list_page,
    },
    qt_ul_data_page: {
        name: '数据',
        component: qt_ul_data_page,
    },
    qt_ul_waterfall_page: {
        name: '瀑布流',
        component: qt_ul_waterfall_page,
    },
    qt_ul_item_click_page: {
        name: '点击事件',
        component: qt_ul_item_click_page,
    },
    qt_ul_item_focus_page: {
        name: '焦点事件',
        component: qt_ul_item_focus_page,
    },
};
export default QTULPageList;
