import { createElement } from './helpers';
import { Demo } from './Demo';

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

    this.sectionElem = createElement(`<section
      id="${this.data.name}"
      class="prop container"></section>`);

    elems.forEach(elem => this.sectionElem.append(elem));
  }

  // ---------------------------------------------

  getTitle () {
    return createElement(`<h3 class="prop__title">${this.data.name}</h3>`);
  }

  // ---------------------------------------------

  getLink () {
    if (!this.data.link) {
        return '';
    }

    var text = this.data.link.replace('http://www.', '');

    return createElement(`<a href="${this.data.link}">${text}</a>`);
  }

  // ---------------------------------------------

  getDesc () {
    if (!this.data.desc) {
        return '';
    }

    return createElement(`<div
      class="prop__desc"
      id="desc-${this.data.name}">${this.data.desc}</div>`);
  }

  // ---------------------------------------------

  getTarget () {
    if (!this.data.appliesTo) {
        return '';
    }

    return createElement(`<p class="prop__initial-value"><b>Applies to</b>: ${this.data.appliesTo}.</p>`);
  }

  // ---------------------------------------------

  getInitialValue () {
    if (!this.data.initValue) {
        return '';
    }

    return createElement(`<p class="prop__initial-value"><b>Initial</b>: ${this.data.initValue}.</p>`);
  }

  // ---------------------------------------------

  getValues () {
    if (!this.data.values) {
        return '';
    }

    let markup = '';

    for (const { name, alias, desc } of this.data.values) {
      const id = alias || name;
      console.log(this.data.name, 'id', id);
      const idAttr = `${this.data.name}-${id}`;
      markup += `<dt id="${idAttr}" class="prop-values__term">${name}</dt>
        <dd class="prop-values__desc">${desc}</dd>`;
    }

    return createElement(`<dl class="prop-values">${markup}</dl>`);
  }
}
