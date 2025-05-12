import { buildProps } from '../../utils'
import type { ExtractPropTypes } from 'vue'

export const videoPreload = ['auto', 'metadata', 'none'] as const

export const videoProps = buildProps({
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  muted: Boolean,
  loop: Boolean,
  autoplay: Boolean,
  controls: Boolean,
  src: {
    type: String,
    default: '',
  },
  poster: {
    type: String,
    default: '',
  },
  preload: {
    type: String,
    values: videoPreload,
    default: 'auto',
  },
} as const)
export type VideoProps = ExtractPropTypes<typeof videoProps>

export const videoEmits = {}
export type VideoEmits = typeof videoEmits
