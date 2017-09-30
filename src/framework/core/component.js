export default class Component {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
    this.el = null;
  }
  render() {
    console.log('fw component is run');
    this.el = document.querySelector(this.selector);
    if(!this.el) {
      throw new  Error(`Component with selector ${this.selector} not found `)
    }
    this.el.innerHTML = this.template;
  }
}
