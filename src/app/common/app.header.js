import { Component } from 'framework';
// import pug from 'pug'

class AppHeader extends Component {
  constructor(config) {
    super(config);
  }
}

export default new AppHeader({
  selector: 'app-header',
  template: `
   <nav class="indigo">
    <div class="nav-wrapper" >
      <!--<a style="margin-left: 20px;" href="#" class="brand-logo">Native FrameWork</a>-->
      <ul id="nav-mobile" class="">
        <li><a href="#">Home</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#tabs">Tabs</a></li>
      </ul>
    </div>
  </nav>
  `
});
