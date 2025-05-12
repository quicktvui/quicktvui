import { withInstall, SFCWithInstall } from '../utils'
import WebAudio from './src/audio.vue'

export const Audio: SFCWithInstall<typeof WebAudio> = withInstall(WebAudio)
export default Audio

export * from './src/audio'

export type { AudioInstance } from './src/instance'
