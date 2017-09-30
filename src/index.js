import '../node_modules/materialize-css/dist/js/materialize.min';

import { bootstrap, utils } from './framework';
import appModule from './app/app.module';

// utils.delay(1000).then(() => {
//   bootstrap(appModule);
// });

window.addEventListener('load', () => {
  bootstrap(appModule);
});
