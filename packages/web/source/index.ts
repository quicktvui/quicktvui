import { withInstall, SFCWithInstall } from '../utils'
import WebSource from './src/source.vue'

export const Source: SFCWithInstall<typeof WebSource> = withInstall(WebSource)
export default Source

export * from './src/source'

export type { SourceInstance } from './src/instance'
