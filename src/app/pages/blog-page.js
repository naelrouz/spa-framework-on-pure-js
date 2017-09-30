import { WFMComponent } from '../../framework';

class AppBlogPage extends WFMComponent {
  constructor(config) {
    super(config);
  }
}

export default new AppBlogPage({
  selector: 'app-blog-page',
  template: `
  <h1>Blog Page</h1>
  `
});