import { buildProps } from '../../utils'
import type { ExtractPropTypes } from 'vue'

export const audioServicePreload = ['auto', 'metadata', 'none'] as const

export const audioServiceProps = buildProps({
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
    values: audioServicePreload,
    default: 'auto',
  },
} as const)
export type AudioServiceProps = ExtractPropTypes<typeof audioServiceProps>

export const audioServiceEmits = {}
export type AudioServiceEmits = typeof audioServiceEmits
