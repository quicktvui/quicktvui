import es_poster_start_page from './es-poster-start-page';
import es_poster_title_page from './es-poster-title-page';
import es_poster_corner_page from './es-poster-corner-page';
import es_poster_subtitle_page from './es-poster-subtitle-page';
import es_poster_float_page from './es-poster-float-title-page';
import es_poster_shadow_page from './es-poster-shadow-page';
import es_poster_shimmer_page from './es-poster-shimmer-page';
import es_poster_ripple_page from './es-poster-ripple-page';
import es_poster_decoration_page from './es-poster-decoration-page';
import es_poster_score_page from './es-poster-score-page';

const QTPosterPageList = {
  es_poster_start_page: {
    name: '使用初探',
    component: es_poster_start_page,
  },
  es_poster_decoration_page: {
    name: '间距',
    component: es_poster_decoration_page,
  },
  es_poster_title_page: {
    name: '主标题',
    component: es_poster_title_page,
  },
  es_poster_subtitle_page: {
    name: '次标题',
    component: es_poster_subtitle_page,
  },
  es_poster_float_page: {
    name: '浮动标题',
    component: es_poster_float_page,
  },
  es_poster_corner_page: {
    name: '角标',
    component: es_poster_corner_page,
  },
  es_poster_score_page: {
    name: '评分',
    component: es_poster_score_page,
  },
  es_poster_shadow_page: {
    name: '阴影',
    component: es_poster_shadow_page,
  },
  es_poster_shimmer_page: {
    name: '高光',
    component: es_poster_shimmer_page,
  },
  es_poster_ripple_page: {
    name: '水波',
    component: es_poster_ripple_page,
  },
};
export default QTPosterPageList;
