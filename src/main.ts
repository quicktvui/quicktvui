//
import routes from './routes'
import { ESApp } from '@extscreen/es3-vue'
import application from './App.vue'

import { createESApp } from '@extscreen/es3-core'
import './views/css/es-sdk-css.css'
import './views/css/quick-ui-css.css'
import './components/qt-seek-bar/css/qt-seek-bar-css.css'

import { createESRouter, Router } from '@extscreen/es3-router'

const routerOptions = {
  main: 'splash',
  error: 'error',
  limit: 10,
  routes: routes,
}

const router: Router = createESRouter(routerOptions)
const app: ESApp = createESApp(application, router, {
  debug: true,
  styleOptions: {
    ratioBaseWidth: 1920,
  },
})
app.config.errorHandler = (err, instance, info) => {
  console.error('🌋 Vue ErrorHandler:', err)
  console.error('👉 Component instance:', instance)
  console.error('🧩 Info:', info)
  // 如果你希望中断调试或抛出，可以手动 throw
  // throw err
  router.push('error')
}

// app.config.errorHandler = (err, instance, info) => {
//   const componentName = instance?.type?.name || '(anonymous component)'
//   const propsData = instance?.props || {}
//
//   console.groupCollapsed(
//       `%c💥 Vue Error in ${componentName} %c(${info})`,
//       'color: red; font-weight: bold;',
//       'color: gray;'
//   )
//
//   console.error('🚨 Error Message:', err)
//   console.log('🔍 Component Props:', propsData)
//   console.log('📌 Info:', info)
//
//   console.groupEnd()
//
//   // 可选：开发环境提示
//   if (import.meta.env.DEV) {
//     // 如需要弹出 toast 可调用你自定义的组件，比如：
//     // showToast(`Error in ${componentName}: ${err.message}`)
//   }
//
//   // 可选：日志上报
//   // reportToServer({ error: err, info, props: propsData, component: componentName })
// }

import { install } from './components'

app.use(install)

import { ESComponent } from '@extscreen/es3-component'

app.use(ESComponent)

import '@quicktvui/quicktvui3/dist/index.css'
import { QuickTVUI } from '@quicktvui/quicktvui3'

app.use(QuickTVUI)

//---------------------------------------------------------------------------
import { createESPlayer } from '@extscreen/es3-player'

const player = createESPlayer()
app.use(player)

//---------------------------------------------------------------------------
import { createESVideoPlayer } from '@extscreen/es3-video-player'

const videoPlayer = createESVideoPlayer()
app.use(videoPlayer)

//---------------------------------------------------------------------------
import { createESSoundPoolPlayer } from '@extscreen/es3-soundpool-player'

const soundPlayer = createESSoundPoolPlayer()
app.use(soundPlayer)

//---------------------------------------------------------------------------
import { createESAudioPlayer } from '@extscreen/es3-audio-player'

const audioPlayer = createESAudioPlayer()
app.use(audioPlayer)
//---------------------------------------------------------------------------
import { createESPlayerManager } from '@extscreen/es3-player-manager'

const playerManager = createESPlayerManager()
app.use(playerManager)

//
// import QuickTVHtml from '../packages/web'
// import '../packages/web/dist/index.css'
//
import QuickTVHtml from '@quicktvui/html-core'
import '@quicktvui/html-core/dist/index.css'
app.use(QuickTVHtml)
