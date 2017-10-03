import { Component } from 'framework';
// import pug from 'pug'

class NotFound extends Component {
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
