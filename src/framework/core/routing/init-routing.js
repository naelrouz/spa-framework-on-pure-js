import RoutingModule from './routing.module';

export function initRouting(routes) {
  if (!routes) {
    return false;
  }
  const routing = new RoutingModule(routes);
  routing.init();
  return true;
}
