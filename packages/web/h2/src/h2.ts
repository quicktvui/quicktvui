import { buildProps } from '../../utils'
import type { ExtractPropTypes } from 'vue'

export const h2Props = buildProps({} as const)

export type H2Props = ExtractPropTypes<typeof h2Props>

export const h2Emits = {}
export type H2Emits = typeof h2Emits
