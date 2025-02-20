//
import routes from "./routes";
import {ESApp} from '@extscreen/es3-vue';
import application from './App.vue';

import {createESApp} from "@extscreen/es3-core";
import './views/css/es-sdk-css.css';
import './views/css/quick-ui-css.css';
import './components/qt-seek-bar/css/qt-seek-bar-css.css';

import {createESRouter, Router} from "@extscreen/es3-router";

const routerOptions = {
  // main: 'splash',
  main: 'nav/qt_nav_ul_page',
  error: 'error',
  limit: 10,
  routes: routes,
}

const router: Router = createESRouter(routerOptions);
const app: ESApp = createESApp(application, router);

import {install} from './components';

app.use(install);

import {ESComponent} from "@extscreen/es3-component";

app.use(ESComponent);

import '@quicktvui/quicktvui3/dist/index.css';
import {QuickTVUI} from "@quicktvui/quicktvui3";

app.use(QuickTVUI);



