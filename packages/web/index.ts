import { makeInstaller } from './utils/make-installer'

import Components from './component'
import Plugins from './plugin'
import {
  ES,
  ESActionBar,
  ESAppList,
  ESAudio,
  ESBrightness,
  ESBroadcast,
  ESContentProvider,
  ESDevelop,
  ESDevice,
  ESDisplay,
  ESDownload,
  ESEventBus,
  ESFocus,
  ESIAC,
  ESLocalStorage,
  ESLocation,
  ESLog,
  ESLogUpload,
  ESNetwork,
  ESPermission,
  ESPlugin,
  ESPower,
  ESRuntime,
  ESService,
  ESShareData,
  ESToast,
  ESUpload,
  ESUsbDevice,
  ESXLog,
  log,
  es,
  develop,
  toast,
  storage,
  device,
  display,
  network,
  appList,
  power,
  permission,
  usbDevice,
  broadcast,
  audio,
  shareData,
  runtime,
  plugin,
  download,
  upload,
  actionBar,
  iac,
  location,
  focus,
  provider,
  eventBus,
  xlog,
  logUpload,
  brightness,
  service,
} from '@extscreen/es3-core'
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

global.alert = function (message: string) {
  toast.showToast(message)
}
