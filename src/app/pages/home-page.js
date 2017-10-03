import { Component } from 'framework';
import routerTools from 'framework/core/routing/router-tools';

class AppHomePage extends Component {
  constructor(config) {
    super(config);
  }
  events() {
    return {
      'click .js-link': 'goToTabs',
    };
  }

  // onInit() {
  //   alert('<<<<<<<<<<<< AppHomePage -> onInit');
  // }
  // afterInit() {
  //   alert('<<<<<<<<<<<< AppHomePage -> afterInit');
  // }
  goToTabs(event) {
    event.preventDefault();
    routerTools.navigate('tabs');
  }
}

export default new AppHomePage({
  selector: 'app-home-page',
  data: {
    title: 'Заголовок карточки',
    text: 'Текст в карточке на главной сранице',
    link1: 'Табы',
  },
  styles: `.home__card{margin-top: 40px;}`,
  template: `
  <h1>Home Page</h1>
    <div class="row">
        <div class="col s6 offset-s3 home__card">
        <div class="card blue-grey darken-1">
          <div class="card-content white-text">
            <span class="card-title">{{title}}</span>
            <p>{{text}}</p>
          </div>
          <div class="card-action">
            <a class="js-link" href="#404">{{link1}}</a>
            <a href="#">Якорь # </a>
          </div>
        </div>
      </div>
    </div>  
  `,
});
