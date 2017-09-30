import { WFMModule } from '../framework';
import appComponent from './app.component';

class AppModule extends WFMModule {
  constructor(config) {
    super(config);
  }
}

export default new AppModule({
  components: [appComponent]
});
