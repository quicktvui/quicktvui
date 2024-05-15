//
import routes from "./routes";
import {ESApp} from '@extscreen/es3-vue';
import application from './App.vue';

import {createESApp} from "@extscreen/es3-core";
import './views/css/es-sdk-css.css';
import './views/css/quick-ui-css.css';
import './components/qt-seek-bar/css/qt-seek-bar-css.css';

const routerOptions = {
  main: 'splash',
  error: 'error',
  limit: 10,
  routes: routes,
}

const app: ESApp = createESApp(application, routerOptions);

import {install} from './components';

app.use(install);

import {ESComponent} from "@extscreen/es3-component";

app.use(ESComponent);

// import {QuickTVUI} from "@quicktvui/quicktvui3";
import {QuickTVUI} from "../packages/src/index";
// import '@quicktvui/quicktvui3/dist/index.css';

app.use(QuickTVUI);
