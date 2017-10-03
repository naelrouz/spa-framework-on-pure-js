import { Component } from 'framework';

// const pug = require('pug');

// console.log(pug);

class AppComponent extends Component {
  constructor(config) {
    super(config);
  }
}

export default new AppComponent({
  selector: '#app-root',
  template: `
  <app-header></app-header>
  <div class="container">
  <router-outlet></router-outlet>
  </div>
  
  `,
});
