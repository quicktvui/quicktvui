import qt_grid_view_start_page from "./qt-grid-view-start-page.vue"
import qt_grid_view_page from "./qt-grid-view-page.vue"
import qt_grid_view_record from "./qt-grid-view-record.vue"
import qt_grid_view_demo from "./qt-grid-view-demo.vue"

const QTGridViewPageList = {
  qt_grid_view_start_page: {
    name: '使用初探',
    component: qt_grid_view_start_page,
  },
  qt_grid_view_page: {
    name: '分页',
    component: qt_grid_view_page,
  },
  qt_grid_view_record: {
    name: '我的记录demo',
    component: qt_grid_view_record,
  },
  qt_grid_view_demo: {
    name: 'qtlistendemo',
    component: qt_grid_view_demo,
  }
};
export default QTGridViewPageList;
