import { utils } from 'framework';

class DomManipulator {
  constructor(el) {
    this.nativeElement = utils.isString(el) ? document.querySelector(el) : el;
    this.isDME = true;
  }

  on(elementName, fn, context = null) {
    this.nativeElement.addEventListener(elementName, fn.bind(context));
    return this;
  }

  off(elementName, fn) {
    this.nativeElement.removeEventListener(elementName, fn);
    return this;
  }

  css(styles) {
    if (!styles) {
      return this.nativeElement.styles;
    }
    Object.keys(styles).forEach(key => {
      this.nativeElement.styles[key] = styles[key];
    });
    return this;
  }

  addClass(className) {
    this.nativeElement.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.nativeElement.classList.remove(className);
    return this;
  }

  hasClass(className) {
    return this.nativeElement.classList.contains(className);
  }

  html(html) {
    if (html.isDME) {
      html = html.nativeElement.innerHTML;
    }
    this.nativeElement.innerHTML = html;
    return this;
  }
  append(el) {
    if (el.isDME) el = el.nativeElement;
    this.nativeElement.appendChild(el);
    return this;
  }
  parent() {
    return new DomManipulator(this.nativeElement.parentNode); // !!!!!
  }
  attr(name, value) {
    if (!value) return this.nativeElement.getAttribute(name);
    this.nativeElement.setAttribute(name, value);
  }
  find(selector) {
    return new DomManipulator(this.nativeElement.querySelector(selector));
  }
  findAll(selector) {
    return Array.from(this.nativeElement.querySelectorAll(selector)).map(
      el => new DomManipulator(el),
    );
  }
}

export const dm = el => new DomManipulator(el);

// on css sddClass removeClass htm append parent findAll

export const o = {};
