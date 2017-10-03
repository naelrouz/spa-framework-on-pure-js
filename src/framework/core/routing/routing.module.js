import routerTools from './router-tools';
import { renderComponent } from '../component/render-component';

function render() {
  const url = routerTools.getUrl();
  let route;
  route = this.routes.find(el => el.path === url);
  if (!route) {
    route = this.routes.find(el => el.path === '**');
  }
  const component = route.component;
  const selector = component.selector;

  document.querySelector(
    'router-outlet',
  ).innerHTML = `<${selector}></${selector}>`;

  renderComponent(component);
}

export default class RoutingModule {
  constructor(routes) {
    this.routes = routes;
  }
  init() {
    window.addEventListener('hashchange', render.bind(this));
    // window.addEventListener('load', this.renderRoutes.bind(this));
    render.call(this);
  }
}
