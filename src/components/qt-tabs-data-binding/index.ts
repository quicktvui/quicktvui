import qt_tabs_data_binding_start_page from "./qt-tabs-data-binding-start-page.vue"
import qt_tabs_data_binding_single_tab_page from "./qt-tabs-data-binding-single-tab-page.vue"
import qt_tabs_data_binding_tab_item_page from "./qt-tabs-data-binding-tab-item-page.vue"
import qt_tabs_data_binding_data_page from "./qt-tabs-data-binding-data-page.vue"
import qt_tabs_data_binding_horizontal_page from "./qt-tabs-data-binding-horizontal-page.vue"

//
import qt_tabs_data_binding_section_vue_page from "./qt-tabs-data-binding-section-vue-page.vue"
import qt_tabs_data_binding_section_custom_page from "./qt-tabs-data-binding-section-custom-page.vue"
import qt_tabs_data_binding_section_add_page from "./qt-tabs-data-binding-section-add-page.vue"
import qt_tabs_data_binding_section_delete_page from "./qt-tabs-data-binding-section-delete-page.vue"
import qt_tabs_data_binding_section_get_page from "./qt-tabs-data-binding-section-get-page.vue"
import qt_tabs_data_binding_section_update_page from "./qt-tabs-data-binding-section-update-page.vue"

//
import qt_tabs_data_binding_item_custom_page from "./qt-tabs-data-binding-item-custom-page.vue"
import qt_tabs_data_binding_item_add_page from "./qt-tabs-data-binding-item-add-page.vue"
import qt_tabs_data_binding_item_delete_page from "./qt-tabs-data-binding-item-delete-page.vue"
import qt_tabs_data_binding_item_get_page from "./qt-tabs-data-binding-item-get-page.vue"
import qt_tabs_data_binding_item_update_page from "./qt-tabs-data-binding-item-update-page.vue"

//
import qt_tabs_data_binding_plugin_page from "./qt-tabs-data-binding-plugin-page.vue"
import qt_tabs_data_binding_advanced_page from "./qt-tabs-data-binding-advanced-page.vue"

const QTTabsWaterfallDataBindingPageList = {
  qt_tabs_data_binding_start_page: {
    name: '使用初探',
    component: qt_tabs_data_binding_start_page,
  },
  qt_tabs_data_binding_single_tab_page: {
    name: '单Tab',
    component: qt_tabs_data_binding_single_tab_page,
  },
  qt_tabs_data_binding_data_page: {
    name: '设置数据',
    component: qt_tabs_data_binding_data_page,
  },
  qt_tabs_data_binding_horizontal_page: {
    name: '横向',
    component: qt_tabs_data_binding_horizontal_page,
  },
  qt_tabs_data_binding_advanced_page: {
    name: '进阶用法',
    component: qt_tabs_data_binding_advanced_page,
  },
  //---------------------TAB---------------------------
  qt_tabs_data_binding_tab_item_page: {
    name: '自定义TabItem',
    component: qt_tabs_data_binding_tab_item_page,
  },
};

const QTTabsWaterfallDataBindingSectionPageList = {
  //---------------------SECTION---------------------------
  qt_tabs_data_binding_section_custom_page: {
    name: '自定义Section',
    component: qt_tabs_data_binding_section_custom_page,
  },
  qt_tabs_data_binding_section_vue_page: {
    name: 'VueSection',
    component: qt_tabs_data_binding_section_vue_page,
  },
  qt_tabs_data_binding_section_add_page: {
    name: '添加Section',
    component: qt_tabs_data_binding_section_add_page,
  },
  qt_tabs_data_binding_section_delete_page: {
    name: '删除Section',
    component: qt_tabs_data_binding_section_delete_page,
  },
  qt_tabs_data_binding_section_get_page: {
    name: '查询Section',
    component: qt_tabs_data_binding_section_get_page,
  },
  qt_tabs_data_binding_section_update_page: {
    name: '更新Section',
    component: qt_tabs_data_binding_section_update_page,
  },
};

const QTTabsWaterfallDataBindingItemPageList = {
  //--------------------ITEM----------------------------
  qt_tabs_data_binding_item_custom_page: {
    name: '自定义Item',
    component: qt_tabs_data_binding_item_custom_page,
  },
  qt_tabs_data_binding_item_add_page: {
    name: '添加Item',
    component: qt_tabs_data_binding_item_add_page,
  },
  qt_tabs_data_binding_item_delete_page: {
    name: '删除Item ?',
    component: qt_tabs_data_binding_item_delete_page,
  },
  qt_tabs_data_binding_item_get_page: {
    name: '查询Item',
    component: qt_tabs_data_binding_item_get_page,
  },
  qt_tabs_data_binding_item_update_page: {
    name: '更新Item',
    component: qt_tabs_data_binding_item_update_page,
  },
};

const QTTabsWaterfallDataBindingSamplePageList = {
  qt_tabs_data_binding_plugin_page: {
    name: '插件相关',
    component: qt_tabs_data_binding_plugin_page,
  },
};

export {
  QTTabsWaterfallDataBindingPageList,
  QTTabsWaterfallDataBindingSectionPageList,
  QTTabsWaterfallDataBindingItemPageList,
  QTTabsWaterfallDataBindingSamplePageList,
};
