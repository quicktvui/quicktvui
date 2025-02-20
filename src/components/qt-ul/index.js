import qt_ul_basic_page from './qt-ul-basic-page';
import qt_ul_item_image_page from './qt-ul-item-image-page';
import qt_ul_item_text_page from './qt-ul-item-text-page';
import qt_ul_item_focusable_text_page from './qt-ul-item-focusable-text-page';
import qt_ul_item_type_page from './qt-ul-item-type-page';

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
    }
};
export default QTULPageList;
