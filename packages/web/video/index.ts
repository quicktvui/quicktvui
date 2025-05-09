import { withInstall, SFCWithInstall } from '../utils'
import WebVideo from './src/video.vue'

export const Video: SFCWithInstall<typeof WebVideo> = withInstall(WebVideo)
export default Video

export * from './src/video'
export type { VideoInstance } from './src/instance'
