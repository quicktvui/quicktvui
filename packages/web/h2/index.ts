import { withInstall, SFCWithInstall } from '../utils'
import WebH2 from './src/h2.vue'

export const H2: SFCWithInstall<typeof WebH2> = withInstall(WebH2)
export default H2

export * from './src/h2'

export type { H2Instance } from './src/instance'
