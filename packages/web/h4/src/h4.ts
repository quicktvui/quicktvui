import { buildProps } from '../../utils'
import type { ExtractPropTypes } from 'vue'

export const h4Props = buildProps({} as const)

export type H4Props = ExtractPropTypes<typeof h4Props>

export const h4Emits = {}
export type H4Emits = typeof h4Emits
