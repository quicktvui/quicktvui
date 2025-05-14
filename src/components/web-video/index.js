import web_video_start_page from './web-video-start-page'
import web_video_source_page from './web-video-source-page'
import web_video_poster_page from './web-video-poster-page'

const WebVideoPageList = {
  web_video_start_page: {
    name: '使用初探',
    component: web_video_start_page,
  },
  web_video_source_page: {
    name: 'source',
    component: web_video_source_page,
  },
  web_video_poster_page: {
    name: '封面',
    component: web_video_poster_page,
  },
}
export default WebVideoPageList
