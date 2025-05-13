import { withInstall, SFCWithInstall } from '../utils'
import WebH4 from './src/h4.vue'

export const H4: SFCWithInstall<typeof WebH4> = withInstall(WebH4)
export default H4

export * from './src/h4'

export type { H4Instance } from './src/instance'
