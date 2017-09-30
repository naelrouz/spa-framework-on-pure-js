import router from '../tools/router';

export default class Module {
  constructor(config) {
    this.components = config.components;
    this.bootstrapComponents = config.bootstrap;
    this.routes = config.routes;
  }

  renderComponent(component) {
    component.render();
  }

  renderRoutes() {
    const url = router.getUrl();
    let route;
    route = this.routes.find(el => el.path === url);
    if (!route) {
      route = this.routes.find(el => el.path === '**');
    }
    console.log('renderRoutes route:', route);
    const component = route.component;
    console.log('renderRoutes component:', component);
    const selector = component.selector;
    console.log('renderRoutes selector:', selector);

    const routerOutlet = 'router-outlet';
    const el = document.querySelector(routerOutlet);

    if (!el) {
      throw new Error(`Component with selector ${routerOutlet} not found `);
    }
    el.innerHTML = `<${selector}></${selector}>`;

    this.renderComponent(component);
  }

  initComponents() {
    console.log('fw.module.initComponents');
    this.bootstrapComponents.render();
    this.components.forEach(this.renderComponent.bind(this));
  }

  initRoutes() {
    console.log('fw.module.initRoutes');
    window.addEventListener('hashchange', this.renderRoutes.bind(this));
    window.addEventListener('load', this.renderRoutes.bind(this));
    // this.renderRoutes();
  }

  start() {
    console.log('fw.module.start');
    console.log(this.routes);
    if (this.routes) {
      this.initRoutes();
    }
    this.initComponents();
  }
}
