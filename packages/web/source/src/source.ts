import { buildProps } from '../../utils'
import type { ExtractPropTypes } from 'vue'

export const sourceProps = buildProps({
  src: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
} as const)
export type SourceProps = ExtractPropTypes<typeof sourceProps>

export const sourceEmits = {}
export type SourceEmits = typeof sourceEmits
