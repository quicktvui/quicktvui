import qt_tabs_waterfall_start_page from "./qt-tabs-waterfall-start-page.vue"
import qt_tabs_waterfall_single_tab_page from "./qt-tabs-waterfall-single-tab-page.vue"
import qt_tabs_tab_item_page from "./qt-tabs-tab-item-page.vue"
import qt_tabs_waterfall_data_page from "./qt-tabs-waterfall-data-page.vue"
import qt_tabs_waterfall_horizontal_page from "./qt-tabs-waterfall-horizontal-page.vue"

//
import qt_tabs_waterfall_section_vue_page from "./qt-tabs-waterfall-section-vue-page.vue"
import qt_tabs_waterfall_section_custom_page from "./qt-tabs-waterfall-section-custom-page.vue"
import qt_tabs_waterfall_section_add_page from "./qt-tabs-waterfall-section-add-page.vue"
import qt_tabs_waterfall_section_delete_page from "./qt-tabs-waterfall-section-delete-page.vue"
import qt_tabs_waterfall_section_get_page from "./qt-tabs-waterfall-section-get-page.vue"
import qt_tabs_waterfall_section_update_page from "./qt-tabs-waterfall-section-update-page.vue"

//
import qt_tabs_waterfall_item_custom_page from "./qt-tabs-waterfall-item-custom-page.vue"
import qt_tabs_waterfall_item_add_page from "./qt-tabs-waterfall-item-add-page.vue"
import qt_tabs_waterfall_item_delete_page from "./qt-tabs-waterfall-item-delete-page.vue"
import qt_tabs_waterfall_item_get_page from "./qt-tabs-waterfall-item-get-page.vue"
import qt_tabs_waterfall_item_update_page from "./qt-tabs-waterfall-item-update-page.vue"

//
import qt_tabs_waterfall_plugin_page from "./qt-tabs-waterfall-plugin-page.vue"

const QTTabsWaterfallPageList = {
  qt_tabs_waterfall_start_page: {
    name: '使用初探',
    component: qt_tabs_waterfall_start_page,
  },
  qt_tabs_waterfall_single_tab_page: {
    name: '单Tab',
    component: qt_tabs_waterfall_single_tab_page,
  },
  qt_tabs_waterfall_data_page: {
    name: '设置数据',
    component: qt_tabs_waterfall_data_page,
  },
  qt_tabs_waterfall_horizontal_page: {
    name: '横向',
    component: qt_tabs_waterfall_horizontal_page,
  },
  //---------------------TAB---------------------------
  qt_tabs_tab_item_page: {
    name: '自定义TabItem',
    component: qt_tabs_tab_item_page,
  },
};

const QTTabsWaterfallSectionPageList = {
  //---------------------SECTION---------------------------
  qt_tabs_waterfall_section_custom_page: {
    name: '自定义Section',
    component: qt_tabs_waterfall_section_custom_page,
  },
  qt_tabs_waterfall_section_vue_page: {
    name: 'VueSection',
    component: qt_tabs_waterfall_section_vue_page,
  },
  qt_tabs_waterfall_section_add_page: {
    name: '添加Section',
    component: qt_tabs_waterfall_section_add_page,
  },
  qt_tabs_waterfall_section_delete_page: {
    name: '删除Section',
    component: qt_tabs_waterfall_section_delete_page,
  },
  qt_tabs_waterfall_section_get_page: {
    name: '查询Section',
    component: qt_tabs_waterfall_section_get_page,
  },
  qt_tabs_waterfall_section_update_page: {
    name: '更新Section',
    component: qt_tabs_waterfall_section_update_page,
  },
};

const QTTabsWaterfallItemPageList = {
  //--------------------ITEM----------------------------
  qt_tabs_waterfall_item_custom_page: {
    name: '自定义Item',
    component: qt_tabs_waterfall_item_custom_page,
  },
  qt_tabs_waterfall_item_add_page: {
    name: '添加Item',
    component: qt_tabs_waterfall_item_add_page,
  },
  qt_tabs_waterfall_item_delete_page: {
    name: '删除Item',
    component: qt_tabs_waterfall_item_delete_page,
  },
  qt_tabs_waterfall_item_get_page: {
    name: '查询Item',
    component: qt_tabs_waterfall_item_get_page,
  },
  qt_tabs_waterfall_item_update_page: {
    name: '更新Item',
    component: qt_tabs_waterfall_item_update_page,
  },
};

const QTTabsWaterfallSamplePageList = {
  qt_tabs_waterfall_plugin_page: {
    name: '插件相关',
    component: qt_tabs_waterfall_plugin_page,
  },
};

export {
  QTTabsWaterfallPageList,
  QTTabsWaterfallSectionPageList,
  QTTabsWaterfallItemPageList,
  QTTabsWaterfallSamplePageList
};
