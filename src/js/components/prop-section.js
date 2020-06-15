import { createElement, getPlurals } from '../helpers';
import { Demo } from './demo';

export class PropSection {
  constructor (data, params = {}) {
    this._data = data;
    const { isChild } = params;
    this._id = data.alias || data.name;
    this._hasChildren = this._data.children && this._data.children.length > 0;
    this._hasDemos = this._data.demos && this._data.demos.length > 0;
    this._hasCSS = !!this._data.cssRules;

    const elems = [
      this._getTitle(),
      this._getLink(),
      this._getDemoElement(),
      this._getDesc(),
      this._getTarget(),
      this._getInitialValue(),
      this._getValues()
    ];

    let className = 'prop';
    if (isChild) {
      className += ' prop--child';
    }
    if (this._hasDemos || this._hasChildren) {
      className += ' prop--has-children';
    }

    this.sectionElem = createElement(`<section
      id="section-${this._id}"
      class="${className} container"></section>`);

    elems.forEach(elem => this.sectionElem.append(elem));
  }

  _getDemoElement () {
    if (this._hasDemos || this._hasChildren || !this._hasCSS) {
      return '';
    }

    const demo = new Demo(this._data);
    return demo.elem;
  }

  _getTitle () {
    return createElement(`<h3 class="prop__title">${this._data.name}</h3>`);
  }

  _getLink () {
    if (!this._data.link) {
      return '';
    }

    var text = this._data.link.replace('http://www.', '');

    return createElement(`<a class="prop__link" href="${this._data.link}">${text}</a>`);
  }

  _getDesc () {
    if (!this._data.desc) {
      return '';
    }

    return createElement(`<div
      class="prop__desc">${this._data.desc}</div>`);
  }

  _getTarget () {
    if (!this._data.appliesTo) {
      return '';
    }

    return createElement(`<p class="prop__initial-value"><b>Applies to</b>: ${this._data.appliesTo}.</p>`);
  }

  _getInitialValue () {
    if (!this._data.initValue) {
      return '';
    }

    return createElement(`<p class="prop__initial-value"><b>Initial</b>: ${this._data.initValue}.</p>`);
  }

  _getValues () {
    if (!this._data.values) {
      return '';
    }

    let markup = '';
    const title = getPlurals(this._data.values.length, ['Value', 'Values']);
    const isTitleHidden = !this._data.desc;

    for (const { name, alias, desc } of this._data.values) {
      const id = alias || name;
      const idAttr = `${this._id}-${id}`;
      markup += `<dt id="${idAttr}" class="prop-values__term">${name}</dt>
        <dd class="prop-values__desc">${desc}</dd>`;
    }

    return createElement(`<div
      class="prop-values">
      <h4 class="
        prop-values__title
        ${isTitleHidden ? 'visually-hidden' : ''}
      ">${title}</h4>
      <dl class="prop-values__list">${markup}</dl>
    </div>
    `);
  }
}
