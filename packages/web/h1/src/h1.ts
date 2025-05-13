import { buildProps } from '../../utils'
import type { ExtractPropTypes } from 'vue'

export const h1Props = buildProps({} as const)

export type H1Props = ExtractPropTypes<typeof h1Props>

export const h1Emits = {}
export type H1Emits = typeof h1Emits
