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
export * from './h1'
export * from './h2'
export * from './h3'
export * from './h4'
export * from './h5'
export * from './h6'
