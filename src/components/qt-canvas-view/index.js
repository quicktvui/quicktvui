import qt_canvas_start_page from './qt-canvas-start-page'
import qt_canvas_second_page from './qt-canvas-second-page'
import qt_canvas_three_page from './qt-canvas-three-page'
import qt_canvas_four_page from './qt-canvas-four-page'

const QTCanvasViewPageList = {
  qt_canvas_start_page: {
    name: '使用初探',
    component: qt_canvas_start_page,
  },
  qt_canvas_second_page: {
    name: '绘制复杂图形',
    component: qt_canvas_second_page,
  },
  qt_canvas_three_page: {
    name: '绘制动画',
    component: qt_canvas_three_page,
  },
  qt_canvas_four_page: {
    name: '绘制高阶图形',
    component: qt_canvas_four_page,
  },
}
export default QTCanvasViewPageList
