import type Video from './video.vue'
import type Source from './source.vue'

export type VideoInstance = InstanceType<typeof Video> & unknown
export type SourceInstance = InstanceType<typeof Source> & unknown
