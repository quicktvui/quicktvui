import { withInstall, SFCWithInstall } from '../utils'
import WebH5 from './src/h5.vue'

export const H5: SFCWithInstall<typeof WebH5> = withInstall(WebH5)
export default H5

export * from './src/h5'

export type { H5Instance } from './src/instance'
