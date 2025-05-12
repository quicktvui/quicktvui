import { buildProps } from '../../utils'
import type { ExtractPropTypes } from 'vue'

export const audioPreload = ['auto', 'metadata', 'none'] as const

export const audioProps = buildProps({
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
    values: audioPreload,
    default: 'auto',
  },
} as const)
export type AudioProps = ExtractPropTypes<typeof audioProps>

export const audioEmits = {}
export type AudioEmits = typeof audioEmits
