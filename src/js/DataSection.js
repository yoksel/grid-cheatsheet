import { createElement } from './helpers/index.js';
import { Demo } from './Demo.js';

export class DataSection {
  constructor (data) {
    this.data = data;

    this.demo = new Demo(data);
    this.demoElem = this.demo.elem;

    const elems = [
      this.getTitle(),
      this.getLink(),
      this.demoElem,
      this.getDesc(),
      this.getTarget(),
      this.getInitialValue(),
      this.getValues()
    ];

    this.sectionElem = createElement('<section class="content__item"></section>');

    elems.forEach(elem => this.sectionElem.append(elem));
  }

  // ---------------------------------------------

  getTitle () {
    return createElement(`<h2
      class="content__title"
      id="${this.data.name}"
      >${this.data.name}</h2>`);
  }

  // ---------------------------------------------

  getLink () {
    if (!this.data.link) {
        return;
    }

    var text = this.data.link.replace('http://www.', '');

    return createElement(`<a href="${this.data.link}">${text}</a>`);
  }

  // ---------------------------------------------

  getDesc () {
    if (!this.data.desc) {
        return;
    }

    return createElement(`<div class="content__desc">${this.data.desc}</div>`);
  }

  // ---------------------------------------------

  getTarget () {
    if (!this.data.appliesTo) {
        return;
    }

    return createElement(`<p class="content__initial-value"><b>Applies to</b>: ${this.data.appliesTo}.</p>`);
  }

  // ---------------------------------------------

  getInitialValue () {
    if (!this.data.initValue) {
        return;
    }

    return createElement(`<p class="content__initial-value"><b>Initial</b>: ${this.data.initValue}.</p>`);
  }

  // ---------------------------------------------

  getValues () {
    if (!this.data.values) {
        return;
    }

    let markup = '';

    for (const { name, desc } of this.data.values) {
      const id = this.data.name + '__' + name;
      const dt = `<dt id="${id}" class="content-values__term">${name}</dt>`;
      const dd = `<dd class="content-values__desc">${desc}</dd>`;

      markup += dt + dd;
    }

    return createElement(`<dl class="content-values">${markup}</dl>`);
  }
}
