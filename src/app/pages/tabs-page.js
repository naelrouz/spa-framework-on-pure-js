import { WFMComponent } from '../../framework';

class AppHomePage extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export default new AppHomePage({
  selector: 'home-page',
  template: `
  <h1>Home Page</h1>
  `
});