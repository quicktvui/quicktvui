import qt_waterfall_start_page from "./qt-waterfall-start-page.vue"
import qt_waterfall_event_page from "./qt-waterfall-event-page.vue"
//
//

import qt_waterfall_section_plugin_page from "./qt-waterfall-section-plugin-page.vue"
import qt_waterfall_section_blank_page from "./qt-waterfall-section-blank-page.vue"
import qt_waterfall_section_list_page from "./qt-waterfall-section-list-page.vue"
import qt_waterfall_section_tab_page from "./qt-waterfall-section-tab-page.vue"
import qt_waterfall_section_tab_list_page from "./qt-waterfall-section-tab-list-page.vue"
import qt_waterfall_section_end_page from "./qt-waterfall-section-end-page.vue"
import qt_waterfall_section_vue_page from "./qt-waterfall-section-vue-page.vue"
import qt_waterfall_section_card_page from "./qt-waterfall-section-card-page.vue"
import qt_waterfall_section_decoration_page from "./qt-waterfall-section-decoration-page.vue"
import qt_waterfall_section_custom_page from "./qt-waterfall-section-custom-page.vue"
import qt_waterfall_section_op_ad_page from "./qt-waterfall-section-op-add-page.vue"
import qt_waterfall_section_op_delete_page from "./qt-waterfall-section-op-delete-page.vue"
import qt_waterfall_section_op_update_page from "./qt-waterfall-section-op-update-page.vue"
import qt_waterfall_section_op_get_page from "./qt-waterfall-section-op-get-page.vue"
import qt_waterfall_section_card_place_holder_page
  from "./qt-waterfall-section-card-place-holder-page.vue"
import qt_waterfall_section_background_page from "./qt-waterfall-section-background-page.vue"

//
import qt_waterfall_item_decoration_page from "./qt-waterfall-item-decoration-page.vue"
import qt_waterfall_item_custom_page from "./qt-waterfall-item-custom-page.vue"
import qt_waterfall_item_op_ad_page from "./qt-waterfall-item-op-add-page.vue"
import qt_waterfall_item_op_delete_page from "./qt-waterfall-item-op-delete-page.vue"
import qt_waterfall_item_op_update_page from "./qt-waterfall-item-op-update-page.vue"
import qt_waterfall_item_op_get_page from "./qt-waterfall-item-op-get-page.vue"
import qt_waterfall_item_card_page from "./qt-waterfall-item-card-page.vue"
import qt_waterfall_item_card_place_holder_page
  from "./qt-waterfall-item-card-place-holder-page.vue"
import qt_waterfall_item_plugin_page from "./qt-waterfall-item-plugin-page.vue"


const QTWaterfallPageList = {
  qt_waterfall_start_page: {
    name: '使用初探',
    component: qt_waterfall_start_page,
  },
  qt_waterfall_event_page: {
    name: '事件',
    component: qt_waterfall_event_page,
  },
};

const QTWaterfallItemPageList = {
  qt_waterfall_item_plugin_page: {
    name: 'PluginItem',
    component: qt_waterfall_item_plugin_page,
  },
  qt_waterfall_item_card_page: {
    name: 'CardItem',
    component: qt_waterfall_item_card_page,
  },
  qt_waterfall_item_card_place_holder_page: {
    name: 'CardItemPlaceHolder',
    component: qt_waterfall_item_card_place_holder_page,
  },
  qt_waterfall_item_decoration_page: {
    name: 'ItemDecoration',
    component: qt_waterfall_item_decoration_page,
  },
  qt_waterfall_section_background_page: {
    name: 'Background',
    component: qt_waterfall_section_background_page,
  },
  qt_waterfall_item_custom_page: {
    name: '自定义Item',
    component: qt_waterfall_item_custom_page,
  },
  qt_waterfall_item_op_ad_page: {
    name: '添加Item',
    component: qt_waterfall_item_op_ad_page,
  },
  qt_waterfall_item_op_get_page: {
    name: '查询Item',
    component: qt_waterfall_item_op_get_page,
  },
  qt_waterfall_item_op_delete_page: {
    name: '删除Item',
    component: qt_waterfall_item_op_delete_page,
  },
  qt_waterfall_item_op_update_page: {
    name: '更新Item',
    component: qt_waterfall_item_op_update_page,
  },
};


const QTWaterfallSectionPageList = {
  qt_waterfall_section_plugin_page: {
    name: 'PluginSection',
    component: qt_waterfall_section_plugin_page,
  },
  qt_waterfall_section_card_page: {
    name: 'CardSection',
    component: qt_waterfall_section_card_page,
  },
  qt_waterfall_section_card_place_holder_page: {
    name: 'CardSectionPlaceHolder',
    component: qt_waterfall_section_card_place_holder_page,
  },
  qt_waterfall_section_decoration_page: {
    name: 'SectionDecoration',
    component: qt_waterfall_section_decoration_page,
  },
  qt_waterfall_section_custom_page: {
    name: '自定义Section',
    component: qt_waterfall_section_custom_page,
  },
  qt_waterfall_section_list_page: {
    name: 'ListSection',
    component: qt_waterfall_section_list_page,
  },
  qt_waterfall_section_end_page: {
    name: 'EndSection',
    component: qt_waterfall_section_end_page,
  },
  qt_waterfall_section_blank_page: {
    name: 'BlankSection',
    component: qt_waterfall_section_blank_page,
  },
  qt_waterfall_section_tab_page: {
    name: 'TabSection',
    component: qt_waterfall_section_tab_page,
  },
  qt_waterfall_section_tab_list_page: {
    name: 'TabListSection',
    component: qt_waterfall_section_tab_list_page,
  },
  qt_waterfall_section_vue_page: {
    name: 'VueSection',
    component: qt_waterfall_section_vue_page,
  },
  qt_waterfall_section_op_ad_page: {
    name: '添加Section',
    component: qt_waterfall_section_op_ad_page,
  },
  qt_waterfall_section_op_get_page: {
    name: '查询Section',
    component: qt_waterfall_section_op_get_page,
  },
  qt_waterfall_section_op_delete_page: {
    name: '删除Section',
    component: qt_waterfall_section_op_delete_page,
  },
  qt_waterfall_section_op_update_page: {
    name: '更新Section',
    component: qt_waterfall_section_op_update_page,
  },
};


export {
  QTWaterfallPageList,
  QTWaterfallItemPageList,
  QTWaterfallSectionPageList
};
