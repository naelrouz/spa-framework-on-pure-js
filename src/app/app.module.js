import { Module } from 'framework';
import appComponent from './app.component';
import appHeader from './common/app.header';
import appRoutes from './app.routes';

class AppModule extends Module {
  constructor(config) {
    super(config);
  }
}

export default new AppModule({
  components: [appHeader],
  bootstrap: appComponent,
  routes: appRoutes
});
