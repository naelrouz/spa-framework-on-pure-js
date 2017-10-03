import { dm } from 'framework';

function initEvents() {
  if (!this.events) {
    return false;
  }
  const events = this.events();
  // console.log('events: ', events);
  Object.keys(events).forEach(key => {
    // console.log(key);
    const splitKey = key.split(' ');
    const event = splitKey[0];
    const selector = splitKey[1];

    this.el
      .find(selector)
      .on(event, this[events[key]].bind(this));
  });
  return true;
}

function renderTemplate(template, data) {
  if (!data) {
    return template;
  }
  const redex = /\{{(.*?)}}/g;
  return template.replace(redex, (str, d) => data[d.trim()]);
}

function initStyles() {
  const componentStyles = this.styles;
  const stylesId = `${this.selector}-styles`;

  if (!componentStyles) return false;
  if (document.querySelector(`style[title="${stylesId}"]`)) {
    console.log(`${stylesId} are already added`);
    return false;
  }

  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');

  style.type = 'text/css';
  style.setAttribute('title', stylesId);

  if (style.styleSheet) {
    style.styleSheet.cssText = componentStyles;
  } else {
    style.appendChild(document.createTextNode(componentStyles));
  }

  head.appendChild(style);
  return true;
}

export default class Component {
  constructor(config) {
    this.selector = config.selector;
    this.template = config.template;
    this.data = config.data;
    this.styles = config.styles;
    this.el = null;
  }

  render() {
    initStyles.call(this);

    console.log('data: ', this.data);
    this.el = dm(this.selector);
    if (!this.el) {
      throw new Error(`Component with selector ${this.selector} not found `);
    }
    this.el.html(renderTemplate(this.template, this.data));

    initEvents.call(this);
  }
}
