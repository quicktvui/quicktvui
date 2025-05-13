import { buildProps } from '../../utils'
import type { ExtractPropTypes } from 'vue'

export const h6Props = buildProps({} as const)

export type H6Props = ExtractPropTypes<typeof h6Props>

export const h6Emits = {}
export type H6Emits = typeof h6Emits
