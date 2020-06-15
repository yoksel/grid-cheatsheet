import { createElement } from '../helpers';

export class Group {
  constructor (data) {
    this._data = data;
    const id = this._data.id;
    const title = this._getTitle();
    const desc = this._getDesc();
    const link = this._getLink();
    const container = createElement('<div class="group__intro container"></div>');

    const elems = [
      title,
      link,
      desc
    ];

    elems.forEach(elem => container.append(elem));

    this.elem = createElement(`<section class="group" id="group-${id}"></section>`);

    this.elem.append(container);
  }

  _getTitle () {
    const { title, hideTitle } = this._data;

    if (!title) {
      return '';
    }

    let className = 'group__title';

    if (hideTitle) {
      className = 'visually-hidden';
    }

    return createElement(`<h2 class="${className}">${title}</h2>`);
  }

  _getDesc () {
    const { desc } = this._data;

    if (!desc) {
      return '';
    }

    return createElement(`<div class="group__desc">${desc}</div>`);
  }

  _getLink () {
    if (!this._data.link) {
      return '';
    }

    var text = this._data.link.replace('http://www.', '');

    return createElement(`<a class="group__link" href="${this._data.link}">${text}</a>`);
  }
}
