import { withInstall, SFCWithInstall } from '../utils'
import WebAudioService from './src/audio-service.vue'

export const AudioService: SFCWithInstall<typeof WebAudioService> = withInstall(WebAudioService)
export default AudioService

export * from './src/audio-service'

export type { AudioServiceInstance } from './src/instance'
