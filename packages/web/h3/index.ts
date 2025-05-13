import { withInstall, SFCWithInstall } from '../utils'
import WebH3 from './src/h3.vue'

export const H3: SFCWithInstall<typeof WebH3> = withInstall(WebH3)
export default H3

export * from './src/h3'

export type { H3Instance } from './src/instance'
