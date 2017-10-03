import { Component, dm } from 'framework';

class AppTabsPage extends Component {
  constructor(config) {
    super(config);
  }
  events() {
    return {
      'click .collapsible': 'onTabClick',
    };
  }
  onTabClick({ target }) {
    const dmTarget = dm(target);

    if (!dmTarget.hasClass('collapsible-header')) {
      return;
    }

    this.el
      .findAll('.collapsible-tab')
      // .querySelectorAll('.collapsible-tab')
      .forEach(el => el.removeClass('active'));

    dmTarget.parent().addClass('active');
  }
  signal() {
    console.log('click .collapsible');
  }
}

export default new AppTabsPage({
  selector: 'app-tabs-page',
  styles: `
  .collapsible-header {
    color: #3f51b5;
    font-weight: bold;
    text-transform: uppercase;
  }
  `,
  template: `
  <h1>Tabs Page</h1>
  <ul class="collapsible popout collapsible-accordion" ">
          <li class="collapsible-tab active">
            <div class="collapsible-header"><i class="material-icons">subtitles</i>First</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li class="collapsible-tab">
            <div class="collapsible-header"><i class="material-icons">games</i>Second</div>
            <div class="collapsible-body"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
          <li class="collapsible-tab">
            <div class="collapsible-header"><i class="material-icons">library_books</i>Third</div>
            <div class="collapsible-body" ><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
          </li>
        </ul>
  `,
});
