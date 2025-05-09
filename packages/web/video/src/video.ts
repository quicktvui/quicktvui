import { buildProps, keysOf } from '../../utils'
import type { ExtractPropTypes } from 'vue'

export const videoEffects = ['light', 'dark'] as const

export const videoProps = buildProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  closable: {
    type: Boolean,
    default: true,
  },
  closeText: {
    type: String,
    default: '',
  },
  showIcon: Boolean,
  center: Boolean,
  effect: {
    type: String,
    values: videoEffects,
    default: 'light',
  },
} as const)
export type VideoProps = ExtractPropTypes<typeof videoProps>

export const videoEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type VideoEmits = typeof videoEmits
