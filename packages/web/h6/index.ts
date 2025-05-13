import { withInstall, SFCWithInstall } from '../utils'
import WebH6 from './src/h6.vue'

export const H6: SFCWithInstall<typeof WebH6> = withInstall(WebH6)
export default H6

export * from './src/h6'

export type { H6Instance } from './src/instance'
