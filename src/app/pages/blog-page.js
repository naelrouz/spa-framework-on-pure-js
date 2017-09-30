import { WFMComponent } from '../../framework';

class AppTabsPage extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export default new AppTabsPage({
  selector: 'app-tabs-page',
  template: `
  <h1>Tabs Page</h1>
  `
});