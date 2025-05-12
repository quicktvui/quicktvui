import { Video } from './video'
import { Audio } from './audio'
import { AudioService } from './audio-service'
import { Source } from './source'
import type { Plugin } from 'vue'

export default [Video, Source, Audio, AudioService] as Plugin[]
