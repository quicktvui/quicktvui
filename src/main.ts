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
const app: ESApp = createESApp(application, router)

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
import QuickTVHtml from '../packages/web'
import '../packages/web/dist/index.css'
//
// import QuickTVHtml from '@quicktvui/html-core'
// import '@quicktvui/html-core/dist/index.css'
app.use(QuickTVHtml)
