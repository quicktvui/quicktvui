import { withInstall, SFCWithInstall } from '../utils'
import WebVideo from './src/video.vue'
import WebSource from './src/source.vue'

export const Video: SFCWithInstall<typeof WebVideo> = withInstall(WebVideo)
export default Video

export const Source: SFCWithInstall<typeof WebVideo> = withInstall(WebSource)

export * from './src/video'
export * from './src/source'

export type { VideoInstance, SourceInstance } from './src/instance'
