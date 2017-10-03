import './styles/preloader.css';
import './styles/index.styl';
// import 'materialize-css'
// import '../node_modules/materialize-css/dist/css/materialize.min.css'

import { bootstrap, utils } from 'framework';
import appModule from './app/app.module';

window.addEventListener('load', () => {
  utils.delay(0).then(() => {
    bootstrap(appModule);
  });
});
