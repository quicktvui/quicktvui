import qt_seek_bar_sample_page from "./qt-seek-bar-sample-page";
import qt_seek_bar_basics_page from "./qt-seek-bar-basics-page";
import qt_seek_bar_progress_page from "./qt-seek-bar-progress-page";
import qt_seek_bar_indicator_page from "./qt-seek-bar-indicator-page";
import qt_seek_bar_thumb_page from "./qt-seek-bar-thumb-page";
import qt_seek_bar_tick_page from "./qt-seek-bar-tick-page";
import qt_seek_bar_step_page from "./qt-seek-bar-step-page";
import qt_seek_bar_mode_page from "./qt-seek-bar-mode-page";

const QTSeekBarPageList = {
  qt_seek_bar_sample_page: {
    name: '使用初探',
    component: qt_seek_bar_sample_page,
  },
  qt_seek_bar_basics_page: {
    name: '单向模式',
    component: qt_seek_bar_basics_page,
  },
  qt_seek_bar_mode_page: {
    name: '范围模式',
    component: qt_seek_bar_mode_page,
  },
  qt_seek_bar_progress_page: {
    name: '进度条',
    component: qt_seek_bar_progress_page,
  },
  qt_seek_bar_indicator_page: {
    name: '提示框',
    component: qt_seek_bar_indicator_page,
  },
  qt_seek_bar_thumb_page: {
    name: '按钮',
    component: qt_seek_bar_thumb_page,
  },
  qt_seek_bar_tick_page: {
    name: '刻度',
    component: qt_seek_bar_tick_page,
  },
  qt_seek_bar_step_page: {
    name: '分步',
    component: qt_seek_bar_step_page,
  },
};
export default QTSeekBarPageList;
