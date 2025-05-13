import { Video } from './video'
import { Audio } from './audio'
import { AudioService } from './audio-service'
import { Source } from './source'
import { H1 } from './h1'
import { H2 } from './h2'
import { H3 } from './h3'
import { H4 } from './h4'
import { H5 } from './h5'
import { H6 } from './h6'

export default [Video, Source, Audio, AudioService, H1, H2, H3, H4, H5, H6] as Plugin[]

import type { Plugin } from 'vue'
