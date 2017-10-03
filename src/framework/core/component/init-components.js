import { renderComponent } from './render-component';

export const initComponents = (bootstrap, components) => {
  // console.log('fw.module.initComponents');
  // bootstrap.render();
  // components.forEach(renderComponent.bind(this));

  if (!bootstrap) {
    throw new Error('Bootstrap component in not defined');
  }

  [bootstrap, ...components].forEach(renderComponent);
};

// let styles = '';
// if (component.styles) {
//   styles += component.styles;
// }
