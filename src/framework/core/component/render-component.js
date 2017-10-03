export const renderComponent = component => {

  if (component.onInit) {
    component.onInit();
  }
  component.render();

  if (component.afterInit) {
    component.afterInit();
  }
};

export const fn = () => null;
