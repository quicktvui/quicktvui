import { buildProps } from '../../utils'
import type { ExtractPropTypes } from 'vue'

export const h5Props = buildProps({} as const)

export type H5Props = ExtractPropTypes<typeof h5Props>

export const h5Emits = {}
export type H5Emits = typeof h5Emits
