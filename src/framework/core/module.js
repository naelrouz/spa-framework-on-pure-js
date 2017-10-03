import { initComponents } from './component/init-components';
import { initRouting } from './routing/init-routing';

// Private Fn()

export default class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponents = config.bootstrap;
    this.routes = config.routes;
  }

  start() {
    initComponents(this.bootstrapComponents, this.components);
    if (initRouting(this.routes)) {
      console.log('Routes is init');
    }
  }
}
