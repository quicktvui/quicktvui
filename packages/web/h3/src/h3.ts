import { buildProps } from '../../utils'
import type { ExtractPropTypes } from 'vue'

export const h3Props = buildProps({} as const)

export type H3Props = ExtractPropTypes<typeof h3Props>

export const h3Emits = {}
export type H3Emits = typeof h3Emits
