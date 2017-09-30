import { WFMComponent } from '../framework';

class AppComponent extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export default new AppComponent({
  selector: 'app-root',
  template: `
  <div><h4>Это AppComponent</h4></div>
  `
});
