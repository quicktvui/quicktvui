import { withInstall, SFCWithInstall } from '../utils'
import WebH1 from './src/h1.vue'

export const H1: SFCWithInstall<typeof WebH1> = withInstall(WebH1)
export default H1

export * from './src/h1'

export type { H1Instance } from './src/instance'
