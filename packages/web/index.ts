import { makeInstaller } from './utils/make-installer'

export * from './video'

import Components from './component'
import Plugins from './plugin'

const installer = makeInstaller([...Plugins, ...Components])

export const install = installer.install

export default installer
