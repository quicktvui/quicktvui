import qt_list_view_start_page from './qt-list-view-start-page';
import qt_list_view_page from './qt-list-view-page';
import qt_list_view_colum from './qt-list-view-colum';
import qt_list_view_colum_page from './qt-list-view-colum-page';
import qt_list_view_props_page from './qt-list-view-props-page';

const QTListViewPageList = {
  qt_list_view_start_page: {
    name: '使用初探',
    component: qt_list_view_start_page,
  },
  qt_list_view_page: {
    name: '分页',
    component: qt_list_view_page,
  },
  qt_list_view_props_page: {
    name: '属性测试',
    component: qt_list_view_props_page,
  },
  qt_list_view_colum: {
    name: '纵向',
    component: qt_list_view_colum,
  },
  qt_list_view_colum_page: {
    name: '纵向分页',
    component: qt_list_view_colum_page,
  }
};
export default QTListViewPageList;
