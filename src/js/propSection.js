import { createElement, getPlurals } from './helpers';
import { Demo } from './Demo';

export class PropSection {
  constructor (data, params = {}) {
    this.data = data;
    const { isChild } = params;
    this.id = data.alias || data.name;
    this.hasChildren = this.data.children && this.data.children.length > 0;
    this.hasDemos = this.data.demos && this.data.demos.length > 0;
    this.demoElem = this.getDemoElement();

    const elems = [
      this.getTitle(),
      this.getLink(),
      this.demoElem,
      this.getDesc(),
      this.getTarget(),
      this.getInitialValue(),
      this.getValues()
    ];

    let className = 'prop';
    if (isChild) {
      className += ' prop--child';
    }
    if (this.hasDemos || this.hasChildren) {
      className += ' prop--has-children';
    }

    this.sectionElem = createElement(`<section
      id="section-${this.id}"
      class="${className} container"></section>`);

    elems.forEach(elem => this.sectionElem.append(elem));
  }

  // ---------------------------------------------

  getDemoElement () {
    if (this.hasDemos || this.hasChildren) {
      return '';
    }

    const demo = new Demo(this.data);
    return demo.elem;
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

    return createElement(`<a class="prop__link" href="${this.data.link}">${text}</a>`);
  }

  // ---------------------------------------------

  getDesc () {
    if (!this.data.desc) {
        return '';
    }

    return createElement(`<div
      class="prop__desc">${this.data.desc}</div>`);
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
    const title = getPlurals(this.data.values.length, ['Value', 'Values']);

    for (const { name, alias, desc } of this.data.values) {
      const id = alias || name;
      const idAttr = `${this.id}-${id}`;
      markup += `<dt id="${idAttr}" class="prop-values__term">${name}</dt>
        <dd class="prop-values__desc">${desc}</dd>`;
    }

    return createElement(`<div class="prop-values">
      <h4 class="prop-values__title">${title}</h4>
      <dl class="prop-values__list">${markup}</dl>
    </div>
    `);
  }
}
