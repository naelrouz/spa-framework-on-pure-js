import { WFMComponent } from '../../framework';
// import pug from 'pug'

class NotFound extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export default new NotFound({
  selector: 'app-not-found',
  template: `
   <div><h1>404 Not Found</h1></div>
  `
});
