import { makeInstaller } from './utils/make-installer'

import Components from './component'
import Plugins from './plugin'

const installer = makeInstaller([...Plugins, ...Components])

export const install = installer.install

export default installer

export * from './video'
export * from './audio'
export * from './audio-service'
export * from './source'
